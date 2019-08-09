import { GET_PRODUCTDATA } from './ProductsAction';

export const mapDispatchToProps = dispatch => {
    return {
        getHomeData: (state) => dispatch(GET_PRODUCTDATA(state))
    }
}
export const mapStateToProps = state => {
    return {
        getHomeData: state.homereducer
    }
}