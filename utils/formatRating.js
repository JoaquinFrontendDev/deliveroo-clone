export const formatRating = (rating) => {
  let label;

  if (rating === 1) {
    label = "Not good";
  } else if (rating === 2) {
    label = "Regular";
  } else if (rating === 3) {
    label = "Good";
  } else if (rating === 4) {
    label = "Very Good";
  } else if (rating === 5) {
    label = "Excellent";
  } else {
    throw new Error("Rating must be between 1 and 5.");
  }

  return {
    value: rating.toFixed(2),
    label: label
  };
}
