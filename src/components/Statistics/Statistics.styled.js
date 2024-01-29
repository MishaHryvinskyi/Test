import styled from "@emotion/styled";
import { getRandomHexColor } from "utils/getRandomHexColor";

export const StatisticsSection = styled.section`
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: #f3f3f3;
`;

export const StatisticsTitle = styled.h2`
    color: #5b446a;
`;

export const StatisticsList = styled.ul`
    padding: 20px;
    display: flex;
    background-color: #d3d3d3;
    border-radius: 10px;
`;

export const StatisticsItem = styled.li`
    display: flex;
    flex-direction: column; 
    padding: 20px;
    background-color: ${getRandomHexColor};
    color: white;
    width: 80px;
    text-align: center;
    border-radius: 4px;
`;