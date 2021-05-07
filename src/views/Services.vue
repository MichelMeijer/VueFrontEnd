<template>
  <div class="info">
    <ServicesComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import ServicesComponent from "@/components/ServicesComponent.vue";

export default {
  name: "Info",
  components: {
    ServicesComponent,
  },
};
</script>
