<script setup>
import { ref } from 'vue'

const todo = ref('')
const todos = ref([
  { id: 1, text: 'Learn JavaScript', status: 'new' },
  { id: 2, text: 'Learn Vue', status: 'in progress' },
  { id: 3, text: 'Build something awesome', status: 'done' }
])

function submitTodo() {
  todos.value.push({ id: todos.value.length + 1, text: todo.value })
  todo.value = ''
}
</script>

<template>
  <div>
    <h4>Todo Nuxh</h4>
    <small class="subtext">Todo App that is truly nuxt level</small>
    <article style="margin-top:2rem">
      <label for="todo">New Todo</label>
      <input v-model="todo" name="todo">
      <button @click="submitTodo">
        Submit
      </button>
    </article>
    <article>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <input v-model="todo.status" type="checkbox" name="todostatus">{{ todo.text }}
        </li>
      </ul>
    </article>
  </div>
</template>