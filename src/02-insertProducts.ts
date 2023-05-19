export type Product = {
  id: number,
  name: string,
  price: number,
  quantity: number,
  brands: string[],
};

export default function insertProducts(brands: string[], product: Product): string {
  console.log(brands);
  console.log(product.brands);
  
  const brandExist: boolean = brands.every((element) => product.brands.includes(element));
  
  if (brandExist) {
    return `${product.name} adicionado(a) com o preço de R$ ${product.price}`;
  }
  return 'Seu produto contém marcas indisponíveis.';
}
