import { users } from "../data.js";
import hash from "../hash.js";

export default async function useAuth(req, _, next) {
  if (!req.query?.user || !req?.query.password) {
    req.isAuth = false;
    req.authError = "invalid request";
    return next(null);
  }
  const { user, password } = req.query;
  if (!users[user]) {
    req.isAuth = false;
    req.authError = "user doesn't exist";
    return next(null);
  }
  req.isAuth = users[user].password == hash(password);
  req.authError = null;
  next(null);
}
