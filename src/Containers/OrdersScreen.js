import useStyles from './Styles/ShoppingCartScreenStyle'
import { Avatar, Box, Button, CircularProgress, Grid, ListItemAvatar, ListItemText, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { ProductActions, ProductSelectors } from '../Redux/ProductRedux.js'
import { OrdersActions, OrdersSelectors } from '../Redux/OrdersRedux.js'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import SingleProductInBag from '../Components/SingleProductInBag'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Images from '../Themes/Images'
import { Fragment, useCallback, useEffect } from 'react'
import DoneIcon from '@material-ui/icons/Done'
const OrdersScreen = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const orders = useSelector(OrdersSelectors.getOrders)
    useEffect(() => {
        dispatch(OrdersActions.fetchOrders())
    }, [])

    return (
        <div style={{ marginTop: 100 }} spacing={5} justifyContent='center' container >
            {orders ? orders.map(item => renderSingleItem(item, classes)) : <div />}
        </div>
    )
}

const renderSingleItem = (item, classes) => {
    return (
        <Accordion>
            <AccordionSummary
                style={{ alignItems: 'center', justifyContent: 'center' }}
                expandIcon={<ExpandMoreIcon />}
            >
                <Grid spacing={5} alignItems='center' container style={{ flexBasis: '88%' }}>
                    <Grid item>
                        {item.notification_sent === false ? <CircularProgress size={30} /> : <DoneIcon style={{ width: 30, height: 30, color: 'green' }} />}

                    </Grid>
                    <Grid item>
                        <Typography style={{ fontWeight: 'bold' }} >
                            {`order id: \b `}
                        </Typography>
                        <Typography style={{ fontWeight: 'bold', color: "blue" }} >{`#${item.id} \b`}</Typography>
                    </Grid>
                </Grid>
                <Grid alignItems='center' justifyContent='flex-end' container>
                    <Grid style={{ width: 180 }} item>
                        <Typography style={{ fontWeight: 'bold', opacity: 0.6 }} >{`${item.createdAt}`}</Typography>
                    </Grid>

                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <List >
                    {item.items.items.map(product => renderProductInList(product))}
                </List>
            </AccordionDetails>
        </Accordion>
    )
}

const renderProductInList = (product) => {
    return (
        <Fragment>
            <ListItem style={{ paddingBottom: 20 }} alignItems="center">
                <ListItemAvatar style={{ marginRight: 20 }}>
                    <Avatar imgProps={{ style: { objectFit: 'contain' } }} style={{ width: 55, height: 55 }} alt={product.title} src={product.image} />
                </ListItemAvatar>
                <ListItemText>{`${product.count} X \b ${product.title} \b = \b $${product.price * product.count}`}</ListItemText>

            </ListItem>
        </Fragment>

    )
}

export default (OrdersScreen)




// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }));

// export default function SimpleAccordion() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography className={classes.heading}>Accordion 1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <Typography className={classes.heading}>Accordion 2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion disabled>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3a-content"
//           id="panel3a-header"
//         >
//           <Typography className={classes.heading}>Disabled Accordion</Typography>
//         </AccordionSummary>
//       </Accordion>
//     </div>
//   );
// }


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import Divider from '@material-ui/core/Divider';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: '36ch',
//     backgroundColor: theme.palette.background.paper,
//   },
//   inline: {
//     display: 'inline',
//   },
// }));

// export default function AlignItemsList() {
//   const classes = useStyles();

//   return (
//     <List className={classes.root}>
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Brunch this weekend?"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 component="span"
//                 variant="body2"
//                 className={classes.inline}
//                 color="textPrimary"
//               >
//                 Ali Connors
//               </Typography>
//               {" — I'll be in your neighborhood doing errands this…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Summer BBQ"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 component="span"
//                 variant="body2"
//                 className={classes.inline}
//                 color="textPrimary"
//               >
//                 to Scott, Alex, Jennifer
//               </Typography>
//               {" — Wish I could come, but I'm out of town this…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Oui Oui"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 component="span"
//                 variant="body2"
//                 className={classes.inline}
//                 color="textPrimary"
//               >
//                 Sandra Adams
//               </Typography>
//               {' — Do you have Paris recommendations? Have you ever…'}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//     </List>
//   );
// }
