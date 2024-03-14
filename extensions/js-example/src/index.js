import routes from './routes';
import locales from './locales';

const menu = {
  parent: 'topbar',
  name: 'js-example',
  title: 'JavaScript Example',
  icon: 'cluster',
  order: 0,
  desc: 'Hello js-example',
  skipAuth: true,
};

const extensionConfig = {
  routes,
  menus: [menu],
  locales,
};

// globals.context.registerExtension(extensionConfig);

export default extensionConfig;
