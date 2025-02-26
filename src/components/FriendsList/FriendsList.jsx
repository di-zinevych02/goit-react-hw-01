import css from "./FriendsList.module.css";
import FriendsListItem from "./FriendsListItem";

const FriendsList = ({ friends }) => {
    return (
        <div>
            <ul className={css.friendslist}>
                {friends.map((friend) => (
                <li key={friend.id} className={css.friendsitem}>
                    <FriendsListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline} />
                </li>
                ))}
            </ul>
        </div>
    );
};
export default FriendsList;