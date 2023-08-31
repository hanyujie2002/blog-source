# Nonlinear programming

Nonlinear programming is the dedicated means by which solving nonlinear function problems.

## Example problem:

$\begin{cases}
f(x)_{min} = 2x_1^2 - 4x_1x_2 + 4x_2^2 - 6x_1 - 3x_2 \\
x_1 + x_2 \leq 3 \\
4x_1 + x_2 \leq 9 \\
x_1, x_2 \geq 0
\end{cases}$

We use the Scipy module of Python3 dedicated for mathematical and scientifical problem to solve this problem.

```python
# If maxmize problem, trans it to minimize problem manually
from scipy.optimize import minimize 
import numpy as np
```

*The most important method for solving nonlinear problem is showed below:*

```python

minimize(fun, x0, args=(), method=None, jac=None, hess=None,
         hessp=None, bounds=None, constraints=(), tol=None,
         callback=None, options=None)
```

Don't put too much pressure on youuself despite lots of params of this method as you only have to handle four out of them: **fun, x0, method and constranints**. 

fun corresponds to the function and that of the problem above is: 
$$f(x) = 2x_1^2 - 4x_1x_2 + 4x_2^2 - 6x_1 - 3x_2$$

x0 corresponds to the start point to which you guess where the input the answer corresponds.

method is the method you hope to use during solving the problem as its name shows.

constrains are the constrains showed in the problem and that of the problem above is:

$\begin{cases}
x_1 + x_2 \leq 3 \\
4x_1 + x_2 \leq 9 \\
x_1, x_2 \geq 0
\end{cases}$

Then, this problem is just easy to solve in less than one second after the problem has been described clearly to the computer.

```python
# x[0] and x[1] correspond to x_1 and x_2 respectively
fun = lambda x: 2 * x[0] ** 2 - 4 * x[0] * x[1] + 4 * x[1] ** 2 - 6 * x[0] - 3 * x[1]

# ineq means that the fun >= 0, so the first fun means that x_1 >= 0\\
# the third means that x_1 + x_2 <= 3
cons = ({'type': 'ineq', 'fun': lambda x: x[0]},
        {'type': 'ineq', 'fun': lambda x: x[1]},
        {'type': 'ineq', 'fun': lambda x: 3 - x[0] - x[1]},
        {'type': 'ineq', 'fun': lambda x: 9 - 4*x[0] - x[1]})

x0 = np.asarray((0.5, 0.5))

res = minimize(fun(), x0, method='SLSQP', constraints=cons)

print(res.fun,res.success,res.x,res.status)
```

## All codes for this problem

```python
# If maxmize problem, trans it to minimize problem manually
from scipy.optimize import minimize 
import numpy as np


# x[0] and x[1] correspond to x_1 and x_2 respectively
fun = lambda x: 2 * x[0] ** 2 - 4 * x[0] * x[1] + 4 * x[1] ** 2 - 6 * x[0] - 3 * x[1]

# ineq means that the fun >= 0, so the first fun means that x_1 >= 0\\
# the third means that x_1 + x_2 <= 3
cons = ({'type': 'ineq', 'fun': lambda x: x[0]},
        {'type': 'ineq', 'fun': lambda x: x[1]},
        {'type': 'ineq', 'fun': lambda x: 3 - x[0] - x[1]},
        {'type': 'ineq', 'fun': lambda x: 9 - 4*x[0] - x[1]})

x0 = np.asarray((0.5, 0.5))

res = minimize(fun(), x0, method='SLSQP', constraints=cons)

print(res.fun,res.success,res.x,res.status)

# output: -11.024999999999931 True [1.95 1.05] 0
```