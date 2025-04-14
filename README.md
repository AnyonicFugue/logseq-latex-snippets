# logseq-latex-snippets

Support for snippets in inline math and display math.

## Demo

https://github.com/user-attachments/assets/eaaa2f2b-76db-406f-915f-64a267bfe122



## Functionalities

- Customizable regex snippets to autocomplete latex formulas
- Automatically pair up dollar signs

## Usage

- You could open the config file *snippets.json* via slash command `/open snippets.json` or command palette and write your own snippets. 
    - Note that each snippet must be put in a group. Group names are arbitrary.
    - "@" symbol in the replace string would be the cursor location after replacement.
- When typing in mathmode (including displaymath and inline math) in Logseq, pressing down *blankspace* would trigger a regex replacement. 

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.