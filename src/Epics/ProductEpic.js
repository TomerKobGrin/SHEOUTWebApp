import { API, graphqlOperation } from 'aws-amplify'
import { ofType } from 'redux-observable'
import ProductActions, { ProductSelectors, ProductTypes } from '../Redux/ProductRedux'
import { catchError, mergeMap, of, pluck, switchMap, from, map } from 'rxjs'
import fakeStoreApi from '../Services/fakeStoreApi'
export const fetchProducts = (action$) =>
    action$.pipe(
        ofType(ProductTypes.FETCH_PRODUCTS),
        switchMap(() => from(fakeStoreApi.getFakeStoreData()).pipe(
            map(value => value.data),
            mergeMap((value) => {
                return of(ProductActions.fetchProductsSuccess(value))
            }),
            catchError(error => of(ProductActions.fetchProductsFailure(error)))
        ))
    )

export const submitOrder = (action$, state$) =>
    action$.pipe(
        ofType(ProductTypes.SUBMIT_ORDER),
        pluck('payload'),
        switchMap(() => {
            const orderBag = Object.values(ProductSelectors.getUserBag(state$.value))
            return (
                from(API.post('orderServiceDev', '/order', { body: {orderItems: orderBag} })).pipe(
                    mergeMap((data) =>
                        of(ProductActions.submitOrderSucess())
                    ),
                    catchError(error => { debugger})
                )
            )
        })
    )


       // switchMap(() => {  add back switch map for api request   
        //     from(API.graphql)
        // })
