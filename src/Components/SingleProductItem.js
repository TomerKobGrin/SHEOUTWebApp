import useStyles from './Styles/SingleProductItemStyles'
import { Grid, Card, CardMedia, CardContent, Typography, Button, Tooltip, withStyles, Snackbar } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import { ProductActions } from '../Redux/ProductRedux'
import { useDispatch } from 'react-redux'
import { Fragment, useCallback, useState } from 'react'
import { Alert } from '@material-ui/lab'

const SingleProductItem = (props) => {
    const { item, index } = props
    const classes = useStyles()
    const dispatch = useDispatch()
    const addProductToBag = useCallback(() => dispatch(ProductActions.addProductToBag(item)), [dispatch])
    const [isSnackBarOpen, setIsSnackBarOpen] = useState(false)

    const closeSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setIsSnackBarOpen(false)
    }
    return (
        <Fragment>
            <Grid item>
                <Card className={classes.cardWrapper}>
                    <Grid justifyContent='center' container>
                        <CardMedia className={classes.image}
                            component="img"
                            image={item.image}
                        />
                    </Grid>
                    <CardContent>
                        <Grid wrap='nowrap' alignItems='center' container direction='column' spacing={1}>
                            <Grid align='center' item >
                                <Tooltip title={item.title}>
                                    <Typography align='center' noWrap variant={"h6"}>
                                        {item.title.length > 28 ? item.title.substr(0, 22) + "..." : item.title}
                                    </Typography>
                                </Tooltip>
                            </Grid>
                            <Grid item >
                                <Typography color="secondary" variant={"body1"}>
                                    {`$${item.price}`}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Rating readOnly={true} precision={0.5} value={item.rating.rate} />
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={() => {
                                        addProductToBag()
                                        setIsSnackBarOpen(true)
                                    }}
                                    className={classes.addToCartButton}
                                    variant="contained"
                                >
                                    Add To Cart
                                </Button>
                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Snackbar open={isSnackBarOpen} autoHideDuration={3000} onClose={closeSnackBar}>
                <Alert onClose={closeSnackBar} severity="success" >
                    {`${item.title} was added to your bag`}
                </Alert>
            </Snackbar>
        </Fragment>

    )
}


export default SingleProductItem