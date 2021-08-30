import useStyles from './Styles/SingleProductInBagStyles'
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core'
import { ProductActions } from '../Redux/ProductRedux'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import CounterWidget from './CounterWidget'
import DeleteIcon from '@material-ui/icons/Delete'
const SingleProductInBag = (props) => {
    const { item } = props
    const classes = useStyles()
    const dispatch = useDispatch()
    const removeProductFromBag = useCallback((itemTitle) => dispatch(ProductActions.removeItemFromBag(itemTitle)), [dispatch])
    const lowerItemAmountInBag = useCallback((itemTitle) => dispatch(ProductActions.lowerItemAmountInBag(itemTitle)), [dispatch])
    const addProductToBag = useCallback((item) => dispatch(ProductActions.addProductToBag(item, 1)), [dispatch])
    return (
        <Grid item>
            <Card className={classes.cardWrapper}>
                <Grid justifyContent='flex-start' container>
                    <Grid container xs={4} item>
                        <CardMedia className={classes.image}
                            component="img"
                            image={item.image}
                        />
                    </Grid>
                    <Grid xs={8} container align="center" justifyContent="center" alignItems="center" item >
                        <Grid item>
                            <Typography variant={"subtitle2"}>
                                {item.title}
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>
                <CardContent className={classes.cardContent}>
                    <Grid alignItems='center' justifyContent='center' container item >
                        <Grid justifyContent='flex-start' container xs={2} item >
                            <CounterWidget
                                onPressMinus={() => lowerItemAmountInBag(item.title)}
                                onPressPlus={() => addProductToBag(item)}
                                counter={item.count}
                            />
                        </Grid>
                        <Grid justifyContent="flex-start" container xs={1} item >
                            <Typography className={classes.xText}>{'X'}</Typography>
                        </Grid>
                        <Grid xs={3} justifyContent="center" container item >
                            <Typography>
                                {`$${item.price}`}
                            </Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} xs={1} item >
                            <Typography>
                                {`=`}
                            </Typography>
                        </Grid>
                        <Grid xs={5} justifyContent="flex-end" alignItems='center' container item >
                            <Grid xs={6} item >
                                <Typography >
                                    {`$${item.price * item.count}`}
                                </Typography>
                            </Grid>
                            <Grid xs={3} item >
                                <Button onClick={() => {
                                    removeProductFromBag(item.title)
                                }}>
                                    <DeleteIcon />
                                </Button>
                            </Grid>

                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default SingleProductInBag

