import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: {
    token:null
  },
  getters: {
    token:state=>state.token
  },
  mutations: {
    setToken(state){
      state.token=sessionStorage.getItem('token');
      console.log()
    },
    clearToken(state){
      state.token=null
      sessionStorage.removeItem('token');
    }
  },
  actions: {
    login(context,form)
    {
      axios.post("http://localhost:5224/api/Account/login",form).then(rs=>{
        sessionStorage.setItem('token', rs.data.token);
          context.commit('setToken')
      }).catch(erro=>{
          alert(erro.message)
      })
    },
    logout(context)
    {
      context.commit('clearToken')
    },
    getsessionStorage_token(context)
    {
      if(sessionStorage.getItem('token'))
      {
        context.commit('setToken')
      }
    }
  },
  modules: {
  }
})
