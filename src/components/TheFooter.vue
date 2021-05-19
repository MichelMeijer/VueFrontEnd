<template>
<footer class="jumbotron text-center page-footer bg-light">
  <div class="row">
    <div class="col-sm">About</div>
    <div class="col-sm">Blog</div>
    <div class="col-sm">Terms</div>
    <div class="col sm-auto h6">
        <ul class="bd-footer-links inline-flex px-0">
          <li class="d-inline px-3">Contact us</li>
          <a href="#" class="text-success text-decoration-none"><i class="fa fa-envelope fa-lg text-success py-2" aria-hidden="true"></i> | </a>
          <a href="#" class="text-success text-decoration-none"><i class="fa fa-twitter-square fa-lg text-success py-2" aria-hidden="true"></i> | </a>
          <a href="#" class="text-success text-decoration-none"><i class="fa fa-facebook-square fa-lg text-success py-2" aria-hidden="true"></i> | </a>
          <a href="#" class="text-success text-decoration-none"><i class="fa fa-instagram fa-lg text-success py-2" aria-hidden="true"></i> | </a>
          <a href="#" class="text-success text-decoration-none"><i class="fa fa-linkedin-square fa-lg text-success py-2" aria-hidden="true"></i> | </a>
        </ul>
    </div>
  </div>
  <div class="row">
    <div class="col-sm pt-5">
  <span class="text-dark">Copyright &copy; TJE 2021</span>
    </div>
  </div>
</footer>
</template>

<style scoped>
  #footer.jumbotron {
    display: flex;
    color: #fff;
    font-weight: 500;
    min-width: 100%;
    border-bottom: 0;
    padding-bottom: 0;
  }
  @media (min-width: 992px) {
    .page-footer {
      flex-shrink: 0;
      margin-bottom: 0;
      min-width: 100vh;
    }
  }
</style>