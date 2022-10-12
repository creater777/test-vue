import {createApp} from "vue";
import Messages from "@/components/messages/Messages.vue";
import store from './store/messages'

createApp(Messages)
  .use(store)
  .mount("#app");