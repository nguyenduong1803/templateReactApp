import ButtonPage from '~/pages/Components/Button';
import Components from '~/pages/Components/Components';
import DrawerPage from '~/pages/Components/Drawer';
import ImagePage from '~/pages/Components/Image';
import SkeletonPage from '~/pages/Components/Skeleton';
import TabsPage from '~/pages/Components/Tabs';
import TippyPage from '~/pages/Components/Tippy';
import Home2 from '~/pages/Home2/Home2';

const componentRoute = [
  {
    index: true,
    element: <Home2 />,
  },
  {
    path: ':id',
    element: <Home2 />,
  },
  {
    path: 'accordion',
    element: <Components />,
  },
  {
    path: 'button',
    element: <ButtonPage />,
  },
  {
    path: 'drawer',
    element: <DrawerPage />,
  },
  {
    path: 'image',
    element: <ImagePage/>,
  },
  {
    id: 'modal',
    element: 'Modal',
    path: '',
  },
  {
    element: 'Image',
    path: '',
  },
  {
    path: 'skeleton',
    element: <SkeletonPage/>,
  },
  {
    element: <TabsPage/>,
    path: 'tabs',
  },
  {
    path: 'tippy',
    element: <TippyPage />,
  },
];
export default componentRoute;
