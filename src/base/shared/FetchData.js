export function fetchRequiredActions(...args) {
  const serverContext = ~args.indexOf('server');
  if (serverContext) {
    return fetchServerData.apply(this, args);
  } else {
    return fetchClientData.apply(this, args);
  }
}

function fetchServerData(dispatch, components, params) {
  const actions = components.reduce((prev, component) => {
    const requiredActions = component['requiredActions']; 
    return (requiredActions) ? requiredActions : []; 
    /*return Object.keys(component).reduce((acc, key) => {
      const hasRequiredActions = component[key].hasOwnProperty('requiredActions');
      return hasRequiredActions ? component[key].requiredActions.concat(acc) : acc;
    }, prev);*/
  }, []);
  const requiredActions = actions.map(action => dispatch(action(params)));
  return Promise.all(requiredActions);
}

function fetchClientData(actions, props, force = false) {
  const { params, dispatch } = props;
  if (force) actions.map(action => dispatch(action(params)));
}
