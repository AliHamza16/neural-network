# No Library Neural Network

In this project, I tried to create my own neural network without using any library.

## Create a Neural Network

```js
const config = {
  inputSize: 2,
  outputSize: 1,
  hiddenLayers: [2],
  ...
}

const net = new NeuralNetwork(config)
```

## Configuration object structure

```js
const config = {
    inputSize: 2,
    outputSize: 1,
    hiddenLayers: [2],
    activation: 'relu',
    outputActivation: 'relu',
    learningRate: 0.02,
    log: false,
    iterations: 2000,
    loss: 'MSE',
};
```

### <span style="color: #5e66d1">inputSize</span>

Determines how many input neurons will be in the neural network

### <span style="color: #5e66d1">outputSize</span>

Determines how many output neurons will be in the neural network

### <span style="color: #5e66d1">hiddenLayers</span>

Gets an array specifying how many neurons will be in each hidden layer

### <span style="color: #5e66d1">activation</span>

Determines according to which activation function the neurons in hidden layers will be activated

### <span style="color: #5e66d1">outputActivation</span>

Determines according to which activation function the output neurons are activated

### <span style="color: #5e66d1">learningRate</span>

The amount that the weights are updated during training

> <span style="color: #5e66d1">Note</span>: A learning rate that is too large can cause the model to converge too quickly to a suboptimal solution, whereas a learning rate that is too small can cause the process to get stuck.

### <span style="color: #5e66d1">log</span>

Determines whether the error of the iterations and the current iteration number are printed to the console

### <span style="color: #5e66d1">iterations</span>

Determines how many iterations to do when the model trains itself

### <span style="color: #5e66d1">loss</span>

Loss function for neural network
