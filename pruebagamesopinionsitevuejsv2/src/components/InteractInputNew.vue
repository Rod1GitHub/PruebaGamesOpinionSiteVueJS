<template>
  <div class="new-input">
    <input
      type="text"
      id="new-person-opinion"
      placeholder="Tu nombre aquí"
      v-model="newPersonOpinionInput"
      v-on:keydown.enter="addOpinion(newPersonOpinionInput)"
    />
    <input
      type="text"
      id="new-opinion"
      placeholder="Tu opinion debe ir aquí"
      v-model="newOpinionInput"
      v-on:keydown.enter="addOpinion(newOpinionInput)"
    />
    <button class="add-new-btn" @click="addOpinion(newOpinionInput)">
      Guardar
    </button>
  </div>
</template>

<script>
export default {
  name: "InteractInputNew",
  /* data() {
    return {
      newPersonOpinionInput: "",
      newOpinionInput: "",
    };
  },
  methods: {
    addOpinion(newOpinion) {
      this.$store.commit("addOpinion", newOpinion);
      this.newPersonOpinionInput = "";
      this.newOpinionInput = "";
    },
  }, */
};
</script>

<style></style>
