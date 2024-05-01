// const fs = require('fs');

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



const is_debugging = true;



/*! For license information please see lsplugin.user.js.LICENSE.txt */


const DEFAULT_LOCALE = "en";
let locale$1 = DEFAULT_LOCALE;
let translations = {};
async function setup({ defaultLocale = DEFAULT_LOCALE, builtinTranslations, }) {
    locale$1 = (await logseq.App.getUserConfigs()).preferredLanguage;
    if (locale$1 === defaultLocale)
        return;
    if (builtinTranslations?.[locale$1] != null) {
        translations = builtinTranslations;
    }
}

function t(key, args) {
    const template = translations[locale$1]?.[key] ?? key;
    if (args == null)
        return template;
    return Object.entries(args).reduce((str, [name, val]) => str.replaceAll(`\${${name}}`, val), template);
}

var zhCN = {
    "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in # to enable regex, triggered on space.": "触发字符。以空格结尾会以标点或空格触发；以双空格结尾会以空格触发，但不输入空格；以#结尾启用正则，以空格触发。",
    "Replacement. JS expressions are in double curly brackets like `{{time()}}`. @` means cursor position.": "替换文字。可在双花括号里写JS表达式，例如`{{time()}}`。`@`代表光标位置。",
    "Reload user functions": "重新加载用户函数",
    "User defined functions reloaded.": "用户函数已重新加载。",
    "Enable or not Chinese double-colon replacement.": "是否开启：：替换。",
    "Enable or not Chinese double-bracket replacement.": "是否开启【【替换。"
};



window.random = (from, to) => {
    if (from > to) return from;
    return ~~(Math.random() * (to + 1 - from)) + from;
};

window.choose = (...choices) => {
    if (choices.length <= 0) return "";
    const index = random(0, choices.length - 1);
    return choices[index];
};

window.clipboard = async () => {
    return await parent.navigator.clipboard.readText() ?? "";
};

window.callPlugin = (key, ...args) => {
    // HACK: Wait some time to allow text update to run first.
    setTimeout(() => logseq.App.invokeExternalPlugin(key, ...args), 50);
    return "";
};

window.callCommand = (key, ...args) => {
    // This function is used to call a command after a delay of 50 milliseconds.
    // HACK: Wait some time to allow text update to run first.
    setTimeout(() => logseq.App.invokeExternalCommand(key, ...args), 50);
    return "";
};

const TRIGGER_IMMEDIATE = 1;
const TRIGGER_WORD = 2;
const TRIGGER_SPACE = 3;
const TRIGGER_REGEX = 4;
const PairOpenChars = '{([';
const PairCloseChars = '})]';


let specialKeys = [];

