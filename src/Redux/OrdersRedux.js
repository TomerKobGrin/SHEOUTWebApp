import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'


/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    resetState: [],
    fetchOrders: [],
    fetchOrdersSuccess: ['orders'],
},
    { prefix: 'ORDERS_' }
)

export const OrdersTypes = Types
export const OrdersActions = Creators
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    orders: null,
    isFetching: false
})

/* ------------- Selectors ------------- */

export const OrdersSelectors = {
     getOrders: state => state.orders.orders,
     getIsFetching: state => state.orders.isFetching,
}

/* ------------- Reducers ------------- */

const resetState = (state) => {
    return INITIAL_STATE
}

const fetchOrders = (state) => {
    return state.merge({ isFetching: true })
}

const fetchOrdersSuccess = (state, {orders}) => {
    return state.merge({ isFetching: false, orders })
}



/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.RESET_STATE]: resetState,
    [Types.FETCH_ORDERS]: fetchOrders,
    [Types.FETCH_ORDERS_SUCCESS]: fetchOrdersSuccess,
})
