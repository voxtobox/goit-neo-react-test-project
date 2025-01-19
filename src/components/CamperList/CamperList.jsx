import css from './CamperList.module.css';

import { useSelector } from 'react-redux';
import {
  selectCamperItems,
  selectCamperError,
  selectCamperLoading,
} from '../../redux/camperSlice.js';
import CamperListItem from '../CamperListItem/CamperListItem.jsx';

export default function CamperList() {
  const items = useSelector(selectCamperItems);
  const loading = useSelector(selectCamperLoading);
  const error = useSelector(selectCamperError);

  const isShowEmpty = (items.length === 0 && !loading) || error;

  return isShowEmpty ? (
    <h2>No campers match the chosen filters or location.</h2>
  ) : (
    <ul className={css['camperList']}>
      {items.map(camper => (
        <li key={camper.id}>
          <CamperListItem camper={camper} />
        </li>
      ))}
    </ul>
  );
}
