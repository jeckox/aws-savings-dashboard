import type { PageLoad } from './$types';
import type { SavingsData } from '$lib/types';
//import { APIKEY, APIURL } from '$env/static/private';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('/data.json'); 
	const savingsData: SavingsData = await res.json();
	
  return { savingsData};

	// const apiUrl = APIURL; 
	// const token = APIKEY; 

	// try {
	// 	const res = await fetch(apiUrl, {
	// 		headers: {
	// 			Authorization: token
	// 		}
	// 	});

	// 	if (res.ok) {
	// 		const savingsData: SavingsData = await res.json();
	// 		return { savingsData };
	// 	} else {
	// 		console.error('Error fetching data:', res.status, res.statusText);
	// 		return {
	// 			savingsDataDefault
	// 		};
	// 	}
	// } catch (error) {
	// 	console.error('Error fetching data:', error);
	// 	return {
	// 		savingsDataDefault
	// 	};
	// }
};
