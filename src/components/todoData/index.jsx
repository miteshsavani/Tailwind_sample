import useAxios from "../../hooks/axios";

const TodoData = () => {
	const { loading, response, error } = useAxios({
		url: '/todos',
		method: 'get'
	});


	return loading ? (
		<div className="justify-center items-center">Loading</div>
	) : (
		<table className="w-[50%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" className="px-6 py-3">
						id
					</th>
					<th scope="col" className="px-6 py-3">
						title
					</th>
					<th scope="col" className="px-6 py-3">
						completed
					</th>
				</tr>
			</thead>
			<tbody>
				{response?.map(({ id, title, completed }, index) => {
					return (
						<tr
							key={index}
							className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
						>
							<td className="px-6 py-4">{id}</td>
							<td className="px-6 py-4">{title}</td>
							<td className="px-6 py-4"><input type="checkbox" className="text-white" checked={completed} disabled/></td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default TodoData;
