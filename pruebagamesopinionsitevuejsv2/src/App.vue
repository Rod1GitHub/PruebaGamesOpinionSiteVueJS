<template>
  <div id="app">
    <NavBar />
    <RodriComponent />
    <ElProfe />
    <!--     <InteractArrayList /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
/* import InteractArrayList from "./components/InteractArrayList.vue"; */
import RodriComponent from "./components/RodriComponent.vue";
import ElProfe from "./components/ElProfe.vue";

export default {
  name: "MainApp",
  components: {
    NavBar,
    /* InteractArrayList, */
    RodriComponent,
    ElProfe,
  },
};
</script>

<style></style>
