import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const sanityClient = createClient({
  projectId: 's54sv9i4',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-07-18'
})

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source) => builder.image(source)

export default sanityClient
