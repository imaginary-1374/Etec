import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ProductsContext } from "../../context/ProductsContext";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import getImagePath from "@/utils/helpers";
import { Link } from "react-router-dom";
export function SideBar({ trigger }) {
  const { products } = useContext(ProductsContext);
  const { cart, addItem, removeItem, totalCount, totalPrice } =
    useContext(CartContext);

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Added To Your Cart ({totalCount})</SheetTitle>
        </SheetHeader>

        {/* fullList*/}
        <ScrollArea className="flex-1 my-4">
          <div className="flex flex-col gap-4 px-3">
            {/* product*/}
            {cart.map((cartItem) => {
              const product = products.find((p) => p.id === cartItem.id);
              return product ? (
                <div key={cartItem.id}>
                  <div className="flex items-center gap-3 px-2">
                    {/* productImg*/}
                    <img
                      src={getImagePath(
                        product.folderId,
                        product.images.thumbnail,
                      )}
                      alt={product.name}
                      className="w-16 h-16 rounded-md object-cover border"
                    />

                    {/* productInfo*/}
                    <div className="flex-1">
                      <p className="text-sm font-medium leading-tight">
                        {product.name}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {product.price}$
                      </p>

                      {/* quantity*/}
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6 text-xs"
                          onClick={() => removeItem(cartItem)}
                        >
                          −
                        </Button>
                        <span className="text-sm w-4 text-center">
                          {cartItem.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6 text-xs"
                          onClick={() => addItem(cartItem)}
                        >
                          +
                        </Button>
                      </div>
                    </div>

                    {/* totalPrice*/}
                    <p className="text-sm font-semibold">
                      {(product.price * cartItem.quantity).toFixed(2)}$
                    </p>
                  </div>
                  <Separator className="mt-4" />
                </div>
              ) : null;
            })}
          </div>
        </ScrollArea>

        {/* Footer */}
        <SheetFooter className="flex flex-col gap-2">
          <div className="flex justify-between text-base font-semibold w-full">
            <span>Order Subtotal:</span>
            <span>{totalPrice.toFixed(2)}$</span>
          </div>
          <SheetClose asChild>
            <Link to={"/cart"}>
              <Button className="w-full">View Full Cart</Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="outline" className="w-full">
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
