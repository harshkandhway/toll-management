<template>
  <div>
    <!-- {{this.$route.meta.tollLists}} -->
    <nav>
      <ul>
        <li>
          <span>Toll entries/ Vehicle entries </span>
          <!-- <FontAwesomeIcon icon="HatWizard" /> -->
          <span>
            |
            <input
              type="text"
              class="search-vehicle"
              placeholder="Search vehicle"
              @input="onSearch($event)"
          /></span>
        </li>

        <li>
          <span v-for="{ value, path } in buttonValues" :key="value">
            <AppButton
              @changeTollListValue="changeTollListValue"
              :isDialog="false"
              formInputFields="button-nav button-common"
              :buttonValue="value"
              :buttonPath="path"
            />
          </span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
// import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import AppButton from "./UI/AppButton.vue";
export default {
  components: {
    // FontAwesomeIcon
    AppButton,
  },
  props:{
    deleteBackup:{
        type: Boolean,
        default: false
    }
  },
  data() {
    return {
      isTollListMeta: false,
      buttonValues: [
        // {value: "Add vehicle entry",path: "newVehicle"},
        // {value:"Add new toll", path: "newToll"},
        // (!this.$route.meta.tollLists? {value:"Back to vehicle", path: "/"} :{value:"View all tolls", path: "tollLists"}),
      ],
      vehicleEntryBackup: this.$store.getters.getVehicleEntries || []
    };
  },
  watch:{
    deleteBackup(value){
        if(value) this.vehicleEntryBackup = this.$store.getters.getVehicleEntries || []
    }
  },
  computed: {
    getVehicleEntries: {
        get: function(){
            return this.$store.getters.getVehicleEntries || [];
        },
    },
  },
  methods: {
    changeTollListValue() {
      this.buttonValues.forEach((value) => {
        if (value.path == "tollLists") {
          value.value = "Back to vehicle";
          value.path = "/";
        } else if (value.path == "/") {
          value.value = "View all tolls";
          value.path = "tollLists";
        }
      });
    },
    onSearch(event) {
      console.log(event.target.value);
    //   let vehicleTypeLower = ""
      let getSearchedVehicleEntries = this.vehicleEntryBackup.filter((item)=>{
        return event.target.value.toLowerCase().split(' ').every(v => item.vehicleType.toLowerCase().includes(v))
      })
      console.log(getSearchedVehicleEntries)
      this.$store.commit('setSearchedVehicleEntries', getSearchedVehicleEntries)
    //   console.log(vehicleTypeLower)
    //   getVehicleEntries.filter(({vehicleType})=>{
    //     vehicleTypeLower = vehicleType.toLowerCase()
    //   })
    },
  },
  created() {
    this.isTollListMeta = this.$route.meta.tollLists || false;
    console.log(this.isTollListMeta);
    this.buttonValues = [
      { value: "Add vehicle entry", path: "newVehicle" },
      { value: "Add new toll", path: "newToll" },
      this.isTollListMeta
        ? { value: "Back to vehicle", path: "/" }
        : { value: "View all tolls", path: "tollLists" },
    ];
    console.log(this.buttonValues);
  },
};
</script>

<style scoped>
nav {
  margin: 10px 0;
  padding: 10px 0;
}
ul {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
/* button{
        color: white;
        background: rgb(0 82 204);
        border-radius: 5px;
        padding: 7px 10px;
        margin: 0 5px;
        border: none;
        cursor: pointer
    } */
.compulsory-mark {
  color: red;
}
button:hover {
  background: rgb(0, 68, 168);
}
button:active {
  background: rgb(0, 58, 145);
}
.search-vehicle {
  border-radius: 12px;
  padding: 5px 10px;
  margin: 0 7px;
  border: 1px solid #b4b4b4;
}
.search-vehicle:active {
  border: 1px solid #949494;
}

@media screen and (max-width: 1050px)
{
    .search-vehicle{
        margin: 14px;
    }
    button{
        margin: 5px;
    }
}

@media screen and (max-width: 650px)
{
    .search-vehicle{
        margin: 10px;
    }
    button{
        margin: 3px;
        font-size: 10px;
    }
}
</style>
