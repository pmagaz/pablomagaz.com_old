export function fetchRequiredActions(...args) {
  const serverContext = ~args.indexOf('server');
  if (serverContext) {
    return fetchServerData.apply(this, args);
  } else {
    return fetchClientData.apply(this, args);
  }
}

function fetchServerData(dispatch, components, params) {
  const actions = components.reduce( (prev, current) => {
    return Object.keys(current).reduce( (acc, key) => {
      const hasRequiredActions = current[key].hasOwnProperty('requiredActions');
      return hasRequiredActions ? current[key].requiredActions.concat(acc) : acc;
    }, prev);
  }, []);
  const requiredActions = actions.map(action => dispatch(action(params)));
  return Promise.all(requiredActions);
}

function fetchClientData( actions, props, force = false) {
  const { params, dispatch } = props;
  if (force) actions.map( action => dispatch(action(params)) );
}
