import { useQuery } from "react-query";
import axios from "axios";
import PeopleCard from '../components/PeopleCard';


const fetchPeople = async () => {
  const res = await axios('https://rickandmortyapi.com/api/character');
  return res;
}

const RQPeople = () => {
  const { data, isLoading, isError, error, isFetching, refetch, status } = useQuery('people', fetchPeople, {
    // enabled: false
  });

  console.log('status: ', status);

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      <h1>RQ People</h1>
      <button onClick={refetch}>Fetch People</button>
      <div className='people-card-holder'>
        {data?.data.results.map(person => (
          <PeopleCard key={person.id} person={person} isRQ={true} />
        ))}
      </div>
    </div>
  )
}

export default RQPeople