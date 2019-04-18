export default function setGlobalState(initialState, models) {
  return models.default.modelIndex.map((model) => {
    return model.setInitialState(initialState);
  });
}
