import Stripe from 'stripe';
import { stripe } from '../../../Libs/stripe';
import { currencyFormat } from '../../../Utils/Formatter';

export async function getProduct(productId: string) {
  const response = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = response.default_price as Stripe.Price;
  const product = {
    id: response.id,
    name: response.name,
    imageUrl: response.images[0],
    price: currencyFormat.format(price.unit_amount! / 100),
    description: response.description,
    priceId: price.id,
  };

  return product;
}
