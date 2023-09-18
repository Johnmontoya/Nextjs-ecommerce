import { defineCliConfig } from "sanity/cli"

const projectId = process.env.projectId || 'hupp6xz2'
const dataset = process.env.dataset || 'production'

export default defineCliConfig({ api: { projectId, dataset }})