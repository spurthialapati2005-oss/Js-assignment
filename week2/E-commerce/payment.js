// Payment processing
import { reduceStock } from "./product.js";
import { getCartItems, getCartTotal, clearCart } from "./cart.js";
import { applyDiscount } from "./discount.js";

export function validatePaymentMethod(method) {
  return ["card", "upi", "cod"].includes(method);
}

function generateOrderId() {
  return "ORD" + Date.now();
}

export function processPayment(method, couponCode = null) {
  if (!validatePaymentMethod(method)) {
    return { status: "failed", message: "Invalid payment method" };
  }

  const items = getCartItems();
  const subtotal = getCartTotal();

  const discountData = couponCode
    ? applyDiscount(subtotal, couponCode, items)
    : { discount: 0, finalTotal: subtotal };

  items.forEach(item => reduceStock(item.id, item.quantity));
  clearCart();

  return {
    orderId: generateOrderId(),
    items,
    subtotal,
    discount: discountData.discount,
    total: discountData.finalTotal,
    paymentMethod: method,
    status: "success",
    message: "Payment successful"
  };
}
