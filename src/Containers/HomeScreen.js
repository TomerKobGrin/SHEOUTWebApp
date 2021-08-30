import useStyles from './Styles/HomeScreenStyle.js'
import { Grid, Card, CardMedia, CardContent, Typography, Button, Tooltip } from '@material-ui/core'
import MultipleProductItems from '../Components/MultipleProductItems.js'
const HomeScreen = (props) => {
    const classes = useStyles()


    return (
        <Grid container>
            <MultipleProductItems />
        </Grid>

    )


}

export default (HomeScreen)


