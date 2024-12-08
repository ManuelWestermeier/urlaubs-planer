import makePath from "../make-path.js";
import { existsSync } from "fs";
import hash from "../hash.js";
import fs from "fs/promises";
import { join } from "path";

export default async function useAuth(req, _, next) {
  if (!req.query?.user || !req?.query.password) {
    req.isAuth = false;
    req.authError = "invalid request";
    return next(null);
  }
  const { user, password } = req.query;
  const passwordFilePath = join("data", "user", makePath(user), "password.txt");
  if (!existsSync(passwordFilePath)) {
    req.isAuth = false;
    req.authError = "user doesn't exist";
    return next(null);
  }
  const isAuth =
    (await fs.readFile(passwordFilePath, "ascii")) == hash(password);
  req.isAuth = isAuth;
  req.authError = null;
  next(null);
}
