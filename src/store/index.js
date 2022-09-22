import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const TOLL_ENTRIES = 'tollEntries'
const VEHICLE_ENTRIES = 'vehicleEntries'


export default new Vuex.Store({
  state: {
    tollEntries: JSON.parse(localStorage.getItem(TOLL_ENTRIES)) || [],
    vehicleEntries: JSON.parse(localStorage.getItem(VEHICLE_ENTRIES)) || [],
    alertType: ""
  },
  getters: {
    getTollEntries(state) {
      return state.tollEntries
    },
    getVehicleEntries(state) {
      return state.vehicleEntries
    }
  },
  mutations: {
    setTollEntries(state, tollEntries) {
      state.tollEntries.push(tollEntries)
      localStorage.setItem(TOLL_ENTRIES, JSON.stringify(state.tollEntries))
    },
    setVehicleEntries(state, vehicleEntries) {
      state.vehicleEntries.push(vehicleEntries)
      localStorage.setItem(VEHICLE_ENTRIES, JSON.stringify(state.vehicleEntries))
    },
    setAlertType(state, alertType) {
      state.alertType = alertType
    },
    deleteVehicleEntry(state, vehiclePayloadIndex){
      // console.log("deleteVehicleEntry",vehiclePayloadIndex)
      // let vehicleEntries = JSON.parse(JSON.stringify(state.vehicleEntries))
      // console.log(vehicleEntries)
      
      state.vehicleEntries.splice(state.vehicleEntries.findIndex((vehicle, index) => index === vehiclePayloadIndex) , 1)
      localStorage.setItem(VEHICLE_ENTRIES, JSON.stringify(state.vehicleEntries))
      // console.log(vehicleEntries)
    }
  },
  actions: {
    commitTollEntries(vuexContext, tollEntriesPayload) {
      try {
        console.log(tollEntriesPayload)
        let duplicateToll = false
        if (vuexContext.getters.getTollEntries.length > 0) {
          duplicateToll = vuexContext.getters.getTollEntries.some(({ tollName }) => {
            return tollEntriesPayload.tollName == tollName
          })
        }
        console.log(duplicateToll)
        if (!duplicateToll) {
          vuexContext.commit('setTollEntries', tollEntriesPayload)
          if (localStorage.getItem(TOLL_ENTRIES) !== null) {
            vuexContext.commit('setAlertType', 'success')
          }
          return
        }
        vuexContext.commit('setAlertType', 'info')
      } catch (error) {
        vuexContext.commit('setAlertType', 'error')
        // console.log(error)
      }

    },
    commitVehicleEntries(vuexContext, vehicleEntriesPayload) {
      try {
        vuexContext.commit('setVehicleEntries', vehicleEntriesPayload)
        if (localStorage.getItem(VEHICLE_ENTRIES) !== null) {
          vuexContext.commit('setAlertType', 'success')
        }

      } catch (error) {
        vuexContext.commit('setAlertType', 'error')

      }
    },
    
  },
  modules: {
  }
})
