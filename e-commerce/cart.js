// Shopping cart operations
import { getProductById, checkStock } from "./product.js";

let cartItems = [];

export function addToCart(productId, quantity) {
  const product = getProductById(productId);
  if (!product) return "Product not found";

  if (!checkStock(productId, quantity)) {
    return "Insufficient stock";
  }

  const existing = cartItems.find(item => item.productId === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cartItems.push({ productId, quantity });
  }

  return "Item added to cart";
}

export function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.productId !== productId);
  return "Item removed";
}

export function updateQuantity(productId, newQuantity) {
  if (!checkStock(productId, newQuantity)) {
    return "Insufficient stock";
  }

  cartItems = cartItems.map(item =>
    item.productId === productId
      ? { ...item, quantity: newQuantity }
      : item
  );

  return "Quantity updated";
}

export function getCartItems() {
  return cartItems.map(item => {
    const product = getProductById(item.productId);
    return { ...product, quantity: item.quantity };
  });
}

export function getCartTotal() {
  return getCartItems().reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
}

export function clearCart() {
  cartItems = [];
}
