import routes from './routes';
import locales from './locales';

const menu = {
  parent: 'global',
  name: 'ts-demo',
  title: 'TypeScript Demo',
  icon: 'cluster',
  order: 0,
  desc: 'Hello ts-demo',
  skipAuth: true,
};

const extensionConfig = {
  routes,
  menus: [menu],
  locales,
};

globals.context.registerExtension(extensionConfig);
