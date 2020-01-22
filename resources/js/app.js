import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';
import navbar from './component/navbar';
import sidebar from './component/sidebar';

Vue.use(VueRouter);

  let app = new Vue({
    el:'#app',

    router: new VueRouter(routes),
});