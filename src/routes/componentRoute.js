import { lazy } from 'react';

const ButtonPage = lazy(() => import('~/pages/Components/Button'));
const Components = lazy(() => import('~/pages/Components/Accordion'));
const DrawerPage = lazy(() => import('~/pages/Components/Drawer'));
const ImagePage = lazy(() => import('~/pages/Components/Image'));
const InputPage = lazy(() => import('~/pages/Components/Input'));
const ModalPage = lazy(() => import('~/pages/Components/Modal'));
const SkeletonPage = lazy(() => import('~/pages/Components/Skeleton'));
const TabsPage = lazy(() => import('~/pages/Components/Tabs'));
const TippyPage = lazy(() => import('~/pages/Components/Tippy'));
const Home2 = lazy(() => import('~/pages/Home2/Home2'));
const DropdownPage = lazy(() => import('~/pages/Components/Dropdown'));
const Overview = lazy(() => import('~/pages/GettingStarted/Overview'));
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
