<template>
  <div class="register">
    <RegisterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterComponent from "@/components/RegisterComponent.vue";

export default {
  name: "Register",
  components: {
    RegisterComponent,
  },
};
</script>

<style scoped>
.register {
  display: flex;
  z-index: 2;
  min-height: 65vh;
}
</style>