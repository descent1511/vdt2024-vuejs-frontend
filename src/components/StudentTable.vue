<template>
  <div class="table-container">
    <div class="table-header">
      <div>
        <input type="checkbox" @change="toggleSelectAll" :checked="isAllSelected">
      </div>
      <div>Name</div>
      <div>Gender</div>
      <div>University</div>
      <div>Region</div>
    </div>
    <StudentRow
      v-for="student in students"
      :key="student.id"
      :student="student"
      :checked="selectedStudents.includes(student.id)"
      @toggle="toggleStudent"
    />
  </div>
</template>

<script>
import StudentRow from './StudentRow.vue';
import { getAllUser, searchUserByName } from '../api/userService';

export default {
  components: {
    StudentRow
  },
  props: {
    searchQuery: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      students: [],
      selectedStudents: []
    };
  },
  computed: {
    isAllSelected() {
      return this.students.length > 0 && this.students.every(student => this.selectedStudents.includes(student.id));
    }
  },
  methods: {
    toggleSelectAll(event) {
      if (event.target.checked) {
        this.selectedStudents = this.students.map(student => student.id);
      } else {
        this.selectedStudents = [];
      }
      this.emitSelectedStudents();
    },
    toggleStudent(studentId) {
      const index = this.selectedStudents.indexOf(studentId);
      if (index > -1) {
        this.selectedStudents.splice(index, 1);
      } else {
        this.selectedStudents.push(studentId);
      }
      this.emitSelectedStudents();
    },
    emitSelectedStudents() {
      this.$emit('update:selectedStudents', this.selectedStudents);
    },
    async fetchUsers() {
      try {
        const response = await getAllUser();
        if (response.data.status === 'success') {
          this.students = response.data.data.map(user => ({
            id: user.id,
            name: user.fullName,
            gender: user.gender,
            university: user.university,
            region: user.region,
            imgSrc: user.imgUrl
          }));
        } else {
          console.error('Failed to fetch users:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async searchUsers() {
      try {
        if (this.searchQuery.trim() === '') {
          await this.fetchUsers();
        } else {
          const response = await searchUserByName(this.searchQuery);
          if (response.data.status === 'success') {
            this.students = response.data.data.map(user => ({
              id: user.id,
              name: user.fullName,
              gender: user.gender,
              university: user.university,
              region: user.region,
              imgSrc: user.imgUrl
            }));
          } else {
            console.error('Failed to search users:', response.data.message);
          }
        }
      } catch (error) {
        console.error('Error searching users:', error);
      }
    }
  },
  async created() {
    await this.fetchUsers();
  },
  watch: {
    searchQuery: {
      handler: 'searchUsers',
      immediate: true
    }
  }
};
</script>
<style scoped>
.table-container {
  width: 100%;
  max-width: 1400px;
  margin: auto;
  border-radius: 8px;
  overflow: hidden;
}

.table-header,
.table-row {
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr 1.5fr 1.5fr;
  align-items: center;
  padding: 20px 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 1px;
  text-align: left;
}
/* .table-header,.table-row div {
  padding: 5px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
} */
.table-header {
  background-color: #ffffff;
  color: #6c757d;
  font-weight: bold;
}

.table-row {
  margin-bottom: 1px;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.table-row:hover {
  background-color: #f8f9fa;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

input[type="checkbox"] {
  margin-right: 10px;
  width: 20px;
  height: 20px;
}

input[type="checkbox"]:checked {
  accent-color: #6f42c1;
}

.dark-mode .table-header {
  background-color: #333333;
  color: #6c757d;
}

.dark-mode .table-row {
  background-color: #333333;
  color: #ffffff;
}

.dark-mode .table-row:hover {
  background-color: #444444;
}
</style>
