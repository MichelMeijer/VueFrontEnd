<template>
    <div class="container pt-5 text-center">
        <h2 class="1">Search by</h2>
        
        <ul class="nav nav-tabs justify-content-center p-4" role="tablist">

          <DropdownSearch title="CITY" :items="cities" />

          <DropdownSearch title="SECTOR" :items="sectors" />
            
            <form class="d-flex h5 fw-bolder">
            <input class="form-control mx-2 h5" id="keyword" type="search" placeholder="Keyword" aria-label="Search by keyword">
            <button class="btn btn-outline-success h5" type="submit" id="search" onsubmit="keywordSearch()">Search</button>
          </form>
        </ul>
      </div>
</template>

<script>
import DropdownSearch from "./DropdownSearch.vue";

export default {
  name: "search",
    components: {
    DropdownSearch
  },
  data() {
    return {
      isActive: false,
      show: true,
      cities: [
      {
        title: "Amsterdam",
        link: "#"
      },
      {
        title: "Berlin",
        link: "#"
      },
      {
        title: "Prague",
        link: "#"
      },
      {
        title: "All",
        link: "#"
      }
    ],
    sectors: [
      {
        title: "Customer service",
        link: "#"
      },
      {
        title: "IT",
        link: "#"
      },
      {
        title: "Management",
        link: "#"
      },
      {
        title: "Finance",
        link: "#"
      },
      {
        title: "Sales",
        link: "#"
      },
      {
        title: "Design&Marketing",
        link: "#"
      },
      {
        title: "Recruitment",
        link: "#"
      },
      {
        title: "Science",
        link: "#"
      },
      {
        title: "Hospitality",
        link: "#"
      },
      {
        title: "Internship",
        link: "#"
      },
      {
        title: "Other",
        link: "#"
      },
      {
        title: "All",
        link: "#"
      }
    ]
    }
  }
}
</script>