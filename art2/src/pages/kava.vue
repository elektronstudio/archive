<script setup lang="ts">
import { getFestivals, formatMarkdown } from "../logic";
import { formatDatetime, useRange } from "elektro";
const festivals = await getFestivals();

const isUpcoming = (start_at: string, end_at: string) => {
  const { urgency } = useRange(new Date(start_at), new Date(end_at));
  return urgency.value === "future";
};

const upcomingEvents = (events: any[]) => {
  return events.filter(
    ({ start_at, end_at }: { start_at: string; end_at: string }) =>
      isUpcoming(start_at, end_at),
  );
};

// @TODO: Should this be a computed property, because useRange is reactive?
const upcomingFestivals = festivals.filter(({ events }: { events: any[] }) =>
  upcomingEvents(events),
);
</script>

<template>
  <main class="Page Projects">
    <template v-if="upcomingFestivals.length > 0" v-for="festival in festivals">
      <!-- @TODO: Add short description from Strapi -->
      <EScheduleEvent
        v-if="upcomingEvents(festival.events).length > 0"
        :title="festival.title"
        :description="
          formatMarkdown(`${festival.description_estonian.slice(0, 240)}...`)
        "
        :events="festival.events"
      >
        <template v-if="festival.events" v-for="item in festival.events">
          <client-only>
            <EEventInstance
              v-if="isUpcoming(item.start_at, item.end_at)"
              :start-at="formatDatetime(new Date(item.start_at))"
              :end-at="formatDatetime(new Date(item.end_at))"
              :ticket-url="item.ticketUrl"
            />
          </client-only>
        </template>
      </EScheduleEvent>
    </template>
    <section v-else>
      <ETitle>Tulevaid sündmusi ei leitud</ETitle>
    </section>
  </main>
</template>

<style scoped>
.Page.Projects {
  display: grid;
  grid-template-columns: 1fr;
  padding: var(--p-4);
}
.Page.Projects > section {
  margin-bottom: var(--m-12);
}
/* @TODO: Add breakpoints system */
@media only screen and (min-width: 1240px) {
  .Page.Projects {
    grid-template-columns: repeat(8, 1fr);
  }
  .Page.Projects > section {
    grid-column: 4 / -1;
    margin-bottom: var(--m-24);
  }
}
</style>
