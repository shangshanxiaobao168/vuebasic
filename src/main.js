import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// 全局过滤器
// 语法 Vue.filter("过滤器名"，值=>处理结果)
// 语法 Vue.filter("过滤器名"，(值)=>{ return 处理结果})
Vue.filter('reverse', (val) => val.split('').reverse().join(''));

new Vue({
  render: (h) => h(App),
}).$mount('#app');
