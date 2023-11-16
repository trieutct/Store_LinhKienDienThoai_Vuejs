import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: {
    token:null,
    UserId:null
  },
  getters: {
    token:state=>state.token
  },
  mutations: {
    setToken(state){
      state.token=sessionStorage.getItem('token');
    },
    setUserId(state){
      state.UserId=sessionStorage.getItem('UserId');
    },
    clearToken(state){
      if(!sessionStorage.getItem('token'))
        return
      state.token=null
      sessionStorage.removeItem('token');
    },
    clearUserId(state){
      if(!sessionStorage.getItem('UserId'))
        return
      state.UserId=null
      sessionStorage.removeItem('UserId');
    }
  },
  actions: {
    login(context,form)
    {
      axios.post("http://localhost:5224/api/Account/login",form).then(rs=>{
        sessionStorage.setItem('token', rs.data.token);
        sessionStorage.setItem('token', rs.data.UserId);
        context.commit('setToken')
        context.commit('setUserId')
      }).catch(erro=>{
          alert(erro.message)
      })
    },
    logout(context)
    {
      context.commit('clearToken')
      context.commit('clearUserId')
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
