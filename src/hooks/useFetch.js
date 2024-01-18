import {useEffect, useState} from "react";
import {request} from "../api";

export const useFetch = (uri, page) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        request(uri)
            .then(res => setData(res.data))
            .then(() => setLoading(false))
            .catch(err => setError(err));
    }, [uri, page]);
    return [loading, data, error];
}
export const useFetchSorted = (uri, type) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    request(`https://api.amcham.uz${uri}`, {
      params: {
        sort: "desc",
        sortby: type,
      },
    })
      .then((res) => setData(res.data))
      .then(() => setLoading(false))
      .catch((err) => setError(err));
  }, [uri]);
  return [loading, data, error];
};
