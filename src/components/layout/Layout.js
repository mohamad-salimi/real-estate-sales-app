import Footer from "./footer/Footer";
import Header from "./header/Header";

function Layout({ children }) {
  const style = { minHeight: "700px" };

  return (
    <>
      <Header />
      <div style={style}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
