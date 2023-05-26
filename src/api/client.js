import useFetch from './useFetch';
import axios from 'axios';
const accessToken =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkNXcEt0WTJ3M3VnalZCWlpEOXZ2MyJ9.eyJodHRwczovL2FwcC5lbGVtZW50cmljLmlvL3NjaGVtYXMvcm9sZXMiOlsiVXNlciJdLCJpc3MiOiJodHRwczovL2Rldi1lbGVtZW50cmljLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJzbXN8NjQ2ZGM4MDNiNzA2N2MzMTQ1YjFmMjEwIiwiYXVkIjpbImh0dHBzOi8vZGV2LmFwcC5lbGVtZW50cmljLmlvL2FwaSJdLCJpYXQiOjE2ODUxMDE4NDgsImV4cCI6MTY4NTE4ODI0OCwiYXpwIjoiMnB3NktQZUx0YTFZSldyc28wNHNzTlJLMkJTM3NxWkgiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIiwiZ3R5IjpbInJlZnJlc2hfdG9rZW4iLCJwYXNzd29yZCJdfQ.dXAjG-d9MU5V23pk5H7FoUPxzV7TXg6NhoJwgXa-tH6L40svzMVlNLFpWy9yLYEQyfBdZCr6ZfhmwKqSEt51dfT9OV5yNFuK6nJeiDTVoQpZei9fhK45UgP5EmMnlaTDlmi-kratl0hzEbX-Cz8lTYgUeMoDtVFKaYcarmHLEe51CMPMiOB4plp8RpkLpGE6QIA7jZapqF4ywkj01L7oR9jVadIdKFfGPG5mFidF0oIG-L2Qp5zJ3dGQCXGjmVUyRe3MRVtDSWmELU4Qig8TNcTaPKkTx_p6TxZzdScm2kNGvofcgcvg4QEAcHxwKcEr8inHfFm3yOfBpXEIpRlq7Q';
const localStorageKey = 'jwtToken';
const localRefreshKey = 'refreshToken';
const BASE_URL = 'https://dev.app.elementric.io/api/v2';

export async function client() {
  // setting up api client
  console.log(accessToken);
  try {
    const response = await axios.get(`${BASE_URL}/buildings`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export async function getAllOrganizations() {
  console.log('GET /organisations');
  try {
    const response = await axios.get(`${BASE_URL}/organisations`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
