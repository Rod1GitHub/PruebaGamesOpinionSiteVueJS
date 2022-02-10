<template>
  <div id="app">
    <NavBar />
    <TodoEnUno />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import TodoEnUno from "./components/TodoEnUno.vue";

export default {
  name: "MainApp",
  components: {
    NavBar,
    TodoEnUno,
  },
};
</script>

<style></style>
