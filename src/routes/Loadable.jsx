import { Suspense } from 'react';
import LazyLoadingScreen from '~/components/Atom/LazyLoadingScreen';

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LazyLoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};
export default Loadable;
