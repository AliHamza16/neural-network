export function relu(x) {
    return Math.max(0, x);
}

export function reluDerivative(x) {
    return x > 0 ? 1 : 0;
}
