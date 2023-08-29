// import user from '../data-json/user';
import PropTypes from 'prop-types';
import defaultImage from './unknown-person.png';

console.log(defaultImage);
export default function Profile({
  username = 'Невідомий',
  tag,
  location,
  avatar = defaultImage,
  stats,
}) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={avatar} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
