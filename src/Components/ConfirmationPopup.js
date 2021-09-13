import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button } from '@material-ui/core'
import Images from '../Themes/Images'
const ConfirmationPopup = (props) => {
    const {open, onClose, title} = props
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Order Confirmation #${title ?? ''}`}</DialogTitle>
        <DialogContent>
        <img style={{ objectFit: 'contain', width:498, height:202, padding: 20}} src={Images.brooklyn} />
          <DialogContentText id="alert-dialog-description">
            {`Kapara, Your Order has been placed, and you have recivied an email Confirmation.
            You can keep shopping around and spend some more money`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary" autoFocus>
            Cool Cool Cool
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

export default ConfirmationPopup
  