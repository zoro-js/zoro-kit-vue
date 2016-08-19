import 'module/common'

window.app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue',
    newTodo: '',
    todos: [
      {text: 'Learn JavaScript'},
      {text: 'Learn Vue'},
      {text: 'Build something awesome'}
    ]
  },
  methods: {
    reverseMessage () {
      this.message = this.message.split('').reverse().join('')
    },
    addTodo () {
      const todo = this.newTodo.trim()
      if (todo) {
        this.todos.push({text: todo})
        this.newTodo = ''
      }
    },
    removeTodo (index) {
      this.todos.splice(index, 1)
    }
  }
})
