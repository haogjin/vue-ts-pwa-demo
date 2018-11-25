import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './style/iconfont.js';
import './style/common.scss';
import 'normalize.css';// 样式统一插件
import FastClick from 'fastclick';

// 移动端300ms延迟问题，同时解决点透事件的出现。
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);
  });
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
