import { FunctionComponent, useEffect } from 'react';
import { EventInterface } from '../../redux/actionTypes';
import Card from '../../components/Card';
import CreateCard from '../../components/CreateCard';

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
      <h2 className="homescreen__title">my experience</h2>
      <div className="homescreen__data">
        <CreateCard />
        {data.map((event, idx) => (
          <Card key={idx} data={event} />
        ))}
      </div>
    </div>
  );
};

export default Home;
