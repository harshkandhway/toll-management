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
      {{newTollForm.fareDetails}}
      <div
        class="fare-details"
        v-for="(fareDetail, index) in newTollForm.fareDetails"
        :key="index"
      >
        <SelectVehicleType :fareDetail="fareDetail" @setVehicleType="setVehicleType"/>
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
        console.log(value)
      this.formValidation = value;
    },
  },
  computed: {
    checkFormEntries() {
      let filterdList = this.newTollForm.fareDetails.filter(
        (item) => item.vehicleType || item.singleJourney || item.returnJourney
      );
      console.log(filterdList)
      let validateList = this.newTollForm.fareDetails.every(
        (item) => item.vehicleType && item.singleJourney && item.returnJourney
      );
      return (
        !!this.newTollForm.tollName && validateList && !!filterdList.length
      );
    },
  },
  methods: {
    onAddNewEntry() {
        console.log(this.newTollForm.fareDetails)
      let sortNewTollForm =  ["Car/Jeep/Van", "LCV", "Trunk/Bus", "Heavy vehicle"].map((value)=>{
        return this.newTollForm.fareDetails.find(({vehicleType})=>{
            return value == vehicleType
        })
      })
      console.log("sortNewTollForm",sortNewTollForm)
      this.$store.dispatch("commitTollEntries", this.newTollForm);
      this.$router.push("/")
    },
    setVehicleType(vehicleType){
        // console.log("vehicleType",vehicleType)
        // console.log(this.newTollForm.fareDetails)
        // console.log(this.newTollForm.fareDetails.filter((item)=>{return item.vehicleType == vehicleType}))
        if(this.newTollForm.fareDetails.filter((item)=>{return item.vehicleType == vehicleType}).length>1){
            console.log("hey")
            this.$store.commit('setAlertType', 'success')
            for(let i=this.newTollForm.fareDetails.length-1; i>=0;i--){
                if(this.newTollForm.fareDetails[i].vehicleType == vehicleType){
                    this.newTollForm.fareDetails[i].vehicleType = ""
                    break;
                }
            }
        }

    }
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
