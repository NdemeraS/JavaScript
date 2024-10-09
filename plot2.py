from matplotlib import pyplot
import random

x_axis = [1, 2, 3, 4, 5, 6, 7, 0]
y_axis = [random.randint(0, 30) for elt in x_axis]

# y_axis = [1, 2, 3, 4, 5, 6, 1, 10]

pyplot.plot(y_axis, x_axis, "x")
pyplot.ylabel("Values")
pyplot.xlabel("Time")
print(y_axis)
pyplot.show()