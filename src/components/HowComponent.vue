<template>
  <div class="container-xl page-wrap overflow-hidden p-3 mb-2 text-center">

    <div class="card">
    <div class="card-img-top">
    <img :src= "imageHiring" class="card-img" alt="Hiring pic">
  </div>
</div>
  <span class="p-3">
    <hr class="rounded bg-success">
  </span>
    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid">
        <h1 class="display-5 fw-bold">Create a free account</h1>
        <p>You can create your free account directly from our Home page or Register page. After you're successfully registered, you can login and use our services.
        For more information about our services, you can make a quick check on Services page. We offer three different options on the job platform.
        There is a space for professionals looking for a job and recruiters and companies looking for the right candidates.</p>
        <button class="btn btn-outline-secondary btn-lg" type="button">Back to Home</button>
      </div>
    </div>
    <div class="p-4 p-md-5 mb-4 d-flex bg-transparent">
    <div class="col">
      <img class="card-img" :src="imageCompass" alt="Compass pic">
    </div>
  </div>
    <div class="row align-items-md-stretch g-3">
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-success rounded-3 shadow p-3 mb-5 rounded">
          <h2>Apply for a job</h2>
          <p>After you created your jobseeker profile, you can easily upload your CV in your profile or just apply directly.
          Choosing to upload first your CV can bring you some benefits in future, because you can directly reuse your CV document in the job application process.
          If you want to apply directly after you read the job offer, there is a way to do it clicking on the button "Apply" under the advertisement.</p>
          <button class="btn btn-outline-light" type="button">Job offers</button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3 shadow p-3 mb-5 rounded">
          <h2>Post a job</h2>
          <p>If you're a professional recruiter or your company needs help in the application process, you can post a job after creating your profile.
          The "Post a job" option is visible as a button on our Home page. Making this, the jobseekers can see your offer in our job pool and apply for it. If
          you have some questions or doubts how to do it, please contact us for more information and help.</p>
          <button class="btn btn-outline-secondary" type="button">Contact us</button>
        </div>
      </div>
    </div>
  <div class="pt-2">
    <hr class="rounded bg-success">
  </div>
  </div>
  <Footer />
</template>

<script>
import HiringImg from "@/assets/img/hiring.jpg";
import CompassImg from "@/assets/img/compass.jpg";

export default {
  name: "howItWorks",
  data: function () {
    return {
        imageHiring: HiringImg,
        imageCompass: CompassImg
        }
    }
};
</script>