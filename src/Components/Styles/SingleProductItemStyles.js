import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  image: {
    paddingTop: 10,
    width: "140px",
    height: "140px",
    objectFit: 'contain'
  },
  cardWrapper: {
    width: "300px",
    height: "350px",
    justifyContent: 'center',
    background: 'transparent', boxShadow: 'none'
  },
  addToCartButton: {
    borderRadius: 16
  }

}))

export default useStyles

