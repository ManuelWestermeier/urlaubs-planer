import { users } from "../../data.js";
import hash from "../../hash.js";
export default async function getCreateAccount(req, res) {
  if (req.authError == "invalid request")
    return res.json({ error: req.authError });

  if (req.authError != "user doesn't exist")
    return res.json({
      error: "user does exist",
    });

  const { user, password } = req.query;

  users[user] = {
    password: hash(password),
    name: user,
    email: "",
    isCreator: false,
    trips: [],
    booked: [],
    subscriptions: [],
    money: 0,
  };

  res.json({
    createdAccount: true,
    error: false,
  });
}
