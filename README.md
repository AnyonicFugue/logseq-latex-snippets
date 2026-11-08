# logseq-latex-snippets

在 Logseq 数学环境中按空格展开正则片段，支持光标占位、美元符号配对和选区包裹。

适用于 **Logseq DB 桌面版 2.0.1**，内置 61 条片段。

## 安装与构建

**从 GitHub 分支下载的源码需要先构建，否则插件不会生效。**

1. 下载 `db-version` 分支的 ZIP，并完整解压。
2. 安装 [Node.js 20 或更新版本](https://nodejs.org/)。
3. 运行对应系统的脚本，等待显示 `Ready`：

| 系统 | 操作 |
| --- | --- |
| Windows | 双击 `bootstrap.cmd` |
| macOS / Linux | 在项目目录打开终端，运行 `sh bootstrap.sh` |

脚本会联网安装依赖、运行测试并构建插件。请保留完整源码；出错后可根据提示修复并重新运行。

构建成功后，在 Logseq 插件页启用开发者模式，选择 **加载未打包插件 / Load unpacked plugin**，加载包含 `package.json` 的项目根目录，**不要选择 `dist`**。如果之前加载过该插件，请重启 Logseq。

如果下载的是已构建的插件 ZIP（包含 `dist/index.html`），解压后直接加载即可，无需运行脚本。

所有平台也可运行 `node scripts/bootstrap.mjs`。Windows 自动化运行可用 `bootstrap.cmd --no-pause` 跳过结束暂停。

## 本地更新流程

Logseq 统一加载本仓库根目录，入口为根目录下的 `dist/index.html`。`release/` 不用于本地运行或验证。

1. 拉取更新或修改 `src/` 后，在根目录运行 `npm run check`，测试并重新构建 `dist/`。依赖有变化时，先运行自举脚本。
2. 重启 Logseq，再验证功能。`/reload latex snippets` 只重载规则和设置，不会加载修改后的插件代码。
3. 无需复制文件到 `release/`，也不要把 Logseq 的加载目录改为 `dist/` 或 `release/`。

## 使用

- 在 `a`、`f` 等字符后输入 `(`，插件补成 `()`，光标留在括号内；Logseq 已支持的位置和选区包裹仍由 Logseq 处理。代码和转义输入不补全。
- 在行内 `$…$`、文本 `$$…$$` 或 DB 原生 Math 公式块中，输入片段后按空格。
- 例如 `bfa` → `\mathbf{a}`、`fr` → `\frac{}{}`、`bbR` → `\mathbb{R}`。
- `sfA` → `\mathsf{A}`，与 `rm`、`bf` 使用同一字体规则。
- `bolda` → `\boldsymbol{a}`、`bold\alpha` → `\boldsymbol{\alpha}`，按空格展开后光标停在右花括号之后。
- 输入 `$` 自动配对；第二个起始 `$` 交由 Logseq 创建原生 Math 公式块。插件确认转换后，会清理刚才输入位置残留的 `$$$$`，光标留在清理处。
- 清理仅跟随本次双美元输入；监听原生 Math 状态出现后立即清理，同时保留每 16 毫秒检查一次、最多等待约 800 毫秒的备用路径。普通文本中的 `$$$$`、已有公式块和粘贴内容不会被自动扫描或批量清理。
- DB 原生公式块按整块 LaTeX 处理，不自动添加 `$` 定界符。
- 支持用 `$` 包裹选区；可在设置中启用数学环境内的 `|` 包裹。
- 粘贴和中文输入法组合输入不会触发展开；转义美元符号和 Markdown 代码区域不会当作数学环境。

## 自定义片段

推荐在插件设置的 `snippetsJson` 中粘贴完整 JSON。配置保存在插件设置中，不会因替换插件安装目录而丢失。

```json
{
  "my rules": [
    { "match": "fr", "replacement": "\\frac{@}{}" },
    { "match": "bb([A-Za-z])", "replacement": "\\mathbb{$1}@" }
  ]
}
```

- 每条规则必须属于一个分组，分组名任意；按配置顺序使用第一个匹配项。
- `match` 是正则表达式，自动限定在光标前的结尾匹配；默认忽略大小写。
- `replacement` 支持 `$1` 等捕获组，首个 `@` 标记光标；未提供 `@` 时光标停在替换末尾。
- 空 `snippetsJson` 使用打包的 `dist/snippets.json`；填写 `{}` 禁用所有片段。
- 配置变化自动加载；无效 JSON/正则会显示错误并保留上次有效配置。
- `/reload latex snippets` 或命令面板可以手动重载。
- 不建议直接修改 `dist/snippets.json`，构建和升级会覆盖它。

## 验证与限制

- 开发检查：`npm run check`（自动测试及构建）。编辑器测试使用模拟 API，不代替实机验证。
- 此前已在 Logseq DB 2.0.1 人工确认双美元符号换行；四美元残留清理及响应速度优化已获用户反馈可用。撤销、保存和重开仍待完整验证。
- 自举脚本已在 macOS 和 Windows（Node.js 24）跑通，Linux 尚未实机验证。
- 不声明网页版支持；旧版文件图谱未做完整回归。插件依赖宿主 DOM 和已弃用的浏览器编辑接口，Logseq 更新后可能需要适配。
- SDK 0.3.4 的 DOMPurify/lodash-es 依赖存在已知审计项，尚待上游修复。

## Demo

https://github.com/user-attachments/assets/eaaa2f2b-76db-406f-915f-64a267bfe122

## License

MIT. See [LICENSE](./LICENSE).
