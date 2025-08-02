import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children, header, footer, extraBodyCls, singleMenus }) => {
  useEffect(() => {
    document.querySelector("body").className = extraBodyCls
      ? extraBodyCls
      : "Vision Business Solutions ";

    return () => {
      niceSelect({ withoutwide: true });
    };
  }, []);

  return (
    <Fragment>
      
      <Header header={header} singleMenus={singleMenus} />
      {children}
      <Footer footer={footer} />
    </Fragment>
  );
};
export default Layout;
