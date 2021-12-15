const url = 'http://localhost:3000'

export async function getMovies() {
  return await fetch(url + '/movies').then(res => res.json());
}