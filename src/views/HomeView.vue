<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <AppNav/>
    <EntriesTable/>
    <template>
      <DialogBox v-if="Object.values($route.meta).length" :paramValue="$route.meta" title = "Add new Vehicle"/>
      <!-- <DialogBox v-if="$route.meta.newTollDialog" title="Add new toll"/> -->
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import EntriesTable from '@/components/EntriesTable.vue'
import AppNav from '@/components/AppNav'
import DialogBox from '@/components/DialogBox.vue'
// import DialogBox from '@/components/DialogBox.vue'

export default {
  name: 'HomeView',
  components: {
    EntriesTable,
    AppNav,
    DialogBox,
},
  watch:{
    $route(){
      console.log(this.$route.params)
    }
  },

  created() {
    console.log("this.$route.params",this.$route.meta)
    // this.$watch(
    //   () => this.$route.params,
    //   (toParams, previousParams) => {
    //     console.log(toParams)
    //     console.log(previousParams)
    //     // react to route changes...
    //   }
    // )
  },
}
</script>
