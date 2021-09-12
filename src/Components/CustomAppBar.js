import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Images from '../Themes/Images'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import ListAltIcon from '@material-ui/icons/ListAlt'
import { Badge, Button, Link } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import { ProductSelectors } from '../Redux/ProductRedux'
import useStyles from './Styles/CustomAppBarStyles'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'

const CustomAppBar = () => {
  const classes = useStyles()
  const numberOfItemsInBag = useSelector(ProductSelectors.getOverallItemsInBag)
  return (
    <Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar >
          <Grid container justifyContent="center" alignItems='center'>
            {renderLinks()}
            <Grid container justifyContent="center" item xs={4}>
              <Link href="/">
                <img className={classes.logo} src={Images.appLogo} />
              </Link>
            </Grid>
            {renderShoppingCartButton(numberOfItemsInBag)}
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </Fragment>

  )
}

const renderShoppingCartButton = (numberOfItemsInBag) => {
  const disabled = !numberOfItemsInBag || numberOfItemsInBag === 0
  return (
    <Grid container justifyContent="flex-end" item xs={4}>
      <Link {...(disabled ? {} : { href: "/cart" })}>
        <Button disabled={disabled} >
          <Badge showZero badgeContent={numberOfItemsInBag} color="secondary" >
            <ShoppingCartOutlinedIcon fontSize={"large"} />
          </Badge>
        </Button>
      </Link>
      <Link href="/orders">
        <Button>
            <ListAltIcon fontSize={"large"} />
        </Button>
      </Link>
    </Grid>
  )
}

const renderLinks = () => {
  return (
    <Grid container item xs={4} justifyContent="flex-start" alignItems='center' >
      {['facebook', 'twitter'].map(name => renderSingleLink(name))}
    </Grid>
  )

}
const linkSettingsMap = {
  facebook: {
    icon: <FacebookIcon fontSize={'large'} />,
    url: 'https://www.facebook.com/ASOS'
  },
  twitter: {
    icon: <TwitterIcon fontSize={'large'} />,
    url: 'https://twitter.com/ASOS'
  }
}
const renderSingleLink = (linkName) => {
  const linkSettings = linkSettingsMap[linkName]
  return linkName && (
    <Button key={linkName} onClick={() => window.open(linkSettings.url, '_blank')}>
      {linkSettings.icon}
    </Button>
  )
}


export default CustomAppBar
