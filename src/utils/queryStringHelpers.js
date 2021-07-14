export const queryStringToObject = (url) =>
  [...new URLSearchParams(url.split("?")[1])].reduce((a, [k, v]) => ((a[k] = v), a), {});

export const objectToQueryString = (object) => {
  return (
    "?" +
    Object.keys(object)
      .filter((el) => !!object[el])
      .map((key) => `${key}=${object[key].toString()}`)
      .join("&")
  );
};
