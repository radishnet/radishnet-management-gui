import { ref } from "vue"
import { defineStore } from "pinia"

export const useWorldStateStore = defineStore("worldState", () => {
    const worldInfo = ref({})
    const playerStates = ref([])
    const objectStates = ref([])

    function updateWorldState(worldState) {
        worldInfo.value = worldState.worldInfo
        playerStates.value = worldState.playerStates
        objectStates.value = worldState.objectStates
    }

    return { worldInfo, playerStates, objectStates, updateWorldState }
})
