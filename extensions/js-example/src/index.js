import routes from './routes';
import locales from './locales';

const menus = {
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
  menus,
  locales,
};

// globals.context.registerExtension(extensionConfig);

export default extensionConfig;
