export default function getUrl(pathName = "/", searchParams = {}) {
  const url = new URL(window.apiUrl);
  url.pathname = pathName;

  Object.keys(searchParams).forEach((key) => {
    url.searchParams.set(key, searchParams[key]);
  });

  return url;
}
