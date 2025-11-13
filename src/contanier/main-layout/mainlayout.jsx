import { Layout } from "antd";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import { Divider } from "antd";

const { Header: AntHeader, Footer: AntFooter, Content } = Layout;

function MainLayout({ children }) {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
      }}
    >
      
      <AntHeader
        style={{
          backgroundColor: "#1677ff",
          padding: 0,
        }}
      >
        <Header />
      </AntHeader>

      <Divider />
      <Content
        style={{
          flex: 1,
          backgroundColor: "#ffffff",

          boxSizing: "border-box",
          overflowX: "hidden",
        }}
      >
        {children}
      </Content>
 <Divider />
      
      <AntFooter
        
          style={{
        backgroundColor: "#ede7e7e1",
           color: "#168bceff",
        padding: "20px 0",
        position: "relative",
        bottom: 0,
        width: "100%",         
        overflow: "hidden",     
      }}
      >
        <Footer />
      </AntFooter>
    </Layout>
  );
}

export default MainLayout;






