import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Bounce, ToastContainer } from "react-toastify";

// UI Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Context & Utils
import { CartContext } from "../../../context/cartContext";
import { ProductsContext } from "../../../context/Productscontext";
import { checkoutSchema } from "./checkoutSchema";

// Shared Parts
import { OrderSummary } from "./OrderSummary";
import { PaymentFormFields } from "./PaymentFormFields";

export default function CheckoutPage() {
  const { products } = useContext(ProductsContext);
  const { cart, totalPrice } = useContext(CartContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success(
        <Alert className="border-none p-0">
          <AlertDescription>
            Your payment of ${(totalPrice + 20).toFixed(2)} has been processed.
            A receipt has been sent to {data.email}.
          </AlertDescription>
        </Alert>,
        {
          transition: Bounce,
          theme: "light",
          autoClose: 4000,
        },
      );
      console.log("Order Data:", data);
    } catch (error) {
      toast.error("Payment failed. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-6xl font-sans">
      <h1 className="text-3xl font-bold mb-8 text-slate-900">Finish Order</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row gap-8"
      >
        <div className="flex-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment & Shipping</CardTitle>
              <CardDescription>
                Enter your personal details and card information to complete the
                purchase.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PaymentFormFields register={register} errors={errors} />
            </CardContent>
          </Card>
        </div>

        <div className="w-full lg:w-[400px] space-y-4">
          <OrderSummary
            cart={cart}
            products={products}
            totalPrice={totalPrice}
          />

          <ToastContainer />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-lg py-6"
            size="lg"
          >
            {isSubmitting ? "Processing..." : "Confirm Payment"}
          </Button>
        </div>
      </form>
    </div>
  );
}
