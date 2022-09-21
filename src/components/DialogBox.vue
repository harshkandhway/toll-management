<template>
  <div class="dialog-box">
    <div class="dialog-content">
        <h2 class="dialog-title">{{title}}</h2>
        <div class="dialog-form">
            <AddNewVehicle v-if="paramValue.newVehicleDialog"/>
            <AddNewToll v-if="paramValue.newTollDialog"/>
        </div>
    </div>
  </div>
</template>

<script>
    import AddNewToll from './AddNewToll.vue';
    import AddNewVehicle from './AddNewVehicle.vue';
// import { component } from 'vue/types/umd';
export default {
    props:{
        title:{
            type: String
        },
        paramValue:{
            type: Object,
            default: null
        }
    },
    components:{
        AddNewToll,
        AddNewVehicle
    }
};
</script>

<style>
.dialog-box {
  z-index: 99;
  background-color: #ffffff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  width: 55vw;
  height: fit-content;
  border-radius: 6px;
  /* transition-property: top; */
  /* transition-duration: 900ms; */
}
/* .dialog-title {
  text-align: center;
} */
.dialog-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.5em;
}
.dialog-form{
    width: 90%;
    margin: 1.5em;
}
</style>
