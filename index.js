import { NeuralNetwork } from './src/NeuralNetwork.js';

const config = {
    inputSize: 2,
    outputSize: 1,
    hiddenLayers: [2],
    outputActivation: 'relu',
    activation: 'relu',
    log: true,
    iterations: 2000,
};

const net = new NeuralNetwork(config);
