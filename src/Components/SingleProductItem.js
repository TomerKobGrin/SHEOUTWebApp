import useStyles from './Styles/SingleProductItemStyles'
import { Grid, Card, CardMedia, CardContent, Typography, Button, Tooltip, withStyles } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

const SingleProductItem = (props) => {
    const {item, index} = props
    const classes = useStyles()
    return (
        <Grid item key={index}>
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
                            <Button className={classes.addToCartButton} variant="contained" >
                                Add To Cart
                            </Button>
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}


export default SingleProductItem