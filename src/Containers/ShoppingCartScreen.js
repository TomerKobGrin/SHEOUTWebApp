import { Grid, Typography } from '@material-ui/core'
import SingleProductItem from '../Components/SingleProductItem'
import { useSelector } from 'react-redux'
import { ProductSelectors } from '../Redux/ProductRedux.js'
const ShoppingCartScreen = () => {
    const items = useSelector(ProductSelectors.getUserBag)
    const overallPrice = useSelector(ProductSelectors.getOverallPrice)
    return (
        <Grid direction="column" justifyContent='center' alignItems="center" container spacing={5} >
            {Object.values(items).map((item, index) => <SingleProductItem item={item} key={index} />)}
            <Grid item>
                <Typography variant={'subtitle1'} >
                    {`Total amount $${overallPrice}`}
                </Typography>
            </Grid>

        </Grid>
    )
}

export default (ShoppingCartScreen)


