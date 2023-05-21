import { Product } from './02-insertProducts';

export type Item = {
  product: Product
  quantity: number,
  phrase: string,
  brand: string,
};

export default function calculateTotalPrice(itens: Item[]):number | [] {
  const result = itens.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  
  return parseFloat(result.toFixed(2));
}
