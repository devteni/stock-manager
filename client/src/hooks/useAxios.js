import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../constants';

axios.defaults.baseURL = baseURL;

const useAxios = ({ url, method, body = null, headers = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios[method](
        url,
        JSON.parse(headers),
        JSON.parse(body),
      );
      setResponse(res.data);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);
  return { response, error, loading };
};

export default useAxios;
