import { combineEpics } from 'redux-observable' 
import * as ProductEpic from './ProductEpic'
import * as OrdersEpic from './OrdersEpic'
export default combineEpics(
    ...Object.values({
        ...ProductEpic,
        ...OrdersEpic
    })
)