import useSWR from 'swr'
import React from 'react';
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function useApi (id) {
 
  const { data, error, isLoading } = useSWR(`https://vid.priv.au/api/v1/${id}`, fetcher)
 
  return {
    data: data,
    isLoading,
    isError: error
  }
}

