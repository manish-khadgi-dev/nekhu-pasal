import connectToDB from '@/lib/mongoose';
import { Customer } from '@/models/customer';

export default async function handle(req, res) {
  const { method } = req;
  await connectToDB();
  if (method === 'POST') {
    const { customerName, phoneNumber, amountPaid, amountRemaining } = req.body;

    const createCustomer = await Customer.create({
      customerName,
      phoneNumber,
      amountPaid,
      amountRemaining,
    });
    res.json(createCustomer);
  }
}
