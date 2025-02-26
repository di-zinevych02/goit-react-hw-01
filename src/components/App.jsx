

import userData from "../userData.json";
import Profile from '../components/Profile/Profile';
import friends from "../listFriends.json";
import FriendsList from "../components/FriendsList/FriendsList"

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friends} />
    </>
  );
};
export default App; 
