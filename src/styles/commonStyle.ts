import styled from 'styled-components';

import type * as StyleType from '@type/styles';

const SizedBox = styled.div<StyleType.SizedBoxType>`
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

const TextArea = styled.p<StyleType.TextAreaType>`
  font-family: ${(props) => props.sort};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.height};
  color: ${(props) => props.color};

  ${(props) => (props.center ? 'text-align: center' : '')};
`;

TextArea.defaultProps = {
  sort: 'Roboto-Regular',
};

export { SizedBox, FlexBox, FlexCenter, ButtonCenter, TextArea };
