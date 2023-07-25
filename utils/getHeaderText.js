import NavigationHeaderOptions from "../constants/NavigationHeaderOptions";

export const getHeaderText = (route) => {
  let headerText = NavigationHeaderOptions.find(option => option.route === route.name).headerText;

  if (route.params?.category) {
    headerText = route.params.category.name;
  }

  if (route.params?.featuredTitle) {
    headerText = route.params.featuredTitle;
  }

  return headerText;
}
