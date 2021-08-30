import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    submitButton: {
        borderRadius: 16, 
        marginBottom: 40
    },
    logoContainer: {
       paddingLeft:40, 
       paddingRight:40, 
       paddingBottom:200,
       maxWidth: '90%', 
       maxHeight: '90%'
    }

}))

export default useStyles

