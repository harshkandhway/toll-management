<template>
  <select
    v-model="selectedVehicleType.vehicleType"
    class="form-input-fields"
    name="vehicle-type"
    id="vehicle-type"
    @change="changeVehicleType($event)"
  >
    <option value="" disabled selected>Select your option</option>
    <option v-for="vehicle in vehicleTypes" :key="vehicle" :value="vehicle">
      {{ vehicle }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    fareDetail: {
      type: Object,
      // default: {vehicleType: null}
    },
  },
  data() {
    return {
      vehicleTypes: ["Car/Jeep/Van", "LCV", "Trunk/Bus", "Heavy vehicle"],
      selectedVehicleType: this.fareDetail || { vehicleType: null },
    };
  },
  methods: {
    changeVehicleType(event) {
    //   this.vehicleTypes = this.vehicleTypes.filter((type)=>event.target.value != type)
      this.$emit("setVehicleType", event.target.value);
    },
  },
};
</script>

<style></style>
