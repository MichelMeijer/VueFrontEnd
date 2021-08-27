<template>
  <transition name="modal-fade">

        <div class="modal-backdrop" id="formModal" tabindex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header bg-light">
              <h2 class="modal-title h3 text-center" id="formModalLabel">Contact us</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" @click="close" aria-label="Close modal"> X </button>
            </div>
            <div class="modal-body">
            <form class="row justify-content-center" id="contactForm" @submit.prevent="submit">
             <div class="col-md-10 mb-3 text-center">
              <label for="name" class="form-label h4">Name</label>
              <input type="name" class="form-control py-3" placeholder="Your name" name="name"/>
              <span v-if="v$.name.$error">{{ v$.name.$errors[0].$message }}</span>
            </div>
            <div class="col-md-10 mb-3 needs-validation novalidate text-center">
              <label for="emailAddress" class="form-label h4">Email</label>
              <input type="email" class="form-control py-3" id="emailAddress" v-model="state.email" placeholder="name@email.com" autocomplete=email name="email">
              <span v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
            </div>
            <div id="formMessage" class="text-center mb-3">
            </div>
            <div class="col-md-10 mb-3 text-center">
              <label for="message" class="form-label h4">Message</label>
              <textarea v-model="message" class="message" placeholder="Write your message here" name="textarea"></textarea>
            </div>
            <div class="text-center mt-3 pt-3"><span v-if="errorMessage" class="error">{{ errorMessage }}</span></div>
            <div id="formMessage2" class="text-center mb-3">
            </div>
          
            <div class="modal-footer">
            <div class="form-group row bg-light">
            <div class="col-12 text-center pt-3">
              <button type="submit" class="btn btn-success px-4 h5 font-weight-bold" id="sendButton" @click="submit">Send</button>
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
import useValidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { reactive, computed } from 'vue';

  export default {
    data() {
      return {
        formName: 'FormModal',
        name: "",
        email: "",
        message: "",
        errorMessage: ""
      }
    },
    setup() {
        const state = reactive ({
            name: "",
            email: "",
            message: "",
        })

        const rules = computed(() => {
          return {
            name: { required },
            email: { required, email },
            message: { required },
          }
          })
          const v$ = useValidate(rules, state)

          return {
            state, 
            v$
          }
  },
    methods: {
      close: function() {
        document.getElementById("formModal").style.display = "none";
        // this.$emit("close")
      },
     
      validateForm() {
        this.v$.$validate()
      },
       submit() {
        if (this.name !== "" || this.email !== "" || this.message !== ""){
          this.errorMessage = "";
          document.getElementById("formModal").style.display = "none";
          //to send the form to the company's email
        } else {
          this.errorMessage = "All fields are required!";
        }
        if (!this.v$.$error) {
         return;
        } 
      
    //   if (!localStorage.getItem("messages")) {
    //     localStorage.setItem("messages", JSON.stringify([]));
    //   }
    //   const messages = JSON.parse(localStorage.getItem("messages"));
    //   const { name, email, message } = this;
    //   messages.push({
    //     name,
    //     email,
    //     message,
    //   });
    //   localStorage.setItem("messages", JSON.stringify(messages));
      },
   }
}
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
    background: #FFFFFF;
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
    transition: opacity .5s ease;
  }
  .message {
    width: 100%;
    height: 100%;
    font-size: 18px;
  }
  .error {
    color: #b41212;
    font-size: 16px;
  }
</style>