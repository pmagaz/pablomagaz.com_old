export default function requestMiddleware( store ) {

  return (next) => (action) => {
    const { request, types, ...rest } = action;

    if (!request) return next(action);

    const [REQUEST, SUCCESS, ERROR] = types;

    store.dispatch({ ...rest, type: REQUEST });
    return request.then(
      (result) => store.dispatch({ ...rest, result, type: SUCCESS }),
      (error) => store.dispatch({ ...rest, error, type: ERROR })
    );
  };
}
