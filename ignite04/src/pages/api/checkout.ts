import type { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '../../Libs/stripe';
import { ProductProps } from '../../interfaces/product';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { products } = req.body as { products: ProductProps[] };
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!products) {
    return res.status(400).json({ error: 'Products not found' });
  }

  const listProducts = products.map((product) => ({
    price: product.priceId,
    quantity: 1,
  }));

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: listProducts,
    currency: 'EUR',
  });

  return res.status(201).json({ checkoutUrl: checkoutSession.url! });
}
