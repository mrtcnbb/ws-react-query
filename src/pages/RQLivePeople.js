import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { useState } from "react";

const fetchLivePeople = async () => {
  const res = await axios("http://localhost:3001/characters");
  return res;
};

const addLivePerson = (person) => {
  return axios.post(`http://localhost:3001/characters`, person);
};

const RQLivePeople = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const queryClient = useQueryClient();

  const { data, isLoading, isError, error, isFetching, refetch, status } =
    useQuery("live-people", fetchLivePeople, {
      // cacheTime: 5000,
      // staleTime: 10000,
      // refetchOnMount: false,
      // refetchOnWindowFocus: false,
      // refetchInterval: 2000,
      // refetchIntervalInBackground: true
    });

  const { mutate } = useMutation(addLivePerson, {
    onSuccess: () => {
      queryClient.invalidateQueries("live-people");
    },
  });

  const handleClick = () => {
    console.log({ name, gender });
    const person = { name, gender };
    mutate(person);
    setName("");
    setGender("");
  };

  console.log("isLoading, isFetching: ", isLoading, isFetching);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h1>RQ Live People</h1>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <button onClick={handleClick}>Add Live Person</button>
      </div>
      <div>
        <button onClick={refetch}>Fetch Live People</button>
        {data?.data.map((person) => (
          <p key={person.id}>
            {person.name} - {person.gender}
          </p>
        ))}
      </div>
    </>
  );
};

export default RQLivePeople;
