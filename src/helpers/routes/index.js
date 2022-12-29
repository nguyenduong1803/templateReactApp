import { useRoutes } from 'react-router-dom';
// import { DefaultLayout } from '~/layouts';
// import About from '~/pages/About/About';
import Home from '~/pages/Home/Home';
// import Product from '~/pages/Products/Products';
import componentRoute from './componentRoute';
import LayoutSidebar from '~/layouts/LayoutSidebar/LayoutSidebar';

const routerSite = [
  // {
  //   path: '/',
  //   element: <DefaultLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Home />,
  //     },

  //     {
  //       path: '/about',
  //       element: <About />,
  //     },
  //     {
  //       path: '/product',
  //       element: <Product />,
  //     },
  //   ],
  // },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: '/',
    element: <LayoutSidebar />,
    children: [
      {
        path: 'docs',
        children: componentRoute,
      },
    ],
  },
];

// if login
const RouterSite = () => {
  const element = useRoutes(routerSite);
  return element;
};
export { RouterSite };
