<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <img class="navbar-brand p-0" :src="logoImg" />
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" :class="{active: isActive}" @click="isActive = !isActive"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav h5" id="navbarHome">
          <li class="nav-item">
            <router-link class="nav-link home h5" id="home" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link home" id="how" to="/how">How it works</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link home" id="services" to="/services">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link home" id="login" to="#" type="button" aria-label="Login button">Login</router-link>
          </li><form-login></form-login>
          <li class="nav-item">
            <router-link class="nav-link home" id="register" to="/register">Register</router-link>
          </li>
          <!-- my profile dropdown -->
         <Dropdown title="My profile" :items="services" />
              <li class="nav-item">
            <button class="btn btn-outline-success" id="post" to="#">Post a job</button>
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

export default {
  name: "navbar",
  components: {
    Dropdown
  },
  data() {
    return {
      isActive: false,
      services: [
      {
        title: "Profile",
        link: "#"
      },
      {
        title: "Logout",
        link: "#"
      }
      ],
      logoImg: Logo
    }
  }
}
</script>