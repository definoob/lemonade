import { FunctionComponent } from 'react';

interface IProps {
  fill: string;
}

const HomeIcon: FunctionComponent<IProps> = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill={fill}
      d="M17 22h-2c-1.103 0-2-.896-2-2v-3h-2v3c0 1.104-.897 2-2 2H7c-1.103 0-2-.896-2-2v-6H3c-.404 0-.769-.243-.924-.617-.155-.373-.069-.803.217-1.09l9-9c.391-.39 1.023-.39 1.414 0l9 9c.286.287.372.716.217 1.09-.155.374-.52.617-.924.617h-2v6c0 1.102-.897 2-2 2zm-7-7h4c.552 0 1 .448 1 1v4h2.001v-7c0-.552.447-1 1-1h.585L12 5.413 5.414 12H6c.552 0 1 .45 1 1v7h2v-4c0-.552.447-1 1-1z"
    />
  </svg>
);

export default HomeIcon;
