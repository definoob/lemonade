import { FunctionComponent, useEffect, useState, useRef } from 'react';
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
  const container = useRef<HTMLDivElement>(null);
  const [isLeftScrollable, setIsLeftScrollable] = useState(false);
  const [isRightScrollable, setIsRightScrollable] = useState(true);

  useEffect(() => {
    fetchData(2.1734, 41.3851);
  }, [fetchData]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const width = e.currentTarget.scrollWidth;
    const left = e.currentTarget.scrollLeft;
    const clientWidth = e.currentTarget.clientWidth;

    setIsLeftScrollable(left > 0);
    setIsRightScrollable(clientWidth + left < width);
  };

  const onScrollLeft = () =>
    container.current?.scroll(container.current.scrollLeft - 40, 0);
  const onScrollRight = () =>
    container.current?.scroll(container.current.scrollLeft + 40, 0);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div style={{ position: 'relative' }}>
      <h2 className="homescreen__title">my experiences</h2>
      <div className="homescreen" onScroll={handleScroll} ref={container}>
        <div className="homescreen__data">
          <CreateCard />
          {data.map((event, idx) => (
            <Card key={idx} data={event} />
          ))}
        </div>
      </div>
      {isLeftScrollable && (
        <div
          className="homescreen__scrollButton homescreen__leftScrollButton"
          onClick={onScrollLeft}
        >
          <span>&lsaquo;</span>
        </div>
      )}
      {isRightScrollable && (
        <div
          className="homescreen__scrollButton homescreen__rightScrollButton"
          onClick={onScrollRight}
        >
          <span>&rsaquo;</span>
        </div>
      )}
    </div>
  );
};

export default Home;
