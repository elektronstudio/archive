<script setup lang="ts">
const config = useRuntimeConfig()
const { data } = await useAsyncData('frontpage', () => $fetch(`${config.STRAPI_V4_URL}/api/frontpage?populate%5Bcards%5D%5Bpopulate%5D=*`))
</script>

<template>
  <p>{{ data.data.attributes.description }}</p>
</template>
