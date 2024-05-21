<template>
  <button class="btn btn-link nav-link" @click="toggleTheme">
    <i :class="iconClass" id="themeIcon"></i>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false
    }
  },
  computed: {
    iconClass() {
      return this.isDarkMode ? 'bi bi-moon' : 'bi bi-sun'
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode
      document.body.classList.toggle('dark-mode')
      localStorage.setItem('isDarkMode', this.isDarkMode)
    },
    loadTheme() {
      const savedTheme = localStorage.getItem('isDarkMode')
      if (savedTheme) {
        this.isDarkMode = JSON.parse(savedTheme)
        if (this.isDarkMode) {
          document.body.classList.add('dark-mode')
        }
      }
    }
  },
  mounted() {
    this.loadTheme()
  }
}
</script>

<style scoped>
.dark-mode .btn-new-student {
    background-color: #4b299e;
}
.dark-mode .btn-new-student:hover {
    background-color: #3e237d;
}
</style>
