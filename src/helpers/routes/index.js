import LayoutSidebar from '~/layouts/LayoutSidebar/LayoutSidebar';
import About from '~/pages/About/About';
import Home from '~/pages/Home/Home';
import Product from '~/pages/Product/Product';
const publicRouter = [
  { path: '/', component: Home },
  { path: '/product', component: Product },
  { path: '/about', component: About, layout: LayoutSidebar },
];
// if login
const privateRouter = [];
export { privateRouter, publicRouter };
