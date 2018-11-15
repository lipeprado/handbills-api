import BillsModel from '../models/bills.model';

export const index = async (req, res, next) => {
  const bills = await BillsModel.forge().fetchAll();
  return res.status(200).json({ bills });
};

export const store = async (req, res, next) => {
  const { id } = req.user.data;
  const { title, value, status, expire } = req.body;
  const newBill = {
    userId: id,
    title,
    value,
    status,
    expire,
  };
  console.log({ newBill });
  try {
    await new BillsModel(newBill).save();
    const createdBill = await BillsModel.where({ title }).fetch();
    console.log({ createdBill });
    return res.status(200).json({ createdBill });
  } catch (error) {
    return res.status(400).json({ error: error.response });
  }
};
