import { Item } from './04-calculateTotalPrice';

export type Status = 'pendente' | 'enviado' | 'entregue';

export type Order = {
  id: number,
  customerName: string,
  customerEmail: string,
  items: Item[]
  status: Status,
};

export default function orderRequest(order: Order):string {
  console.log(order);
  
  const outStockItem = order.items.find((item) => item.product.quantity === 0);
  if (outStockItem) {
    throw new Error(`Desculpe, ${outStockItem.product.name} não está disponível no estoque`);
  }
  return `Olá ${order.customerName}, o seu pedido de ID ${order.id} foi enviado.`;
}
