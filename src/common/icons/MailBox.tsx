import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface IProps {
  fill: string;
  newMsg: boolean;
}

const Container = styled.div`
  position: relative;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ff6565;
  position: absolute;
  bottom: -3px;
  right: -3px;
  border: 3px solid #141414;
`;

const MailBoxIcon: FunctionComponent<IProps> = ({ fill, newMsg }) => {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <g fill={fill} opacity=".87">
          <path d="M16 9V6h3V3h-5v6H8c-2.757 0-5 2.243-5 5v7h11v3h2v-3h5v-7c0-2.757-2.243-5-5-5zM5 19v-5c0-1.654 1.346-3 3-3s3 1.346 3 3v5H5zm14 0h-6v-5c0-1.13-.391-2.162-1.025-3H16c1.654 0 3 1.346 3 3v5z" />
          <path d="M10 14H6v2h4v-2z" />
        </g>
      </svg>
      {newMsg && <Dot />}
    </Container>
  );
};
export default MailBoxIcon;
