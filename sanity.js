import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-07-18'
})

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source) => builder.image(source)

export default sanityClient
