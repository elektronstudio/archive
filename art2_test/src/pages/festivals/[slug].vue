<script lang="ts">
import { getFestivals } from "~/lib";

export default definePageComponent({
  async getStaticPaths() {
    let festivals = await getFestivals();
    return festivals.map((festival: any) => ({
      params: { slug: festival.slug },
      props: { festival },
    }));
  },
});
</script>

<script setup lang="ts">
defineProps(["festival"]);
const { site } = usePage();
</script>

<template>
  <Head>
    <title>{{ site.title }} | {{ festival.title }}</title>
  </Head>
  <h1>{{ festival.title }}</h1>
  <pre>{{ festival }}</pre>
</template>
