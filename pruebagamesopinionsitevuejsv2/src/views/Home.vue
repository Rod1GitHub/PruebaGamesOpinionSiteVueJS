<template>
  <div class="home">
    <CardGamesList />
  </div>
</template>

<script>
import CardGamesList from "@/components/CardGamesList.vue";

export default {
  components: {
    name: "Home",
    CardGamesList,
  },
};
</script>
