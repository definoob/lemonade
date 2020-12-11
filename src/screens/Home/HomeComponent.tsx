import { FunctionComponent, useEffect } from 'react';
import { EventInterface } from "../../redux/actionTypes"

interface Props {
  data: Array<EventInterface>;
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
      {data.map((event, idx) => {
        return <p key={idx}>{event.cover}</p>;
      })}
    </div>
  );
}

export default Home;
