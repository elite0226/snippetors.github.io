module.exports = {
  lang: "en-US",
  title: "Snippetors' Packages",
  head: [["link", { rel: "icon", href: "/images/hero.svg" }]],
  plugins: [
    ["@snippetors/vuepress-plugin-tabs", {}],
    ["@snippetors/vuepress-plugin-code-copy", {}],
  ],
  themeConfig: {
    logo: "/images/hero.svg",
    repo: "Snippetors/snippetors.github.io",
    docsDir: "docs",
    navbar: [
      { text: "vuepress-plugin-tabs", link: "/plugins/vuepress-plugin-tabs" },
      {
        text: "vuepress-plugin-code-copy",
        link: "/plugins/vuepress-plugin-code-copy",
      },
    ],
    sidebar: false,
  },
};
