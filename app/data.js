const data = [
    {
        title:"客户经理掌上宝测试",
        xinji:"1",
        time:"2013年04月03日",
        pope:"邹旭辉  赵红英  杨正华",
        overtime:"2013年05月03日",
        type:"pending"   //进行中
    },
    {
        title:"掌上宝产品资料整理",
        xinji:2,
        time:"2013年04月03日",
        overtime:"2013年05月03日",
        pope:"杨雪梅",
        type:"reject"   //强制终止
    },
    {
        title:"移动新产品整理",
        xinji:2,
        time:"2013年04月03日",
        overtime:"2013年05月03日",
        pope:"马建华",
        type:"fullfilled"   //已完成
    } 
]

const list = [
    {
        name:"全部任务",
        type:"all",
    },
    {
        name:"进行中的任务",
        type:"pending",
    },
    {
        name:"强制终止的任务",
        type:"reject",
    },
    {
        name:"已完成的任务",
        type:"fullfilled",
    },
]
module.exports = {data,list}