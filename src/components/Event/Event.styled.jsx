import styled from "@emotion/styled";

const setBgColor = ({ eventType }) => {
    switch(eventType){
        case "free":
            return '#4caf50';
        case "paid":
            return '#2196f3';
        case "vip":
            return '#f44336';
        default: 
            return '#010101';
    }
}

export const Chip = styled.span`
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: uppercase;
    color: #fff;


    background-color: ${setBgColor};
`;
