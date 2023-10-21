import { Typography , Table ,Space } from "antd"
import {useEffect, useState} from "react";
import {getOrders} from "../../API/index.js";

const Orders = () => {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    useEffect(()=>{
        setLoading(true)
        getOrders().then((res)=>{
            setDataSource(res.products);
            setLoading(false);
        })
    } , [])
    //console.log(dataSource);
  return (
    <div>
              <Space size={20} direction="vertical">
                  <Typography.Title level={4}>Orders</Typography.Title>
                  <Table rowKey={(row) => row.id} loading={loading}
                  columns={[
                      {
                          title: "Title",
                          dataIndex: "title",
                      },
                      {
                          title: "Price",
                          dataIndex: "price",
                          render:(value)=> <span>${value}</span>
                      },
                      {
                          title: "DiscountPrice",
                          dataIndex: "discountPrice",
                          render: (value)=> <span>${value}</span>
                      },
                      {
                          title: "Quantity",
                          dataIndex: "quantity",
                      },
                      {
                          title: "Total",
                          dataIndex: "total",
                      },

                  ]}
                         dataSource={dataSource}
                         pagination={
                      {
                          pageSize:10
                      }
                         }
                  >


                  </Table>

              </Space>

    </div>
  )
}

export default Orders
