<template>
      <div class="menu-item drop_down_search dropdown py-1" @click="isOpen = !isOpen">
        <a class="link dropdown-toggle h5 text-dark fw-bolder px-5" href="javascript:void(0)" id="DropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ title }}
        </a>
        <transition name="fade" appear>
          <div class="sub-menu bg-white p-3 h5" v-if="isOpen">
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
  border: 1px solid #000;
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
    transform: translateX(100vw);
  }

div.menu-item {
  padding: 10px 0 10px 0;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}
div.menu-item.active,
div.menu-item:hover {
  border-bottom-color: #000;
}
div.menu-item a {
  color: #000;
  text-decoration: none;
}

</style>