import {createApp} from "vue";
import App from "./App.vue";
import store from './store/messages'

createApp(App)
  .use(store)
  .mount("#app");