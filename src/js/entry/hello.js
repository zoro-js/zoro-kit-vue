import 'module/common'

window.vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue',
    firstname: 'Yingya',
    lastname: 'Zhang',
    newTodo: '',
    todos: [
      {text: 'Learn JavaScript'},
      {text: 'Learn Vue'},
      {text: 'Build something awesome'}
    ]
  },
  computed: {
    reversedMessage () {
      return this.message.split('').reverse().join('')
    },
    fullname: {
      get () {
        return this.firstname + ' ' + this.lastname
      },
      set (name) {
        const names = name.split(' ')
        this.firstname = names[0]
        this.lastname = names[1]
      }
    }
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
