<script lang="ts">
import { getEvents } from "~/lib";

export default definePageComponent({
  async getStaticPaths() {
    let events = await getEvents();
    return events.map((event: any) => ({
      params: { slug: event.slug },
      props: { event },
    }));
  },
});
</script>

<script setup lang="ts">
defineProps(["event"]);
const { site } = usePage();
</script>

<template>
  <Head>
    <title>{{ site.title }} | {{ event.title }}</title>
  </Head>
  <h1>{{ event.title }}</h1>
  <pre>{{ event }}</pre>
</template>
