<template>
<hr class="rounded">
    <div class="row">
        <div class="col-lg">
          <div class="container-sm m-3 pt-3 text-center">
          <h1 class="h3">Find and hire</h1>
          <h2 class="lead text-muted p-2">if you want to find and hire a professional</h2>
          <button type="button mx-2" class="btn btn-success">POST A JOB</button>
        </div>
          </div>
        <div class="col-lg">
          <div class="container-sm m-3 pt-3 text-center">
          <h1 class="h3">Use our services</h1>
          <h2 class="lead text-muted p-2">let us find the perfect candidates for you</h2>
          <a href="/services"><button type="button mx-2" class="btn btn-success">SERVICES</button></a>
        </div>
          </div>
        <div class="col-lg">
          <div class="container-sm m-3 pt-3 text-center">
            <h1 class="h3">Seek and be hired</h1>
            <h2 class="lead text-muted p-2">if you're looking for a new challenge</h2>
            <!-- Button trigger modal -->
            <button role="button" aria-label="Register button" id="recruiter" @click="showModal" class="btn btn-success h5" data-bs-toggle="modal" data-bs-target="#myModal">REGISTER</button>
          <Register v-show="isModalVisible" @close="closeModal" />
          </div>
        </div>
    </div>
    <hr class="rounded">
  <div class="container">
      <img :src="imageHeader" class="img-fluid" alt="Header image">
  </div>
  <SearchMenu />
</template>

<script>
import HeaderImg from "@/assets/img/headerPic.jpg";
import SearchMenu from "./TheSearchMenu.vue";
import Register from "@/components/RegForm.vue";

export default {
  name: 'home',
  data: function () {
    return {
        imageHeader: HeaderImg,
        isModalVisible: false,
  }
  },
  components: {
      SearchMenu,
      Register
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
    },
}
</script>

<style>
   @media (min-width: 1200px) and (max-width: 1400px) {
  .container-sm {
   background-color: #fff;
   padding-bottom: 1rem;
   border: 0.5rem;
   -webkit-box-shadow: 0.5rem 0.5rem 0.5rem #a3a4a5;
   -moz-box-shadow: 0.5rem 0.5rem 0.5rem #a3a4a5;
   box-shadow: 0.5rem 0.5rem 0.5rem #a3a4a5;
   height: 22rem;
  }
}
 @media (min-width: 1400px) {
  .container-sm {
    background-color: #fff;
    padding-bottom: 1rem;
    border: 0.5rem;
    -webkit-box-shadow: 0.5rem 0.5rem 0.5rem #a3a4a5;
    -moz-box-shadow: 0.5rem 0.5rem 0.5rem #a3a4a5;
    box-shadow: 0.5rem 0.5rem 0.5rem #a3a4a5;
    height: 18rem;
  }
}
</style>
