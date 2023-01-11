import NProgress from 'nprogress';
import { useEffect } from 'react';

const LazyLoadingScreen = () => {
  NProgress.configure({ showSpinner: false,trickle:false });
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);

  return null;
};

export default LazyLoadingScreen;
