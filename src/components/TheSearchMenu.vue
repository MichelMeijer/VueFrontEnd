<template>
    <div class="container pt-5 text-center">
        <h2 class="1">Search by</h2>
        
        <ul class="nav nav-tabs justify-content-center p-4" role="tablist">

          <DropdownSearch title="CITY" :items="cities" @click="selectedCity"/>

          <DropdownSearch title="SECTOR" :items="sectors" @click="selectedSector"/>
            
            <form class="d-flex h5 fw-bolder">
            <input class="form-control mx-2 h5" id="keyword" type="search" v-model="keyword" placeholder="Keyword" aria-label="Search by keyword">
            <button class="btn btn-outline-success h5" type="submit" id="search" @click="keywordSearch">Search</button>
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
      keyword: "",
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
  },
  methods: {
    selectedCity(e) {
      // console.log({...this.cities});
      // console.log(JSON.stringify(this.cities));
      // let result = JSON.stringify(this.cities);
      // let options = JSON.parse(result);
      let selected = e.target;
      
      if (selected.textContent !== "CITY") {
        console.log(selected.textContent);
        //post it to extract the jobs
      }
    },
    selectedSector(e) {
      let selected = e.target;
      
      if (selected.textContent !== "SECTOR") {
        console.log(selected.textContent);
        //post it to extract the jobs
      }
    },
    keywordSearch(e) {
      e.preventDefault();
      let keyword = document.getElementById("keyword").value;
      console.log(keyword);
      //post it to extract the jobs
      this.keyword = "";
    }
  }
}
</script>