<template>
<div class="card text container-fluid d-flex
        align-items-center
        justify-content-center
        text-center border-white">
  <img class="img-fluid w-100" src="../assets/img/electrical-line.jpg" alt="Birds on electrical line">
  <div class="card-img-overlay">
  <h2 class="card-text">Find your right place on the right moment</h2>
</div>
</div>
<div class="container-fluid pt-2">
<div class="row text-center text-white bg-dark rounded-circle h-100">
        <div class="col-md-12">
          <h1 class="mb-3 p-2 m-3">About Us</h1>
          <p class="short-text p-2 mx-3 pb-5">
            We want to provide the possibility to the people to find their dream job. 
            Our mission is to connect them with the hiring company or with recruiters.
            On the other hand, we provide a platform for the people who are looking for the perfect candidate.
            In both situatons, TopJobsEurope is here to help, because we know how difficult is to find what you're looking for on the job market.
          </p>
          
        </div>
      </div>
      <div class="card container-fluid d-flex
        align-items-center
        justify-content-center
        text-center py-5 border-white">
  <img class="img-fluid w-100 h-80 opacity-50" src="../assets/img/seagull.jpg" alt="Seagull flying">
  <div class="card-img-overlay">
  <h2 class="card-text">We can't wait to work with you because you will love to work with us.</h2>
</div>
</div>
</div>
  <div class="container-fluid pt-2">
<div class="row text-center text bg-light">
        <div class="col-md-12">
          <h1 class="mb-3 pt-2">Shortly about the services</h1>
          <p>
            We offer jobs in Amsterdam, Berlin and Prague. You can find some of the newest open positions on the market in different sectors.
          </p>
          <hr class="text-success">
          <p>
            We provide you an opportunity to create an online applicant profile for free. There is no monthly fee or a commission to be paid.
          </p>
          <hr class="text-success">
          <p>
          Our platform is a place where recruiters can post jobs and search profiles of applicants.
          </p>
          <hr class="text-success">
          <p>
          We would like to stay in touch with you, so in case of questions or suggestions, please contact us.
          </p>
          <hr class="text-success">
          <div class="container-md px-2">
          <h4 class="mb-3 pt-2">For more information</h4>
          <div class="row d-flex justify-content-center">
            <div class="col-md-6 p-2 d-flex justify-content-evenly">
                <a class="btn btn-outline-success" type="button" href="/services">Services page</a>
                <a class="btn btn-outline-success" type="button" href="/how">How page</a>
            </div>
            <h4 class="mb-3 pt-2">If you want to register or login</h4>
          <div class="row d-flex justify-content-center">
            <div class="col-md-6 p-2 d-flex justify-content-evenly">
                <a class="btn btn-outline-success" type="button" href="/register">Register</a>
                <a class="btn btn-outline-success" type="button" href="/login">Login</a>
            </div>
           <h4 class="mb-3 pt-2">Back to Home page</h4>
          <div class="row d-flex justify-content-center">
            <div class="col-md-12 p-2">
                <a class="btn btn-outline-success" type="button" href="/">Go back to home page</a>
            </div>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
</div>
</template>

<style scoped>
@media (min-width: 320px) and (max-width: 800px){
  .card.text- {
  height: 40rem;
}
.img-fluid {
    opacity: 0.6;
    width: 100%;
    height: 40rem;
}
}
@media (min-width: 1200px) {
.card.text {
  height: 70rem;
}
.img-fluid {
    opacity: 0.5;
    width: 100%;
    height: 60rem;
}
.card-text {
  font-size: 40px;
}
.mb-3 {
  font-size: 40px;
}
p, a{
 font-size: 25px;
}
}

  .card-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<script>
export default {
  name: "AboutPage",
};
</script>
