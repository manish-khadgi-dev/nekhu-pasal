'use client';

import GlobalLayout from '@/app/components/globalLayout';
import axios from 'axios';
import { useState } from 'react';

export default function NewTransaction() {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(' ');
  const [amountPaid, setAmountPaid] = useState('');
  const [amountRemaining, setAmountRemaining] = useState('');

  function createTransaction(ev) {
    ev.preventDefault();
    const data = { customerName, phoneNumber, amountPaid, amountRemaining };

    axios.post('/api/transactions', data);
  }

  return (
    <>
      <GlobalLayout />
      <div className='"bg-white md:max-w-2xl mx-auto shadow-lg md:rounded-lg md:mt-8 overflow-hidden'>
        <div className="flex justify-center text-opacity-90 text-slate-700 mt-4">
          Transaction History
        </div>

        <div>
          <form
            onSubmit={createTransaction}
            className="flex flex-col border py-5 px-6 gap-3"
          >
            <label> Customer Name </label>
            <input
              type="text"
              placeholder="customer name"
              value={customerName}
              onChange={(ev) => setCustomerName(ev.target.value)}
            />
            <label> Phone Number</label>
            <input
              type="number"
              placeholder="phone number"
              value={phoneNumber}
              onChange={(ev) => setPhoneNumber(ev.target.value)}
            />
            <label> Amount Paid in Rs</label>
            <input
              type="number"
              placeholder="amount paid"
              value={amountPaid}
              onChange={(ev) => setAmountPaid(ev.target.value)}
            />
            <label> Amount Remaining</label>
            <input
              type="number"
              placeholder="amount remaining"
              value={amountRemaining}
              onChange={(ev) => setAmountRemaining(ev.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 md:rounded px-5 py-1 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
