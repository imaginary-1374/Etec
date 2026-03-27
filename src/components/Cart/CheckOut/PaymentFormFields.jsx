import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function PaymentFormFields({ register, errors }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="first-name">First Name</Label>
          <Input id="first-name" placeholder="Zyd" {...register("firstName")} />
          {errors.firstName && (
            <p className="text-red-500 text-xs">{errors.firstName.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last Name</Label>
          <Input
            id="last-name"
            placeholder="Abu Zyd"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs">{errors.lastName.message}</p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Zyd@example.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Delivery Address</Label>
        <Input
          id="address"
          placeholder="Nile Street, 23, 4th floor"
          {...register("address")}
        />
        {errors.address && (
          <p className="text-red-500 text-xs">{errors.address.message}</p>
        )}
      </div>
      <Separator className="my-6" />
      <h3 className="font-semibold text-lg mb-2">Card Details</h3>
      <div className="space-y-2">
        <Label htmlFor="card-number">Card Number</Label>
        <Input
          id="card-number"
          placeholder="0000 0000 0000 0000"
          {...register("cardNumber", {
            onChange: (e) => {
              let value = e.target.value.replace(/\D/g, "");
              value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
              e.target.value = value.substring(0, 19);
            },
          })}
        />
        {errors.cardNumber && (
          <p className="text-red-500 text-xs">{errors.cardNumber.message}</p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="expiry">Expiry Date</Label>
          <Input
            id="expiry"
            placeholder="MM/YY"
            {...register("expiry", {
              onChange: (e) => {
                let value = e.target.value.replace(/\D/g, "");
                if (value.length > 2) {
                  value = value.substring(0, 2) + "/" + value.substring(2, 4);
                }
                e.target.value = value.substring(0, 5);
              },
            })}
          />
          {errors.expiry && (
            <p className="text-red-500 text-xs">{errors.expiry.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="cvc">(CVC)</Label>
          <Input id="cvc" placeholder="123" {...register("cvc")} />
          {errors.cvc && (
            <p className="text-red-500 text-xs">{errors.cvc.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
