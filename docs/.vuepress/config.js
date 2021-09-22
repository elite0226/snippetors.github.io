module.exports = {
  lang: "en-US",
  title: "Snippetors' Packages",
  plugins: [
    ["@snippetors/vuepress-plugin-tabs", {}],
    ["@snippetors/vuepress-plugin-code-copy", {}],
  ],
  themeConfig: {
    logo: "",
    logoDark: "",
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
