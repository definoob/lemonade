import { FunctionComponent, useState } from 'react';
import HomeIcon from '../../common/icons/Home';
import CreateBtnIcon from '../../common/icons/CreateButton';
import MailboxIcon from '../../common/icons/MailBox';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const IconText = styled.span<{ color: string }>`
  color: ${(props) => props.color};
`;

const BottomBar: FunctionComponent = () => {
  const history = useHistory();
  const [currentPath, setCurrentPath] = useState(history.location.pathname);

  const getIconColor = (name: string): string => {
    if (name === '/inbox') {
      if (currentPath === name) {
        return '#a667f3';
      }
      return checkNewMsg() ? 'white' : 'rgba(255, 255, 255, 0.42)';
    }
    return currentPath === name ? '#a667f3' : 'rgba(255, 255, 255, 0.42)';
  };

  // this needs to be updated later using backend data.
  const checkNewMsg = (): boolean => currentPath !== '/inbox';

  const pushNewScreen = (path: string): void => {
    setCurrentPath(path);
    history.push(path);
  };

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__icon" onClick={() => pushNewScreen('/')}>
          <HomeIcon fill={getIconColor('/')} />
          <IconText color={getIconColor('/')}>home</IconText>
        </div>
        <div
          className="footer__icon"
          onClick={() => pushNewScreen('/createevent')}
        >
          <CreateBtnIcon fill={getIconColor('/createevent')} />
          <IconText color={getIconColor('/createevent')}>create</IconText>
        </div>
        <div className="footer__icon" onClick={() => pushNewScreen('/inbox')}>
          <MailboxIcon fill={getIconColor('/inbox')} newMsg={checkNewMsg()} />
          <IconText color={getIconColor('/inbox')}>inbox</IconText>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
