<template>
  <div class="info">
    <h1>Info page</h1>
        <CustomComponent msg="Testing2" />

  </div>
</template>

<script>
// @ is an alias to /src
import CustomComponent from "@/components/CustomComponent.vue";

export default {
  name: "Info",
  components: {
    CustomComponent,
  },
};
</script>
