import Chart from "./Chart.jsx";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {Typography, Card, Space, Statistic, Table} from 'antd'
import {getOrders} from "../../API/index.js";
import {useEffect, useState} from "react";


const Dashboard = () => {

  return (
    <div>
        <Space direction="vertical" size={20}>
            <Typography.Text level={4}>Dashboard</Typography.Text>
            <Space direction={"horizontal"}>
                <DashboardCard icon={<ShoppingCartOutlined
                    style={{
                        backgroundColor: 'rgba(255,0,0,0.5',
                        color: 'green',
                        borderRadius: 20,
                        fontSize:24,
                        padding:8,
                    }}
                />} title={"Orders"} value={123} />

                <DashboardCard icon={<ShoppingOutlined
                    style={{
                        backgroundColor: 'rgba(0,255,0,0.5',
                        color: 'blue',
                        borderRadius: 20,
                        fontSize:24,
                        padding:8,
                    }}
                />}
                               title={"Inventory"}
                               value={123}
                />
                <DashboardCard icon={<UserOutlined
                    style={{
                        backgroundColor: 'rgba(0,255,0,0.5',
                        color: 'green',
                        borderRadius: 20,
                        fontSize:24,
                        padding:8,
                    }}
                />} title={"Customer"} value={123} />
                <DashboardCard icon={<DollarCircleOutlined
                    style={{
                        backgroundColor: 'rgba(0,255,225,0.5',
                        color: 'green',
                        borderRadius: 20,
                        fontSize:24,
                        padding:8,
                    }}
                />} title={"Revenue"} value={123} />
            </Space>
            <Space>
                <RecentOrders/>
                <Chart/>

            </Space>


        </Space>



              

              
    
    </div>
  )
}
 function DashboardCard({icon , title , value }){
  return(
    <Card>
      <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value}/>
      </Space>
    </Card>
      

  )
 }

 function RecentOrders(){
    const [dataSource , setDataSource] = useState([]);
    const [loading , setLoading] = useState(false);
     useEffect(() => {
         setLoading(true);
         getOrders().then((res) =>{
             setDataSource(res.products.splice(0,3));
             setLoading(false);
         });


     }, []);

    return(
        <>
            <Typography.Text level={4}>Recent Orders</Typography.Text>
            <Table rowKey={(row) => row.id}
            columns={[
                {
                    title:"Title",
                    dataIndex:"title",
                    key:"title"
                },
                {
                    title:"Quantity",
                    dataIndex:"quantity",
                    key:"quantity"
                },
                {
                    title:"Price",
                    dataIndex:"price",
                    key:"discountPrice"
                },

            ]}
            loading={loading}
            dataSource={dataSource}
            pagination={false}
            />
        </>
    )
 }
export default Dashboard
