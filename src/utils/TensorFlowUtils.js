import * as tf from '@tensorflow/tfjs';

// Definir un modelo para regresión lineal.
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

// Preparar el modelo para el entrenamiento: especificar la pérdida y el optimizador.
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

// Generar datos de entrenamiento.
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// Entrenar el modelo.
await model.fit(xs, ys, {epochs: 10});
