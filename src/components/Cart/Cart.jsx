import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CartContext } from "../../context/CartContext";
import { ProductsContext } from "../../context/ProductsContext";
import getImagePath from "@/utils/helpers";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingCart } from "lucide-react";

export default function CartPage() {
  const { products } = useContext(ProductsContext);
  const {
    cart,
    addItem,
    removeItem,
    deleteItem,
    clearCart,
    totalCount,
    totalPrice,
  } = useContext(CartContext);

  const shippingFees = 20;
  const finalTotal = totalPrice + shippingFees;

  // embty cart
  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-slate-100 p-6 rounded-full mb-4">
          <ShoppingCart size={48} className="text-slate-400" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Your cart is empty!</h2>
        <p className="text-muted-foreground mb-6">
          Looks like you haven't added anything yet.
        </p>
        <Link to="/">
          <Button size="lg">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-10 max-w-6xl font-sans">
      {/* clearCart */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">
            Shopping Cart ({totalCount})
          </h1>
        </div>

        <Button
          variant="outline"
          className="text-destructive border-destructive hover:bg-destructive hover:text-white transition-all w-fit"
          onClick={() => {
            if (window.confirm("Are you sure you want to remove all items?")) {
              clearCart();
            }
          }}
        >
          <Trash2 size={16} className="mr-2" />
          Clear Cart
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((cartItem) => {
            const product = products.find((p) => p.id === cartItem.id);
            if (!product) return null;

            return (
              <div
                key={cartItem.id}
                className="group relative flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-xl bg-card hover:shadow-md transition-shadow"
              >
                {/* deleteItem */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => deleteItem(cartItem)}
                >
                  <Trash2 size={18} />
                </Button>

                <img
                  src={getImagePath(product.folderId, product.images.thumbnail)} //
                  alt={product.name}
                  className="w-24 h-24 rounded-lg object-cover border bg-slate-50"
                />

                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-semibold text-lg leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-primary font-medium mt-1">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                {/* quantity */}
                <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-1 border">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-white"
                    onClick={() => removeItem(cartItem)}
                  >
                    <Minus size={14} />
                  </Button>
                  <span className="font-semibold w-6 text-center">
                    {cartItem.quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-white"
                    onClick={() => addItem(cartItem)}
                  >
                    <Plus size={14} />
                  </Button>
                </div>

                <div className="text-right min-w-[100px]">
                  <p className="font-bold text-lg text-slate-900">
                    ${(product.price * cartItem.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-6">
          <div className="p-6 border rounded-2xl bg-slate-50/80 backdrop-blur-sm space-y-4 sticky top-10">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <Separator />

            <div className="space-y-3">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Estimated Shipping</span>
                <span>${shippingFees.toFixed(2)}</span>
              </div>
            </div>

            <Separator />

            <div className="flex justify-between text-xl font-bold text-slate-900">
              <span>Total</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>

            <Link to="/checkout">
              <Button className="w-full py-6 text-lg mt-4 shadow-xl shadow-primary/10">
                Proceed to Checkout
              </Button>
            </Link>

            <p className="text-xs text-center text-muted-foreground mt-4">
              Free delivery on orders over $200
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
