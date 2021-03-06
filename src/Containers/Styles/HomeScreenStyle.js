import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#282c34'
  },
  image: {
    paddingTop: 10,
    width: "90px",
    height: "90px",
    objectFit: 'contain'
  },
  cardWrapper: {
    width: "400px",
    height: "270px",
    justifyContent: 'center'
  },
  addToCartButton: {
    borderRadius: 16
  }

}))

export default useStyles

