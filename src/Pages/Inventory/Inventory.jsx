import {Avatar, Table, Typography , Space} from "antd";
import {useEffect, useState} from "react";
import {getInventory} from "../../API/index.js";

function Inventory(){
    const [loading, setLoading] = useState(false);
    const [dataSource , setDataSource] = useState([]);
    useEffect(()=>{
        setLoading(true);
        getInventory().then((res)=>{
            setDataSource(res.products);
            setLoading(false);
        })
    })
    return (
        <Space size={20} direction="vertical">
            <Typography.Text level={2}>Inventory</Typography.Text>

            <Table rowKey={(row) => row.id}
            // loading={loading}
            columns={
                [
                    {
                        title: "Thumbnail",
                        dataIndex: "thumbnail",
                        render:(link)=>{
                            return <Avatar src={link}/>
                        }
                    },
                    {
                        title:"Title",
                        dataIndex: "title",
                    },
                    {
                        title:"Price",
                        dataIndex: "price",
                        // render:(value)=> <span>{value}</span>

                    },
                ]
            }
            dataSource={dataSource}
            pagination={{
                pageSize:10,
            }}
            />
        </Space>
    );
}
export default Inventory;