import { API, graphqlOperation } from 'aws-amplify'
import { ofType } from 'redux-observable'
import ProductActions, { ProductSelectors, ProductTypes } from '../Redux/ProductRedux'
import { catchError, mergeMap, of, pluck, switchMap, from, map } from 'rxjs'
import fakeStoreApi from '../Services/fakeStoreApi'
import { PubSub } from 'aws-amplify'
import { listOrders } from '../graphql/myQueries'
import OrdersActions, { OrdersTypes } from '../Redux/OrdersRedux'
export const fetchOrders = (action$) =>
    action$.pipe(
        ofType(OrdersTypes.FETCH_ORDERS),
        switchMap(() => from(API.graphql(graphqlOperation(listOrders))).pipe(
            map(value => value.data.listOrders.items.map(
                value => ({
                    ...value, createdAt: new Date(value.createdAt).toLocaleString()
                })).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))),
            mergeMap((value) => {
                debugger
                return of(OrdersActions.fetchOrdersSuccess(value))
            }),
            catchError(error => { debugger })
        ))
    )
