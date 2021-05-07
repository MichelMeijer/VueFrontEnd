<template>
  <transition name="modal-fade">

        <div class="modal-backdrop" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header bg-light">
              <h2 class="modal-title h3 text-center" id="myModalLabel">Create your account</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" @click="close" aria-label="Close modal"> X </button>
            </div>
            <div class="modal-body">
            <form class="row justify-content-center" id="regForm">
            <div class="col-md-10 mb-3 needs-validation novalidate">
              <label for="emailAddress" class="form-label h4">Email</label>
              <input type="email" class="form-control py-3" id="emailAddress" placeholder="name@email.com" autocomplete=email name="email">
            </div>
            <div id="formMessage" class="text-center mb-3">
            </div>
            <div class="col-md-10 mb-3">
              <label for="newPassword" class="form-label h4">Password (8 or more characters)</label>
              <input type="password" class="form-control py-3" id="newPassword" placeholder="password" autocomplete=new-password name="password">
            </div>
            <div id="formMessage2" class="text-center mb-3">
            </div>
          
            <div class="modal-footer">
            <div class="form-group row bg-light">
            <div class="col-12 text-center pt-3">
              <label for="signUpButton" class="form-label">By clicking "Sign Up" now, you agree to our <a class="link text-dark font-weight-bold" href="#" aria-label="Privacy Policy link">Privacy Policy</a> and <a class="link text-dark font-weight-bold" href="#" aria-label="Cookie Policy link">Cookie Policy.</a></label>
            </div>
            <div class="col-12 text-center pt-3">
              <button type="submit" class="btn btn-success px-4 h3 font-weight-bold" id="signUpButton">Sign Up</button>
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
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
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
</style>