import { useQuery } from "react-query";
import axios from 'axios';
import { useParams } from "react-router";
import PersonCard from "../components/PersonCard";

const fetchPerson = async (id) => {
  const res = await axios(`https://rickandmortyapi.com/api/character/${id}`);
  return res;
}

// const fetchPerson = async ({ queryKey }) => {
//   console.log("queryKey:", queryKey);
//   const id = queryKey[1];
//   const res = await axios(`https://rickandmortyapi.com/api/character/${id}`);
//   return res;
// }

const RQPerson = () => {

  const onSuccess = (data) => {
    console.log(`${data.data.name}is fetched!`);
  }

  const onError = (error) => {
    console.log(error.message);
  }

  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery(['person', id], () => fetchPerson(id), {
    onSuccess,
    onError
  });

  // const { id } = useParams();
  // const { data, isLoading, isError, error } = useQuery(['person', id], fetchPerson);


  if (isLoading) {
    return <h1>Loading</h1>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      {data && <PersonCard data={data.data} />}
    </div>
  )
}

export default RQPerson;