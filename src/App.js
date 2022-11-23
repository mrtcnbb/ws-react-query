import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import People from './pages/People';
import RQPeople from './pages/RQPeople';
import Person from './pages/Person';
import RQPaginatedPeople from './pages/RQPaginatedPeople';
import RQPerson from './pages/RQPerson';
import RQLivePeople from './pages/RQLivePeople';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/people' element={<People />} />
          <Route path='/rq-people' element={<RQPeople />} />
          <Route path='/paginated-people' element={<RQPaginatedPeople />} />
          <Route path='/people/:id' element={<Person />} />
          <Route path='/rq-people/:id' element={<RQPerson />} />
          <Route path='/rq-live-people/' element={<RQLivePeople />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