const evaluate = eval;
const WordBoundaryR = /[^\u2E80-\u2FFF\u31C0-\u31EF\u3300-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uFE30-\uFE4FA-Za-z_]/;
const Punc = /^[!@#$%^&*\-+=_,./?;:！¥…—，。？；：]|\s$/;
let beforeInputTextArea = {};

function init() { // sets up a function that will be called whenever the specified event happens (e.g. keydown, beforeinput)
    const appContainer = parent.document.getElementById("app-container");

    // appContainer.addEventListener("keydown", keydownHandler); // The keydown event is fired for all keys, regardless of whether they produce a character value.
    // appContainer.addEventListener("beforeinput", beforeInputHandler); // The DOM beforeinput event fires when the value of an <input> or <textarea> element is about to be modified. But in contrast to the input event, it does not fire on the <select> element.

    // Not every user modification results in beforeinput firing. Also the event may fire but be non-cancelable. This may happen when the modification is done by autocomplete, by accepting a correction from a spell checker, by password manager autofill, by IME, or in other ways. The details vary by browser and OS. To override the edit behavior in all situations, the code needs to handle the input event and possibly revert any modifications that were not handled by the beforeinput handler.

    appContainer.addEventListener("input", inputHandler); // The input event fires when the value of an <input>, <select>, or <textarea> element has been changed as a direct result of a user action (such as typing in a textbox or checking a checkbox).
    // appContainer.addEventListener("compositionend", inputHandler); // represents events that occur due to the user indirectly entering text.
}

function cleanUp() {
    const appContainer = parent.document.getElementById("app-container");

    // appContainer.removeEventListener("compositionend", inputHandler);

    appContainer.removeEventListener("input", inputHandler);
    // appContainer.removeEventListener("beforeinput", beforeInputHandler);
    // appContainer.removeEventListener("keydown", keydownHandler);
}

async function reloadUserRules() {
    const userRules = await getUserRules();
    
    if (userRules.length > 0) {
        specialKeys = [
            // ...logseq.settings?.enableColon ? BuiltInSpecialKeys : BuiltInSpecialKeys.filter((rule)=>rule.trigger !== "：："),
            ...userRules
        ];
    }
    
    if(is_debugging) {
        console.log("User rules:", specialKeys);
    }
}


async function inputHandler(e) {
    if (e.data == null || e.target.nodeName !== "TEXTAREA" || !e.target.parentElement.classList.contains("block-editor") || e.isComposing) return; //  If the event doesn't meet these conditions, or if e.data is null, or if the input is being composed (i.e., the user is in the middle of using an Input Method Editor to enter complex characters), the function returns immediately.

    const textarea = e.target;

    await handleSpecialKeys(textarea, e) || await handlePairs(textarea, e);
}

async function handleSpecialKeys(textarea, e) {

    // The handleSpecialKeys function is an asynchronous function that processes special key inputs in a textarea. 
    // It takes two arguments: textarea, which is the textarea element where the input is being entered, and e, which is the event object associated with the input event.

    const char = e.data[e.data.length - 1];
    const text_befor_cursor = textarea.value.substring(0, textarea.selectionStart);

    if (is_debugging) {
        if (char === " ") {
            console.log(`\n text_befor_cursor=${text_befor_cursor}`);
            console.log(`In Latex? ${isInLatex(text_befor_cursor)}`);
        }
    }

    if(!(isInLatex(text_befor_cursor))) {
        return false; // Return early if the cursor is not in a Latex block.
    }


    for (const { trigger, type, repl } of specialKeys) { // Each element of specialkeys is a rule object with trigger, type, and repl properties.
        switch (type) {
            case TRIGGER_IMMEDIATE:
                {
                    if (char === trigger[trigger.length - 1] && matchSpecialKey(textarea.value, textarea.selectionStart, trigger, 1)) {
                        const [barPos, replacement] = await processReplacement(repl);
                        // replacement=replacement.concat("extra text");
                        const cursor = barPos < 0 ? 0 : barPos - replacement.length + 1;
                        const blockUUID = getBlockUUID(e.target);
                        await updateText(textarea, blockUUID, barPos < 0 ? `${replacement}` : `${replacement.substring(0, barPos)}${replacement.substring(barPos + 1)}`, -trigger.length, 0, trigger !== "：：" ? cursor : null);
                        return true;
                    }
                    break;
                }
            case TRIGGER_REGEX:
                {
                    if (char === " ") {
                        // const text = textarea.value

                        const text = textarea.value.substring(0, textarea.selectionStart - 1); // Since we've already decided whether we are in Latex, we only need those before the cursor                      

                        const match = text.match(trigger);

                        if (match != null) {
                            const matchEnd = match.index + match[0].length; // index is the character where the first match starts. matchEnd is the end of the matched string.
                            const regexRepl = text.substring(match.index, matchEnd).replace(trigger, repl); // Perform the regex replacement to the substring


                            const barPos3 = findBarPos(regexRepl); // Find the position of the bar in the replacement string
                            
                            const replacement3 = regexRepl.replace('@','').concat(text.substring(matchEnd))  // Remove the '@' from the string, then concatenate the replacement string with the text after the matchEnd position.
                            const cursor3 = barPos3 < 0 ? 0 : barPos3 - replacement3.length - (textarea.value.length - textarea.selectionStart) + 1;

                            if (is_debugging) {
                                console.log(`REGEX match \n text=${text} \n str_to_match_start=${text.substring(0, match.index)} \n matchedtext=${text.substring(match.index, matchEnd)} \n barPos3=${barPos3} \n replacement3=${replacement3} \n cursor3=${cursor3} \n delstartoffset = ${-(text.length - match.index - 1)}`);
                            }


                            const blockUUID3 = getBlockUUID(e.target);

                            //await updateText(textarea, blockUUID3, barPos3 < 0 ? `${replacement3}` : `${replacement3}`, -(text.length - match.index - 1), 0, cursor3);
                            await updateText(textarea, blockUUID3, `${replacement3}${textarea.value.substring(textarea.selectionStart)}`, -(text.length - match.index + 1), 0, cursor3);

                            return true;
                        }
                    }
                    break;
                }
        }
    }
    return false;
}

async function handlePairs(textarea, e) {
    if (e.data.length > 1) return false;  // If the input data (e.data) is more than one character, it returns false immediately.

    // Get the character from the input data and its position in PairOpenChars (if it exists).
    const char = getChar(e.data[0]);
    const i = getOpenPosition(char);

    // Get the character before and after the cursor in the textarea.
    const nextChar = textarea.value[textarea.selectionStart];
    const prevChar = textarea.value[textarea.selectionStart - 2];


    if (char === "$") {
        const blockUUID = getBlockUUID(e.target);
        const replacement = "$$".concat(textarea.value.substring(textarea.selectionStart))
        await updateText(textarea, blockUUID, replacement, -1, 1, -replacement.length + 1);
        return true;
    }

    if (char === "(") {
        const blockUUID = getBlockUUID(e.target);
        const replacement = "()".concat(textarea.value.substring(textarea.selectionStart))
        await updateText(textarea, blockUUID, replacement, -1, 1, -replacement.length + 1);
        return true;
    }
    /*
    if (char === " " && prevChar === "（" && nextChar === "）") {
        const blockUUID = getBlockUUID(e.target);
        await updateText(textarea, blockUUID, "()", -2, 1, -1);
        return true;
    
    } else 
    if (char === nextChar && PairCloseChars.includes(char)) {
        const blockUUID1 = getBlockUUID(e.target);
        await updateText(textarea, blockUUID1, "", -1, 0, 1);
        return true;
    } 
    
    else if (i > -1) { // If the input character is included in PairOpenChars, check several more conditions to determine how to handle the input. 
        if (nextChar == null || PairCloseChars.includes(nextChar) || Punc.test(nextChar)) {
            const blockUUID5 = getBlockUUID(e.target);
            await updateText(textarea, blockUUID5, `${PairOpenChars[i]}${PairCloseChars[i]}`, -1, 0, -1);
            return true;
        }
    }
    */
    return false;
}


function getChar(c) {
    switch (c) {
        case "“":
            return "”";
        case "‘":
            return "’";
        default:
            return c;
    }
}
function getOpenPosition(c) {
    switch (c) {
        case "”":
            return PairOpenChars.indexOf("“");
        case "’":
            return PairOpenChars.indexOf("‘");
        default:
            return PairOpenChars.indexOf(c);
    }
}


function getBlockUUID(el) {
    return el.id.replace(/^edit-block-[0-9]+-/, "");
}


async function updateText(textarea, blockUUID, text, delStartOffset = 0, delEndOffset = 0, cursorOffset = 0, numWrapChars = 1) {
    // First, It calculates the start and end positions of the selection in the textarea, adjusted by delStartOffset and delEndOffset respectively.

    const collapsed = textarea.selectionStart === textarea.selectionEnd;
    const startPos = textarea.selectionStart + delStartOffset; // Start deletion from startPos, which is selectionStart (the cursor position) adjusted by the delStartOffset.
    const endPos = textarea.selectionEnd + delEndOffset;


    const newPos = startPos + text.length + cursorOffset; // It calculates the new cursor position by adding the length of the replacing text and cursorOffset to the start position.
    const content = textarea.value;

    if (is_debugging) {
        console.log(`\n Updatingtext \n string_sel_start = ${content.substring(0, textarea.selectionStart)} \n text=${text} \n startPos=${startPos} \n string_start_pos = ${content.substring(0, startPos)} \n endPos=${endPos} \n newPos=${newPos} \n cursoroffset=${cursorOffset}`)
    }

    try {
        await logseq.Editor.updateBlock(blockUUID, startPos < content.length ? `${content.substring(0, startPos)}${text}` : startPos === content.length ? `${content}${text}` : `${content} ${text}`);

        /* 
          updateBlock: ((srcBlock: BlockIdentity, content: string, opts?: Partial<{
              properties: {};
          }>) => Promise<void>)
  
        */
    } catch (err) {
        reject(err);
    }

    textarea.focus();
    if (cursorOffset != null) {
        textarea.setSelectionRange(collapsed ? newPos : startPos + numWrapChars, collapsed ? newPos : newPos - numWrapChars); // A general Javascript function, to select which text is selected. If not collapsed, the cursor is places at newPos (by setting the selectionRange to have zeo length.)
    }
}


function matchSpecialKey(text, start, trigger, skip = 0) {
    for (let i = trigger.length - 1 - skip, j = -2; i >= 0; i--, j--) {
        if (text[start + j] !== trigger[i]) return false;
    }
    return true;
}


function findBarPos(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === "@") {
            return i-1;
        }
    }
    return -1;
}

