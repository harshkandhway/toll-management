<template>
  <div>
    <div
      v-if="alertType === 'success'"
      class="alert alert-success"
      role="alert"
    >
      Entry added successfully.
    </div>
    <div v-if="alertType === 'error'" class="alert alert-danger" role="alert">
      Something went wrong! Please try again.
    </div>
    <div v-if="alertType === 'info'" class="alert alert-danger" role="alert">
      Toll name already exist
    </div>
    <div
      v-if="alertType === 'duplicate'"
      class="alert alert-danger"
      role="alert"
    >
      Vehicle type already selected.
    </div>
  </div>
</template>

<script>
export default {
  props: {
    alertType: {
      type: String,
      default: "error",
    },
  },
};
</script>

<style scoped>
.alert {
  width: 20%;
  padding: 12px 16px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 12px;
  font-size: 16px;
  position: absolute;
  top: 20px;
  right: 10px;
  /* transition: opacity 0.6s; */
  transition: 0.3s;
  animation: alert-box 0.5s ease;
}

@keyframes alert-box {
  0% {
    top: -10%;
  }
  /* 50%{
    top: -5%
  } */
  /* 100% {
    top: 0%;
  } */
}

.alert.alert-success {
  background-color: rgba(227, 253, 235, 1);
  border-color: rgba(38, 179, 3, 1);
  color: rgba(60, 118, 61, 1);
}

.alert.alert-danger {
  background-color: rgba(248, 215, 218, 1);
  border-color: rgba(220, 53, 69, 1);
  color: rgba(114, 28, 36, 1);
}
</style>
