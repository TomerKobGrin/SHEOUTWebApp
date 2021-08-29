import { Grid, GridList } from '@material-ui/core'
import SingleProductItem from '../Components/SingleProductItem'
import { useSelector } from 'react-redux'
import { ProductSelectors } from '../Redux/ProductRedux.js'
const MultipleProductItems = () => {
    const items = useSelector(ProductSelectors.getItems)
    return (
        <GridList  justifyContent='center' container spacing={5} >
            {items.map((item, index) => <SingleProductItem item={item} index={index}/>)}
        </GridList>
    )
}

export default (MultipleProductItems)


