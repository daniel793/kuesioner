import bootstrap from './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';

Vue.use(VueRouter);

  let app = new Vue({
    el:'#app',

    data () {
      return {
        info: null
      }
    },

    components:{
      'my-navbar': Navbar,
      'side-bar' : Sidebar
    },

    router: new VueRouter(routes),

    mounted () {
      axios
        .get('http://127.0.0.1:8000/api/coba')
        .then(response => console.log(response))
    }

  });