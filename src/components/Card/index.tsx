import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { EventInterface } from '../../redux/actionTypes';
import CardBanner from './CardBanner';
import CardInfo from './CardInfo';

interface Props {
  data: EventInterface;
}

const CardContainer = styled.div`
  margin-left: 12px;
`;

const Card: FunctionComponent<Props> = (props) => {
  const { data } = props;
  return (
    <CardContainer>
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
