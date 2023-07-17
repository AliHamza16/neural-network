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
  loss: 'MSE'
}
```

### inputSize
Determines how many input neurons will be in the neural network

### outputSize
Determines how many output neurons will be in the neural network

### hiddenLayers
Gets an array specifying how many neurons will be in each hidden layer

### activation
Determines according to which activation function the neurons in hidden layers will be activated

### outputActivation
Determines according to which activation function the output neurons are activated

### learningRate
The amount that the weights are updated during training

> **Note**: A learning rate that is too large can cause the model to converge too quickly to a suboptimal solution, whereas a learning rate that is too small can cause the process to get stuck.

### log
Determines whether the error of the iterations and the current iteration number are printed to the console

### iterations
Determines how many iterations to do when the model trains itself

### loss
Loss function for neural network
