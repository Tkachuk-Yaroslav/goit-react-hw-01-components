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

//  <div class="profile">
//   <div class="description">
//     <img
//       src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//       alt="User avatar"
//       class="avatar"
//     />
//     <p class="name">Petra Marica</p>
//     <p class="tag">@pmarica</p>
//     <p class="location">Salvador, Brasil</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">1000</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">2000</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">3000</span>
//     </li>
//   </ul>
// </div>;

// Profile.propTypes = {
//   username: PropTypes.string,
//   tag: PropTypes.string,
//   location: PropTypes.string,
//   avatar: PropTypes.string,
//   stats: PropTypes.object,
// };

//
