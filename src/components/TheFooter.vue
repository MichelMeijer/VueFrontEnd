<template>
<footer class="jumbotron text-center page-footer bg-light">
  <div class="row justify-content-around">
    <div class="col-md h5">
      <div class="p-2"><a href="/about" class="text-dark text-decoration-none">About</a></div>
      <div class="p-2">Blog</div>
      <div class="p-2"><a href="/terms" class="text-dark text-decoration-none">Terms &amp; Conditions</a></div>
    </div>
    <div class="col sm-auto">
        <ul class="bd-footer-links inline-flex px-0">
          <li class="d-inline p-3 h5">Contact us</li>
          <div class="col-sm p-2 h4">
          <a href="#" class="text-success text-decoration-none" @click="showForm"><i class="fa fa-envelope fa-lg text-success py-2" aria-hidden="true"></i> | </a>
          
          <FormModal v-show="isModalVisible" @close="closeForm" />

          
          <a href="#" class="text-success text-decoration-none"><i class="fa fa-twitter-square fa-lg text-success py-2" aria-hidden="true"></i> | </a>
          <a href="#" class="text-success text-decoration-none"><i class="fa fa-facebook-square fa-lg text-success py-2" aria-hidden="true"></i> | </a>
          <a href="#" class="text-success text-decoration-none"><i class="fa fa-instagram fa-lg text-success py-2" aria-hidden="true"></i> | </a>
          <a href="#" class="text-success text-decoration-none"><i class="fa fa-linkedin-square fa-lg text-success py-2" aria-hidden="true"></i></a>
          </div>
        </ul>
    </div>
  </div>
  <div class="row">
    <div class="col-sm pt-5 h5">
  <span class="text-dark">Copyright &copy; TJE 2017-2021</span>
    </div>
  </div>
</footer>
</template>

<script>
import FormModal from "./ContactForm.vue";

export default{
  components: {
    FormModal
  },

  data() {
    return {
       name: 'FormModal',
       isModalVisible: false,
    }
  },
  methods:{
    showForm() {
      this.isModalVisible = true;
    },
    closeForm() {
      this.isModalVisible = false;
    }
  },
}
</script>

<style scoped>
  #footer.jumbotron {
    display: flex;
    color: #fff;
    font-weight: 500;
    min-width: 100%;
    border-bottom: 0;
    padding-bottom: 0;
  }
  .col-md, .text-success {
    letter-spacing: 0.05rem;
  }
  @media (min-width: 992px) {
    .page-footer, .bd-footer-links {
      flex-shrink: 0;
      margin-bottom: 0;
      font-size: 1rem;
    }
  }
</style>