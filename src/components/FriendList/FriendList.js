import PropTypes from 'prop-types';

import css from './FriendList.module.css';
import FriendListItem from 'components/FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  console.log(friends);
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          friends={friends}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
