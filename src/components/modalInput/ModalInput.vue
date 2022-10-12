<template>
  <div class="modal__input">
    <div class="modal__input-overlay" @click="closeHandler"></div>
    <div class="modal-input">
      <label class="modal-input__label">Введите логин</label>
      <input class="modal-input__input" type="text" @change="changeHandler" @keyup.enter="submitClickHandler"/>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'modal-input',
    data: () => ({
      value: ''
    }),
    props:{
      title: String,
      submitHandler: Function,
      closeHandler: Function
    },
    methods: {
      changeHandler(e){
        this.value = e.target.value
      },

      submitClickHandler(){
        this.submitHandler(this.value)
      }
    }
  }
</script>
<style>
  .modal-input{
    width: 370px;
    height: 169px;
    background: #FFFFFF;
    border: 1px solid rgba(35, 44, 94, 0.21);
    box-shadow: 0 6px 25px rgba(19, 35, 68, 0.1);
    border-radius: 8px;
    font-family: 'Roboto';
    z-index: 1000;
    position: relative;
    margin: auto;
    display: block;
    top: 20%;
    padding: 38px 30px 52px;
    line-height: 1;
    box-sizing: border-box;
  }

  .modal-input__label{
    width: 100%;
    height: 54px;
    font-size: 16px;
    color: #5E5E5E;
  }

  .modal-input__input{
    margin-top: 6px;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #232C5E;
    border-radius: 8px;
    font-size: 16px;
    color: #222222;
    padding: 18px;
    box-sizing: border-box;
  }

  .modal__input{
    display: block;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 125%;
    width: 100%;
  }
  .modal__input-overlay{
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    background: #000;
    opacity: 0.5;

  }
</style>