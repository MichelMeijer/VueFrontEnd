<template>
<div class="container">
    <div class="row cols-1 row-cols-lg-3 py-3 my-5 gy-3 align-items-center">
      <!-- register-recruiter -->
       <div class="col-lg order-1">
    <div class="card shadow p-3 mb-5 text-center border-4">
     <div class="container mt-2 p-2">
     <div class="card-title bg-transparent lead h3">For recruiters</div>
     <img :src="imageRecruiters" class="card-img" id="recImg" alt="Recruiter's picture">
        <div class="card-body bg-light">
          <p class="card-text p-4 bg-light">Register and post jobs to find the perfect candidates</p>
        </div>
          <div class="card-footer mx-auto bg-transparent">
          <!-- Button trigger modal -->
            <button role="button" aria-label="Register button" id="recruiter" @click="showModal" class="btn btn-outline-success h5" data-bs-toggle="modal" data-bs-target="#myModal">REGISTER</button>
          <Register v-show="isModalVisible" @close="closeModal" />
          </div>
     </div>
    </div>
    </div>

      <!-- register-service -->
      <div class="col-lg order-2">
      <div class="card shadow p-3 mb-5 text-center border-4">
      <div class="container mt-2 p-2">
      <div class="card-title bg-transparent lead h3">For recruitment services</div>
      <img :src="imageServices" class="card-img-top" id="recServImg" alt="Services picture">
        <div class="card-body bg-light">
          <p class="card-text p-4 bg-light">Register and let us find the perfect candidates for your company</p>
      </div>
          <div class="card-footer mx-auto bg-transparent">
          <!-- Button trigger modal -->
            <button role="button" aria-label="Register button" id="recruiter" @click="showModal" class="btn btn-outline-success h5" data-bs-toggle="modal" data-bs-target="#myModal">REGISTER</button>
          <Register v-show="isModalVisible" @close="closeModal" />
          </div>
        </div>
      </div>
    </div>

      <!-- register-jobseeker -->
      <div class="col-lg order-3">
      <div class="card shadow p-3 mb-5 text-center border-4">
      <div class="container mt-2 p-2">
      <div class="card-title bg-transparent lead h3">For jobseekers</div>
        <img :src="imageJobSearch" class="card-img-top" id="jobSearchImg" alt="Job search picture">
        <div class="card-body bg-light">
          <p class="card-text p-4 bg-light">Register and find a job in our job database or upload your CV and wait for the recruiters to contact you</p>
          </div>
          <div class="card-footer mx-auto bg-transparent">
          <!-- Button trigger modal -->
            <button role="button" aria-label="Register button" id="recruiter" @click="showModal" class="btn btn-outline-success h5" data-bs-toggle="modal" data-bs-target="#myModal">SIGN UP</button>
          <Register v-show="isModalVisible" @close="closeModal" />
          </div>
        </div>
      </div>
    </div>

      <div id="accountType" hidden></div>
    </div>
  </div>
</template>

<script>
import RecImg from "@/assets/img/recphoto.jpg";
import ServicesImg from "@/assets/img/services.jpg";
import JobSearchImg from "@/assets/img/jobsearch.jpg";
import Register from '@/components/RegForm.vue';

export default {
  name: "register",
  components: {
      Register,
    },
  data: function () {
    return {
        imageRecruiters: RecImg,
        imageServices: ServicesImg,
        imageJobSearch: JobSearchImg,
        isModalVisible: false,
        }
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
};
</script>