async function getUserRules() {
    // const settings = logseq.settings;
    const file = await fetch('./snippets.json')
    var config;

    if (file.ok) { // if HTTP-status is 200-299
        config = await file.json();
    } else {
        console.error("HTTP-Error: ", file.status);
        return [];
    }

    if(is_debugging){
        console.log("config", config.regex_rules);
    }

    const ret = []; // It initializes an empty array ret to store the parsed rules.

    // Read triggers and replacements from settings.latex_snippets, and store to the ret array.W

    for (const group of Object.keys(config.regex_rules)){

        for(let i = 0; i < config.regex_rules[group].length; i++){
            let rule = config.regex_rules[group][i];
    
            ret.push({
                trigger: new RegExp(`${rule.trigger}$`),
                type: TRIGGER_REGEX,
                repl: rule.replacement
            });
        }

        console.log(`Group ${group} loaded`);
    }



    return ret;
}




async function processReplacement(repl) {
    const calls = await Promise.all(Array.from(repl.matchAll(/\{\{((?:[^\{\}]|\{(?!\{)|\}(?!\}))+)\}\}/g)).map(async (m) => {
        return {
            start: m.index,
            end: m.index + m[0].length,
            repl: await evaluate(m[1])
        };
    }));

    /*
    `The pattern it's looking for is text enclosed in double curly braces {{...}}. 
    The matched text (excluding the braces) is then passed to the evaluate function.`
    */

    let barPos = findBarPos(repl);

    if (barPos > 0) {
        barPos = barPos - 1 //-1 accounts for the @ sign
    }

    if (is_debugging) { }


    return [
        barPos,
        repl.replace('@', '')
    ];
}

