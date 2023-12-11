import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const useAxios = ({ url, method, body = null, headers = null }) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState('');
	const [loading, setloading] = useState(true);

	const fetchData = useCallback(() => {
		axios[method](url, JSON.parse(headers), JSON.parse(body))
			.then((res) => {
				setResponse(res.data);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setloading(false);
			});
	}, [body, headers, method, url]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return { response, error, loading };
};

export default useAxios;
