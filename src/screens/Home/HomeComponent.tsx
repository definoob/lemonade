import { FunctionComponent, useEffect } from 'react';

interface Props {
  data: Array<Object>;
  isLoading: boolean;
  isError: boolean;
  fetchData(latitude: number, longitude: number): void;
}
const Home: FunctionComponent<Props> = (props) => {
  const { fetchData, data, isLoading, isError } = props;

  useEffect(() => {
    fetchData(2.1734, 41.3851);
  }, [fetchData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div>
      Home screen - I am going to list cards here
    </div>
  );
}

export default Home;
