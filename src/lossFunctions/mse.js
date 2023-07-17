export function MSE(predictedValues, actualValues) {
    const n = predictedValues.length;
    return (
        (1 / n) *
        predictedValues.reduce((a, c, i) => {
            return a + (c - actualValues[i]) ** 2;
        }, 0)
    );
}
export function derivativeMSE(predictedValues, actualValues) {
    const n = predictedValues.length;
    return (
        (2 / n) *
        predictedValues.reduce((a, c, i) => {
            return a + (c - actualValues[i]);
        }, 0)
    );
}
