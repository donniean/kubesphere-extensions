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
  isCheckLicense: true,
};

// globals.context.registerExtension(extensionConfig);

export default () => {
  return new Promise(resolve => {
    window.setTimeout(() => {
      resolve(extensionConfig);
    }, 200);
  });
};
