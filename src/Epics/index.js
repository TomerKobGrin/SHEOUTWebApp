import { combineEpics } from 'redux-observable' 
import * as ProductEpic from './ProductEpic'
export default combineEpics(
    ...Object.values({
        ...ProductEpic
    })
)