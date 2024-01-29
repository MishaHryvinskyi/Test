import styled from "@emotion/styled";

const setBgColor = ({ status }) => status ? 'green' : 'red';

export const FriendListItemEl = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    margin: 5px;
    background-color: #b2b2b2;
    height: 500px;
    border-radius: 20px;

    & img {
        border-radius: 100px;
    }
`;

export const Online = styled.span`
    display: inline-block;
    align-items: center;
    background-color: ${setBgColor};
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-left: 20px;
`;