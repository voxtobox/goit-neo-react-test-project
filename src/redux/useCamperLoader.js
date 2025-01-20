import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCamperItems } from './camperOps';
import {
  selectFilterLocation,
  selectFilterVehicleType,
  selectFilterFeatures,
  selectFilterPage,
  setPage,
  resetFilter,
} from './filterSlice';
import {
  selectCamperItemsLoadedNumber,
  selectCamperItemsTotal,
} from './camperSlice';

const PAGE_LIMIT = 4;

// Helper to load catalog items with filter data
export function useCamperLoader() {
  const dispatch = useDispatch();
  // Well, I know... but this is the best way I could invent
  const [loadTrigger, setLoadTrigger] = useState(0);

  const filterLocation = useSelector(selectFilterLocation);
  const filterFeatures = useSelector(selectFilterFeatures);
  const filterVehicleType = useSelector(selectFilterVehicleType);
  const itemsLoadedNumber = useSelector(selectCamperItemsLoadedNumber);
  const itemsTotal = useSelector(selectCamperItemsTotal);
  const page = useSelector(selectFilterPage);

  const canLoadMore = itemsLoadedNumber < itemsTotal;

  function getParams() {
    const params = { limit: PAGE_LIMIT, page };

    if (filterVehicleType) params.form = filterVehicleType;

    if (filterLocation) params.location = filterLocation;

    filterFeatures.forEach(feature => {
      if (feature === 'automatic') params.transmission = feature;
      else params[feature] = true;
    });

    return params;
  }

  // Load items with params by filter
  async function load() {
    const params = getParams();
    return await dispatch(fetchCamperItems(params));
  }

  // To load more with the same params
  function loadMore() {
    dispatch(setPage(page + 1));
    setLoadTrigger(loadTrigger + 1);
  }

  // Initial loading
  function loadInitial() {
    dispatch(resetFilter());
    setLoadTrigger(loadTrigger + 1);
  }

  // For load by filter
  function loadFilter() {
    dispatch(setPage(1));
    setLoadTrigger(loadTrigger + 1);
  }

  // Trick to make load request after params changes
  useEffect(() => {
    if (loadTrigger) load();
  }, [loadTrigger]);

  return {
    dispatch,
    load,
    loadMore,
    loadFilter,
    loadInitial,
    canLoadMore,
  };
}
