import styled from "@emotion/styled";

export const CardContainer = styled.div`
    width: 274px;
    height: auto;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const WrapperCardImage = styled.div`
height: 268px;
margin-bottom: 14px;

border-radius: 14px;
overflow: hidden;

background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  ),
  #f3f3f2;
`;

export const Container = styled.div`
    padding: 50px;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const BrandCar = styled.p`
    color: #121417;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
`;

export const BrandCarAccent = styled.span`
    color: #3470FF;
`;

export const InfoCar = styled.p`
    color: rgba(18, 20, 23, 0.50);
    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
`;

export const InfoCarItem = styled.span`
    border-right: 1px solid rgba(18, 20, 23, 0.50);
    padding-right: 6px;
    padding-left: 6px;
`;
