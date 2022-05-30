import styled, { css } from 'styled-components';

import SportsBarIcon from '@mui/icons-material/SportsBar';

import { TextArea } from '@styles/commonStyle';

const DetailInfoWrapper = styled.article`
  display: flex;
  text-align: left;
  overflow: scroll;
`;

const ProductFigure = styled.figure`
  max-width: 250px;
  min-width: 250px;
  text-align: center;
`;

const ProductImage = styled.img`
  height: 400px;
`;

const ProductInfo = styled.div`
  max-width: 440px;
  min-width: 440px;
`;

const ProductName = styled(TextArea)`
  padding-bottom: 10px;
`;

const ProductABVInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ProductABVRatio = styled.span`
  font-family: 'Roboto-Light';
  font-size: 18px;
`;

const CustomSportsBarIcon = styled(SportsBarIcon)<{ abv: number }>`
  ${({ theme, abv }) => {
    const { color, abvRatio } = theme;

    return css`
      margin-left: 5px;
      color: ${abv < abvRatio.low
        ? color.abvAlert['low']
        : abv > abvRatio.high
        ? color.abvAlert['high']
        : color.abvAlert['medium']};
    `;
  }}
`;

const ProductDate = styled(TextArea)``;

const ProductDescriptionList = styled.ul`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      max-width: 400px;
      max-height: 260px;
      margin-top: 10px;
      border-top: 1px solid ${color.gray[400]};
      overflow: scroll;
    `;
  }}
`;

const ProductDescription = styled.li`
  margin-bottom: 4px;
`;

const ProductInfoTitle = styled(TextArea)``;

const ProductInfoContent = styled(TextArea)`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      color: ${color.gray[700]};
    `;
  }}
`;

export {
  DetailInfoWrapper,
  ProductFigure,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductABVInfo,
  ProductABVRatio,
  CustomSportsBarIcon,
  ProductDate,
  ProductDescriptionList,
  ProductDescription,
  ProductInfoTitle,
  ProductInfoContent,
};
