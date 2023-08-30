import {
  RouterProvider,
  createBrowserRouter,
  NavLink,
  Outlet,
} from "react-router-dom";
import React, { useState } from "react";
import classes from "./App.css";

//MovieFrom ~
//데이터 저장소는 객체 배열로 사용하며 state 관리
const MovieFrom = (props) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [release_date, setReleaseDate] = useState("");

  //값 입력하기
  const idChangeHandler = (event) => {
    setId(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const genreChangeHandler = (event) => {
    setGenre(event.target.value);
  };

  const releaseDateChangeHandler = (event) => {
    setReleaseDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const movieData = {
      id: id,
      title: title,
      genre: genre,
      releaseDate: new Date(release_date),
    };

    props.onSaveExpenseData(movieData);
    console.log(movieData);
    setId("");
    setTitle("");
    setGenre("");
    setReleaseDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <input
            type="text"
            value={id}
            onChange={idChangeHandler}
            placeholder="Input movie id"
          ></input>
        </div>
        <div>
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div>
          <input
            type="text"
            value={genre}
            onChange={genreChangeHandler}
          ></input>
        </div>
        <div>
          <input
            type="date"
            value={release_date}
            onChange={releaseDateChangeHandler}
          ></input>
        </div>
      </div>
      <div>
        <button type="submit">Add Movie</button>
      </div>
    </form>
  );
};

// ~ MovieFrom

//NewMovie ~
const NewMovie = (props) => {
  const saveMovieDataHandler = (movieData) => {
    const movieData = {
      ...movieData,
    };
    props.onAddMovie(movieData);
  };
  return (
    <>
      <MovieFrom onSaveMovieData={saveMovieDataHandler} />
    </>
  );
};

//~ NewMovie

//ListPage ~
const ListPage = (props) => {
  return (
    <>
      <h1>Movies</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Genre</th>
              <th>Release Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.movies.map((movie) => (
              <MovieItem
                key={movie.id}
                id={movie.id}
                title={movie.title}
                genre={movie.genre}
                release_date={movie.release_date}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

// ~ ListPage

//MovieDate ~
const MovieDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <>
      <div>{year}</div>
      <div>{month}</div>
      <div>{day}</div>
    </>
  );
};

//~MovieDate

//MovieItem ~
const MovieItem = (props) => {
  const deleteMovieHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <tr>
      <MovieDate date={props.release_date} />
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.genre}</td>
      <td>
        <button onClick={deleteMovieHandler}>Delete</button>
      </td>
    </tr>
  );
};
//~ MovieItem

const router = createBrowserRouter([
  {
    path: "/",
    element: { RootLayout },
    children: [
      {
        path: "/",
        element: <ListPage />,
      },
      {
        path: "/create",
        element: <MovieFrom />,
      },
    ],
  },
]);

const MainNavigation = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/create"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Add New Movie
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

const RootLayout = () => {
  return (
    <>
      {MainNavigation}
      <main>
        <Outlet />
      </main>
    </>
  );
};

function App() {
  const [movies, setMovie] = useState([]);
  //state 초기화
  const addMovieHandler = (newMovie) => {
    setMovie((prevMovies) => {
      return [newMovie, ...prevMovies];
    });
  };
  const deleteMovieHandler = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };
  return (
    <>
      <NewMovie onAddMovie={addMovieHandler} />
      <ListPage movies={movies} onDeleteMovie={deleteMovieHandler} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
