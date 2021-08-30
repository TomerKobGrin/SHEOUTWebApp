import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  image: {
    width: "90px",
    height: "90px",
    objectFit: 'contain'
  },
  cardWrapper: {
    width: "380px",
    height: "220px",
    justifyContent: 'center',
    background: 'transparent', 
    boxShadow: 'none',
  },
  cardContent: {
    paddingTop: 30
  },
  xText: {
    opacity: 0.4, 
    color: "#008080"
  }

}))

export default useStyles

