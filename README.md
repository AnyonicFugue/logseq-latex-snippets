# logseq-latex-snippets

在 Logseq 数学环境中按空格展开正则片段，支持光标占位、美元符号配对和选区包裹。

适用于 **Logseq DB 桌面版 2.0.1**，内置 60 条片段。

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

## 使用

- 在行内 `$…$`、文本 `$$…$$` 或 DB 原生 Math 公式块中，输入片段后按空格。
- 例如 `bfa` → `\mathbf{a}`、`fr` → `\frac{}{}`、`bbR` → `\mathbb{R}`。
- 输入 `$` 自动配对；开启 `newLineForDisplayMath` 后，连续输入两个 `$` 会创建多行公式，光标位于中间空行。
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

- 开发检查：`npm run check`（29 项自动测试及构建）。编辑器测试使用模拟 API，不代替实机验证。
- 已在 Logseq DB 2.0.1 人工确认双美元符号换行；撤销、保存和重开仍待完整验证。
- 自举脚本已在 macOS 跑通，Windows/Linux 尚未实机验证。
- 不声明网页版支持；旧版文件图谱未做完整回归。插件依赖宿主 DOM 和已弃用的浏览器编辑接口，Logseq 更新后可能需要适配。
- SDK 0.3.4 的 DOMPurify/lodash-es 依赖存在已知审计项，尚待上游修复。

## Demo

https://github.com/user-attachments/assets/eaaa2f2b-76db-406f-915f-64a267bfe122

## License

MIT. See [LICENSE](./LICENSE).
