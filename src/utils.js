export const sortByName = (a, b) => sortBy(a, b, "name");
export const sortBySetNum = (a, b) => sortBy(a, b, "set_num");

const sortBy = (a, b, key) => {
  const keyA = a[key].toString().toUpperCase();
  const keyB = b[key].toString().toUpperCase();

  if (keyA > keyB) {
    return 1;
  }

  if (keyB > keyA) {
    return -1;
  }

  return 0;
};

export const mergeUnique = (a, b, key) => {
  const copy = a.slice();
  const copyKeys = copy.map(cItem => cItem[key]);

  b.forEach(bItem => {
    if (!copyKeys.includes(bItem[key])) {
      copy.push(bItem);
    }
  });

  return copy;
};
