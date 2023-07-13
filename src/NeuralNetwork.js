import { sigmoid } from './activations/sigmoid.js';

export class NeuralNetwork {
    constructor({
        inputSize,
        outputSize,
        hiddenLayers,
        learningRate = 0.02,
        activation = 'sigmoid',
        log = false,
    }) {
        const activations = {
            sigmoid,
        };
        this.inputSize = inputSize;
        this.outputSize = outputSize;
        this.hiddenLayers = hiddenLayers;
        this.learningRate = learningRate;
        this.activation = activations[activation];
        this.log = log;
        this.weights = [];
        this.biases = [];
        this.handleLayers();
    }
    handleLayers() {
        this.layers = [
            new Array(this.inputSize).fill(null),
            ...this.hiddenLayers.map((n) => new Array(n).fill(null)),
            new Array(this.outputSize).fill(null),
        ];
        this.layers.slice(0, this.layers.length - 1).forEach((layer, i) => {
            this.weights[i] = [];
            layer.forEach((neuron, j) => {
                this.weights[i][j] = [];
            });
        });
        this.layers.slice(1, this.layers.length).forEach((layer, i) => {
            this.biases[i] = [];
            layer.forEach((neuron, j) => {
                this.biases[i][j] = [];
            });
        });
        this.randomBrain();
    }
    randomBrain() {
        this.layers.slice(0, this.layers.length - 1).forEach((layer, i) => {
            layer.forEach((neuron, j) => {
                this.weights[i][j] = new Array(this.layers[i + 1].length)
                    .fill(null)
                    .map(() => {
                        return Math.random() * 2 - 1;
                    });
            });
        });
        this.layers.slice(1, this.layers.length).forEach((layer, i) => {
            layer.forEach((neuron, j) => {
                this.biases[i][j] = Math.random() * 2 - 1;
            });
        });
    }
    feedForward(inputs) {
        this.layers[0] = inputs;
        this.layers.slice(1, this.layers.length).forEach((layer, i) => {
            layer.forEach((neuron, j) => {
                this.layers[i + 1][j] = this.activation(
                    this.layers[i].reduce((a, c, k) => {
                        return a + c * this.weights[i][k][j];
                    }, this.biases[i][j]),
                );
            });
        });
    }
}
