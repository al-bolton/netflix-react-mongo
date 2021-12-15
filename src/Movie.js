

function Movie (props) {
  const imgPath = 'https://image.tmdb.org/t/p/w300/' + props.movie.poster_path;

  return (
    <div>
      <img src={imgPath}></img>
    </div>
  )
}

export default Movie;