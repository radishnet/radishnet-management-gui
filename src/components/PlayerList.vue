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
            <div class="text-2xl font-bold text-cyan-900">{{ playerState.id }}</div>
            <div class="flex flex-col font-mono text-xl">
                <div class="flex justify-end gap-8">
                    <div>{{ playerState.headPosition.x.toFixed(4) }}</div>
                    <div>{{ playerState.headPosition.y.toFixed(4) }}</div>
                    <div>{{ playerState.headPosition.z.toFixed(4) }}</div>
                </div>
                <div class="flex justify-end gap-8">
                    <div>{{ playerState.headRotation.w.toFixed(4) }}</div>
                    <div>{{ playerState.headRotation.x.toFixed(4) }}</div>
                    <div>{{ playerState.headRotation.y.toFixed(4) }}</div>
                    <div>{{ playerState.headRotation.z.toFixed(4) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
