const normalize = response => {
  return response.map((item, _i, array) => {
    const children = getChildrenIds(
      array.filter(child => child.parent_id === item.id),
      []
    );

    return { ...item, children };
  });
};

const getChildrenIds = (items, ids) => items.map(item => item.id);

export default normalize;
