import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/CartAction";
import { Button, Modal, Backdrop, Fade, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
    height: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const CartDropdown = () => {
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
            <Typography variant="body1">Your Cart is Empty!</Typography>
            <Link to="/checkout">
              <Button
                className="checkout-btn"
                variant="contained"
                color="secondary"
                onClick={handleClose}
              >
                GO TO CHECKOUT
              </Button>
            </Link>
          </div>
        </Fade>
      </Modal>
      <div className="cart-items"></div>
    </div>
  );
};

export default CartDropdown;
