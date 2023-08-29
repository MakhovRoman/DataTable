export const setQuery = (count: number, limit: number, perPage: number) => {
  const result = [];

  const min = perPage - 1;

  for(let i = (count * perPage - min); i <= count * perPage; i++) {
    if(i > limit) break;

    result.push(i);
  }

  const totalPages = Math.ceil(limit / perPage);

  return [result, result[0], result[result.length - 1], totalPages];
}
