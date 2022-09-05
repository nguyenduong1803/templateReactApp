import LayoutSidebar from '~/layouts/LayoutSidebar/LayoutSidebar';
import About from '~/pages/About/About';
import Home from '~/pages/Home/Home';
const publicRouter = [
  { path: '/', component: Home },
  { path: '/about', component: About, layout: LayoutSidebar },
];
// if login
const privateRouter = [];
export { privateRouter, publicRouter };
