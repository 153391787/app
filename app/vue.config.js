var data = require("./data.js")

module.exports = {
    devServer:{
        before(app){
            app.get("/getlist",(req,res)=>{
                res.send(data)
            })
            app.get("/getdata",(req,res)=>{
                let type = req.query.type
               let fil = data.data.filter((item)=>{
                    return item.type == type
                })
                res.send(fil)
            })
            app.get("/getall",(req,res)=>{
                res.send(data.data)
            })
            app.get("/sousuo",(req,res)=>{
                let inner = req.query.inner
                console.log(inner)
                var s = data.data.find((item)=>{
                    return item.title.includes(inner)
                })
                console.log(s)
                if(s){
                 res.send([s])   
                }else{
                res.send([])  
                }
            })
        }
    }
}