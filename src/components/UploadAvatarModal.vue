<template>
  <div
    ref="modal"
    class="modal fade"
    id="uploadAvatarModal"
    tabindex="-1"
    aria-labelledby="uploadAvatarModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="uploadAvatarModalLabel">
            Upload Avatar
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="uploadAvatar">
            <div class="mb-3">
              <label for="avatar" class="form-label">Select Avatar</label>
              <input
                type="file"
                class="form-control"
                id="avatar"
                @change="onFileChange"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as bootstrap from "bootstrap";
import { uploadAvatar } from "@/api/userService";

export default {
  props: {
    show: Boolean,
    userId: {
      type: [Number, String],
      required: true
    },
  },
  data() {
    return {
      selectedFile: null,
    };
  },
  watch: {
    show(value) {
      if (value) {
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
  },
  methods: {
    onFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    async uploadAvatar() {
      if (!this.selectedFile) {
        alert('Please select a file');
        return;
      }
      try {
        await uploadAvatar(this.userId, this.selectedFile);
        alert('Avatar uploaded successfully');
        const modal = bootstrap.Modal.getInstance(this.$refs.modal);
        if (modal) {
          modal.hide();
        }
        this.$emit("avatar-updated");
      } catch (error) {
        console.error('Error uploading avatar:', error);
        alert('Failed to upload avatar');
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
