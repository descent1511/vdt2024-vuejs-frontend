<template>
  <div id="app">
    <AppNavbar :isSidebarOpen="sidebarOpen" @toggle-sidebar="toggleSidebar" />
    <AppSidebar :isOpen="sidebarOpen" @close-nav="closeSidebar" />
    <div :class="['main-content', { 'main-expanded': sidebarOpen }]" id="main">
      <StudentList />
    </div>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import AppSidebar from './components/AppSidebar.vue'
import StudentList from './views/HomePage.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppSidebar,
    StudentList
  },
  data() {
    return {
      sidebarOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    closeSidebar() {
      this.sidebarOpen = false;
    }
  }
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "bootstrap-icons/font/bootstrap-icons.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f3f4ff;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s, color 0.3s;
}

#main {
  transition: margin-left 0.3s;
  padding: 16px;
  margin-left: 0;
  flex-grow: 1;
}

.main-expanded {
  margin-left: 250px;
}

.dark-mode {
  background-color: #121212;
  color: #e0e0e0;
}
</style>
