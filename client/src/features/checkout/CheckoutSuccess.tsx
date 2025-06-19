//import { Box, Button, Container, Divider, Paper, Typography } from "@mui/material";
//import { Link, useLocation } from "react-router-dom";
// import { Order } from "../../app/models/order";
// import { currencyFormat, formatAddressString, formatPaymentString } from "../../lib/util";

import { Typography } from "@mui/material";

export default function CheckoutSuccess() {
  //const { state } = useLocation();
  //const order = state.data as Order;

  //if (!order) return <Typography>Problem accessing the order</Typography>

  return <Typography variant="h5">Payment successful</Typography>;
}
