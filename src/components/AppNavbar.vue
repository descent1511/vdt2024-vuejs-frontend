<template>
  <nav :class="['navbar navbar-expand-lg navbar-custom fixed-top', { 'main-expanded': isSidebarOpen }]">
    <div class="container-fluid">
      <button class="openbtn" @click="toggleSidebar">
        <i class="bi bi-list" id="menuIcon"></i>
      </button>
      <a class="navbar-brand ms-3" href="/">Logo</a>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Thông báo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
          </li>
          <li class="nav-item">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ThemeToggle from './ThemeToggle.vue'
export default {
  name: 'AppNavbar',
  components: {
    ThemeToggle
  },
  props: {
    isSidebarOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar');
    }
  }
}
</script>

<style scoped>
.navbar-custom {
  background-color: #ffffff;
  transition: background-color 0.3s, margin-left 0.3s;
  padding-left: 15px;
  padding-right: 15px;
}
.navbar-custom .navbar-brand, 
.navbar-custom .nav-link, 
.navbar-custom .form-control,
.navbar-custom .btn {
  color: #000000;
}
.navbar-custom .nav-link:hover {
  color: #343a40;
}
.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #ffffff;
  color: #000000;
  border: none;
  padding: 5px 10px;
  transition: background-color 0.3s, color 0.3s;
}
.dark-mode .navbar-custom {
  background-color: #333333;
}
.dark-mode .navbar-custom .navbar-brand, 
.dark-mode .navbar-custom .nav-link, 
.dark-mode .navbar-custom .form-control,
.dark-mode .navbar-custom .btn {
  color: #e0e0e0;
}
.dark-mode .navbar-custom .nav-link:hover {
  color: #ffffff;
}
.dark-mode .openbtn {
  background-color: #333333;
  color: #e0e0e0;
}
.navbar-custom.main-expanded {
  margin-left: 250px;
  transition: margin-left 0.3s;
}
</style>
