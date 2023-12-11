import { useEffect } from 'react';
import { useState } from 'react';

const UserData = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchUsers = () => {
			fetch('https://jsonplaceholder.typicode.com/users')
				.then((r) => r.json())
				.then((data) => {
					setData(data);
				});
		};

		fetchUsers();
	}, []);

	return (
		<table className="w-[50%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" className="px-6 py-3">
						name
					</th>
					<th scope="col" className="px-6 py-3">
						user name
					</th>
					<th scope="col" className="px-6 py-3">
						email
					</th>
				</tr>
			</thead>
			<tbody>
				{data.map(({ name, username, email }, index) => {
					return (
						<tr
							key={index}
							className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
						>
							<td className="px-6 py-4">{name}</td>
							<td className="px-6 py-4">{username}</td>
							<td className="px-6 py-4">{email}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default UserData;
