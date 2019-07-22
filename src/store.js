import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    name: JSON.parse(localStorage.getItem('name')),
    showDrawer: false,
    tasks: [],
    id: '',
    newTask: {
      author: JSON.parse(localStorage.getItem('name')),
      title: '',
      description: ''
    }
  },
  getters: {
    TODOS: state => {
      return state.tasks;
    }
  },
  mutations: {
    LOGOUT(state) { 
      state.name = ''
      console.log(state.tasks)
    },
    SHOW(state) {
      state.add = !state.add
    },
    ADD_TASK(state) {
      axios.post('https://raysael.herokuapp.com/todo', state.newTask)
      .then(() => {
        this.commit('GET_TASKS');
        this.commit('CLOSE');
      })
    },
    GET_TASKS(state) {
      axios.get('http://raysael.herokuapp.com/todo?author='+state.name)
        .then(response => {
          state.tasks = response.data
          console.log(state.tasks)
        })
    },
    EDIT(state, id) {
      state.id = id;
      console.log(state.id)
      state.showDrawer = true;
      state.tasks.forEach(task => {
        if (task._id === id) {
          state.newTask.title = task.title;
          state.newTask.description = task.description;
        }
      }); 
    },
    CLOSE(state) {	
        state.newTask.title = '';
        state.newTask.description = '';
        state.id = '';
        state.showDrawer = false;
    },
    PATCH(state) {
      axios.patch('https://raysael.herokuapp.com/todo/' + state.id, state.newTask)
			.then(() => {
        this.commit('GET_TASKS');
        this.commit('CLOSE');
      })
    } 
  }
})
