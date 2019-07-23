import { GET_HOMEDATA } from './HomeAction';

export const mapDispatchToProps = dispatch => {
    return {
        getHomeData: (state) => dispatch(GET_HOMEDATA(state))
    }
}
export const mapStateToProps = state => {
    return {
        getHomeData: state.homereducer
    }
}