<template>
  <div>
    <nav>
        <ul>
            <li>
                <span>Toll entries/ Vehicle entries </span>
                <!-- <FontAwesomeIcon icon="HatWizard" /> -->
                <span> | <input type="text" class="search-vehicle" placeholder="Search vehicle"/></span>
            </li>
            
            <li>
                <span v-for="{value, path} in buttonValues" :key="value">
                    <AppButton :isDialog="false" formInputFields="button-nav button-common" :buttonValue="value" :buttonPath="path"/>
                </span>
            </li>
        </ul>      
    </nav>
  </div>
</template>

<script>
    // import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
    import AppButton from './UI/AppButton.vue';
    export default{
        components:{
            // FontAwesomeIcon
            AppButton
        },
        data(){
            return{
                buttonValues:[
                {value: "Add vehicle entry",path: "newVehicle"},
                {value:"Add new toll", path: "newToll"},
                {value:"View all tolls", path: "tollLists"}
            ]
            }
        }
    }
    
</script>

<style scoped>
    nav{
        margin: 10px 0;
        padding: 10px 0;
    }
    ul{
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
    }
    li{
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
    .compulsory-mark{
        color:red
    }
    button:hover{
        background: rgb(0, 68, 168);
    }
    button:active{
        background: rgb(0, 58, 145);
    }
    .search-vehicle{
        border-radius: 12px;
        padding: 5px 10px;
        margin: 0 7px;
        border: 1px solid #b4b4b4;
    }
    .search-vehicle:active{
        border: 1px solid #949494;
    }
</style>
