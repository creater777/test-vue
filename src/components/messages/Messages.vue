<template>
  <div class="messages">
    <div class="messages__top"></div>
    <div class="messages__content">
      <MessageItem :message="message" :removeHandler="removeHandler" v-for="(message,index) in messages" :index="index"/>
    </div>
    <div class="messages__input">
      <MessageInput :sendHandler="sendHandler"/>
    </div>
    <div v-if="modal">
      <ModalInput :title="'Введите логин'" :submitHandler="submitHandler" :closeHandler="closeHandler"/>
    </div>
  </div>
</template>

<script>
  import store from "@/store/messages";
  import MessageItem from "@/components/messageItem/MessageItem.vue";
  import MessageInput from "@/components/messageInput/MessageInput.vue";
  import ModalInput from "@/components/modalInput/ModalInput.vue";

  export default {
    name: "Messages",
    data: ()=> ({
      modal: false,
      message: '',
      messages: store.state
    }),
    components: {MessageItem, MessageInput, ModalInput},

    methods: {
      sendHandler(value) {
        this.message = value;
        this.modal = true;
      },
      removeHandler(index) {
        store.commit("remove", index)
      },
      scrollDown() {
        const container = this.$el.querySelector(".messages__content");
        container.scrollTop = container.scrollHeight;
      },
      submitHandler(userName) {
        store.commit("send", {
          userName, message:this.message
        });
        this.modal = false
      },
      closeHandler(){
        this.modal = false
      }
    },

    mounted() {
      this.scrollDown();
    },

    updated() {
      this.scrollDown()
    },
  }
</script>

<style>
  .messages {
    position: absolute;
    font-family: 'Roboto';
    width: 570px;
    height: 628px;
    left: 25px;
    bottom: 25px;
    background: #FFFFFF;
    border: 1px solid rgba(35, 44, 94, 0.21);
    box-shadow: 0 6px 25px rgba(19, 35, 68, 0.1);
    border-radius: 8px;
  }

  .messages__top {
    width: 100%;
    background: #F5F5F8;
    border-radius: 7px 7px 0 0;
    border-bottom: 1px solid rgba(35, 44, 94, 0.21);
    height: 31px;
  }

  .messages__content {
    box-sizing: border-box;
    width: 100%;
    padding: 28px 32px;
    max-height: 471px;
    overflow-y: auto;
    overflow-x: hidden;

    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: rgba(35, 44, 94, 0.12) #fff;
  }

  .messages__content::-webkit-scrollbar {
    width: 27px;
  }

  .messages__content::-webkit-scrollbar-track {
    background: #fff;
  }

  .messages__content::-webkit-scrollbar-thumb {
    background-color: rgba(35, 44, 94, 0.12);
    border: 11px solid #fff;
  }

  .messages__input {
    position: absolute;
    width: 100%;
    height: 125px;
    bottom: 0;
    background: rgba(11, 17, 69, 0.04);
  }
</style>