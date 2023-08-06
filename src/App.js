import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Movie'
import MoviesDet from './components/DetailsMovie/MoviesDet';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PopularMovie from './components/PopularMovies/PopularMovie';
import Tv from './components/TvShow/Tv';

function App() {
  return (
    <div>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movies" element={<PopularMovie />} />
          <Route path='/tv' element={<Tv/>} />
          <Route path="/movie/:id" element={<MoviesDet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
