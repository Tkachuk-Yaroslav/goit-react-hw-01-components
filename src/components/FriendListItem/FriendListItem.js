import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/fa';

import css from './FriendListItem.module.css';
import { getRandomColor } from 'utils/generate-color';

export default function FriendListItem({ name, avatar, isOnline }) {
  return (
    <li className={css.item} style={{ backgroundColor: getRandomColor() }}>
      <span className={css.status}>
        <FaCircle className={`${css.status} ${css[isOnline]}`} />
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};
