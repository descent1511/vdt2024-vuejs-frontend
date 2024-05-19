<template>
  <div class="table-row">
    <div class="checkbox-container"><input type="checkbox"></div>
    <div class="name">
      <!-- <img :src="student.imgSrc" alt="Avatar"> -->
      <span>{{ student.name }}</span>
    </div>
    <div class="gender">{{ student.gender }}</div>
    <div class="university">{{ student.university }}</div>
    <div class="region">{{ student.region }}</div>
  </div>
</template>

<script>
export default {
  props: ['student'],
  computed: {
  }
}
</script>

<style scoped>
.table-row {
  display: grid;
  grid-template-columns: 0.2fr 1.5fr 1fr 1.5fr 1.5fr;
  align-items: center;
  padding: 10px 20px;
  background-color: #ffffff;
  margin-bottom: 10px;
  /* border-radius: 8px; */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s, box-shadow 0.3s;
  overflow: hidden;
}

.table-row:hover {
  background-color: #f8f9fa;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.table-row div {
  padding: 5px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.name span {
  font-weight: bold;
}

.gender, .university, .region {
  color: #6c757d;
}

input[type="checkbox"] {
  margin-right: 10px;
}

.dark-mode .table-row {
  background-color: #333333;
  color: #ffffff;
}

.dark-mode .table-row:hover {
  background-color: #444444;
}
</style>
