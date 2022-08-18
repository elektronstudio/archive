<script setup lang="ts">
import { getFestivals } from "~/lib";
const festivals = await getFestivals();
</script>

<template>
  <div>
    <div>
      <router-link
        v-for="festival in festivals"
        :to="'/festivals/' + festival.slug"
      >
        {{ festival.slug }}
      </router-link>
    </div>
  </div>
</template>
