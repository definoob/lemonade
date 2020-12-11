import { FunctionComponent, useEffect } from 'react';

interface Props {
  data: Array<Object>;
  isLoading: boolean;
  isError: boolean;
  fetchData(latitude: number, longitude: number): void;
}
const Home: FunctionComponent<Props> = (props) => {
  const { fetchData } = props;

  useEffect(() => {
    fetchData(2.1734, 41.3851);
  }, []);

  return (
    <div>
      Home screen - I am going to list cards here
    </div>
  );
}

export default Home;
