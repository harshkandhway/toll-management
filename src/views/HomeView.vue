<template>
  <div class="home">
    <AlertBox v-if="alertBox" :alertType="alertBox"/>
    <AppNav />
    <EntriesTable :tableHeads="tableHeads" :tollTable="routeMeta"/>
    <template>
      <DialogBox
        v-if="$route.meta.newTollDialog || $route.meta.newVehicleDialog"
        :paramValue="$route.meta"
        title="Add new Vehicle"
      />
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import EntriesTable from "@/components/EntriesTable.vue";
import AppNav from "@/components/AppNav";
import DialogBox from "@/components/DialogBox.vue";
import AlertBox from "@/components/UI/AlertBox.vue";

export default {
  name: "HomeView",
  components: {
    EntriesTable,
    AppNav,
    DialogBox,
    AlertBox,
  },
  data(){
    return{
      tableHeads: ["VEHICLE TYPE", "VEHICLE NUMBER","DATE/TIME", "TOLL NAME","TARIFF"]
    }
  },
  computed:{
    alertBox(){
      return this.$store.state.alertType;
    },
    routeMeta(){
      return this.$route.meta.tollLists
    }
  },
  created(){
    if(this.$route.meta.tollLists)
    this.tableHeads = ["TOLL NAME", "Car/Jeep/Van", "LCV", "Trunk/Bus", "Heavy vehicle"]
  },
  watch: {
    alertBox(){
      setTimeout(()=>this.$store.commit('setAlertType', ''),3000)
    },
    routeMeta(value){
      console.log(value)
      if(value){
        this.tableHeads = ["TOLL NAME", "Car/Jeep/Van", "LCV", "Trunk/Bus", "Heavy vehicle"]
      }
    }
    // $route() {
    //   console.log(this.$route.params);
    // },
  },
};
</script>
