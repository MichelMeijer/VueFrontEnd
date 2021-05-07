<template>
  <div class="howitworks">
    <HowComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HowComponent from "@/components/HowComponent.vue";

export default {
  name: "How",
  components: {
    HowComponent,
  },
};
</script>
