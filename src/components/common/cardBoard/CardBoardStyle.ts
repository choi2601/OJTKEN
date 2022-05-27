import styled, { css } from 'styled-components';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
      cursor: pointer;
    `;
  }}
`;

const AddWishButton = styled(ButtonCenter)`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const CustomShoppingCartIcon = styled(ShoppingCartIcon)`
  ${({ theme }) => {
    const { color } = theme;

    return css`
      width: 30px;
      height: 30px;
      color: ${color.black};

      &:hover {
        transform: rotate(350deg);
        color: ${color.blue[700]};
      }
    `;
  }}
`;

const ProductFigure = styled.figure`
  text-align: center;
`;

const ProductImage = styled.img`
  height: 320px;
`;

const ProductMainInfo = styled.div`
  padding: 0 10px;
  margin-top: 20px;
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
  ${({ abv }) => {
    return css`
      width: 23px;
      height: 23px;
      margin-left: 5px;
      color: ${abv < 5 ? '#F8D70C' : abv > 10 ? '#FA350F' : '#64D90B'};
    `;
  }}
`;

export {
  CardBoardWrapper,
  AddWishButton,
  CustomShoppingCartIcon,
  ProductFigure,
  ProductImage,
  ProductMainInfo,
  ProductName,
  ProdcutTagline,
  ProductABVInfo,
  ProductABVRatio,
  CustomSportsBarIcon,
};
