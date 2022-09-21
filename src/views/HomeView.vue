<template>
  <div class="home">
    <AlertBox v-if="alertBox" />
    <AppNav />
    <EntriesTable />
    <template>
      <DialogBox
        v-if="Object.values($route.meta).length"
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
  computed:{
    alertBox(){
      return this.$store.state.alertType;
    }
  },
  watch: {
    alertBox(){
      setTimeout(()=>this.$store.commit('setAlertType', ''),2000)
    },
    $route() {
      console.log(this.$route.params);
    },
  },
};
</script>
