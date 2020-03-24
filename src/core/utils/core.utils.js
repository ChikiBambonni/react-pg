export const NaNtoNull = value => {
    return Number.isNaN(value) ? null : value;
}

export const createEmptyArray = length => {
    return new Array(length).fill(null);
};
