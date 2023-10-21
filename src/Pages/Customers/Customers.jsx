import { Avatar,  Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers} from "../../API";

function Customers() {
const [loading, setLoading] = useState(false);
const [dataSource, setDataSource] = useState([]);
useEffect(()=>{
  // setLoading(true)
  getCustomers().then((res)=>{
    setDataSource(res.users)
    setLoading(false)
  })
})

  return (

   <Space size={20} direction="vertical">
     <Typography.Text level={4}>Customers</Typography.Text>
     <Table rowKey={row => row.id}

         loading={loading}
         columns={
       [
         {
           title: "Image",
           dataIndex: "image",
           render:(link)=>{
             return <Avatar src={link}/>
           },

         },

         {
           title: "First Name",
           dataIndex: "firstName",
         },
         {
           title: "Last Name",
           dataIndex: "lastName",
         },
         {
           title: "Email",
           dataIndex: "email",
         },
         {
           title: "Phone",
           dataIndex: "phone",
         },
         {
           title: "Address",
           dataIndex: "address",
           render: (address) => {
             return (
                 <span>{address.address} , {address.city}</span>
             )
           }
         }

       ]
         }
         dataSource={dataSource}
         pagination={{
           pageSize:10
         }}


     />
   </Space>

  );
}
export default Customers;
