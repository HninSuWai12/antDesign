//import {ShoppingCardOutlined} from '@ant-design/icons'
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Typography , Card , Space, Statistic} from 'antd'
import { icons } from "antd/es/image/PreviewGroup";
const Dashboard = () => {
  // const cards = Array.from({length:5} , ( i)=>(
  //   <DashboardCard key={i} title={"Orders"} value={123} />
  // ))
  // const data= Array(5).fill({
  //   title:"Order" , value:123
  // });
  return (
    <div>
              <Typography.Text>Dashboard</Typography.Text>
              {/* {
                data.map((item , index)=> (
                  <DashboardCard key={index} title={item.title} value={item.vzzzalue} />
                ))
              } */}
              
              <Space direction="horizontal" >
              <DashboardCard icon={<ShoppingOutlined/>} title={"Orders"} value={123} />
              <DashboardCard icon={<UserOutlined/>} title={"Orders"} value={123} />
              <DashboardCard icon={<DollarCircleOutlined/>} title={"Orders"} value={123} />
              <DashboardCard icon={<ShoppingCartOutlined/>} title={"Orders"} value={123} />
              </Space>
              
    
    </div>
  )
}
 function DashboardCard({title , value , icon}){
  return(
    <Card>
      {icon}
      <Statistic title={title} value={value}/>
    </Card>
      

  )
 }
export default Dashboard
