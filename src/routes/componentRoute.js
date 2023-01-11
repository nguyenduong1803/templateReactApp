import { lazy } from 'react';
import Loadable from './Loadable';

const ButtonPage = Loadable(lazy(() => import('~/pages/Components/Button')));
const Components = Loadable(lazy(() => import('~/pages/Components/Accordion')));
const DrawerPage = Loadable(lazy(() => import('~/pages/Components/Drawer')));
const ImagePage = Loadable(lazy(() => import('~/pages/Components/Image')));
const InputPage = Loadable(lazy(() => import('~/pages/Components/Input')));
const ModalPage = Loadable(lazy(() => import('~/pages/Components/Modal')));
const SkeletonPage = Loadable(lazy(() => import('~/pages/Components/Skeleton')));
const TabsPage = Loadable(lazy(() => import('~/pages/Components/Tabs')));
const TippyPage = Loadable(lazy(() => import('~/pages/Components/Tippy')));
const Home2 = Loadable(lazy(() => import('~/pages/Home2/Home2')));
const DropdownPage = Loadable(lazy(() => import('~/pages/Components/Dropdown')));
const Overview = Loadable(lazy(() => import('~/pages/GettingStarted/Overview')));

const componentRoute = [
  {
    index: true,
    element: <Home2 />
  },
  {
    path: ':id',
    element: <Home2 />
  },
  {
    path: 'accordion',
    element: <Components />
  },
  {
    path: 'button',
    element: <ButtonPage />
  },
  {
    path: 'drawer',
    element: <DrawerPage />
  },
  {
    path: 'dropdown',
    element: <DropdownPage />
  },
  {
    path: 'image',
    element: <ImagePage />
  },
  {
    element: <ModalPage />,
    path: 'modal'
  },
  {
    element: 'Image',
    path: ''
  },
  {
    path: 'skeleton',
    element: <SkeletonPage />
  },
  {
    element: <TabsPage />,
    path: 'tabs'
  },
  {
    path: 'tippy',
    element: <TippyPage />
  },
  {
    path: 'input',
    element: <InputPage />
  },
  {
    path: 'overview',
    element: <Overview />
  }
];
export default componentRoute;
