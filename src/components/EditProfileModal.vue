<template>
  <div
    ref="modal"
    class="modal fade"
    id="editStudentModal"
    tabindex="-1"
    aria-labelledby="editStudentModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editStudentModalLabel">
            Edit Student Profile
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="updateStudent">
            <div class="mb-3">
              <label for="studentName" class="form-label">Full Name</label>
              <input
                type="text"
                class="form-control"
                id="studentName"
                v-model="student.fullName"
                required
              />
            </div>
            <div class="mb-3">
              <label for="studentEmail" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="studentEmail"
                v-model="student.email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="studentUniversity" class="form-label"
                >University</label
              >
              <input
                type="text"
                class="form-control"
                id="studentUniversity"
                v-model="student.university"
                required
              />
            </div>
            <div class="mb-3">
              <label for="studentDOB" class="form-label">Date of Birth</label>
              <input
                type="date"
                class="form-control"
                id="studentDOB"
                v-model="student.dateOfBirth"
                required
              />
            </div>
            <div class="mb-3">
              <label for="studentPhone" class="form-label">Phone Number</label>
              <input
                type="tel"
                class="form-control"
                id="studentPhone"
                v-model="student.phoneNumber"
                required
              />
            </div>
            <div class="mb-3">
              <label for="studentGender" class="form-label">Gender</label>
              <select
                class="form-control"
                id="studentGender"
                v-model="student.gender"
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
                v-model="student.region"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Update Student
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import * as bootstrap from "bootstrap";
import { updateUser } from "../api/userService";

export default {
  props: {
    show: Boolean,
    studentData: Object,
  },
  data() {
    return {
      student: { ...this.studentData },
    };
  },
  watch: {
    show(value) {
      if (value) {
        this.student = { ...this.studentData };
        this.$nextTick(() => {
          const modal = new bootstrap.Modal(this.$refs.modal);
          this.$refs.modal.addEventListener("hide.bs.modal", this.onHideModal);
          modal.show();
        });
      } else {
        const modal = bootstrap.Modal.getInstance(this.$refs.modal);
        if (modal) {
          modal.hide();
        }
      }
    },
    studentData: {
      handler(newValue) {
        this.student = { ...newValue };
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    async updateStudent() {
      try {
        const response = await updateUser(this.student.id, this.student);
        this.$emit("update-student", response.data);
        const modal = bootstrap.Modal.getInstance(this.$refs.modal);
        if (modal) {
          modal.hide();
        }
        window.location.reload();
      } catch (error) {
        console.error("Error updating student:", error);
      }
    },
    onHideModal() {
      this.$refs.modal.removeEventListener("hide.bs.modal", this.onHideModal);
      this.$emit("update:show", false);
    },
  },
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
