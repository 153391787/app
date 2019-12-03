import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navlist:[]
  },
  mutations: {
    setState(state,payload){
      state[payload.key] = payload.value
    }
  },
  actions: {
    axios_action({commit}){
      axios.get("/getlist").then(res=>{
        console.log(res.data)
        commit({type:"setState",key:"navlist",value:res.data.list})
      })
    }
  },
  modules: {
  }
})
