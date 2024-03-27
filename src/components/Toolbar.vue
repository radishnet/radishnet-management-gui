<script setup>
import { useWorldStateStore } from "@/stores/worldState.js"
const worldStateStore = useWorldStateStore()
</script>

<template>
    <div class="flex items-center justify-between bg-cyan-900 p-2 text-gray-100">
        <div class="px-8 text-3xl">RadishNet Management GUI</div>
        <div class="flex gap-4 px-8 font-mono text-lg">
            <div>World Info:</div>
            <div>{{ worldStateStore.worldInfo }}</div>
        </div>
    </div>
</template>

<style scoped></style>
