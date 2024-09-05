import routes from './routes';
import locales from './locales';

const menus = [
  {
    parent: 'global',
    name: 'js-example',
    title: 'JavaScript Example',
    icon: 'cluster',
    order: 0,
    desc: 'Hello js-example',
    skipAuth: true,
  },
];

const extensionConfig = {
  routes,
  menus,
  locales,
};

// if (process.env.NODE_ENV === 'development') {
//   globals.context.registerExtension(extensionConfig);
// }

export default extensionConfig;
