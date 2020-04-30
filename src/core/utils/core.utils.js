export const NaNtoNull = value => (Number.isNaN(value) ? null : value);
export const createEmptyArray = length => new Array(length).fill(null);