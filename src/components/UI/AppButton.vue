<template>
  <button
    :class="formInputFields"
    :type="buttonType"
    :disabled="!formValidation && isDialog"
    @click.prevent="
      isDialog ? $emit('onAddNewEntry') : changeRoutePath()
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
  data(){
    return{
      buttonPathChanges: this.buttonPath
    }
  },
  // watch:{
  //   buttonPathChanges(value){
  //     console.log("value",value)
  //   }
  // },
  // computed: {
  //   checkButtonPath(){
  //     // this.buttonPathChanges = this.buttonPath
  //     return this.buttonPath
  //   }
  // },
  methods:{
    changeRoutePath(){
      this.$router.push(`${this.buttonPathChanges}`)
      if(this.buttonPathChanges == "tollLists")
      this.$emit('changeTollListValue')
      else if(this.buttonPathChanges == "/")
      this.$emit('changeTollListValue')
    }
  },
  created(){
    // this.changeRoutePath()
  }
};
</script>

<style scoped></style>
