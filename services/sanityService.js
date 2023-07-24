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

export const fetchRestaurantsByCategory = async (categoryId) => {
  const query = `
    *[_type == "featured" && _id == $categoryId] {
      ...,
      restaurants[]->{
        ...,
        dishes[] ->,
        type-> {
          name
        }
      },
    }[0]
  `;

  try {
    const data = await sanityClient.fetch(query, { categoryId })
    return data
  } catch (error) {
    console.error('Error fetching restaurants by category:', error);
    throw error;
  }
}

export const fetchAllRestaurants = async () => {
  const query = `
    *[_type == "restaurant"] {
      ...,
      dishes[] ->,
      type-> {
        name
      }
    }
  `;

  try {
    const data = await sanityClient.fetch(query);
    return data;
  } catch (error) {
    console.error('Error fetching all restaurants:', error);
    throw error;
  }
}
