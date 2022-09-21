<template>
  <select
    v-model="selectedVehicleType.vehicleType"
    class="form-input-fields"
    name="vehicle-type"
    id="vehicle-type"
    @change="changeVehicleType($event)"
  >
    <option selected>Select vehicle type</option>
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
      this.$emit("setVehicleType", event.target.value);
    },
  },
};
</script>

<style></style>
