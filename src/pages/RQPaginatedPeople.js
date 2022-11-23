import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import PeopleCard from '../components/PeopleCard';



const fetchPeople = async (page) => {
  const res = await axios(`https://rickandmortyapi.com/api/character?page=${page}`);
  return res
}

const RQPaginatedPeople = () => {
  const [page, setPage] = useState(1);
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
  } = useQuery(['people', page], () => fetchPeople(page), {
    // keepPreviousData: true
  })

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h1>RQ People Paginated</h1>
      <div>
        <button
          onClick={() => setPage(old => Math.max(old - 1, 1))}
          disabled={page === 1}>Previous Page</button>
        <span>{page}</span>
        <button
          onClick={() => setPage(old => (!data || !data?.data?.info.next ? old : old + 1))}
          disabled={!data || !data?.data?.info.next}>Next Page</button>
      </div>
      <div className='people-card-holder'>
        {data?.data.results.map(person => (
          <PeopleCard key={person.id} person={person} isRQ={true} />
        ))}
      </div>
      {isFetching && 'Loading'}
    </>
  );
}

export default RQPaginatedPeople;