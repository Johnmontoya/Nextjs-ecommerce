import { createClient } from "next-sanity";

export const client = createClient({
    projectId: process.env.projectId,
    dataset: process.env.dataset,
    apiVersion: process.env.apiVersionSanity,
    useCdn: false,
    token: "sk4Xl2P9nx7ySUkJseIvFirVVr7YbemX5CNw4QJMvHcowldn7s5OB41TLGhSLMpzFpXTY6OQLf4vuSqcc99MH76l07HXoLd5T5tXtufH4HvsBV3nGuqXaHYJr5JzvBcIjpVwSnoq8ydrbv9Sbv5SSA1R8cFULv3w8i8fRwdk8pTPVIsqD9rB"
})
