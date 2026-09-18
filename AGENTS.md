# 本地开发约定

- Logseq 加载本仓库根目录，插件入口为 `dist/index.html`。
- 修改源码后运行 `npm run check`，确保测试通过并更新根目录的 `dist/`。
- `release/` 仅作为打包产物，不用于本地安装、同步或验证；不要用更新 `release/` 代替根目录构建。
- 插件代码变更后需要重启 Logseq 才能验证；`/reload latex snippets` 只重载规则和设置。
- 报告时区分自动测试通过与 Logseq 实机验证，不把构建成功视为已加载新代码。
