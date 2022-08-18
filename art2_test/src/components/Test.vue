<script setup lang="ts">
import { state } from "../lib";
</script>

<template>
  a: <input type="range" v-model="state.a" /> b: {{ state.b }}
</template>
