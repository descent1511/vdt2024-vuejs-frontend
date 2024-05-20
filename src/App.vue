<template>
  <div id="app">
    <AppNavbar :isSidebarOpen="sidebarOpen" @toggle-sidebar="toggleSidebar" />
    <AppSidebar :isOpen="sidebarOpen" @close-nav="closeSidebar" />
    
   
    <router-view></router-view>
    
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppSidebar from './components/AppSidebar.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppSidebar,
  },
  data() {
    return {
      sidebarOpen: false
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    closeSidebar() {
      this.sidebarOpen = false;
    }
  }
};
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
  display: flex;
  flex-direction: column;
  height: 100vh;
}

body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;
  transition: background-color 0.3s, color 0.3s;
}

.main-content {
  background-color: #f3f4ff;
  transition: margin-left 0.3s;
  padding: 16px;
  margin-left: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px); 
  overflow-y: auto;
  margin-top: 60px; 
}

.main-expanded {
  margin-left: 250px;
}

.dark-mode {
  background-color: #121212;
  color: #e0e0e0;
}
</style>
