import Stripe from 'stripe';
import { stripe } from '../../../Libs/stripe';
import { currencyFormat } from '../../../Utils/Formatter';

export async function getProducts() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: currencyFormat.format(price.unit_amount! / 100),
    };
  });

  return products;
}
