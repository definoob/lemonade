import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../redux/reducers/rootReducer';
import { fetchData } from '../../redux/actionCreators';
import { GetDataAction } from '../../redux/actionTypes';
import HomeComponent from './HomeComponent';

const mapStateToProps = (state: AppState) => {
  return {
    data: state.events.data,
    isLoading: state.events.isLoading,
    isError: state.events.isError
  };
};

const mapDispatchToProps = (dispatch: Dispatch<GetDataAction>) => ({
  fetchData: (latitude: number, longitude: number) => {
    dispatch(fetchData(latitude, longitude));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
