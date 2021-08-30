import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    buttonGroup: { width: 40 },
    buttonStyle: { 
        height: 20, 
        backgroundColor: 'black', 
        opacity: 0.8 
    },
    buttonTextStyle: {
        textAlign: 'center', 
        color: 'white' 
    },
    counterText: {
       textAlign: 'center'
    }
}))

export default useStyles

