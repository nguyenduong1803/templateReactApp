import ButtonPage from '~/pages/Components/Button';
import Components from '~/pages/Components/Accordion';
import DrawerPage from '~/pages/Components/Drawer';
import ImagePage from '~/pages/Components/Image';
import InputPage from '~/pages/Components/Input';
import ModalPage from '~/pages/Components/Modal';
import SkeletonPage from '~/pages/Components/Skeleton';
import TabsPage from '~/pages/Components/Tabs';
import TippyPage from '~/pages/Components/Tippy';
import Home2 from '~/pages/Home2/Home2';
import DropdownPage from '~/pages/Components/Dropdown';
import Overview from '~/pages/GettingStarted/Overview';

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
    path: 'dropdown',
    element: <DropdownPage />,
  },
  {
    path: 'image',
    element: <ImagePage />,
  },
  {
    element: <ModalPage />,
    path: 'modal',
  },
  {
    element: 'Image',
    path: '',
  },
  {
    path: 'skeleton',
    element: <SkeletonPage />,
  },
  {
    element: <TabsPage />,
    path: 'tabs',
  },
  {
    path: 'tippy',
    element: <TippyPage />,
  },
  {
    path: 'input',
    element: <InputPage />,
  },
  {
    path: 'overview',
    element: <Overview />,
  },

];
export default componentRoute;
