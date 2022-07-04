import { createStore } from "vuex";

interface ITodo {
  id: Number,
  text: String,
  done: Boolean
}


const state = {
  count:0,
  todos: [
    { id: 1, text: '水果类', done: true },
    { id: 2, text: '苹果', done: true },
    { id: 3, text: '苹果', done: false}
  ]
}

const mutations = {

}

const actions = {

}

const getters = {
  doneTodos: (state: { todos: ITodo[]; }) => {//通过方法访问
    return state.todos.filter(todo => todo.done)
  },
  doneTodosCount: (state: Object, getters: { doneTodos: ITodo[]; }) => {//通过属性访问
    return getters.doneTodos.length
  }

}

// 其他模块
let modules = {}

const modulesFiles = import.meta.globEager("./modules/*.ts")
for (const path in modulesFiles) {
  const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
  modules = {...modules, [moduleName]: modulesFiles[path].default}
}

export default createStore({
  state,
  mutations,
  actions,
  getters,
  modules
})