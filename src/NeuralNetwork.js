import { sigmoid, sigmoidDerivative } from './activations/sigmoid.js';
import { relu, reluDerivative } from './activations/relu.js';
import { MSE, derivativeMSE } from './lossFunctions/mse.js';

const activations = {
    sigmoid,
    relu,
};

const derivatives = {
    sigmoidDerivative,
    reluDerivative,
};

const lossFunctions = {
    MSE,
};

const derivativeLossFunctions = {
    derivativeMSE,
};

export class NeuralNetwork {
    constructor({
        inputSize,
        outputSize,
        hiddenLayers,
        outputActivation,
        learningRate = 0.02,
        activation = 'relu',
        log = false,
        iterations = 2000,
        loss = 'MSE',
    }) {
        this.inputSize = inputSize;
        this.outputSize = outputSize;
        this.hiddenLayers = hiddenLayers;
        this.outputActivation = activations[outputActivation];
        this.derivativeOutputActivation =
            derivatives[`${outputActivation}Derivative`];
        this.learningRate = learningRate;
        this.activation = activations[activation];
        this.derivative = derivatives[`${activation}Derivative`];
        this.log = log;
        this.iterations = iterations;
        this.loss = lossFunctions[loss];
        this.lossDerivative = derivativeLossFunctions[`derivative${loss}`];
        this.handleLayers();
    }
    handleLayers() {
        this.layers = [
            new Array(this.inputSize).fill(null).map(() => {
                return { value: null, weights: [] };
            }),
            ...this.hiddenLayers.map((n) =>
                new Array(n).fill(null).map(() => {
                    return {
                        value: null,
                        a: null,
                        weights: [],
                        bias: null,
                        activation: this.activation,
                    };
                }),
            ),
            new Array(this.outputSize).fill(null).map(() => {
                return {
                    value: null,
                    a: null,
                    bias: null,
                    activation: this.outputActivation,
                };
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
    #feedForward() {
        this.layers.slice(1, this.layers.length).forEach((layer, i) => {
            layer.forEach((neuron, j) => {
                neuron.value = this.layers[i].reduce((a, c, k) => {
                    return a + (i == 0 ? c.value : c.a) * c.weights[j];
                }, neuron.bias);
                neuron.a = neuron.activation
                    ? neuron.activation(neuron.value)
                    : neuron.value;
            });
        });
    }
    run(inputs) {
        this.layers[0] = inputs.map((input, i) => {
            return { ...this.layers[0][i], value: input };
        });
        this.#feedForward();
        return this.layers.at(-1);
    }

    train(trainingData) {
        // todo
    }
}
