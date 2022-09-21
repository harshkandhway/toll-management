<template>
  <div class="new-toll">
    <form class="add-new-form">
      <label for="toll-name"
        >Toll Name<span class="compulsory-mark">*</span></label
      >
      <input
        v-model="newTollForm.tollName"
        class="form-input-fields"
        type="text"
        name="toll-name"
        id="toll-name"
        placeholder="Enter toll name"
        required
      />
      <label for="fare-details"
        >Vehicle fare details<span class="compulsory-mark">*</span></label
      >
      <!-- <input type="text" name="toll-name" id="toll-name"> -->
      <!-- {{ newTollForm }} -->
      <div
        class="fare-details"
        v-for="(fareDetail, index) in newTollForm.fareDetails"
        :key="index"
      >
        <SelectVehicleType :fareDetail="fareDetail" />
        <!-- <select
          v-model="fareDetail.vehicleType"
          class="form-input-fields"
          name="vehicle-type"
          id="vehicle-type"
        >
          <option selected>Select vehicle type</option>
          <option
            v-for="vehicle in vehicleTypes"
            :key="vehicle"
            :value="vehicle"
          >
            {{ vehicle }}
          </option>
        </select> -->
        <input
          v-model="fareDetail.singleJourney"
          class="form-input-fields"
          type="number"
          name="single-journey"
          id="single-journey"
          placeholder="Single Journey"
        />
        <input
          v-model="fareDetail.returnJourney"
          class="form-input-fields"
          type="number"
          name="return-journey"
          id="return-journey"
          placeholder="Return Journey"
        />
      </div>
      {{ formValidation }}
      <AppButton
        :isDialog="true"
        @onAddNewEntry="onAddNewEntry"
        :formValidation="formValidation"
        formInputFields="form-input-fields button-common"
        buttonType="submit"
        buttonValue="Add details"
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
      newTollForm: {
        tollName: "",
        fareDetails: [
          {
            vehicleType: "",
            singleJourney: NaN,
            returnJourney: NaN,
          },
          {
            vehicleType: "",
            singleJourney: NaN,
            returnJourney: NaN,
          },
          {
            vehicleType: "",
            singleJourney: NaN,
            returnJourney: NaN,
          },
          {
            vehicleType: "",
            singleJourney: NaN,
            returnJourney: NaN,
          },
        ],
      },
      formValidation: false,
    };
  },
  watch: {
    checkFormEntries(value) {
      this.formValidation = value;
    },
  },
  computed: {
    checkFormEntries() {
      let filterdList = this.newTollForm.fareDetails.filter(
        (item) => item.vehicleType || item.singleJourney || item.returnJourney
      );
      let validateList = filterdList.every(
        (item) => item.vehicleType && item.singleJourney && item.returnJourney
      );
      return (
        !!this.newTollForm.tollName && validateList && !!filterdList.length
      );
    },
  },
  methods: {
    onAddNewEntry() {
      //   console.log(this.newTollForm);
      let fareDetails = this.newTollForm.fareDetails.filter(
        (item) => item.vehicleType && item.singleJourney && item.returnJourney
      );
      this.newTollForm.fareDetails = fareDetails
      this.$store.dispatch("commitTollEntries", this.newTollForm);
      this.$router.push("/")
    },
  },
};
</script>

<style scoped>
.new-toll {
  display: flex;
  /* align-items: center; */
}

.fare-details {
  display: flex;
  justify-content: space-between;
  margin: 0 0 5px 0;
}
</style>
