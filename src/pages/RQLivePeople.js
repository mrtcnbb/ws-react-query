import { useQuery } from "react-query";
import axios from "axios";


const fetchLivePeople = async () => {
  const res = await axios('http://localhost:3001/characters');
  return res;
}

const RQLivePeople = () => {
  const { data, isLoading, isError, error, isFetching, refetch, status } = useQuery('live-people', fetchLivePeople, {
    // cacheTime: 5000,
    // staleTime: 10000,
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true
  });

  console.log("isLoading, isFetching: ", isLoading, isFetching);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <div>{data?.data.map(person => (
        <p key={person.id}>{person.name} - {person.status}</p>
      ))}</div>
    </>
  )
}

export default RQLivePeople