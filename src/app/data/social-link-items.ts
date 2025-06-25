import { IconLinkItem } from "../models/icon-link-item";

const SOCIAL_LINK_ITEMS: IconLinkItem[] = [
  {
    url: "https://www.linkedin.com/in/oloflandahl",
    iconName: "linkedin",
    title: "LinkedIn",
  },
  {
    url: "https://github.com/oloflandahl",
    iconName: "github",
    title: "Github",
  },
  {
    url: "mailto:oloflandahl@gmail.com",
    iconName: "envelope-o",
    title: "Email",
    openOnPage: true,
  },
];

if ((navigator as any).share) {
  const onShare = (event: MouseEvent) => {
    event.preventDefault();
    (navigator as any).share({
      title: "Olof Landahl",
      url: "https://oloflandahl.com/",
    });
  };
  SOCIAL_LINK_ITEMS.push({
    onClick: onShare,
    iconName: "share-alt",
    title: "Share",
  });
}

export { SOCIAL_LINK_ITEMS };
