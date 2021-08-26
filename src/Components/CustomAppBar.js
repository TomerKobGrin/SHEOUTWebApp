import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Images from '../Themes/Images'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { Badge, Button } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import useStyles from './Styles/CustomAppBar'
const CustomAppBar = () => {
  const classes = useStyles()
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar >
        <Grid container justifyContent="center" alignItems='center'>
          {renderLinks()}
          <Grid container justifyContent="center" item xs={10}>
            <img className={classes.logo} src={Images.appLogo} />
          </Grid>
          <Grid item xs={1}>
            <Button>
              <Badge showZero badgeContent={0} color="secondary" >
                <ShoppingCartOutlinedIcon fontSize={"large"} />
              </Badge>
            </Button>
          </Grid>
        </Grid>

      </Toolbar>
    </AppBar>
  )
}

const renderLinks = () => {
  return (
    <Grid container item xs={1} justifyContent="center" alignItems='center' >
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
