import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    appBar: {
      background: 'white', boxShadow: 'none'
    },
    logo: {
      height: '10vmin',
    },
    login: {
      marginLeft: 'auto',
    },
    links: {
      display: 'flex',
      flexDirection: 'row',
    },
    offset: {
      marginTop: 100
    }
}))

export default useStyles

