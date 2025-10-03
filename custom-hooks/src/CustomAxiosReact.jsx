import React from 'react';
import useFetch from './useFetch';

const CustomAxiosReact = () => {
  const { data, loading, error } = useFetch('https://randomuser.me/api/');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Data Fetched with Custom Hook</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default CustomAxiosReact;
