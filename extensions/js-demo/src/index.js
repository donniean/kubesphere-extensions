import routes from './routes';
import locales from './locales';

const menu = {
  parent: 'topbar',
  name: 'js-demo',
  title: 'JavaScript Demo',
  icon: 'cluster',
  order: 0,
  desc: 'Hello js-demo',
  skipAuth: true,
};

const extensionConfig = {
  routes,
  menus: [menu],
  locales,
};

globals.context.registerExtension(extensionConfig);
