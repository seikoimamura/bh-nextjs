export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Bible Help",
  description: "私たちは当サイトに立ち寄られた方は神様のお導きによるものと信じています。",
  navItems: [
    {
      label: "ホーム",
      href: "/",
    },
    {
      label: "コミック小冊子",
      href: "/tracks",
    },
    {
      label: "ジャック・チックとは",
      href: "/about",
    },
  ],
  links: {
    twitter: "https://twitter.com/",
    chick: "https://www.chick.com/information/contact-us",
    email: "mailto:BibleHelpJapan@yahoo.com"
  },
};
