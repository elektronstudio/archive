<script setup lang="ts">
import { state } from "../lib";
</script>

<template>
  b: <input type="range" v-model="state.b" /> a: {{ state.a }}
</template>
