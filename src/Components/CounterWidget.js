import useStyles from './Styles/CounterWidgetStyles'
import { Grid, Typography, Button, ButtonGroup } from '@material-ui/core'

const CounterWidget = (props) => {
    const classes = useStyles()
    const { counter, onPressPlus, onPressMinus } = props
    return (
        <ButtonGroup
            orientation="vertical"
            variant="contained"
            className={classes.buttonGroup}
        >
            <Button 
                onClick={onPressPlus} 
                className={classes.buttonStyle}
            >
                <Typography className={classes.buttonTextStyle}> + </Typography>
            </Button>
            <Typography className={classes.counterText}>
                {counter}
            </Typography>
            <Button 
                onClick={onPressMinus} 
                className={classes.buttonStyle}
            >
                <Typography className={classes.buttonTextStyle}> - </Typography>
            </Button>
        </ButtonGroup>
    )
}


export default CounterWidget

