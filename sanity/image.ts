import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

const imageBuilder = createImageUrlBuilder({
    projectId: process.env.projectId || 'hupp6xz2',
    dataset: process.env.dataset || 'production'
})

export const urlForImage = (source: Image) => {
    return imageBuilder?.image(source).auto('format').fit('max')
}