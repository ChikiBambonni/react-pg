export const NaNtoNull = value => {
    return Number.isNaN(value) ? null : value;
}
