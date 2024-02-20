import { Footer, NavBar, BackToTop } from './components';
import React, { Fragment, type FunctionComponent, type PropsWithChildren } from 'react';

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <Fragment>
    <NavBar />
    {children}
    <BackToTop />
    <Footer />
  </Fragment>
);

export default Layout;