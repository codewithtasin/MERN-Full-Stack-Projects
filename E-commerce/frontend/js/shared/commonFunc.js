export const sliceTitle = (title) => {
  const result = title.length > 10 ? title.slice(0, 20) + "..." : title;

  return result;
};

export const makeUrl = (path) => {
  const url = `http://localhost:4000/api${path}`;
  return url;
};

export const useParams = () => {
  const queryParams = window.location.search;
  const parse = new URLSearchParams(queryParams);
  const querys = [...parse];
  const obj = {};

  querys.forEach((query) => {
    obj[query[0]] = query[1];
  });

  return obj;
};
