# 祀·协议 — DeepSeek Harness 工业风皮肤

变体：祀·协议（黄色 / 纸白灰绿 / 标准切角 / 淡龙纹与工程斜线 / 标准密度 / 短机械感动效）
主视觉：原创几何“祀”标识与抽象龙纹，保留 DeepSeek Harness 自身品牌、会话与工具内容
页面类型：新会话页为展示页，对话、设置与插件管理为阅读页，不改变现有信息架构

## 主题内容

- 浅色与深色 Theme 令牌：纸白灰绿、墨色文字、黄色 `#FFFA00` 当前项与操作。
- 新会话 `conversation.hero.brand.mark`：原创“祀”标识和抽象龙纹，窄屏自动收起大幅背景。
- `conversation.composer.dock`：简洁的 `[ 祀 ] / SI` 主题标记，不遮挡聊天或输入。
- 括号一级标题、`//` 二级标题、Saira 宽体和等宽数字。
- 切角按钮、1px 细线、页顶灰绿 / 黄 / 浅灰绿三色条。
- 100–400ms 短过渡，尊重 `prefers-reduced-motion`。
- 字体与装饰全部内嵌到构建后的 Client，无运行时图片或字体请求。

## 原创与素材边界

本插件使用原创括号“祀”标识、几何龙角和抽象龙纹，不包含或复制设计预览图中的角色立绘、龙、Q 版角色、标志、截图或任何游戏官方素材。项目与游戏及其开发商无关。

Saira 使用 SIL Open Font License 1.1，见 `assets/Saira-OFL.txt`。视觉规则与等高线来自 `hhikr/endfield-ui-skill`，第三方声明见 `NOTICE`。

## 从 GitHub 获取

仓库：https://github.com/xuhaoxu-gif/dsh-endfield-theme

```sh
git clone https://github.com/xuhaoxu-gif/dsh-endfield-theme.git
```

仓库同时包含源文件和构建后的 `client.js`，克隆后可以直接通过 DeepSeek Harness Plugin Manager 的 `install_bundle` 安装目录，无需安装 npm 依赖。不要手工修改 profile 的 `package.json` 或 `cordis.patch.yml`。

## 卸载

在 Plugin Manager 中移除 `@local/dsh-endfield-theme` bundle。卸载后，Theme 令牌覆盖和三个 slot 注册会被清理，恢复 Harness 原皮肤。

## 构建与验收

修改样式时编辑 `skin.css`，修改 Theme、矢量图形或组件时编辑 `client.template.js`，然后运行：

```sh
node scripts/build-client.mjs
node --check client.js
node --check index.js
node scripts/verify.mjs
```

不要直接编辑生成的 `client.js`。提交修改前请运行上述完整验收。

## 源文件

- `client.template.js`：Theme、原创 SVG、三个 slot 与生命周期。
- `skin.css`：配色相关表现、括号标题、切角、纹理、主题画面与响应式规则。
- `scripts/build-client.mjs`：资源内嵌构建。
- `scripts/verify.mjs`：静态验收与参考图排除检查。
- `docs/si-operator-theme.md`：祀·协议设计与素材边界。

## 许可

原创插件代码使用 MIT License，见 `LICENSE`。字体与第三方资源的许可和声明见 `NOTICE` 与 `assets/Saira-OFL.txt`。
