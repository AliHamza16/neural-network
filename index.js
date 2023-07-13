import { NeuralNetwork } from './src/NeuralNetwork.js';

const config = {
    inputSize: 2,
    outputSize: 1,
    hiddenLayers: [2],
};

const net = new NeuralNetwork(config);
console.log(net.layers);
