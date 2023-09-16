import { createClient } from "next-sanity";

export const client = createClient({
    projectId: process.env.projectId,
    dataset: process.env.dataset,
    apiVersion: process.env.apiVersionSanity,
    useCdn: false
})
