import fetch from "cross-fetch";
import { reactive } from "vue";

export async function getEvents() {
  const data: any = await fetch("https://strapi.elektron.art/events").then(
    (res) => res.json()
  );
  return data;
}

export async function getFestivals() {
  const data: any = await fetch("https://strapi.elektron.art/festivals").then(
    (res) => res.json()
  );
  return data;
}

export const state = reactive({ a: 0, b: 0 });
