import { createApp } from 'vue'
import App from './App'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import '@/assets/styles/common.less'

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
