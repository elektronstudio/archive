<script setup lang="ts">
import { getAboutPage } from "@/logic";

const data = await getAboutPage();

const cards = data.data.attributes.cards;
</script>

<template>
  <main class="Page About">
    <ContentBlocks :cards="cards" />
  </main>
</template>
