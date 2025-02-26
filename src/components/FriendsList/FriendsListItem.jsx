import clsx from "clsx";
import css from "./FriendsListItem.module.css";

const FriendsListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={css.container}>
            <img src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
            <p className={clsx(css.status,
                isOnline ? css.online : css.offline)}
            >
                {isOnline ? "Online" : "Offline"}
            </p>
        </div>
    );
};
export default FriendsListItem;