export class NeuralNetwork {
    constructor({
        inputSize,
        outputSize,
        hiddenLayers,
        learningRate = 0.02,
        activation = 'sigmoid',
        log = false,
    }) {
        this.inputSize = inputSize;
        this.outputSize = outputSize;
        this.hiddenLayers = hiddenLayers;
        this.learningRate = learningRate;
        this.activation = activation;
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
}
