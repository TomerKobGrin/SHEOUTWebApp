import useStyles from './Styles/SingleProductItemStyles'
import { Grid, Typography, Button, ButtonGroup } from '@material-ui/core'
import { useState } from 'react'
import CounterWidget from './CounterWidget'

const AddToCartWidget = (props) => {
    const { onAddToCartClick } = props
    const classes = useStyles()
    const [counter, updateCounter] = useState(0)
    const raiseCounter = () => updateCounter(counter + 1)
    const decreaseCounter = () => {
        if (counter > 0) {
            updateCounter(counter - 1)
        }
    }

    return (
        <Grid
            container
            alignItems="center"
            justifyContent="center"
            item
            spacing={3}
        >

            <Grid item >
                <div style={{ width: 40 }} />
            </Grid>
            <Grid item >
                <Button
                    onClick={() => {
                        if (counter > 0) {
                            onAddToCartClick(counter)
                            updateCounter(0)
                        }
                    }}
                    className={classes.addToCartButton}
                    variant="contained"
                >
                    Add To Cart
                </Button>
            </Grid>
            <Grid item >
                <CounterWidget counter={counter} onPressPlus={raiseCounter} onPressMinus={decreaseCounter} />
            </Grid>

        </Grid>

    )
}

export default AddToCartWidget

