<template>
    <div class="container pt-5 text-center">
        <h2 class="1">Search by</h2>
        
        <ul class="nav nav-tabs justify-content-center p-4" role="tablist">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle h5 fw-bold" role="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
              CITY
            </a>
            <ul class="dropdown-menu h5 p-3 fw-bolder" id="drpItem" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" id="drpItem1" href="#">Amsterdam</a></li>
              <li><a class="dropdown-item" id="drpItem2" href="#">Berlin</a></li>
              <li><a class="dropdown-item" id="drpItem3" href="#">Prague</a></li>
              <li><a class="dropdown-item" id="drpItem4" href="/index.html">All</a></li>
            </ul>
        </li>
           
          <li class="nav-item dropdown border-bottom-10">
            <a class="nav-link dropdown-toggle h5 fw-bold" role="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
              SECTOR
            </a>
            <ul class="dropdown-menu h5 p-3 fw-bolder" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#">Customer service</a></li>
              <li><a class="dropdown-item" href="#">IT</a></li>
              <li><a class="dropdown-item" href="#">Management</a></li>
              <li><a class="dropdown-item" href="#">Finance</a></li>
              <li><a class="dropdown-item" href="#">Sales</a></li>
              <li><a class="dropdown-item" href="#">Design&Marketing</a></li>
              <li><a class="dropdown-item" href="#">Recruitment</a></li>
              <li><a class="dropdown-item" href="#">Science</a></li>
              <li><a class="dropdown-item" href="#">Hospitality</a></li>
              <li><a class="dropdown-item" href="#">Internship</a></li>
              <li><a class="dropdown-item" href="#">Other</a></li>
              <li><a class="dropdown-item" href="#">All</a></li>
            </ul>
          </li>
            <li>
            <form class="d-flex h5 fw-bolder">
            <input class="form-control mx-2 h5" id="keyword" type="search" placeholder="Keyword" aria-label="Search by keyword">
            <button class="btn btn-outline-success h5" type="submit" id="search" onsubmit="keywordSearch()">Search</button>
          </form>
          </li>
        </ul>
      </div>
</template>

<script>
export default {
  name: "search"
}
</script>

<style scoped>
.nav-link.dropdown-toggle::after, .dropdown-toggle::after  {
  color: #000;
}
</style>