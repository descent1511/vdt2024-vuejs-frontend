<template>
  <div class="app-container">
    <aside class="sidebar" :class="{ open: isSidebarOpen }"></aside>
    <main class="main-content">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div class="input-group" style="max-width: 300px">
            <span class="input-group-text bg-white"><i class="bi bi-search"></i></span>
            <input
              type="text"
              class="form-control"
              placeholder="Search here..."
              v-model="searchQuery"
            />
          </div>
          <button class="btn btn-delete-student" @click="deleteSelectedStudents">Delete</button>
          <button class="btn btn-new-student" @click="openModal">+ New Student</button>
        </div>
        <div class="table-container">
          <StudentTable @update:selectedStudents="updateSelectedStudents" :search-query="searchQuery"/>
        </div>
      </div>
    </main>

    <NewStudentModal :show="isModalOpen" @update:show="isModalOpen = false" />
  </div>
</template>

<script>
import StudentTable from "../components/StudentTable.vue";
import NewStudentModal from "../components/NewStudentModal.vue";
import { deleteUser } from "../api/userService";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default {
  components: {
    StudentTable,
    NewStudentModal,
  },
  data() {
    return {
      isSidebarOpen: false,
      isModalOpen: false,
      searchQuery: "",
      selectedStudents: [],
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    openModal() {
      this.isModalOpen = true;
    },
    updateSelectedStudents(selectedStudents) {
      this.selectedStudents = selectedStudents;
    },
    async deleteSelectedStudents() {
      if (this.selectedStudents.length === 0) {
        alert("Please select at least one student to delete.");
        return;
      }

      try {
        for (const userId of this.selectedStudents) {
          try {
            const response = await deleteUser(userId);
            console.log(`User ${userId} deleted successfully:`, response);
          } catch (error) {
            console.error(`Failed to delete user ${userId}:`, error);
          }
        }
        this.selectedStudents = [];
        window.location.reload();
      } catch (error) {
        console.error("Error deleting users:", error);
      }
    },
  },
};
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

.btn-delete-student {
  background-color: #6f42c1;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
}

.btn-delete-student:hover {
  background-color: #5a3797;
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
