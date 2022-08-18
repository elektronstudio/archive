import { $fetch } from "ohmyfetch";

export async function getEvents() {
  return $fetch("https://strapi.elektron.art/events");
}

export async function getFestivals() {
  return $fetch("https://strapi.elektron.art/festivals");
}

export async function getAboutPage() {
  return $fetch(
    "https://strapi-v4-ee9v.onrender.com/api/about?populate%5Bcards%5D%5Bpopulate%5D=*",
  );
}

export async function getProjectsPage() {
  return $fetch(
    "https://strapi-v4-ee9v.onrender.com/api/project?populate%5Bcards%5D%5Bpopulate%5D=*",
  );
}
