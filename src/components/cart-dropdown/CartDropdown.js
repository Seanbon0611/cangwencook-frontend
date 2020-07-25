import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/CartAction";
import {
  Button,
  Modal,
  Backdrop,
  Fade,
  Typography,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CartItem from "../cart-item/CartItem";
import "./cart-dropdown.styles.scss";

const getModalStyle = () => {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: 350,
    overflow: "scroll",
    height: 350,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const CartDropdown = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
    dispatch(toggleCartHidden());
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography variant="h5">Shopping Cart</Typography>
            <Divider />
            {cart.length ? (
              [
                cart.map((item) => <CartItem key={item.id} item={item} />),
                <div className="subtotal">
                  <Typography className="subtotal" variant="body1">
                    Subtotal: $
                    {cart.reduce((acc, item) => acc + item.quantity * item.price,
                      0
                    )}
                  </Typography>
                </div>,
              ]
            ) : (
              <Typography className="cart-empty" variant="body1">
                Your Cart is Empty!
              </Typography>
            )}
            <div class="checkout-btn">
              <Link to="/checkout">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClose}
                >
                  GO TO CHECKOUT
                </Button>
              </Link>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default CartDropdown;
