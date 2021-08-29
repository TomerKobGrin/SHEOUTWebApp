import { Grid } from '@material-ui/core'
import SingleProductItem from '../Components/SingleProductItem'
import { useSelector } from 'react-redux'
import { ProductSelectors } from '../Redux/ProductRedux.js'
const MultipleProductItems = () => {
    const items = useSelector(ProductSelectors.getItems)
    return (
        <Grid justifyContent='center' container spacing={5} >
            {items.map((item, index) => <SingleProductItem item={item} key={index}/>)}
        </Grid>
    )
}

export default (MultipleProductItems)


