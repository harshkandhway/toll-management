<template>
  <div class="home">
    <AppNav/>
    <EntriesTable/>
    <template>
      <DialogBox v-if="Object.values($route.meta).length" :paramValue="$route.meta" title = "Add new Vehicle"/>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import EntriesTable from '@/components/EntriesTable.vue'
import AppNav from '@/components/AppNav'
import DialogBox from '@/components/DialogBox.vue'

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
}
</script>
