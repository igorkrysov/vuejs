import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import categories from '../components/Category/Categories.vue'
import users from '../components/User/Users.vue'
import profile from '../components/User/Profile.vue'

Vue.use(VueRouter);
Vue.use(BootstrapVue);


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import $ from 'jquery';
//const categories = { template: '<div>Categories</div>' }
//const new_category = { template: '<div>New</div>' }
//const edit_category = { template: '<div>Edit</div>' }

const router =  new VueRouter({
      mode: 'history',
      base: __dirname,
      routes: [
        { path: '/', component: categories },
        { path: '/users', component: users},
        { path: '/profile/:name', name:'profile', component: profile}
//        { path: '/new', component: new_category },
//        { path: '/edit', component: edit_category }
      ]
});


new Vue({
  router,
  template: `
    <div id="app">
      <ul>
        <li><router-link to="/">categories</router-link></li>
        <li><router-link to="/users">users</router-link></li>

      </ul>
      <router-view></router-view>
    </div>
  `
}).$mount('#app');


// <li><router-link to="/new">new</router-link></li>
// <li><router-link to="/edit">edit</router-link></li>
