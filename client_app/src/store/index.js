import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: {
    token:null,
    UserId:null,
    loginErro:{
      show:false,
      content:'ok nhé',
      icon:'$success',
      color:'success'
    }
  },
  getters: {
    token:state=>state.token,
    UserId:state=>state.UserId,
    loginErro:state=>state.loginErro
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
    },
    // login
    setLoginError(state, { show, icon, content,color }) {
      state.loginErro = { show, icon, content,color };
    },
    clearLoginError(state) {
      state.loginErro = { show: false, icon: '', content: '',color:'' };
    },
  },
  actions: {
    login(context,form)
    {
      axios.post("http://localhost:5224/api/Account/login",form).then(rs=>{
        sessionStorage.setItem('token', rs.data.token);
        sessionStorage.setItem('UserId', rs.data.UserId);
        context.commit('setToken')
        context.commit('setUserId')
      }).catch(erro=>{
          context.commit('setLoginError', {
            show: true,
            icon: '$error',
            content: erro.response.data,
            color: 'error'
          });
          setTimeout(() => {
            context.commit('clearLoginError');
          }, 3000);
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
