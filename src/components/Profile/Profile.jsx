import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats: { followers, views, likes }, }) => {
    return (
        <div className={css.container}>
            <div className={css.profile}>
                <img className={css.avatar}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.name}>{name}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
            <ul className={css.list}>
                <li className={css.item}>
                    <span>Followers</span>
                    <span className={css.itemInfo}>{followers}</span>
                </li>
                <li className={css.item}>
                    <span>Views</span>
                    <span className={css.itemInfo}>{views}</span>
                </li>
                <li className={css.item}>
                    <span>Likes</span>
                    <span className={css.itemInfo}>{likes}</span>
                </li>
            </ul>
        </div>
    );
};
export default Profile;