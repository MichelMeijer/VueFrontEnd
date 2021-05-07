<template>
  <div id="app" style="margin-bottom:0">
    <TheNavbar />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter";

export default {
  components: {
  TheNavbar,
  TheFooter
  }
}
</script>