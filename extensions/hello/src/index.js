import routes from './routes';
import locales from './locales';

const menu = {
  parent: 'topbar',
  name: 'hello',
  title: 'hello',
  icon: 'cluster',
  order: 0,
  desc: 'Hello hello',
  skipAuth: true,
};

const extensionConfig = {
  routes,
  menus: [menu],
  locales,
};

globals.context.registerExtension(extensionConfig);
