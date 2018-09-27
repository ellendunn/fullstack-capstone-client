export const normalizeResponseErrors = res => {
  if (!res.ok) {
    if (
      res.headers.has('content-type') &&
      res.headers.get('content-type').startsWith('application/json')
    ) {
      // JSON error is returned from api
      return res.json().then(err => Promise.reject(err))
    }
    // error is returned by express - less informative
    return Promise.reject({
      code: res.status,
      message: res.statusText
    });
  }
  return res;
};

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const fetchRequest = () => ({
  type: FETCH_REQUEST
})
