<template>
  <div style="display: flex; gap: 10px">
    <router-link to="/">Index</router-link>
    <router-link to="/festivals">Festivals</router-link>
    <router-link to="/events">Events</router-link>
  </div>
  <p />
  <Suspense>
    <slot />
  </Suspense>
</template>

<style></style>
