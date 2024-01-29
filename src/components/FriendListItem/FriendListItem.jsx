import { FriendListItemEl, Online } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isonline }) => {
    return (
        <FriendListItemEl>
            <img src={avatar} alt={name} width="248" />
            <h3>{name}<Online status={isonline}></Online></h3>
        </FriendListItemEl>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isonline: PropTypes.bool.isRequired,
}