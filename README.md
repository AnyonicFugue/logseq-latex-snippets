# logseq-latex-snippets

Support for snippets in inline math and display math.

## Demo

![](./Demo.mp4)

## Functionalities

- Customizable regex snippets to autocomplete latex formulas
- Auto pair dollar signs

## Usage

- Write your own snippets in snippets.json. 
    - Note that each snippet must be put in a group. Group names are arbitrary.
    - "@" symbol in the replace string would be the cursor location after replacement.
- When typing in mathmode (including displaymath and inline math) in Logseq, pressing down *blankspace* would trigger a regex replacement. 
