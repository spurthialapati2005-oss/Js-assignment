// Coupon and discount logic
// Available coupons
const coupons = {
    WELCOME10: { type: "percentage", value: 10, minAmount: 1000 },
    FLAT500: { type: "flat", value: 500, minAmount: 5000 },
    ELECTRONICS20: {
      type: "percentage",
      value: 20,
      minAmount: 10000,
      category: "electronics"
    }
};
  
export function validateCoupon(code, total, items) {
    const coupon = coupons[code];
    if (!coupon) return { valid: false, message: "Invalid coupon" };
  
    if (total < coupon.minAmount)
      return { valid: false, message: "Minimum amount not met" };
  
    if (coupon.category) {
      const hasCategory = items.some(
        item => item.category === coupon.category
      );
      if (!hasCategory)
        return { valid: false, message: "Category not applicable" };
    }
  
    return { valid: true, message: "Coupon applied" };
}
  
export function calculateDiscount(code, total) {
    const coupon = coupons[code];
    return coupon.type === "percentage"
      ? (total * coupon.value) / 100
      : coupon.value;
}
  
export function applyDiscount(total, code, items) {
    const validation = validateCoupon(code, total, items);
    if (!validation.valid) {
      return { originalTotal: total, discount: 0, finalTotal: total, message: validation.message };
    }
  
    const discount = calculateDiscount(code, total);
    return {
      originalTotal: total,
      discount,
      finalTotal: total - discount,
      message: "Discount applied successfully"
    };
}
  