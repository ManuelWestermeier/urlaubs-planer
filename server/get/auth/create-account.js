import fs from "fs/promises";
import { join } from "path";
import makePath from "../../make-path.js";
import hash from "../../hash.js";
export default async function getCreateAccount(req, res) {
  if (req.authError == "invalid request")
    return res.json({ error: req.authError });

  if (req.authError != "user doesn't exist")
    return res.json({
      error: "user does exist",
    });

  const { user, password } = req.query;

  await fs.mkdir(join("data", "user", makePath(user)));

  await fs.writeFile(
    join("data", "user", makePath(password), "password.txt"),
    hash(password)
  );

  await fs.writeFile(
    join("data", "user", makePath(password), "data.txt"),
    "{}"
  );

  res.json({
    createdAccount: true,
    error: false,
  });
}
