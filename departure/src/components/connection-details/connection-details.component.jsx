import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function ConnectionDetailsComponent() {
  const [searchParams] = useSearchParams();

  console.log(searchParams)

  // make API call on transport API with the search params

  return(<span>Hello World. This is {searchParams.get('from')}</span>);
}
