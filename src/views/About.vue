<template>
  <div class="about">
    <h1>This is an about page</h1>
        <CustomComponent msg="Testing" />

  </div>
</template>

<script>
// @ is an alias to /src
import CustomComponent from "@/components/CustomComponent.vue";

export default {
  name: "About",
  components: {
    CustomComponent,
  },
};
</script>
