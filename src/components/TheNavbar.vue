<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" :class=" { 'navbarOpen': show }">
    <div class="container-fluid">
      <img class="navbar-brand p-0" :src="logoImg" />
      <button class="navbar-toggler" type="button" data-toggle="collapse" @click.stop="toggleNavbar()" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" :class="{active: isActive}" @click="isActive = !isActive"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarContent" :class="{ 'show': show }">
        <ul class="navbar-nav h5" id="navbarHome">
          <li class="nav-item">
            <router-link class="nav-link home h5" id="home" @click="toggleNavbar()" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link home" id="how" @click="toggleNavbar()" to="/how">How it works</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link home" id="services" @click="toggleNavbar()" to="/services">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link home" id="register" @click="toggleNavbar()" to="/register">Register</router-link>
          </li>
          <li class="nav-item">
            <a role="button" aria-label="Login button" @click="showModal" class="nav-link home" data-bs-toggle="modal" data-bs-target="#logModal">Login</a>
            <Login v-show="isModalVisible" @close="closeModal" />
          </li>
          <!-- my profile dropdown -->
          <Dropdown title="My profile" :items="services" />
              <li class="nav-item">
            <button class="btn btn-outline-success my-2 my-sm-0" id="post" to="#" @click="toggleNavbar()">Post a job</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a.router-link-exact-active {
    color: #fff;
    font-weight: bolder;
  }
.nav-item {
  padding: 10px 0 10px 0;
}
</style>

<script>
import Dropdown from "./TheDropdown.vue";
import Logo from "@/assets/logo.svg";
import Login from "@/views/Login.vue";

export default {
  name: "navbar",
  components: {
    Dropdown,
    Login
  },
  data() {
    return {
      isActive: false,
      show: true,
      isModalVisible: false,
      services: [
      {
        title: "Profile",
        link: "/login"
      },
      {
        title: "Logout",
        link: "#"
      }
      ],
      logoImg: Logo
    }
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>