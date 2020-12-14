import { FunctionComponent, useEffect, useState, useRef } from 'react';
import Loading from './Loading';
import { EventInterface } from '../../redux/actionTypes';
import Card from '../../components/Card';
import CreateCard from '../../components/CreateCard';
import useInterval from '../../utils/useInterval';

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
  const [scrollDirection, setScrollDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetchData(2.1734, 41.3851);
  }, [fetchData]);

  useEffect(() => {
    if (isRightScrollable === false || isLeftScrollable === false) {
      setScrollDirection(0);
    }
  }, [isRightScrollable, isLeftScrollable]);

  useInterval(
    () => {
      container.current?.scroll(
        container.current.scrollLeft + scrollDirection,
        0
      );
    },
    scrollDirection === 0 ? null : 1
  );

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const width = e.currentTarget.scrollWidth;
    const left = e.currentTarget.scrollLeft;
    const clientWidth = e.currentTarget.clientWidth;

    setIsLeftScrollable(left > 0);
    setIsRightScrollable(clientWidth + left < width);
  };

  const onSmoothScroll = (direction: number): void =>
    setScrollDirection(direction);

  if (isLoading) {
    return <Loading />;
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
            <Card key={idx} data={event} hover={setIsHovered} />
          ))}
          {isHovered && <div className="homescreen__dark_overlay" />}
        </div>
      </div>
      {isLeftScrollable && (
        <div
          className="homescreen__scrollButton homescreen__leftScrollButton"
          onMouseDown={() => onSmoothScroll(-1)}
          onMouseUp={() => onSmoothScroll(0)}
        >
          <span>&lsaquo;</span>
        </div>
      )}
      {isRightScrollable && (
        <div
          className="homescreen__scrollButton homescreen__rightScrollButton"
          onMouseDown={() => onSmoothScroll(1)}
          onMouseUp={() => onSmoothScroll(0)}
        >
          <span>&rsaquo;</span>
        </div>
      )}
    </div>
  );
};

export default Home;
