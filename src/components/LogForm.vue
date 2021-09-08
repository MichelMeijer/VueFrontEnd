<template>
  <transition name="modal-fade">
    <div
      class="modal-backdrop"
      id="logModal"
      tabindex="-1"
      aria-labelledby="logModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-light">
            <h2 class="modal-title h3 text-center" id="logModalLabel">
              Log in to your account
            </h2>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              @click="close"
              aria-label="Close modal"
            >
              X
            </button>
          </div>
          <div class="modal-body">
            <form
              class="row justify-content-center"
              id="logForm"
              @submit="validateForm"
            >
              <div
                class="col-md-10 mb-3 needs-validation novalidate text-center"
              >
                <label for="emailAddress" class="form-label h4">Email</label>
                <input
                  type="email"
                  class="form-control py-3"
                  id="emailAddress"
                  placeholder="name@email.com"
                  autocomplete="email"
                  name="email"
                  v-model="state.email"
                />
                <span id="errorMsg mt-2" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
              </div>
              <div id="formMessageLogin" class="text-center mb-3"></div>
              <div class="col-md-10 mb-3 text-center">
                <label for="password" class="form-label h4">Password</label>
                <input
                  type="password"
                  class="form-control py-3"
                  id="password"
                  placeholder="password"
                  autocomplete="password"
                  name="password"
                  v-model="state.password"
                />
                <span id="errorMsg mt-2" v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</span>
              </div>
              <div id="formMessage2Login" class="text-center mb-3"></div>
               <div class="text-center mt-3 pt-3"><span v-if="errorMessage" class="error">{{ errorMessage }}</span></div>

              <div class="modal-footer">
                <div class="form-group row bg-light">
                  <div class="col-12 text-center pt-3">
                    <label for="loginButton" class="form-label"
                      >If you don't have an account, please
                      <a
                        href="/register"
                        class="link text-dark font-weight-bold"
                        >register</a
                      >.</label
                    >
                  </div>
                  <div class="col-12 text-center pt-3">
                    <button
                      type="submit"
                      class="btn btn-success px-4 h5 font-weight-bold"
                      id="loginButton"
                      @click="validateForm"
                    >
                      Log in
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required, email } from '@vuelidate/validators';
import { reactive, computed } from 'vue';

export default {
  data() {
    return {
      name: "LogModal",
      email: "",
      password: "",
      errorMessage: ""
      }
  },
  setup() {
        const state = reactive ({
            password: "",
            email: "",
        })

        const rules = computed(() => {
          return {
            password: { required },
            email: { required, email },
          }
          })
          const v$ = useValidate(rules, state)

          return {
            state, 
            v$
          }
  },
  methods: {
    close() {
      document.getElementById("logModal").style.display = "none";
      // this.$emit("close")
      // location.reload()
    },
    validateForm(e) {
        this.v$.$validate()

        if (this.name !== "" || this.email !== ""){
          this.errorMessage = "";
          document.getElementById("logModal").style.display = "none";
          //to send the form to the company's email
        } else {
          this.errorMessage = "All fields are required!";
        }
        if (!this.v$.$error) {
         return;
        } else {
          e.preventDefault();
        }
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #329932;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #329932;
  background: transparent;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.error {
    color: #b41212;
    font-size: 16px;
  }
</style>
