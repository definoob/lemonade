import { FunctionComponent } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import styled from 'styled-components';

const StyledLoader = styled(LoadingOverlay)`
  width: 100vw;
  height: 100vh;
  .MyLoader_overlay {
    background: #141414;
  }
  &.MyLoader_wrapper--active {
    overflow: hidden;
  }
`;

const Loading: FunctionComponent = () => {
  return (
    <StyledLoader
      active={true}
      spinner
      text="BUBBLING..."
      classNamePrefix="MyLoader_"
    ></StyledLoader>
  );
};

export default Loading;
