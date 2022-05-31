---
externalIcon: false
---

# vuepress-plugin-tabs

[![npm](https://badgen.net/npm/v/@snippetors/vuepress-plugin-tabs)](https://www.npmjs.com/package/@snippetors/vuepress-plugin-tabs)
[![downloads](https://badgen.net/npm/dt/@snippetors/vuepress-plugin-tabs)](https://www.npmjs.com/package/@snippetors/vuepress-plugin-tabs)
[![license](https://badgen.net/github/license/Snippetors/snippets)](https://github.com/Snippetors/snippets/blob/main/LICENSE)

This plugin is inspired by [vuepress-plugin-element-tabs](https://github.com/superbiger/vuepress-plugin-tabs), but for Vue 3.x and VuePress 2.x

==VuePress is evolving rapidly, and there's no stable version yet. This plugin is only tested with VuePress version 2.0.0-beta.25==

## Install

> This plugin requries [VuePress>=2.0.0](https://github.com/vuepress/vuepress-next)

```sh
yarn add -D @snippetors/vuepress-plugin-tabs
```

```js
// .vuepress/config.js
module.exports = {
  plugins: ["@snippetors/vuepress-plugin-tabs", options],
};
```

### Options

| Option | Description                                      | Type          | Accepted Values | Default |
| :----- | :----------------------------------------------- | :------------ | :-------------- | :------ |
| events | events to dispatch when the component is updated | Array[String] | -               | `[]`    |

There is only one possible option, `events`, which is an array of event names. When this component is updated, these events will be dispatched.

For a setting like

```js
module.exports = {
  plugins: ["@snippetors/vuepress-plugin-tabs", ["event1", "event2"]],
};
```

these events will be dispatched like

```js
window.dispatchEvent(new Event("event1"));
window.dispatchEvent(new Event("event2"));
```

You can add listeners to the events to get notified when the component is updated.

```js
window.addEventListener("event1", callbackOfEvent1);
```

## Usage

```md
:::: tabs [tabs attributes..]

::: tab tab1 [tab attributes..]

content 1

:::

::: tab tab2 [tab attributes..]

content 2

:::

::::
```

### Tabs Attributes

| Attribute    | Description                                           | Type    | Accepted Values       | Default     |
| :----------- | :---------------------------------------------------- | :------ | :-------------------- | :---------- |
| type         | type of Tab                                           | String  | card/border-card      | border-card |
| tab-position | position of tabs                                      | String  | top/right/bottom/left | top         |
| stretch      | whether width of tab automatically fits its container | Boolean | -                     | false       |

### Tab Attributes

| Attribute | Description                         | Type    | Accepted Values | Default |
| :-------- | :---------------------------------- | :------ | :-------------- | :------ |
| label     | title of the tab                    | String  | -               | -       |
| eager     | whether the tab is eagerly rendered | Boolean | -               | false   |

**Note: The tab attribute `eager` has to be decleared as the last element**

## Preview

### Demo 1

```md
:::: tabs

::: tab tab 1

content 1

:::

::: tab tab 2

content 2

:::

::::
```

:::: tabs

::: tab tab 1

content 1

:::

::: tab tab 2

content 2

:::

::::

### Demo 2

```md
:::: tabs type:card tab-position:bottom

::: tab A

content 1

:::

::: tab a tab with eager in its name

Note that this content won't be eagerly loaded since the word `eager` will be treated as a part of the tab name

:::

::::
```

:::: tabs type:card tab-position:bottom

::: tab A

content 1

:::

::: tab a tab with eager in its name

Note that this content won't be eagerly loaded since the word `eager` will be treated as a part of the tab name

![Dog](../assets/img/dog.jpeg)

:::

::::

### Demo 3

```md
:::: tabs tab-position:left

::: tab A

content 1

:::

::: tab B eager

eagerly loaded content

:::

::::
```

:::: tabs tab-position:left

::: tab A

content 1

:::

::: tab B eager

This photo will be eagerly loaded

![Dog2](../assets/img/dog2.jpeg)

:::

::::
