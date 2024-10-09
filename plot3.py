from matplotlib import pyplot 

data = open("life_expectancies_usa.txt", "r").readline()

# print(data)

dates = []
males = []
females = []

for info in data:
    date, male, female = data.split(",")
    dates.append(date)
    males.append(male)
    females.append(female)


print(dates)
print(males)
print(females)

d = ['1850', '1850', '1850', '1850', '1850', '1850', '1850', '1850', '1850', '1850', '1850', '1850', '1850', '1850', '1850', '1850', '1850']
y = ['38.30', '38.30', '38.30', '38.30', '38.30', '38.30', '38.30', '38.30', '38.30', '38.30', '38.30', '38.30', '38.30', '38.30', '38.30', '38.30', '38.30']
y1 = ['40.50\n', '40.50\n', '40.50\n', '40.50\n', '40.50\n', '40.50\n', '40.50\n', '40.50\n', '40.50\n', '40.50\n', '40.50\n', '40.50\n', '40.50\n', '40.50\n', '40.50\n', '40.50\n', '40.50\n']


pyplot.plot(d, y, "x")
pyplot.plot(d, y1, "x")
pyplot.show()