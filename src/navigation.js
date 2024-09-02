import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Boekjes',
      href: '/collectie',
    },
     {
      text: 'Over',
      href: '/over',
    },
  ],
  // actions: [{ text: 'Doe mee', href: '/contact' }],
};

export const footerData = {
  links: [
    {
      links: [
        { text: 'Alle boekjes', href: '/collectie' },
        { text: 'Over', href: '/over' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Vrijwaring', href: getPermalink('/vrijwaring') },
    { text: 'Privacy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'Mastodon', icon: 'tabler:brand-mastodon', href: '#' },
    // { ariaLabel: 'Pixelfed', icon: 'tabler:camera', href: '#' },
    // // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
    // { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],

  footNote: `
    Kom in verzet.
  `,
};
