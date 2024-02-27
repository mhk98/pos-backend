const db = require("../../models");
const Cart = db.cart;

exports.createCart = async (req, res, file) => {
  try {
    const { title, price } = req.body;
    console.log("cartDetailsProduct", req.body);

    const data = {
      title: title,
      price: price,
    };
    const result = await Cart.create(data);

    // console.log("insertService_Details", insertService_Details);

    res.status(200).send({
      status: "Success",
      message: "Successfully add to cart",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getCartProduct = async (req, res) => {
  try {
    // console.log("findUser", findUser);
    const result = await Cart.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all cart",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.deleteCartProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Delete product", id);
    const result = await Cart.destroy({
      where: {
        Cart_Id: id,
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully delete cart",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updateCartProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("update product", id);
    const { title, price } = req.body;

    const data = {
      title: title === "" ? undefined : title,
      price: price === "" ? undefined : price,
    };
    const result = await Cart.update(data, {
      where: {
        Cart_Id: id,
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully delete cart",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
