<template>
  <button
    :class="formInputFields"
    :type="buttonType"
    :disabled="!formValidation && isDialog"
    @click.prevent="
      isDialog ? $emit('onAddNewEntry') : $router.push(`${buttonPath}`)
    "
  >
    {{ buttonValue }}
  </button>
</template>

<script>
export default {
  props: {
    formValidation: {
      type: Boolean,
      default: false,
    },
    isDialog: {
      type: Boolean,
      default: false,
    },
    buttonValue: {
      type: String,
    },
    buttonType: {
      type: String,
      default: "button",
    },
    formInputFields: {
      type: String,
    },
    buttonPath: {
      type: String,
      default: "/",
    },
  },
  methods: {},
};
</script>

<style scoped></style>
