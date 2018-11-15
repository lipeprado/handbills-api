import HTTPSTATUS from 'http-status';

import BillsModel from '../models/bills.model';
import validBill from '../services/validation';
import queries from '../queries';

const updateBills = async (id, body, res) => {
  try {
    const billsUpdated = await queries.update(id, body);
    res.status(HTTPSTATUS.OK).json({ billsUpdated });
  } catch (error) {
    res.status(HTTPSTATUS.BAD_REQUEST).json({ message: 'Something goes wrong' });
  }
};

export const index = async (req, res) => {
  try {
    const bills = await BillsModel.forge().fetchAll();
    return res.status(HTTPSTATUS.OK).json({ bills });
  } catch (error) {
    return res.status(HTTPSTATUS.BAD_REQUEST).json({ message: 'Algo errado aconteceu.' });
  }
};

export const store = async (req, res) => {
  const { id } = req.user.data;
  const {
    title, value, status, expire,
  } = req.body;
  const newBill = {
    userId: id,
    title,
    value,
    status,
    expire,
  };
  if (validBill(req.body)) {
    const bill = await new BillsModel(newBill).save();
    res.status(HTTPSTATUS.OK).json({ bill });
  } else {
    res.status(HTTPSTATUS.BAD_REQUEST).json({ message: 'Invalid Bill' });
  }
};

export const update = async (req, res) => {
  // TODO: Valida se o usuario que está Atualizando é o Dono da Bill
  const { id } = req.params;

  if (validBill(req.body)) {
    updateBills(id, req.body, res);
  } else {
    res.status(HTTPSTATUS.BAD_REQUEST).json({ message: 'Invalid Bill' });
  }
};

export const destroy = async (req, res) => {
  // TODO: Valida se o usuario que está deletando é o Dono da Bill
  const { id } = req.params;
  if (validBill(id)) {
    await queries.delete(id, req.body);
    res.status(HTTPSTATUS.OK).json({ message: 'Bill deleted with success.' });
  } else {
    res.status(HTTPSTATUS.BAD_REQUEST).json({ message: 'Something goes wrong.' });
  }
};
