<script setup lang="ts">
import ArtNav from "@/components/ArtNav.vue";
</script>
<template>
  <div>
    <ArtNav />
    <main class="Layout">
      <slot />
    </main>
  </div>
</template>

<style>
.Layout {
  /* padding: var(--p-4); */
}
.ENav {
  grid-auto-columns: 1fr !important;
  grid-auto-flow: column !important;
}
</style>
