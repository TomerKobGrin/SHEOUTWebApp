import { API, graphqlOperation } from 'aws-amplify'
import { ofType } from 'redux-observable'
import ProductActions, { ProductTypes } from '../Redux/ProductRedux'
import { catchError, mergeMap, of, pluck, switchMap, from, map } from 'rxjs'
import fakeStoreApi from '../Services/fakeStoreApi'
export const fetchProducts = (action$) =>
    action$.pipe(
        ofType(ProductTypes.FETCH_PRODUCTS),
        pluck('payload'),
        switchMap(() => from(fakeStoreApi.getFakeStoreData()).pipe(
            map(value => value.data),
            mergeMap((value) => {
                debugger
                return of(ProductActions.fetchProductsSuccess(value))
            }),
            catchError(error => of(ProductActions.fetchProductsFailure(error)))
        ))
    )

       // switchMap(() => {  add back switch map for api request   
        //     from(API.graphql)
        // })
