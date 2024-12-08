export default async function getLogin(req, res) {
  res.json({
    error: req.authError,
    auth: req.isAuth,
  });
}
