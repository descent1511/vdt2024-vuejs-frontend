<template>
  <div class="app-container">
    <aside class="sidebar" :class="{ 'open': isSidebarOpen }">
      <!-- Nội dung của sidebar -->
    </aside>
    <main class="main-content">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div class="input-group" style="max-width: 300px;">
            <span class="input-group-text bg-white"><i class="bi bi-search"></i></span>
            <input type="text" class="form-control" placeholder="Search here...">
          </div>
          <div class="btn-group">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Newest
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Oldest</a></li>
              <li><a class="dropdown-item" href="#">Newest</a></li>
            </ul>
          </div>
          <button class="btn btn-new-student">+ New Student</button>
        </div>
        <div class="table-container">
          <StudentTable />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import StudentTable from '../components/StudentTable.vue'

export default {
  components: {
    StudentTable
  },
  data() {
    return {
      isSidebarOpen: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
}
</script>

<style scoped>
.app-container {
  display: grid;
  grid-template-columns: auto 1fr;
  transition: all 0.3s;
}

.sidebar {
  width: 0;
  overflow: hidden;
  transition: width 0.3s;
}

.sidebar.open {
  width: 250px; 
}

.main-content {
  transition: margin-left 0.3s;
  padding: 20px;
}

.sidebar.open + .main-content {
  margin-left: 250px; 
}

.input-group .input-group-text {
  border-radius: 30px;
}

.input-group .form-control {
  border-radius: 30px;
}

.btn-new-student {
  background-color: #6f42c1;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
}

.btn-new-student:hover {
  background-color: #5a3797;
}

.dark-mode .btn-new-student {
  background-color: #4b299e;
}

.dark-mode .btn-new-student:hover {
  background-color: #3e237d;
}

.table-container {
  width: 100%;
}
</style>
