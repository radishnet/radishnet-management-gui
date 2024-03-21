<script setup>
import { useWorldStateStore } from "@/stores/worldState.js"
const worldStateStore = useWorldStateStore()
</script>

<template>
    <div class="flex flex-col bg-gray-200 p-16 text-gray-900">
        <div class="p-4">
            <h1 class="text-3xl text-gray-600">Player States</h1>
        </div>
        <div v-for="playerState in worldStateStore.playerStates" class="flex items-center justify-between rounded bg-gray-100 p-4">
            <div class="text-2xl font-bold text-cyan-900">{{ playerState.clientId }}</div>
            <div class="flex flex-col font-mono text-xl">
                <div v-for="playerObject in playerState.playerObjects" class="flex justify-end gap-8">
                    {{ playerObject.id }}
                    -
                    {{ playerObject.position.x.toFixed(4) }}
                    {{ playerObject.position.y.toFixed(4) }}
                    {{ playerObject.position.z.toFixed(4) }}
                    -
                    {{ playerObject.rotation.w.toFixed(4) }}
                    {{ playerObject.rotation.x.toFixed(4) }}
                    {{ playerObject.rotation.y.toFixed(4) }}
                    {{ playerObject.rotation.z.toFixed(4) }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
