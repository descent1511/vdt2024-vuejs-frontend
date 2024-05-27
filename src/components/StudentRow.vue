<template>
  <div class="table-row">
    <div class="checkbox-container">
      <input type="checkbox" :checked="checked" @change="$emit('toggle', student.id)">
    </div>
    <div class="name">
      <img :src="student.imgSrc" alt="Avatar" class="avatar">
      <router-link :to="{ name: 'profile', params: { id: student.id } }" class="profile-link">
        <strong>{{ student.name }}</strong>
      </router-link>
    </div>
    <div class="gender">{{ student.gender }}</div>
    <div class="university">{{ student.university }}</div>
    <div class="region">{{ student.region }}</div>
  </div>
</template>

<script>
export default {
  props: ['student', 'checked']
}
</script>

<style scoped>
.table-row {
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr 1.5fr 1.5fr;
  align-items: center;
  padding: 10px 20px;
  background-color: #ffffff;
  margin-bottom: 1px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
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

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
}

.profile-link {
  text-decoration: none;
  color: inherit;
}

.profile-link:hover {
  text-decoration: underline;
}

.dark-mode .table-row {
  background-color: #333333;
  color: #ffffff;
}

.dark-mode .table-row:hover {
  background-color: #444444;
}
</style>
