import { sigmoid, sigmoidDerivative } from './activations/sigmoid.js';

export class NeuralNetwork {
    constructor({
        inputSize,
        outputSize,
        hiddenLayers,
        learningRate = 0.02,
        activation = 'sigmoid',
        log = false,
        iterations = 2000,
    }) {
        const activations = {
            sigmoid,
        };
        const derivatives = {
            sigmoidDerivative,
        };
        this.inputSize = inputSize;
        this.outputSize = outputSize;
        this.hiddenLayers = hiddenLayers;
        this.learningRate = learningRate;
        this.activation = activations[activation];
        this.derivative = derivatives[`${activation}Derivative`];
        this.log = log;
        this.iterations = iterations;
        this.weights = [];
        this.biases = [];
        this.handleLayers();
    }
    handleLayers() {
        this.layers = [
            new Array(this.inputSize).fill(null).map(() => {
                return { value: null, weights: [] };
            }),
            ...this.hiddenLayers.map((n) =>
                new Array(n).fill(null).map(() => {
                    return { value: null, weights: [], bias: null };
                }),
            ),
            new Array(this.outputSize).fill(null).map(() => {
                return { value: null, bias: null };
            }),
        ];
        this.randomBrain();
    }
    randomBrain() {
        this.layers.slice(0, this.layers.length - 1).forEach((layer, i) => {
            layer.forEach((neuron, j) => {
                neuron.weights = new Array(this.layers[i + 1].length)
                    .fill(null)
                    .map(() => {
                        return Math.random() * 2 - 1;
                    });
            });
        });
        this.layers.slice(1, this.layers.length).forEach((layer, i) => {
            layer.forEach((neuron, j) => {
                neuron.bias = Math.random() * 2 - 1;
            });
        });
    }
    feedForward(inputs) {
        this.layers[0] = inputs.map((input, i) => {
            return { ...this.layers[0][i], value: input };
        });
        this.layers.slice(1, this.layers.length).forEach((layer, i) => {
            layer.forEach((neuron, j) => {
                neuron.value = this.activation(
                    this.layers[i].reduce((a, c, k) => {
                        return a + c.value * c.weights[j];
                    }, neuron.bias),
                );
            });
        });
    }
    MSE(predictedValues, actualValues) {
        return (
            (1 / n) *
            predictedValues.reduce((a, c, i) => {
                return a + (c - actualValues[i]) ** 2;
            }, 0)
        );
    }
    derivativeMSE(predictedValues, actualValues, i = 0) {
        return 2 / n;
    }
}
