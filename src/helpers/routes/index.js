import { useRoutes } from 'react-router-dom';
import { DefaultLayout } from '~/layouts';
import LayoutSidebar from '~/layouts/LayoutSidebar/LayoutSidebar';
import About from '~/pages/About/About';
import Components from '~/pages/Components/Components';
import Home from '~/pages/Home/Home';
import Home2 from '~/pages/Home2/Home2';
import Product from '~/pages/Products/Products';

const routerSite = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/product',
        element: <Product />,
      },
    ],
  },
  {
    path: '/',
    element: <LayoutSidebar />,
    children: [
      {
        path: '/docs',
        element: <Home2 />,
        children: [
          {
            path: ':id',
            element: <Components />,
          },
        ],
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
