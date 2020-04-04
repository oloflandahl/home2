import { IconLinkItem } from '../models/icon-link-item';

const SOCIAL_LINK_ITEMS: IconLinkItem[] = [
    { url: 'https://www.linkedin.com/in/oloflandahl', iconName: 'linkedin', title: 'LinkedIn' },
    { url: 'https://github.com/oloflandahl', iconName: 'github', title: 'Github' },
    { url: 'https://securitashiq.slack.com/team/oloflandahl', iconName: 'slack', title: 'Slack' },
    { url: 'https://www.last.fm/user/oloflandahl', iconName: 'lastfm', title: 'LastFM' },
    { url: 'mailto:oloflandahl@gmail.com', iconName: 'envelope-o', title: 'Email', openOnPage: true }
];

const share = (navigator as any).share;
if (share) {
    const onShare = (event: MouseEvent) => {
        event.preventDefault();
        share({
            title: 'Olof Landahl',
            url: 'https://oloflandahl.com/'
        });
    };
    SOCIAL_LINK_ITEMS.push({
        onClick: onShare,
        iconName: 'share-alt',
        title: 'Share'
    });
}

export { SOCIAL_LINK_ITEMS };