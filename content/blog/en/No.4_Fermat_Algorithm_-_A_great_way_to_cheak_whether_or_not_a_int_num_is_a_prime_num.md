![random](https://api.vvhan.com/api/acgimg)
*I presuppose that you know what prime num is.*

## Problem

How to judge whether or not a **int** num $n$ is a **prime num**?

## Solution

#### Solution one

This solution is easy to thought out. Just traversing from $1$ to $n-1$, if any num being traversed if divisible by $n$, then it's a composite num.

```python
def is_prime(n):  # the input num n is the num we want to judge
 if n == 1: return False  # special judge, if the num is one, then it's not a prime num
 for i in range(2, n):  # try every int num in [2, n-1] 
  if not n%i: return False  # i < n, so if n%i == 0, then n must be a composite num.
 return True  # if there are no num which is between 1 and n-1 is divisible by n, then n is a prime num
```

If you are a more skilled programmer or you are sensitive to numbers, you may thought out that we can just traversing int num from 2 to $\sqrt{n}$ for that any composite num could be divided into num pairs like a and b which c==a*b and if a was bigger that $\sqrt{n}$, b must be smaller than $\sqrt{n}$.

```python
def is_prime_1(n):  # same to the code above
 if n == 1: return False
 for i in range(2, int(n**0.5)+1):  # try every int num in [2, int(sqrt(i))]
  if not n%i: return False
 return True
```

#### Solution two

According to **Fermat's little theorem**:
>if a num $p$ is a prime num, then $a^{p-1}\equiv 1(mod\;p)(a\subseteq \mathcal{z}^*\;and\;0<a<p)$

So, we can try some random num in [1, p-1], if with the random num a, $a^{p-1}\not\equiv 1(mod\;p)$, then $p$ must not be a prime num. However, if $a^{p-1}\equiv 1(mod\;p)$, then it's still possible that p is not a prime num, so we must check it for serveral times.

```python
def fermat(n):
 if n==2: return True  # same to the code above.
 if n&1==1 or n==1: return False  # Special judge, if n is a even num and n is not 2 or n is 1, it's not a prime num. 

 for i in range(15):
  a = random.randint(2, n-1)  # randomly choice a num from 2 to n-1
  if pow(a, n-1, n) != 1: return False  # if the (n-1)th power of a mod n is not equal to 1, n must be a composite num.
 
 return True  # else n is very likely to be a prime num
```

#### Which is better?

if you have a high demand for the accuracy, then you'd better choose the Solution one.
else if the num is quite large, you'd better choose the Solution two.
