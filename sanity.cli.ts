import { defineCliConfig } from "sanity/cli"

const projectId = process.env.projectId || ''
const dataset = process.env.dataset || ''

export default defineCliConfig({ api: { projectId, dataset }})