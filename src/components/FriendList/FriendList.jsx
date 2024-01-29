import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendListEl } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendListEl>
            {friends.map(({ avatar, name, isOnline, id }) => 
            (
                <FriendListItem 
                    key={id} 
                    avatar={avatar} 
                    name={name} 
                    isonline={isOnline}
                />
            ))}
        </FriendListEl>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}
