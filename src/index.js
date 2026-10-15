import '@logseq/libs';
import { compileRules, DEFAULT_SETTINGS } from './rules.js';
import { attachEditor } from './editor.js';

async function main() {
  logseq.useSettingsSchema([
    { key: 'wrapwithDollarBracket', type: 'boolean', default: true, description: 'Wrap selected text with dollars.' },
    { key: 'caseInsensitive', type: 'boolean', default: true, description: 'Match snippets case-insensitively.' },
    { key: 'VerticalLineBracket', type: 'boolean', default: false, description: 'Wrap selected math text with vertical bars.' },
    { key: 'DeleteBlankAfterMatchInline', type: 'boolean', default: true, description: 'Remove the triggering space in inline math.' },
    { key: 'DeleteBlankAfterMatchDisplay', type: 'boolean', default: false, description: 'Remove the triggering space in display math.' },
    { key: 'snippetsJson', type: 'string', inputAs: 'textarea', default: '', description: 'Custom grouped snippets JSON. Empty uses bundled snippets.json. Settings survive plugin upgrades.' },
  ]);
  let settings = { ...DEFAULT_SETTINGS, ...logseq.settings };
  let rules = [];
  let revision = 0;
  let disposed = false;
  const report = (error) => {
    console.error('[latex-snippets]', error);
    if (!disposed) void logseq.UI.showMsg(`Latex Snippets: ${error.message}`, 'error');
  };
  async function reload(notify = false) {
    const ticket = ++revision;
    const nextSettings = { ...DEFAULT_SETTINGS, ...logseq.settings };
    try {
      let config;
      if (nextSettings.snippetsJson.trim()) config = JSON.parse(nextSettings.snippetsJson);
      else {
        const response = await fetch('./snippets.json', { cache: 'no-store' });
        if (!response.ok) throw new Error(`Cannot load snippets.json (HTTP ${response.status}).`);
        config = await response.json();
      }
      const nextRules = compileRules(config, nextSettings.caseInsensitive);
      if (disposed || ticket !== revision) return;
      settings = nextSettings;
      rules = nextRules;
      if (notify) await logseq.UI.showMsg(`Loaded ${rules.length} LaTeX snippets.`);
    } catch (error) {
      if (!disposed && ticket === revision) report(error);
    }
  }
  const settingsOff = logseq.onSettingsChanged(() => reload());
  const detach = attachEditor(parent.document, logseq, () => ({ rules, settings }), report);
  const openConfig = () => window.open(new URL('./snippets.json', window.location.href).href);
  logseq.App.registerCommandPalette({ key: 'reload-latex-snippets', label: 'Reload LaTeX snippets' }, () => reload(true));
  logseq.App.registerCommandPalette({ key: 'open-snippets.json', label: 'Open bundled snippets.json (custom rules: plugin settings)' }, openConfig);
  logseq.Editor.registerSlashCommand('reload latex snippets', () => reload(true));
  logseq.Editor.registerSlashCommand('open snippets.json', openConfig);
  logseq.beforeunload(() => { disposed = true; revision++; settingsOff(); detach(); });
  await reload();
}
logseq.ready(main).catch(console.error);
