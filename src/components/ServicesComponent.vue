<template>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="display-4 fw-normal">Top Jobs Europe</h1>
          <p class="lead fw-normal">Connects you or your company to the right person on the right moment.</p>
          <a class="btn btn-outline-secondary btn-lg" type="button" href="/how">How it works</a>
        </div>
        <img :src="imageHands" class="img-fluid" alt="Connecting puzzel hands">
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    
      <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3 justify-content-center">
        <div class="bg-success mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5">Use our platform</h2>
            <p class="lead">You can use our platform to post jobs and to connect with applicants.</p>
          </div>
          <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
        </div>
        <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 p-3 text-dark">
            <h2 class="display-5">Recruitment help</h2>
            <p class="lead">We can help you for the recruitment process.</p>
          </div>
          <div class="bg-secondary shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
        </div>
      </div>
      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <img :src= "imagePuzzel" class="img-fluid" alt="Connecting puzzel">
      <img :src= "imageConnect" class="img-fluid" alt="Connecting people"></div>
      <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 justify-content-center">
        <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 p-3 text-dark">
            <h2 class="display-5">Review your CV</h2>
            <p class="lead">Connect with recruiters and ask for professional CV review.</p>
          </div>
          <div class="bg-secondary shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
        </div>
        <div class="bg-warning mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div class="my-3 py-3">
            <h2 class="display-5">Find a job</h2>
            <p class="lead">Browse through our job results and apply.</p>
          </div>
          <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
        </div>
    </div>
</template>

<script>
import HandsImg from "@/assets/img/hands.jpg";
import PuzzelImg from "@/assets/img/puzzle-2.jpg";
import ConnectImg from "@/assets/img/connect.jpg";

export default {
  name: "Services",
  data: function () {
    return {
        imageHands: HandsImg,
        imagePuzzel: PuzzelImg,
        imageConnect: ConnectImg
        }
    }
};
</script>