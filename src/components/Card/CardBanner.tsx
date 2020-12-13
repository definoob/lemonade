import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface Props {
  coverImg: string;
  hostAvatar: string;
}

const Container = styled.div<{ bgImg: string }>`
  width: 372px;
  height: 231px;
  background-image: url(${(props) => props.bgImg});
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #ffffff0f;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-top: 11px;
  margin-left: 12px;
  border: 2px solid white;
`;

const CardBanner: FunctionComponent<Props> = ({ coverImg, hostAvatar }) => (
  <Container bgImg={coverImg}>
    <Avatar src={hostAvatar} alt="hostAvatar" />
  </Container>
);

export default CardBanner;
