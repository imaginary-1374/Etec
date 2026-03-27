import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function OrderSummary({ cart, products, totalPrice }) {
  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {cart.map((item) => {
          const product = products.find((p) => p.id === item.id);
          return product ? (
            <div
              key={product.id}
              className="flex justify-between items-center text-sm"
            >
              <span className="text-slate-600">
                {product.name} x {item.quantity}
              </span>
              <span className="font-medium">
                {(product.price * item.quantity).toFixed(2)} $
              </span>
            </div>
          ) : null;
        })}

        <Separator />

        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-500">Subtotal</span>
          <span className="font-medium text-slate-700">
            {totalPrice.toFixed(2)} $
          </span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-500">Shipping</span>
          <span className="font-medium text-slate-700">20.00 $</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="font-medium text-slate-200">
            "no free shipping things are tough"
          </span>
        </div>

        <Separator />

        <div className="flex justify-between items-center font-bold text-xl">
          <span>Total</span>
          <span>{(totalPrice + 20).toFixed(2)} $</span>
        </div>
      </CardContent>
    </Card>
  );
}
