import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { EventInterface } from '../../redux/actionTypes';
import CardBanner from './CardBanner';
import CardInfo from './CardInfo';

interface Props {
  data: EventInterface;
  hover(flag: boolean): void;
}

const CardContainer = styled.div`
  margin-left: 12px;
  transition: 0.5s;
  cursor: pointer;

  :hover {
    transition: 0.5s;
    transform: scale(1.1);
    transform-origin: center;
    z-index: 100;
  }
`;

const Card: FunctionComponent<Props> = (props) => {
  const { data, hover } = props;
  return (
    <CardContainer
      onMouseOver={() => hover(true)}
      onMouseOut={() => hover(false)}
    >
      <CardBanner
        coverImg={data.cover}
        hostAvatar={data.host_expanded.image_avatar}
      />
      <CardInfo
        title={data.title}
        start={data.start}
        latitude={data.latitude}
        longitude={data.longitude}
        cost={data.cost}
        currency={data.currency}
      />
    </CardContainer>
  );
};

export default Card;
