import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Image, Space, Typography } from 'antd';

// import { useEffect, useState } from "react";
// import { getComments, getOrders } from "../../API";


const HeaderApp = () => {
  return (
    <div className="AppHeader">
       <Image width={40} height={40}
src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000"
 style={{borderRadius:50}}      >

       </Image>
       <Typography.Title>Admin Dashboard</Typography.Title>
       <Space >
           <Badge count={10} dot>
               <MailOutlined style={{fontSize: 24}} />
           </Badge>
           <Badge count={20} >
               <BellFilled style={{fontSize: 24}} />
           </Badge>
       </Space>
   </div>
  )
}

export default HeaderApp

