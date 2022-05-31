---
externalIcon: false
---

# vuepress-plugin-code-copy

[![npm](https://badgen.net/npm/v/@snippetors/vuepress-plugin-code-copy)](https://www.npmjs.com/package/@snippetors/vuepress-plugin-code-copy)
[![downloads](https://badgen.net/npm/dt/@snippetors/vuepress-plugin-code-copy)](https://www.npmjs.com/package/@snippetors/vuepress-plugin-code-copy)
[![license](https://badgen.net/github/license/Snippetors/snippets)](https://github.com/Snippetors/snippets/blob/main/LICENSE)

This plugin is inspired by [vuepress-plugin-code-copy](https://github.com/znicholasbrown/vuepress-plugin-code-copy), but for Vue 3.x and VuePress 2.x

==VuePress is evolving rapidly, and there's no stable version yet. This plugin is only tested with VuePress version 2.0.0-beta.25==

## Install

> This plugin requries [VuePress>=2.0.0](https://github.com/vuepress/vuepress-next)

```sh
yarn add -D @snippetors/vuepress-plugin-code-copy
```

```js
// .vuepress/config.js
module.exports = {
  plugins: ["@snippetors/vuepress-plugin-code-copy", options],
};
```

<!-- todo -->

### Options

| Option               | Description                                                                                                                                         | Type    | Accepted Values | Default                          |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :-------------- | :------------------------------- |
| selector             | This is the **CSS** [selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) to which the copy button component will be attached. | String  | -               | `div[class*="language-"]`        |
| align                | This option describes the vertical position of the copy button component as well as the `successText`                                               | String  | top/bottom      | `bottom`                         |
| color                | This sets the color of the copy button and can take any [hex code](https://htmlcolorcodes.com/).                                                    | String  | -               | `#27b1ff`                        |
| backgroundColor      | This sets the color of the background transition animation and can take any [hex code](https://htmlcolorcodes.com/).                                | String  | -               | `#0075b8`                        |
| backgroundTransition | Enables the background transition animation of the attached code block when a user presses the copy button.                                         | Boolean | true/false      | `true`                           |
| successText          | This sets the text that displays when a user presses the copy button.                                                                               | String  | -               | `Copied!`                        |
| successTextColor     | This sets the color of the text that displays when a user presses the copy button and can take any [hex code](https://htmlcolorcodes.com/).         | String  | -               | the same value as option `color` |
| staticIcon           | Copy icon is only visible when hovering over code block or is always visible.                                                                       | Boolean | true/false      | `false`                          |

This plugin listens to event `snippetors-vuepress-plugin-code-copy-update-event`, and add copy botton to all components selected by `selector` if there's no button already added. You may find this useful when the page is locally updated and the new components can be selected by `selector`, in this case, you can dispatch this specific event to let the plugin recheck all components.

To trigger this plugin to recheck all components

```js
window.dispatchEvent(
  new Event("snippetors-vuepress-plugin-code-copy-update-event")
);
```

this plugin is listening the event like

```js
window.addEventListener(
  "snippetors-vuepress-plugin-code-copy-update-event",
  callbackToUpdateCopyButton
);
```

## Preview

```md
Your code block here.
You can see a copy button at right bottom corner when you hover on this block
Try click it!
```
