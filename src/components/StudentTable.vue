<template>
  <div class="table-container">
    <div class="table-header">
      <div><input type="checkbox"></div>
      <div>Name</div>
      <div>Gender</div>
      <div>University</div>
      <div>Region</div>
    </div>
    <StudentRow
      v-for="student in students"
      :key="student.id"
      :student="student"
    />
  </div>
</template>

<script>
import StudentRow from './StudentRow.vue'

export default {
  components: {
    StudentRow
  },
  data() {
    return {
      students: [
        {
          id: 1,
          name: "Samanta William",
          gender: "Male",
          university: "ITMO",
          region: "Russia"
        },
      ]
    }
  }
}
</script>

<style scoped>
.table-container {
  width: 100%;
  max-width: 1400px; /* Increased from 1200px to 1400px */
  margin: auto;
  border-radius: 8px;
  overflow: hidden;
}

.table-header, .table-row {
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr 1.5fr 1.5fr;
  align-items: center;
  padding: 10px 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.table-header {
  background-color: #ffffff;
  color: #6c757d;
  font-weight: bold;
}

.table-row {
  margin-bottom: 8px;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.table-row:hover {
  background-color: #f8f9fa;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

input[type="checkbox"] {
  margin-right: 10px;
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
