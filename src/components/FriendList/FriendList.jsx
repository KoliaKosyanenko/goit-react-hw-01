import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css"

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.item}>
      {friends.map((friend) => (
        <li key={friend.id} className={styles.friendList}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};
export default FriendList;
