import PropTypes from 'prop-types';
import { ProfileContainer, ImgContainer, ProfileList } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
    <ProfileContainer>
        <ImgContainer>
            <img
            src={avatar}
            alt="User avatar"
            width={300}
            />
            <p>{username}</p>
            <p>@{tag}</p>
            <p>{location}</p>
        </ImgContainer>

        <ProfileList>
            <li>
                <span>Followers</span>
                <span>{stats.followers}</span>
            </li>
            <li>
                <span>Views</span>
                <span>{stats.views}</span>
            </li>
            <li>
                <span>Likes</span>
                <span>{stats.likes}</span>
            </li>
        </ProfileList>
    </ProfileContainer>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,   
    tag: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired, 
    stats: PropTypes.object,
}