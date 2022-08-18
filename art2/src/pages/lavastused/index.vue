<script setup lang="ts">
import { getFestivals } from "../../logic/strapi";
import { formatDatetime } from "elektro";

const festivals = await getFestivals();
</script>

<template>
  <div class="Page">
    <ETitle size="lg">Festivalid</ETitle>
    <br />
    <div
      style="
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: var(--gap-4);
      "
    >
      <router-link
        v-for="festival in festivals"
        :to="'/lavastused/' + festival.slug"
      >
        <!-- @TODO: Add author/producer field to Strapi -->
        <!-- @TODO: Verify if events feed is ASC by event start -->
        <EProductionCard
          :title="festival.title"
          :thumbnail="festival.images[0]?.url"
          :next-event="
            festival.events[0] && {
              startAt: formatDatetime(new Date(festival.events[0]?.start_at)),
              endAt: formatDatetime(new Date(festival.events[0]?.end_at)),
            }
          "
        />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.Page {
  padding: var(--p-4);
}
</style>
