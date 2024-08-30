from django.db import models
import tensorflow as tf

@tf.keras.utils.register_keras_serializable()
def custom_accuracy(y_true, y_pred):
    error = tf.reduce_mean(tf.square(y_true - y_pred), axis=1)
    threshold = 0.02
    return tf.reduce_mean(tf.cast(error < threshold, tf.float32))

# Chargez le modèle avec la fonction custom_accuracy
model = tf.keras.models.load_model('fraud_detection_app/auto.keras', custom_objects={'custom_accuracy': custom_accuracy})
