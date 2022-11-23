import { useState, useEffect } from 'react';
import axios from 'axios';
import PeopleCard from '../components/PeopleCard';

const People = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character').then(res => {
      setData(res.data.results)
      setIsLoading(false)
    })
      .catch((error) => {
        setError(error.message)
        setIsLoading(false)
      })
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <>
      <h1>People</h1>
      <div className='people-card-holder'>{
        data?.map(person => {
          return <PeopleCard key={person.id} person={person} isRQ={false} />
        })
      }</div>
    </>
  )
}

export default People