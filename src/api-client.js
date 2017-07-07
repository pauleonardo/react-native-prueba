const APIKEY = `?api_key=4d449428598032f80441164c083c36ad`
const URL = `https://api.themoviedb.org/3`

const search = (query,page) => {
  return fetch(`${URL}/search/movie${APIKEY}&query=${query}&${page}&language=es-SPA`, {
    headers: new Headers(),
    body: null,
    method: "GET"
  })
  .then( (r) => {
    return r.json();
  })
  .catch( (err) => {
    return err
  })

}

const detail = (id) => {
  return fetch(`${URL}/movie/${id}${APIKEY}&language=es-SPA`,{
    headers: new Headers(),
    body: null,
    method: "GET"
  })
  .then( (r) => {
    return r.json();
  })
  .catch( (err) => {
    return err
  })
}

export {
  search,
  detail
}
