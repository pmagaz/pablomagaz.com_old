export function fetchRequiredActions(...args) {
  const serverContext = ~args.indexOf('server');
  if (serverContext) {
    return fetchServerData.apply(this, args);
  }
  return fetchClientData.apply(this, args);
}

function fetchServerData(dispatch, renderProps) {
  const { components, params } = renderProps;
  const actions = components.reduce((prev, component) => {
    return Object.keys(component).reduce((acc, key) => {
      const hasRequiredActions = component[key].hasOwnProperty('requiredActions');
      return hasRequiredActions ? component[key].requiredActions.concat(acc) : acc;
    }, prev);
  }, []);
  const requiredActions = actions.map(action => dispatch(action(params)));
  return Promise.all(requiredActions);
}

function fetchClientData(actions, props, force = false) {
  const { params, dispatch } = props;
  if (force) actions.map(action => dispatch(action(params)));
}
