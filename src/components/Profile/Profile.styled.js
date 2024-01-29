import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    margin: 0 auto;
    justify-content: center;
    background-color: #f3f3f3;
`;

export const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #d3d3d3;
    border-radius: 10px;

    & img {
        border-radius: 20px;
        margin-bottom: 10px;
    }

    & p {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 10px;
        color: #5b446a;
    }
`;

export const ProfileList = styled.ul`
    padding: 12px;
    display: flex;
    align-items: center;
    background-color: #d3d3d3;
    border-radius: 10px;

    & li:not(:last-child) {
        margin-right: 20px;
    }
    & li {
        color: #5b446a;
        font-size: 20px;
        padding: 15px;
        border: solid 1px #5b446a;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;