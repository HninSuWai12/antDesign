import { Space } from "antd";
import "./App.css";
 import HeaderApp from "./Components/AppHeader/HeaderApp";
//  import MenuSide from "./Components/SideMenu/MenuSide";
import MenuSide from "./Components/MenuSide";
import ContentPage from "./Components/PageContent/ContentPage";


function App() {
  return (
    <div className="App">
      <HeaderApp />
      <Space className="SideMenuAndPageContent">
        <MenuSide></MenuSide>
        <ContentPage></ContentPage>
      </Space>
      
      {/* <HeaderApp/>
        <Space className="SideMenuPageContent">
          <MenuSide></MenuSide>
          <ContentPage></ContentPage>
        </Space>
      <Footer/> */}
    </div>
  );
}
export default App;
