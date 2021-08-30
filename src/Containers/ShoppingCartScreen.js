import useStyles from './Styles/ShoppingCartScreenStyle'
import { Button, Grid, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { ProductSelectors } from '../Redux/ProductRedux.js'
import SingleProductInBag from '../Components/SingleProductInBag'
import Images from '../Themes/Images'
const ShoppingCartScreen = () => {
    const classes = useStyles()
    const items = useSelector(ProductSelectors.getUserBag)
    const overallPrice = useSelector(ProductSelectors.getOverallPrice)
    return (
        <Grid spacing={5} justifyContent='center' container >
            <Grid  spacing={3} direction='column' xs={6} container alignItems='center' justifyContent='flex-start' item>
                <Grid item>
                    <Typography variant={'h4'} >
                        {`Checkout`}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant={'subtitle1'} >
                        {`Total amount $${overallPrice.toFixed(2)}`}
                    </Typography>
                </Grid>
                <Grid item>
                    <Button className={classes.submitButton} variant='contained' color='primary'>Submit your order</Button>
                </Grid>
                <Grid alignItems='center' justifyContent='center' container item>
                    <img className={classes.logoContainer} src={Images.customer} />
                </Grid>
            </Grid>
            <Grid alignItems='flex-end' xs={4} item container direction='column' >
                {Object.values(items).map((item, index) => <SingleProductInBag item={item} key={index} />)}
            </Grid>


        </Grid>
    )
}

export default (ShoppingCartScreen)


