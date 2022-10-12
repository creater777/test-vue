<template>
  <div class="message-item">
    <label class="message-item__label">{{message.user}}</label>
    <div class="message-item-box">
      <div class="message-item-box__text">{{message.message}}</div>
      <div class="message-item-box__text-time">{{message.time}}</div>
    </div>
    <div class="message-item__remove" @click="removeClickHandler">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 10 9 L 14 5 C 14 5 14 5 14 5 C 14 4 14 4 14 4 C 14 4 14 4 14 4 C 13 4 13 4 13 4 L 9 8 L 5 4 C 5 4 5 4 5 4 C 4 4 4 4 4 4 C 4 4 4 4 4 5 C 4 5 4 5 4 5 L 8 9 L 4 13 C 4 13 4 13 4 13 C 4 13 4 13 4 14 C 4 14 4 14 4 14 C 4 14 4 14 4 14 C 4 14 4 14 4 14 C 4 14 4 14 5 14 C 5 14 5 14 5 14 C 5 14 5 14 5 14 L 9 10 L 13 14 C 13 14 13 14 14 14 C 14 14 14 14 14 14 C 14 14 14 14 14 14 C 14 13 14 13 14 13 L 10 9 Z"
              fill="#969696"></path>
      </svg>
    </div>
  </div>
</template>
<script>
  export default {
    name: "message-item",
    props: {
      index: Number,
      message: Object,
      removeHandler: Function
    },

    methods:{
      removeClickHandler(){
        this.removeHandler(this.index);
      }
    }
  }
</script>
<style>

  .message-item {
    display: flex;
    line-height: 1;
    width: 351px;
    padding-bottom: 24px;
    flex-wrap: wrap;
  }

  .message-item__label {
    flex: 100%;
    font-size: 16px;
    color: #5E5E5E;
  }

  .message-item-box {
    width: 329px;
    padding: 16px 0 0;
    box-sizing: border-box;
    background: #F5F5F8;
    border-radius: 8px;
    margin-top: 6px;
  }

  .message-item-box__text {
    font-size: 16px;
    color: #222222;
    width: 100%;
    padding: 0 17px;
  }

  .message-item-box__text-time {
    position: relative;
    text-align: right;
    right: 6px;
    bottom: 6px;
    font-size: 13px;
    color: #969696;
  }
  .message-item__remove {
    position: relative;
    top: 4px;
    width: 18px;
    height: 18px;
    cursor: pointer;
    padding-left: 4px;
  }

</style>