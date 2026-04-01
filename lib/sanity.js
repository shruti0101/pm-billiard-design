import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "x4qz1fj4",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
