import numpy as np
import sys
import joblib

data = sys.argv[1]

l = []
wrd = ""
for i in data:
    if i == ",":
        l.append(float(wrd))
        wrd = ""
    else:
        wrd=wrd+i

l.append(float(wrd))

arr = np.array(l)

model = joblib.load("../MyFolder/Scikit/Free Code Camp/Handwritten number detector/Hmodel.joblib")
arr = arr/256

arr1 = np.array([arr])
[prediction] = model.predict(arr1)
print(prediction,end="")
