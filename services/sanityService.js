import sanityClient from '../sanity'

export const fetchFeaturedCategories = async () => {
  const query = `
        *[_type == "featured"] {
            ...,
            restaurants[]->{
                ...,
                dishes[] ->
            }
        }`;

  try {
    const data = await sanityClient.fetch(query);
    return data;
  } catch (error) {
    console.error('Error fetching featured categories:', error);
    throw error;
  }
}