async function main() {
    await setup({
        builtinTranslations: {
            "zh-CN": zhCN
        }
    });

    init();
    // reloadUserRules();

    if(is_debugging){
        console.log("init");
    }

    
    logseq.useSettingsSchema([
        {
            key: "enableColon",
            type: "boolean",
            default: true,
            description: t("Enable or not Chinese double-colon replacement.")
        }
    ]);

    const settingsOff = logseq.onSettingsChanged(reloadUserRules);
    

    logseq.App.registerCommandPalette({
        key: "reload-latex-snippets",
        label: t("Reload snippets from the snippets.json")
    }, async ()=>{
        await reloadUserRules();
        await logseq.UI.showMsg(t("Latex snippets reloaded."));
    });
    
    logseq.beforeunload(() => {
        settingsOff();
        cleanUp();
    });
   
    console.log("#smart-typing loaded");
}

function isInLatex(str) {
    // The editor uses markdown format. Given the text before the cursor (str), decide whether the cursor is currently in latex mode.

    // First, decide whether the cursor is in displaymath latex block, i.e. enclosed in $$...$$.
    const regex_display_boundary = /\$\$/gm; // Regex pattern to match $$. 
    const matches = str.match(regex_display_boundary);
    if (matches && matches.length % 2 === 1) {
        // If there are an odd number of matches, it means the cursor is inside a latex expression

        return true;
    }
    str = str.replaceAll(regex_display_boundary, "");

    // Then, decide whether the cursor is in inline math mode, i.e. enclosed in $...$.

    // Construct Regex pattern to match $...$ and remove them from str.
    const regex_inline = /\$(?![\s])([\s\S]+?)(?<![\s])\$/gm; // Regex pattern to match $...$.

    // Remove all matched inline latex
    str = str.replaceAll(regex_inline, "");


    const regex_inline_noend = /\$(?![\s])[\s\S]+$/; // Regex pattern to match $... at the end of the string.

    const matches_inline_noend = str.match(regex_inline_noend);

    if (matches_inline_noend) {
        // If there are an odd number of matches, it means the cursor is inside a latex expression

        return true;
    }

    return false;

}

logseq.ready(main).catch(console.error);
