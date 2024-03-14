import routes from './routes';
import locales from './locales';

const menu = {
  parent: 'topbar',
  name: 'ts-example',
  title: 'TypeScript Example',
  icon: 'cluster',
  order: 0,
  desc: 'Hello ts-example',
  skipAuth: true,
};

const extensionConfig = {
  routes,
  menus: [menu],
  locales,
};

// globals.context.registerExtension(extensionConfig);

export default extensionConfig;
