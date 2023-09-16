import { defineConfig } from "sanity";
import { schema } from "./sanity/schema";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

const projectId = process.env.projectId || ''
const dataset = process.env.dataset || ''
const apiVersion = process.env.apiVersionSanity

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