<template>
  <div :class="['sidebar', { 'sidebar-open': isOpen }]">
    <a href="javascript:void(0)" @click="closeNav">Trang Chủ</a>
    <a href="javascript:void(0)" @click="closeNav">Danh sách học sinh</a>
    <a href="javascript:void(0)" @click="closeNav">Thêm học sinh</a>
    <a href="javascript:void(0)" @click="closeNav">Liên hệ</a>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeNav() {
      this.$emit('close-nav');
    }
  }
}
</script>

<style scoped>
.sidebar {
  height: 100vh;
  width: 250px;
  position: fixed;
  top: 0;
  left: -250px;
  background-color: #ffffff;
  overflow-x: hidden;
  transition: 0.3s;
  padding-top: 60px;
  z-index: 1000;
}
.sidebar-open {
  left: 0;
}
.sidebar a {
  padding: 10px 15px;
  text-decoration: none;
  font-size: 18px;
  color: #000000;
  display: block;
  transition: 0.3s;
}
.sidebar a:hover {
  color: #343a40;
}
.dark-mode .sidebar {
  background-color: #333333;
}
.dark-mode .sidebar a {
  color: #e0e0e0;
}
.dark-mode .sidebar a:hover {
  color: #ffffff;
}
</style>
