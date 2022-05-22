import styled from 'styled-components';

export const SizedBox = styled.div<{ width?: number; height?: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexCenter = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;

export const ButtonCenter = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextArea = styled.p<{
  sort: string;
  size: string;
  weight?: number;
  center?: boolean;
  color?: string;
}>`
  font-family: ${(props) => props.sort};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};

  ${(props) => (props.center ? 'margin: 0 auto' : '')};
`;
