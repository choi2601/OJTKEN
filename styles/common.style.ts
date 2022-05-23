import styled from 'styled-components';

import type * as T from 'types/styles';

const SizedBox = styled.div<T.SizedBoxType>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const FlexBox = styled.div`
  display: flex;
`;

const FlexCenter = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;

const ButtonCenter = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextArea = styled.p<T.TextAreaType>`
  font-family: ${(props) => props.sort};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};

  ${(props) => (props.center ? 'text-align: center' : '')};
`;

TextArea.defaultProps = {
  sort: 'Roboto-Regular',
};

export { SizedBox, FlexBox, FlexCenter, ButtonCenter, TextArea };
