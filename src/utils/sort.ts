// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sortData = (arr: Record<string, any>[], param:string, isRevert:boolean) => {
  const p = param.toLowerCase();
  const buf = [...arr];

  return !isRevert ? buf.sort((a, b) => a[p] > b[p] ? 1 : -1) : buf.sort((a, b) => b[p] > a[p] ? 1 : -1);
}
