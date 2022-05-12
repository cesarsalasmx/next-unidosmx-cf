const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const donations=[
  {amount: "$100.00", price_id: "price_1KurfuCA4TdErh9RyDku83sU"},
  {amount: "$200.00", price_id: "price_1KurfuCA4TdErh9RJHT6Gsob"},
  {amount: "$500.00", price_id: "price_1KurfuCA4TdErh9RqThujQE5"},
  {amount: "$1000.00", price_id: "price_1KurfuCA4TdErh9RAtKSb074"},
]

export default async function handlerCheckout(req, res, props) {
  if (req.method === 'POST') {
    try {
      const amount = donations.filter(donations => donations.amount == req.body.amount)
      
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: `${amount[0].price_id}`,
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}