import Chart from "./Chart.jsx";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {Typography, Card, Space, Statistic, Table} from 'antd'
import {getOrders , getCustomers , getRevenue , getInventory } from "../../API/index.js";
import {useEffect, useState} from "react";


const Dashboard = () => {
    const [orders, setOrders] = useState(0);
    const [inventory , setInventory] = useState(0);
    const [customers, setCustomers] = useState(0);
    const [revenue, setRevenue] = useState(0);
    useEffect(() => {
        getOrders().then((res) => {
            setOrders(res.total);
            setRevenue(res.discountedTotal);
        });
        getInventory().then((res) => {
            setInventory(res.total);
        });
        getRevenue().then((res) => {
            setInventory(res.total);
        });
        getCustomers().then((res) => {
            setCustomers(res.total);
        })

    }, []);

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
                />} title={"Orders"} value={orders} />

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
                               value={inventory}
                />
                <DashboardCard icon={<UserOutlined
                    style={{
                        backgroundColor: 'rgba(0,255,0,0.5',
                        color: 'green',
                        borderRadius: 20,
                        fontSize:24,
                        padding:8,
                    }}
                />} title={"Customer"} value={customers} />
                <DashboardCard icon={<DollarCircleOutlined
                    style={{
                        backgroundColor: 'rgba(0,255,225,0.5',
                        color: 'green',
                        borderRadius: 20,
                        fontSize:24,
                        padding:8,
                    }}
                />} title={"Revenue"} value={revenue} />
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
