import styled, { css } from 'styled-components';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import SportsBarIcon from '@mui/icons-material/SportsBar';

import { ButtonCenter, TextArea } from '@styles/commonStyle';

const CardBoardWrapper = styled.article`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      position: relative;
      margin-bottom: 30px;
      padding: 15px 20px;
      border: 1.3px solid ${color.gray[400]};
      border-radius: 5px;
    `;
  }}
`;

const StatusBar = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

const HandleWishListButton = styled(ButtonCenter)`
  background: none;
  border: none;
  cursor: pointer;
`;

const CustomShoppingCartIcon = styled(ShoppingCartIcon)`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      color: ${color.black};

      &:hover {
        color: ${color.blue[700]};
      }
    `;
  }}
`;

const CustomCheckCircleIcon = styled(CheckCircleIcon)``;

const CustomDeleteIcon = styled(DeleteIcon)`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      color: ${color.black};

      &:hover {
        color: ${color.blue[700]};
      }
    `;
  }}
`;

const ProductFigure = styled.figure`
  text-align: center;
  cursor: pointer;
`;

const ProductImage = styled.img`
  height: 320px;
`;

const ProductMainInfo = styled.div`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      padding: 0 10px;
      margin-top: 20px;
      padding-top: 10px;
      border-top: 1px solid ${color.gray[400]};
    `;
  }}
`;

const ProductName = styled(TextArea)`
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ProdcutTagline = styled(TextArea)`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      display: inline-block;
      width: 100%;
      white-space: nowrap;
      overflow: scroll;
      color: ${color.gray[700]};

      &::-webkit-scrollbar {
        display: none;
      }
    `;
  }}
`;

const ProductABVInfo = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ProductABVRatio = styled(TextArea)``;

const CustomSportsBarIcon = styled(SportsBarIcon)<{ abv: number }>`
  ${({ theme, abv }) => {
    const { color, abvRatio } = theme;

    return css`
      width: 23px;
      height: 23px;
      margin-left: 5px;
      color: ${abv < abvRatio.low
        ? color.abvAlert['low']
        : abv > abvRatio.high
        ? color.abvAlert['high']
        : color.abvAlert['medium']};
    `;
  }}
`;

export {
  CardBoardWrapper,
  StatusBar,
  HandleWishListButton,
  CustomShoppingCartIcon,
  CustomCheckCircleIcon,
  CustomDeleteIcon,
  ProductFigure,
  ProductImage,
  ProductMainInfo,
  ProductName,
  ProdcutTagline,
  ProductABVInfo,
  ProductABVRatio,
  CustomSportsBarIcon,
};
