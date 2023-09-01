# INTEGER PROGRAMMING

> An integer programming problem is a mathematical optimization or feasibility program in which some or all of the variables are restricted to be integers.  --Wikipedia

## EXAMPLE PROBLEM

$\begin{cases}
   z = 3x_1 + 4x_2 + x_3 \\
   x_1 + 6x_2 + 2x_3 \geq 5 \\
   2x_1 \geq 3 \\
   x_1, x_2, x_3 \in\natnums
\end{cases}$

**Please find the minimum value of z.**

## SOLVE WITH PYTHON3

The Integer programming problem could be automatically solved by computer now. You could solve this problem with **pulp module of Python** easily.

```python
# Install pulp with command `pip install pulp`
import pulp as pp 
```

Then, set the parameters with $c$ corresponding to the three coefficients of $z$, A_gq and b_eq corresponding yo the coefficients of **the second and third** formulas.

```python
c = [3, 4, 1]
A_gq = [[1, 6, 2], [2, 0, 0]]
b_gq = [5, 3]
```

There are two type of method respectively used to solve either minimum problem or maximum problem: `pulp.LpMinimize` and `pulp.Lpmaximize`. We choose the latter according to the pattern of this problem.

```python
# If this is a maximum value problem, substitute LpMinimize with Lpmaximize.
m = pp.LpProblem(sense=pp.LpMinimize)
```

Define $x_1$, $x_2$, and $x_3$ here.

```python
# define x_1, x_2 and x_3 in a list
# x_1, x_2 and x_3 are all nutural number, so set lowBound=0 and cat='Integer'
x = [pp.LpVariable(f'x{i}', lowBound=0, cat='Integer') for i in [1, 2, 3]]
```

Then, describe this problem to computer using `pulp.lpDot` method.

```python
# corrspond to z
m += pp.lpDot(c, x)

# corrspond to restrictions
for i in range(len(A_gq)):
	m += pp.lpDot(A_gq[i], x) >= b_gq[i]
```

Problem will be automatically solved without knowing the basic mathematical knowledge.

```python
m.solve()
print('minimum value of z:', pp.value(m.objective) )
print('coefficients:', [pp.value(var) for var in x])

'''
key result showed:
minimum value of z:	 8.0
coefficients:	 [2.0, 0.0, 2.0]
'''
```   