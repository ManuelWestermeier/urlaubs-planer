export default function makePath(str = "") {
  return Buffer.from(str.toString()).toString("base64url");
}
