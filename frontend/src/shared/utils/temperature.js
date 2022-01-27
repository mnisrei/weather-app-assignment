export const calcKelvToFahTemp = (data) => {
    return ((parseFloat(data) - parseFloat(273.15))).toFixed(2);
}