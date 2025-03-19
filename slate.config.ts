/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://prophet555.github.io/hammertime',
  avatar: '/hammertime/H-avatar.jpg',
  title: 'Hamm Blog',
  description: '2 Legit 2 Quit - Hammertime',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© 2025 Hamm Design',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/prophet555'
    },
]
});