export type SiteConfig = typeof siteConfig;
export const categories = [
    { title: "SCHOOLS", href: "/schools" },
    { title: "LIBARY", href: "/library" },
    { title: "RENTALS", href: "/rentals" },
    { title: "MARKET PLACE", href: "/marketplace" },,
    { title: "DASHBOARD", href: "/dashboard" }
  ]
export const siteConfig = {
  name: "Resolve",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "FAQs",
      href: "/faqs",
    },
    {
      label: "Contact Us",
      href: "/docs",
    },
    // {
    //   label: "Signup",
    //   href: "/signup",
    // },
    // {
    //   label: "Login",
    //   href: "/loginn",
    // },
    // {
    //   label: "DashBoard",
    //   href: "/userDashboard",
    // },
    
    // {
    //   label: "Pricing",
    //   href: "/pricing",
    // },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact Us",
      href: "/docs",
    },
    // {
    //   label: "DashBoard",
    //   href: "/user-dashboard",
    // },
    {
      label: "FAQs",
      href: "/faqs",
    },
    // // {
    //   label: "Profile",
    //   href: "/profile",
    // },
    // {
    //   label: "Dashboard",
    //   href: "/dashboard",
    // },
    // {
    //   label: "Projects",
    //   href: "/projects",
    // },
    // {
    //   label: "Team",
    //   href: "/team",
    // },
    // {
    //   label: "Calendar",
    //   href: "/calendar",
    // },
    // {
    //   label: "Settings",
    //   href: "/settings",
    // },
    // {
    //   label: "Help & Feedback",
    //   href: "/help-feedback",
    // },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
