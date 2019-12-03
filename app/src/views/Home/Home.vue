<template>
    <div class="da">
        <div class="nav">
            <div v-for="(item,index) in navlist" :key="index" @click="fn(item.type)" class="navlist">
                        {{item.name}}
                    </div>
                    <input type="text" v-model="inner"><button @click="fn1()">搜索</button>
        </div>
       
        <div class="shuju">
            <div v-for="(item,index) in list" :key="index" class="item">
                <div class="img">
                    {{item.type}}
                </div>
                <div>
                    <p>{{item.title}}</p>
                    <p>执行人:{{item.pope}}</p>
                    <p>{{item.xinji}}</p>
                    <span>开始日期:{{item.time}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>结束日期:{{item.overtime}}</span>
                </div>
                <Right :inner="item.type"></Right>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import Right from "../../components/Right.vue"
export default {
    components:{
        Right
    },
    data(){
        return {
            list:[],
            inner:"",
        }
    },
    mounted() {
        this.$store.dispatch("axios_action")
    },
    computed: {
        navlist(){
            return this.$store.state.navlist
        }
    },
    methods: {
        fn1(){
             axios.get("/sousuo",{
                params:{
                    inner:this.inner
                }
            }).then(res=>{
                console.log(res.data)
                this.list = res.data
            })
        },
        fn(type){
            if(type==="all"){
            axios.get("/getall").then(res=>{
                console.log(res.data)
                this.list = res.data
            })
            }else{
            axios.get("/getdata",{
                params:{
                    type:type
                }
            }).then(res=>{
                console.log(res.data)
                this.list = res.data
            })
        }
        }
    },
}
</script>

<style>
    
</style>