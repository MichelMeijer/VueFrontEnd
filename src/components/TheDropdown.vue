<template>
      <div class="menu-item nav_drop_down dropdown" @click="isOpen = !isOpen">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ title }}
        </a>
        <transition name="fade" appear>
          <div class="sub-menu bg-white p-4" v-if="isOpen">
            <div v-for="(item, i) in items" :key="i" class="menu-item">
              <a :href="item.link">{{ item.title }}</a>
            </div>
          </div>
        </transition>
      </div>
</template>

<script>
export default {
  name: "dropdown",
  props: ['title', 'items'],
  data () {
  return {
  isOpen: false
    }
  }
}
</script>

<style scoped>
.sub-menu {
  position: absolute;
  z-index: 1;
  width: max-content;
  border-radius: 0 0 5px 5px;
  border: 1px solid #4ca64c;
  left: 5px;
  top: calc(100% + 10px);
  letter-spacing: 0.02rem;
  }

.fade-enter-active,
.fade-leave-active {
    transition: all .5s ease-out;
  }

.fade-enter,
.fade-leave-to {
    opacity: 0;
    transfrom: translateX(100vw);
  }

nav .menu-item {
  padding: 10px 0 10px 0;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
  border-bottom-color: #4ca64c;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}

</style>