# Numerical approximation

Numerical approximation is proposed to deduce the point that is lost in the dataset, Numerical approximation is useful while some data in a dataset is lost.

## Interpolation

Interpolation function is a function that ${\color{red}{passes\  through\ all}}$ the sample point.

Mastering numerical analyze is not needed as the SciPy module have provided all the methods you will need to solve problem of this kind.

```python
import numpy as np
from scipy import interpolate
```

**Interpolation** are divided into many parts such as **linear interpolation** and **spline interpolation**.

```python
# Linear interpolation
f_linear = interpolate.interp1d(x, y)
# B-spline interpolation
tck = interpolate.splrep(x, y)
```

There are also many other types of interpolations
```python
for kind in ['nearest', 'zero', 'linear', 'quadratic', 'cubic']:
    f = interpolate.interp1d(x, y, kind=kind)
```

## Least squares fitting

Curve fitting is the process of constructing of a curve or mathematical function, that has the best fit to the data points given. The least squares fitting are the most common method for curve fitting.

```python
import numpy as np
from scipy.optimize import leastsq

# f(x) defines the distance between your fitting function with the actual points
def f(p): 
    k, b = p
    return (Y - (k*x + b))

r = leastsq(f, [1, 0]) # the latter param is the initial k and b given
k, b = r[0]
```
