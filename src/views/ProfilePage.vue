<template>
  <div class="profile-container" v-if="student">
    <div class="profile-header">
      <img :src="student.imgUrl" alt="Avatar" class="avatar">
      <h2>{{ student.name }}</h2>
      <button class="btn btn-edit-profile" @click="editProfile">Edit Profile</button>
    </div>
    <div class="profile-details">
      <div class="detail-row">
        <strong>Gender:</strong>
        <span>{{ student.gender }}</span>
      </div>
      <div class="detail-row">
        <strong>University:</strong>
        <span>{{ student.university }}</span>
      </div>
      <div class="detail-row">
        <strong>Region:</strong>
        <span>{{ student.region }}</span>
      </div>
      <div class="detail-row">
        <strong>Email:</strong>
        <span>{{ student.email }}</span>
      </div>
      <div class="detail-row">
        <strong>Birthday:</strong>
        <span>{{ formattedDateOfBirth }}</span>
      </div>
      <div class="detail-row">
        <strong>Major:</strong>
        <span>{{ student.major }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserById } from '../api/userService';

export default {
  props: ['id'],
  data() {
    return {
      student: null,
      error: null
    };
  },
  created() {
    this.fetchStudentData();
  },
  methods: {
    async fetchStudentData() {
      try {
        console.log(this.id)
        const response = await getUserById(this.id);
        this.student = response.data.data;
        console.log(this.student)
      } catch (error) {
        this.error = 'Failed to fetch student data';
        console.error(error);
      }
    },
    editProfile() {
      console.log('Edit profile clicked');
    }
  },
  computed: {
    formattedDateOfBirth() {
      if (this.student && this.student.dateOfBirth) {
        const date = new Date(this.student.dateOfBirth);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
      }
      return '';
    }
  }
}
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin-top: 60px; 
  background-color: #f3f4ff;
  min-height: 100%; 
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 3px solid #6f42c1;
  transition: transform 0.3s ease;
}

.avatar:hover {
  transform: scale(1.1);
}

.profile-details {
  width: 100%;
  max-width: 450px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.detail-row {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #dee2e6;
}

.detail-row:last-child {
  border-bottom: none;
}

.btn-edit-profile {
  background-color: #6f42c1;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  padding: 12px 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-size: 16px;
}

.btn-edit-profile:hover {
  background-color: #5a3797;
  transform: translateY(-2px);
}

.dark-mode .profile-container {
  background-color: #343a40;
  color: #f8f9fa;
}

.dark-mode .profile-details {
  background-color: #495057;
}

.dark-mode .detail-row {
  border-bottom: 1px solid #6c757d;
}

.dark-mode .btn-edit-profile {
  background-color: #4b299e;
}

.dark-mode .btn-edit-profile:hover {
  background-color: #3e237d;
}
</style>
