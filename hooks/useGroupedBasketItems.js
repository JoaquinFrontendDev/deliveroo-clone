import { useSelector } from "react-redux";
import { selectBasketItems } from "../slices/basketSlice";
import { useMemo } from "react";

const useGroupedBasketItems = () => {
  const selectedBasketItems = useSelector(selectBasketItems)

  return useMemo(() => {
    const groupedBasketItems = selectedBasketItems.reduce((results, item) => {
      if (results[item.id]) {
        results[item.id].count += 1;
      } else {
        results[item.id] = { ...item, count: 1 };
      }
      return results;
    }, {});

    return Object.values(groupedBasketItems);
  }, [selectedBasketItems]);
};

export default useGroupedBasketItems
