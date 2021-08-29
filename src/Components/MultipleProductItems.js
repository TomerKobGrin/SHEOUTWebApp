import { CircularProgress, Grid } from '@material-ui/core'
import SingleProductItem from '../Components/SingleProductItem'
import { useSelector } from 'react-redux'
import { ProductSelectors } from '../Redux/ProductRedux.js'
const MultipleProductItems = () => {
    const items = useSelector(ProductSelectors.getItems)
    return (
        <Grid justifyContent='center' alignItems='center' container spacing={5} >
            {items ? items.map((item, index) => <SingleProductItem item={item} key={index}/>) : <Grid item> <CircularProgress style={{marginTop: '25vh'}} size="50px" color="black"/> </Grid>}
        </Grid>
    )
}

export default (MultipleProductItems)


