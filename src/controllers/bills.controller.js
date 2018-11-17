import HTTPSTATUS from 'http-status';

import queries from '../queries/bills.queries';

// Helpers
import validBill from '../services/validation';
import isAllowed from '../services/isAllowed';

export const index = async (req, res) => {
  const { id } = req.user.data;
  try {
    const bills = await queries.getBillsByUserId(id);
    return res.status(HTTPSTATUS.OK).json({ bills });
  } catch (error) {
    return res.status(HTTPSTATUS.BAD_REQUEST).json({ message: 'Algo errado aconteceu.' });
  }
};

export const store = async (req, res) => {
  const currentUserID = req.user.data.id;
  const newBill = {
    ...req.body,
    userId: currentUserID,
  };
  if (validBill(req.body)) {
    const bill = await queries.create(newBill);
    return res.status(HTTPSTATUS.OK).json({ bill: bill[0], message: 'Bill created with success.' });
  }
  return res.status(HTTPSTATUS.BAD_REQUEST).json({ message: 'Invalid Bill' });
};

export const update = async (req, res) => {
  const { id } = req.params;
  const currentUserID = req.user.data.id;
  const bill = await queries.getOne(id);
  if (!bill) {
    res.status(HTTPSTATUS.OK).json({ message: 'Bill not exist.' });
    return;
  }
  const isOwner = await isAllowed(bill.userId, currentUserID);
  if (isOwner) {
    if (validBill(req.body)) {
      try {
        const billsUpdated = await queries.update(id, req.body);
        res.status(HTTPSTATUS.OK).json({ billsUpdated });
      } catch (error) {
        res.status(HTTPSTATUS.BAD_REQUEST).json({ message: 'Something goes wrong' });
      }
    } else {
      res.status(HTTPSTATUS.BAD_REQUEST).json({ message: 'Invalid Bill' });
    }
  } else {
    res.status(HTTPSTATUS.UNAUTHORIZED).json({ message: 'User not authorized' });
  }
};

export const destroy = async (req, res) => {
  const { id } = req.params;
  const currentUserID = req.user.data.id;
  const bill = await queries.getOne(id);
  if (!bill) {
    res.status(HTTPSTATUS.OK).json({ message: 'Bill not exist.' });
    return;
  }
  const isOwner = await isAllowed(bill.userId, currentUserID);
  if (isOwner) {
    try {
      await queries.delete(id, req.body);
      res.status(HTTPSTATUS.OK).json({ message: 'Bill deleted with success.' });
    } catch (error) {
      res.status(HTTPSTATUS.BAD_REQUEST).json({ message: 'Something goes wrong' });
    }
  } else {
    res.status(HTTPSTATUS.UNAUTHORIZED).json({ message: 'User not authorized.' });
  }
};
