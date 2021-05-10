<template>
  <div class="login">
    <LogModal />
  </div>
</template>

<script>
import LogModal from '@/components/LogForm.vue';

export default {
  name: "login",
  components: {
  LogModal
  }
}
</script>