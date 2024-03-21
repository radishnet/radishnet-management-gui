<script setup>
import { ref } from "vue"
import { useWorldStateStore } from "@/stores/worldState.js"
import Toolbar from "@/components/Toolbar.vue"
import PlayerList from "@/components/PlayerList.vue"

const worldStateStore = useWorldStateStore()
const webSocket = new WebSocket("ws://localhost:3000/?clientType=gui")
const worldState = ref({})

webSocket.addEventListener("error", console.error)

webSocket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data)
    switch (message.type) {
        case "WorldStateMessage":
            worldStateStore.updateWorldState(message.payload)
            break
        default:
            console.warn(`Unknown message type '${message.type}'`)
            break
    }
})
</script>

<template>
    <div id="main" class="h-screen w-screen">
        <Toolbar style="grid-area: toolbar"></Toolbar>
        <PlayerList style="grid-area: playerlist"></PlayerList>
    </div>
</template>

<style scoped>
#main {
    display: grid;
    grid-template-areas:
        "toolbar"
        "playerlist";
    grid-template-rows: 64px 1fr;
    grid-template-columns: 1fr;
}
</style>
