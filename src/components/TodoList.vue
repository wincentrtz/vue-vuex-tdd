<template>
  <div>
    <Todo v-for="todo in todos" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script>
import Todo from "./Todo";
export default {
  components: { Todo },
  data() {
    return {
      todos: [{ id: 1 }, { id: 2 }, { id: 3 }]
    };
  }
};
</script>
