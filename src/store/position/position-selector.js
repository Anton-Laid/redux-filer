export const selectorAllPosition = (state) => state.position;

export const selectorVisiblePosition = (state, filters = []) => {
  if (filters.length === 0) return state.position;

  return state.position.filter((i) => {
    const positionFilter = [].concat(
      i.role,
      i.level,
      ...i.languages,
      ...i.tools
    );

    return filters.every((filter) => positionFilter.includes(filter));
  });
};
