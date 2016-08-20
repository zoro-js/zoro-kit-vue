const tpl = `
  <div class="container-fluid m-a-1">
    <div>
      <p><input v-model="message"></p>
      <p>Original message: {{message}}</p>
      <p>Computed Reversed Message: {{reversedMessage}}</p>
      <p>
        <button type="button" class="btn btn-outline-primary" @click="reverseMessage">Reverse Message</button>
      </p>
    </div>
    <div class="m-t-1">
      <input v-model="firstname">
      <input v-model="lastname">
      <input v-model="fullname">
    </div>
    <div class="m-t-1">
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="newTodo">
      <ul>
        <li v-for="(todo, index) in todos">
          <span>{{todo.text}}</span>
          <button type="button" class="btn btn-outline-primary" @click="removeTodo(index)">X</button>
        </li>
      </ul>
    </div>
  </div>
`

window.vmHello = new Vue({
  template: tpl,
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
}).$mount('#hello')
