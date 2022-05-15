const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsersApi = async (): Promise<void> => {
  const response = await fetch(
    API_URL,
  );

  return response.json();
};
