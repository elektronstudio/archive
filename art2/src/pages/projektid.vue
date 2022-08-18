<script setup lang="ts">
import { getProjectsPage } from "@/logic";
const data = await getProjectsPage();

const cards = data.data.attributes.cards;
</script>

<template>
  <main class="Page About">
    <ContentBlocks :cards="cards" />
  </main>
</template>
