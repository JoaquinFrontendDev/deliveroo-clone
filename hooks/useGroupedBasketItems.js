import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLastOrder } from '../slices/userSlice';
import { selectBasketItems } from '../slices/basketSlice';

const useGroupedBasketItems = () => {
  const selectedBasketItems = useSelector(selectBasketItems)
  const dispatch = useDispatch()

  useMemo(() => {
    const groupedBasketItems = selectedBasketItems.reduce((results, item) => {
      if (results[item.id]) {
        results[item.id].count += 1;
      } else {
        results[item.id] = { ...item, count: 1 };
      }
      return results;
    }, {});

    dispatch(setUserLastOrder(Object.values(groupedBasketItems)));
  }, [selectedBasketItems, dispatch]);

};

export default useGroupedBasketItems;
