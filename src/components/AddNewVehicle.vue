<template>
  <div class="new-entry">
    {{getTollsName}}
    <form class="add-new-form">
      <label for="toll-name"
        >Select toll name<span class="compulsory-mark">*</span></label
      >
      <select
        v-model="newEntryForm.tollName"
        class="form-input-fields"
        name="toll-name"
        id="toll-name"
      >
      <option value="" disabled selected>Select a toll</option>
        <option v-for="(tollName,index) in getTollsName" :key="index">
          {{tollName}}
        </option>
      </select>
      <label for="vehicle-type"
        >Select vehicle type<span class="compulsory-mark">*</span></label
      >
      <!-- <select class="form-input-fields" name="vehicle-type" id="vehicle-type">
        <option selected>Kappalur</option>
      </select> -->
      <SelectVehicleType @setVehicleType="setVehicleType" />
      <label for="vehicle-number"
        >Vehicle Number<span class="compulsory-mark">*</span></label
      >
      <input
        v-model="newEntryForm.vehicleNumber"
        type="text"
        class="form-input-fields"
        name="vehicle-number"
        id="vehicle-number"
        placeholder="Enter your login id"
      />
      <label for="vehicle-tariff"
        >Tariff<span class="compulsory-mark">*</span></label
      >
      <input
        v-model="newEntryForm.tariff"
        type="number"
        class="form-input-fields"
        name="vehicle-tariff"
        id="vehicle-tariff"
        placeholder="Tariff amount"
        disabled
      />
      <AppButton
        :isDialog="true"
        @onAddNewEntry="onAddNewEntry"
        :formValidation="formValidation"
        formInputFields="form-input-fields button-common"
        buttonType="submit"
        buttonValue="Add Entry"
      />
    </form>
  </div>
</template>

<script>
import AppButton from "./UI/AppButton.vue";
import SelectVehicleType from "./UI/SelectVehicleType.vue";
export default {
  components: {
    AppButton,
    SelectVehicleType,
  },
  data() {
    return {
      newEntryForm: {
        vehicleType: "",
        vehicleNumber: "",
        dateTime: new Date(),
        tollName: "",
        tariff: NaN,
      },
      formValidation: false
    };
  },
  watch:{
    checkFormEntries(value){
      this.formValidation = value
    }
  },
  computed:{
    checkFormEntries(){
      let formValidateList = Object.values(this.newEntryForm)
      return !formValidateList.some(item=>!item)
    },
    getTollsName(){
      return this.$store.getters.getTollEntries.map(({tollName})=>{
        return tollName
      })
    },
    getTolls(){
      return this.$store.getters.getTollEntries || []
    }
  },
  methods: {
    onAddNewEntry() {
      console.log(this.newEntryForm);
      // this.newEntryForm.dateTime = new Date();
      this.$store.dispatch("commitVehicleEntries", this.newEntryForm);
      this.$router.push("/")
    },
    setVehicleType(selectedVehicle) {
      this.newEntryForm.vehicleType = selectedVehicle;
      let getSingleToll = this.getTolls.find(({tollName})=>{
        return tollName == this.newEntryForm.tollName
      })
      this.newEntryForm.tariff = getSingleToll.fareDetails.find((item)=>{
        return item.vehicleType == selectedVehicle
      }).singleJourney
      console.log(this.newEntryForm.tariff)

    },
  },
};
</script>

<style></style>
