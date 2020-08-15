import axios from 'axios';

// export default axios.create({
//   baseURL: 'https://dev.to/api/',
//   params: {
//     // API params go here
//   },
// });

const http = axios.create({
  baseURL: `https://dev.to/api/`,
  headers: { 'Content-Type': 'application/json' },
});

// export async function getArticlesByUserName (username: string): Promise<Record<string, any>> {
//   const response = await http.get(`articles?${username}`);
//   return response.data;
// }

export default {
  // getArticlesByUserName,
  http,
};
