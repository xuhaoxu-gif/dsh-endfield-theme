# DeepSeek Harness 终末地工业风皮肤

变体：自定义强化版（黄色 / 中性纸色 / 标准切角 / 淡等高线与斜线 / 标准密度 / 完整短动效）
主视觉：DeepSeek Harness 自身品牌与会话内容，页顶三色条，不使用虚构编号或计数
页面类型：对话与设置以阅读为主，新会话首页增强展示感，不改变现有信息架构

## 内容

- 浅色与深色 Theme 令牌覆盖。
- 黄色 `#FFFA00` 只用于当前、可操作和提醒。
- 切角按钮、1px 细线、Saira 宽体、淡等高线与斜线。
- 100–400ms 短过渡，尊重 `prefers-reduced-motion`。
- 字体和等高线全部内嵌到构建后的 Client，无运行时网络依赖。

本插件与游戏及其开发商无关，不包含游戏官方素材。Saira 使用 SIL Open Font License 1.1，见 `assets/Saira-OFL.txt`。等高线来自用户指定安装的 `endfield-ui` 技能。

## 从 GitHub 获取

仓库：https://github.com/xuhaoxu-gif/dsh-endfield-theme

```sh
git clone https://github.com/xuhaoxu-gif/dsh-endfield-theme.git
```

仓库同时包含源文件和构建后的 `client.js`，克隆后可以直接通过 DeepSeek Harness Plugin Manager 的 `install_bundle` 安装目录，无需安装 npm 依赖。不要手工修改 profile 的 `package.json` 或 `cordis.patch.yml`。

## 卸载

在 Plugin Manager 中移除 `@local/dsh-endfield-theme` bundle。卸载后，Theme 令牌覆盖和 `shell.overlay` 组件会被清理，恢复 Harness 原皮肤。

## 构建与验收

修改样式时编辑 `skin.css`，修改 Theme 或组件时编辑 `client.template.js`，然后运行：

```sh
node scripts/build-client.mjs
node --check client.js
node --check index.js
node scripts/verify.mjs
```

不要直接编辑生成的 `client.js`。提交修改前请运行上述完整验收。

## 许可与第三方声明

本插件原创代码使用 MIT License，见 `LICENSE`。Saira 字体使用 SIL Open Font License 1.1，见 `assets/Saira-OFL.txt`。视觉规则与等高线来源、字体声明和非官方性质见 `NOTICE`。

## 源文件

- `client.template.js`：Theme、生命周期与三色条组件。
- `skin.css`：全局视觉规则。
- `scripts/build-client.mjs`：资源内嵌构建。
- `scripts/verify.mjs`：静态验收。
