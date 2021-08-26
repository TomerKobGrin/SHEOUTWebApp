import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    appBar: {
      background: 'transparent', boxShadow: 'none'
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
}))

export default useStyles
