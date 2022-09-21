<template>
  <div class="new-entry">
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
        <option selected>Kappalur</option>
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
        type="number"
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
        tollName: null,
        vehicleType: null,
        vehicleNumber: NaN,
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
    }
  },
  methods: {
    onAddNewEntry() {
      console.log(this.newEntryForm);
    },
    setVehicleType(selectedVehicle) {
      this.newEntryForm.vehicleType = selectedVehicle;
    },
  },
};
</script>

<style></style>
