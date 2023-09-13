const MenuItem = [
  {
    title: "Home",
    active: true,
    href: "/"
  },
  {
    title: "Games",
    active: false,
    href: "/games"
  },
  {
    title: "Reward",
    active: false,
    href: "/reward"
  },
  {
    title: "Discover",
    active: false,
    href: "/discover"
  },
  {
    title: "Global Rank",
    active: false,
    href: "/global-rank"
  }
];

const LinkAuthItem = [
  {
    title: "My Profile",
    href: "/member"
  },
  {
    title: "Wallet",
    href: "/"
  },
  {
    title: "Account Settings",
    href: "/member/edit-profile"
  },
  {
    title: "Log Out",
    href: "/sign-in"
  }
];

export default { MenuItem, LinkAuthItem };
