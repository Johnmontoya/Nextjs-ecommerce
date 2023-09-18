import { defineConfig } from "sanity";
import { schema } from "./sanity/schema";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

const projectId = process.env.projectId || 'hupp6xz2'
const dataset = process.env.dataset || 'production'
const apiVersion = process.env.apiVersionSanity || '2023-09-16'

export default defineConfig({
    basePath: "/studio",
    projectId: projectId,
    dataset: dataset,
    schema,
    plugins: [
        deskTool(),
        visionTool({ defaultApiVersion: apiVersion })
    ]
})