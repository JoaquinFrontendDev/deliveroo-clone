export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant name",
      validation: (Rule) => Rule.required()
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200)
    },
    {
      name: "image",
      type: "image",
      title: "Image of the restaurant",
    },
    {
      name: "lat",
      type: "string",
      title: "Latitude of the Restaurant",
    },
    {
      name: "long",
      type: "string",
      title: "Longitude of the Restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Restaurant address",
      validation: (Rule) => Rule.required()
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a rating from (1-5 Stars)",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a value between 1 and 5")
    },
    {
      name: "type",
      type: "string",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }]
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }]
    },
    {
      name: "delivery_time",
      type: "string",
      title: "Delivery Time (in minutes)",
      validation: (Rule) => Rule.required()
        .regex(/^[0-9]+-[0-9]+$/, {
          name: 'validDeliveryTime',
          invert: false,
          description: 'Valid delivery time should be in the format "30-35".'
        })
        .error("Please enter a valid delivery time in the format '30-35'")
    }
  ]
};
