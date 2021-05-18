<template>
  <div>
    <input v-model="name" @blur="v$.name.$touch" />
    <template v-if="v$.name.$dirty">
      <div v-for="error of v$.name.$silentErrors" :key="error.$message">
        <div>{{ error.$message }}</div>
      </div>
    </template>
  </div>
  <div>
    <input v-model="contact.email" @blur="v$.contact.email.$touch" />
    <template v-if="v$.contact.email.$dirty">
      <div
        v-for="error of v$.contact.email.$silentErrors"
        :key="error.$message"
      >
        <div>{{ error.$message }}</div>
      </div>
    </template>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  name: "App",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      name: "",
      contact: {
        email: "",
      },
    };
  },
  validations() {
    return {
      name: { required },
      contact: {
        email: { required, email },
      },
    };
  },
};
</script>