import Profile from "./Profile/Profile";
import user from '../data-json/user';
import data from '../data-json/data';
import transactions from '../data-json/transactions';
import friends from '../data-json/friends';
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import { getRandomColor } from "utils/generate-color";

const styleForH2 = {
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        color: '#004243',
        fontSize: '24px',
        fontWeight: 'bold',
        backgroundColor: getRandomColor(),
        padding: '20px',
        width: '200px',
      borderRadius: '10px'}

export const App = () => {
  return (
    <div>
      <h1 style={{
        marginRight: 'auto',
        marginLeft: 'auto',
        textAlign: 'center',
        padding: '20px',
        background: 'linear-gradient(to bottom, blue 50%, yellow 50%)',
        height: '200px',
        color: '#fff'}}>
        goit-react-hw-01-components
      </h1>
      <h2 style={styleForH2}>1 Task</h2>
     <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2 style={styleForH2}>2 Task</h2>

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <h2 style={styleForH2}>3 Task</h2>

      <FriendList friends={friends} />
      <h2 style={styleForH2}>4 Task</h2>

      <TransactionHistory items={transactions}/>
    </div>
  );
};