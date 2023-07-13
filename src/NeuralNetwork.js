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
        this.handleLayers();
    }
    handleLayers() {
        this.layers = [
            new Array(this.inputSize),
            ...this.hiddenLayers.map((n) => new Array(n)),
            new Array(this.outputSize),
        ];
        this.randomBrain();
    }
    randomBrain() {}
}
