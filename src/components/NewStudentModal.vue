<template>
  <div
    ref="modal"
    class="modal fade"
    id="newStudentModal"
    tabindex="-1"
    aria-labelledby="newStudentModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="newStudentModalLabel">New Student</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addNewStudent">
            <div class="mb-3">
              <label for="studentName" class="form-label">Full Name</label>
              <input
                type="text"
                class="form-control"
                id="studentName"
                v-model="newStudent.fullName"
                required
              />
            </div>
            <div class="mb-3">
              <label for="studentEmail" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="studentEmail"
                v-model="newStudent.email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="studentUniversity" class="form-label">University</label>
              <input
                type="text"
                class="form-control"
                id="studentUniversity"
                v-model="newStudent.university"
                required
              />
            </div>
            <div class="mb-3">
              <label for="studentDOB" class="form-label">Date of Birth</label>
              <input
                type="date"
                class="form-control"
                id="studentDOB"
                v-model="newStudent.dateOfBirth"
                required
              />
            </div>
            <div class="mb-3">
              <label for="studentPhone" class="form-label">Phone Number</label>
              <input
                type="tel"
                class="form-control"
                id="studentPhone"
                v-model="newStudent.phoneNumber"
                required
              />
            </div>
            <div class="mb-3">
              <label for="studentGender" class="form-label">Gender</label>
              <select
                class="form-control"
                id="studentGender"
                v-model="newStudent.gender"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="studentRegion" class="form-label">Region</label>
              <input
                type="text"
                class="form-control"
                id="studentRegion"
                v-model="newStudent.region"
                required
              />
            </div>
            <div class="mb-3">
              <label for="studentImgUrl" class="form-label">Image URL</label>
              <input
                type="url"
                class="form-control"
                id="studentImgUrl"
                v-model="newStudent.imgUrl"
               
              />
            </div>
            <button type="submit" class="btn btn-primary">Add Student</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as bootstrap from 'bootstrap';
import { createUser } from '../api/userService';

export default {
  props: ['show'],
  data() {
    return {
      newStudent: {
        fullName: '',
        email: '',
        university: '',
        dateOfBirth: '',
        phoneNumber: '',
        gender: '',
        region: '',
        imgUrl: ''
      }
    };
  },
  watch: {
    show(value) {
      if (value) {
        this.$nextTick(() => {
          const modal = new bootstrap.Modal(this.$refs.modal);
          this.$refs.modal.addEventListener('hide.bs.modal', this.onHideModal);
          modal.show();
        });
      } else {
        const modal = bootstrap.Modal.getInstance(this.$refs.modal);
        if (modal) {
          modal.hide();
        }
      }
    }
  },
  methods: {
    async addNewStudent() {
      try {
        const response = await createUser(this.newStudent);
        this.$emit('add-student', response.data);
        this.newStudent = {
          fullName: '',
          email: '',
          university: '',
          dateOfBirth: '',
          phoneNumber: '',
          gender: '',
          region: '',
          imgUrl: ''
        };
        const modal = bootstrap.Modal.getInstance(this.$refs.modal);
        if (modal) {
          modal.hide();
        }
        window.location.reload();
      } catch (error) {
        console.error('Error adding new student:', error);
      }
    },
    onHideModal() {
      this.$refs.modal.removeEventListener('hide.bs.modal', this.onHideModal);
      this.$emit('update:show', false);
    }
  }
};
</script>

<style scoped>
.modal-content {
  padding: 20px;
}

.btn-primary {
  background-color: #6f42c1;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
}
</style>
