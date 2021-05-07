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
            <button type="button" id="jobseekerHome" class="btn btn-success" aria-label="Register button" data-bs-toggle="modal" data-bs-target="#myModal">REGISTER</button>
          </div>
          <!-- <form-sign-up></form-sign-up> --> 
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

export default {
  name: 'home',
  data: function () {
    return {
        imageHeader: HeaderImg
  }
  },
  components: {
      SearchMenu,
    }
}
</script>
