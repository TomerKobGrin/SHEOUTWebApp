import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    addProductToBag: ['item'],
},
{ prefix: 'PRODUCT_' }
)

export const ProductTypes = Types
export const ProductActions = Creators
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
   items: {}
})

/* ------------- Selectors ------------- */

export const ProductSelectors = {

}

/* ------------- Reducers ------------- */

const addProductToBag = (state, {item }) => {
    debugger
  return state.merge({})
}



/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_PRODUCT_TO_BAG]: addProductToBag,
})
