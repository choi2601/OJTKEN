import { memo } from 'react';
import ReactLoading from 'react-loading';

import styled from 'styled-components';

function Loader() {
  return (
    <LoaderWrapper>
      <ReactLoading type="spin" color="red" />
    </LoaderWrapper>
  );
}

export default memo(Loader);

const LoaderWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: text;
`;
