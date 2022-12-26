import Stripe from 'stripe';
import { stripe } from '../../../Libs/stripe';

export async function getSession(sessionId: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });

  const costumerName = session.customer_details!.name;
  const product = session.line_items!.data[0].price!.product as Stripe.Product;

  const purchase: PurchaseProps = {
    name: costumerName!,
    imageProduct: product.images[0]!,
    product: product.name,
  };

  return purchase;
}
