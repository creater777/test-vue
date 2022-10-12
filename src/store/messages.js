import {createStore} from 'vuex';

const store = createStore({
  state: JSON.parse(localStorage.getItem('messages') || '[]'),

  mutations: {
    send: (state, {userName, message}) => {
      const time = new Date();
      const format = num => ("0"+num).slice(-2);
      state.push({
        user: userName,
        message,
        time: format(time.getHours())+":"+format(time.getMinutes())
      });
    },

    remove: (state, index) => {
      state.splice(index, 1);
    },

    save: (state) => {
      localStorage.setItem('messages', JSON.stringify(state));
    }
  }
})

window.onbeforeunload = () => {
  store.commit('save')
};

export default store;