<script setup lang="ts"></script>

<template>
  <div>
    <Test client:visible />
    <br />
    <Test2 client:visible />
    <router-link to="/events">Events</router-link>
    <router-link to="/festivals">Festivals</router-link>
  </div>
</template>
