---
title: Mathematics
code: MAT 0541 1103G
description: 
icon: ࿕
color: #b30000
---


## Limits and Indeterminate Forms
desc: Standard trigonometric limits, algebraic simplification and logarithmic limits.


### A-1(b) | Final 2022 | 3
Evaluate \(\displaystyle\lim_{x\to0}\frac{1-\cos^3x}{\tan^2x}\).

#### Answer
:::final
\(\displaystyle \frac32\)
:::

#### Explanation
Direct substitution gives \(0/0\), so simplify first. Factor \(1-\cos^3x=(1-\cos x)(1+\cos x+\cos^2x)\). Near zero, \((1-\cos x)/x^2\to1/2\), the second factor tends to \(3\), and \(\tan x/x\to1\).

\(\displaystyle \frac32\)

As \(x\to0\), \(1-\cos^3x\sim \frac32x^2\) and \(\tan^2x\sim x^2\). The ratio tends to \(3/2\).


### A-4(a) | Final 2023 | 3
Evaluate \(\displaystyle\lim_{x\to0}(\cos x)^{1/x^2}\).

#### Answer
:::final
\(\boxed{e^{-1/2}}\)
:::

#### Explanation
When the base tends to \(1\) while the exponent tends to infinity, taking a logarithm changes the power into a quotient. Use \(\log L=\lim\log(\cos x)/x^2\), then use the near-zero approximation \(\log(\cos x)\sim-x^2/2\). Finally exponentiate.

\(e^{-1/2}\)

Let \(L=(\cos x)^{1/x^2}\). Then
\[
\ln L=\lim_{x\to0}\frac{\ln(\cos x)}{x^2}=-\frac12,
\]
using \(\ln(\cos x)\sim-x^2/2\). Hence \(L=e^{-1/2}\).


### A-4(b) | Final 2023 | 3
Evaluate \(\displaystyle\lim_{x\to0}\left(\frac1{\sin x}-\frac1x\right)\).

#### Answer
:::final
\(\boxed{0}\)
:::

#### Explanation
Each fraction diverges separately near zero, but their **difference** need not. Put them over a common denominator: \((x-\sin x)/(x\sin x)\). Since \(\sin x=x-x^3/6+O(x^5)\), the numerator is of order \(x^3\) while the denominator is of order \(x^2\).

\(0\)

Combine the fractions:
\[
\frac{x-\sin x}{x\sin x}.
\]
Since \(x-\sin x\sim x^3/6\) and \(x\sin x\sim x^2\), the ratio tends to \(0\).


## Continuity and Differentiability
desc: Continuity at junctions, one-sided derivatives and the differentiability–continuity relationship.


### A-1(a) | Final 2024 | 5
Show that if a function is differentiable at a point, then it is continuous there. Give an example showing the converse is false.

#### Answer
:::final
Differentiability at a point implies continuity there; the converse is false (for example, \(f(x)=|x|\) at \(0\)).
:::

#### Explanation
A derivative measures the limiting slope as the input approaches a point. If that slope approaches a finite number, the change in function value must approach zero; that is exactly continuity. The reverse fails at sharp corners: the graph can remain unbroken while its left and right slopes disagree.

If \(f'(a)\) exists, then
\[
f(x)-f(a)=(x-a)\frac{f(x)-f(a)}{x-a}.
\]
Taking \(x\to a\), the quotient tends to \(f'(a)\), so \(f(x)-f(a)\to0\). Hence \(f\) is continuous at \(a\).

The converse is false: \(f(x)=|x|\) is continuous at \(0\), but its left derivative is \(-1\) and its right derivative is \(1\), so it is not differentiable there.


### A-1(b) | Term Test 2023 | 2.5
Show that \(f(x)=|x-2|\) is not differentiable at \(x=2\).

#### Answer
:::final
\(f\) is **not differentiable** at \(x=2\): left slope \(-1\), right slope \(+1\).
:::

#### Explanation
An absolute-value graph has a V-shaped corner at its vertex. Rewrite \(|x-2|\) as \(2-x\) to the left of \(2\) and \(x-2\) to the right. A derivative at the join can exist only if both one-sided derivatives match.

For \(x<2\), \(f(x)=2-x\), so \(f'_-(2)=-1\). For \(x>2\), \(f(x)=x-2\), so \(f'_+(2)=1\). Since the one-sided derivatives differ, \(f\) is not differentiable at \(2\).


### A-1(d) | Final 2022 | 3
Given the piecewise function:

- \(f(x)=-2\sin x\), for \(-\pi\le x\le-\pi/2\)
- \(f(x)=a\sin x+b\), for \(-\pi/2<x<\pi/2\)
- \(f(x)=\cos x\), for \(\pi/2\le x\le\pi\)

Find \(a,b\) if \(f\) is continuous on \([-\pi,\pi]\).

#### Answer
:::final
\(\boxed{a=-1,\quad b=1}\)
:::

#### Explanation
A piecewise function is continuous when adjoining formulas approach the **same value** at each joining point. Evaluate the formula on the closed side of \(-\pi/2\) and match it to the middle formula, then do the same at \(\pi/2\). This gives two linear equations for the two unknown constants.

Continuity at \(x=-\pi/2\) gives \(2=-a+b\). Continuity at \(x=\pi/2\) gives \(a+b=0\). Solving,
\(a=-1,\quad b=1\).


## Differentiation Techniques
desc: Implicit, inverse-trigonometric and parametric differentiation, with careful attention to branches.


### A-1(a) | Final 2021 | 4
Find \(dy/dx\) if \((\cos x)^y+(\sin y)^x=0\).

#### Answer
:::final
As printed, the equation does not determine a reliable general real-valued derivative; Proshne vul ache 🔪.
:::

#### Explanation
Before using implicit differentiation, check that the equation defines a real curve near the point of interest. Real powers of negative bases may not be defined, and merely differentiating an uncertain OCR transcription can produce a meaningless result. The printed equation supplies no point or domain on which to establish a general answer.

The source does not specify which real branches of the two powers are intended. Where both bases are nonnegative, their real powers cannot sum to zero except possibly at boundary values; for negative bases certain integer powers may take negative values. Consequently, a global derivative cannot be inferred safely from the printed statement. Check the original scan before attempting implicit differentiation.


### A-1(b) | Final 2021 | 4
Differentiate \(\tan^{-1}\!\left(\frac{2x}{1-x^2}\right)\) with respect to \(\sin^{-1}\!\left(\frac{2x}{1+x^2}\right)\).

#### Answer
:::final
\(\displaystyle \frac{dF}{dG}=1\) for \(|x|<1\); outside this interval the answer depends on the inverse-trigonometric branch (where defined).
:::

#### Explanation
To differentiate one expression \(F(x)\) **with respect to** another \(G(x)\), use \(dF/dG=F\prime(x)/G\prime(x)\). The important subtlety is that inverse sine and inverse tangent return principal values, so familiar double-angle identities need interval restrictions.

On intervals where the expressions and branches are differentiable,
\[
\frac{d}{dx}\tan^{-1}\frac{2x}{1-x^2}=\frac{2(1+x^2)}{(1-x^2)^2+4x^2}=\frac{2}{1+x^2},
\]
and
\[
\frac{d}{dx}\sin^{-1}\frac{2x}{1+x^2}
=\frac{2(1-x^2)}{(1+x^2)^2\sqrt{1-\frac{4x^2}{(1+x^2)^2}}}.
\]
Thus the ratio is branch-dependent; for \(|x|<1\), it simplifies to \(1\). The answer \(1\) applies on the principal branch near \(x=0\).

Use \(dF/dG=(dF/dx)/(dG/dx)\). In the stated interval \(|x|<1\), the inverse-trigonometric identities reduce both expressions to \(2\tan^{-1}x\).


### A-1(c) | Final 2022 | 3
If \(\tan y=\frac{2t}{1-t^2}\) and \(\sin x=\frac{2t}{1+t^2}\), find \(dy/dx\).

#### Answer
:::final
\(\displaystyle \frac{dy}{dx}=1\) on the consistent local branches (for example, \(|t|<1\)).
:::

#### Explanation
Both coordinates are functions of the same parameter \(t\). The chain rule gives \(dy/dx=(dy/dt)/(dx/dt)\), provided \(dx/dt\ne0\). The double-angle identities relate both given functions to \(2\tan^{-1}t\) locally; the sine and tangent inverses have branch restrictions.

Let \(\phi=2\tan^{-1}t\). The double-angle identities give \(\tan\phi=2t/(1-t^2)\) and \(\sin\phi=2t/(1+t^2)\). Locally, when inverse branches agree (for example \(|t|<1\)), we may use \(x=y=\phi\). Thus
\[
\frac{dx}{dt}=\frac{2}{1+t^2},\qquad \frac{dy}{dt}=\frac{2}{1+t^2},\qquad \frac{dy}{dx}=\frac{dy/dt}{dx/dt}=1.
\]
Outside that branch, signs can differ and must be checked.


## Mean Value Theorems
desc: Rolle’s theorem, the Mean Value Theorem, proofs and interval-based applications.


### A-2(a) | Final 2021 | 5
State and prove the Mean Value Theorem.

#### Answer
:::final
If \(f\) is continuous on \([a,b]\) and differentiable on \((a,b)\), some \(c\in(a,b)\) satisfies \(\displaystyle f\prime(c)=\frac{f(b)-f(a)}{b-a}\).
:::

#### Explanation
The Mean Value Theorem says that somewhere inside a smooth stretch of a graph, an instantaneous tangent slope equals the slope of the straight line joining the endpoints. To prove it, subtract that endpoint-joining line from the original function. The resulting function has equal endpoint heights, so Rolle’s theorem guarantees a horizontal tangent.

Let \(m=[f(b)-f(a)]/(b-a)\), and define the line connecting the endpoints by \(L(x)=f(a)+m(x-a)\). Set \(g(x)=f(x)-L(x)\). Because \(g(a)=g(b)=0\), Rolle’s theorem gives an interior point \(c\) with \(g'(c)=0\). Since \(g'(c)=f'(c)-m\), we obtain \(f'(c)=[f(b)-f(a)]/(b-a)\).


### A-2(b) | Final 2021 | 3
Does \(f(x)=x+1/x\) on \([1/2,3]\) satisfy the Mean Value Theorem? Find \(c\).

#### Answer
:::final
Yes. \(\boxed{c=\frac32}\).
:::

#### Explanation
Always check the hypotheses before solving for \(c\). Here \(1/x\) is well-defined throughout the positive interval, so continuity and differentiability hold. Compute the average rate of change across the endpoints, then set it equal to the derivative at \(c\). Discard any candidate outside the open interval.

The function is continuous on \([1/2,3]\) and differentiable on \((1/2,3)\), so the theorem applies. Here \(f(3)=10/3\), \(f(1/2)=5/2\), and the secant slope is \(5/9\). Since \(f'(x)=1-1/x^2\),
\[
1-\frac1{c^2}=\frac59\implies c=\frac32.
\]


### A-4(a) | Final 2022 | 3
State Rolle's theorem and verify it for \(f(x)=1/(2-x^2)\) on \([-1,1]\).

#### Answer
:::final
Rolle’s theorem applies, with \(\boxed{c=0}\).
:::

#### Explanation
Rolle’s theorem is a special case of the Mean Value Theorem: a differentiable, continuous function with equal endpoint values must have at least one horizontal tangent inside. The denominator here is never zero on the stated interval, so there is no continuity obstruction.

Rolle's theorem requires continuity on \([-1,1]\), differentiability on \((-1,1)\), and equal endpoint values. The function meets the first two conditions, but
\(f(-1)=f(1)=1\), so all hypotheses hold. Since
\[
f'(x)=\frac{2x}{(2-x^2)^2},
\]
\(f'(c)=0\) gives \(c=0\), which lies in \((-1,1)\).


### A-4(b) | Final 2022 | 3
For \(f(x)=x(x-1)(x-3)\) on \([0,4]\), find the value(s) required by the Mean Value Theorem.

#### Answer
:::final
\(\boxed{c=\frac83}\).
:::

#### Explanation
Compute the secant slope \([f(4)-f(0)]/4\), then solve \(f\prime(c)\) equal to that slope. Do **not** include endpoints: the theorem guarantees a value strictly inside \((0,4)\).

\(f(0)=0,\ f(4)=12\), so the secant slope is \(3\). Expanding \(f=x^3-4x^2+3x\), we have \(f'=3x^2-8x+3\). Solve \(f'(c)=3\):
\[
3c^2-8c=0\implies c=0\text{ or }c=\frac83.
\]
Only interior values qualify, so \(c=8/3\).


## Higher-Order Derivatives and Leibniz’s Rule
desc: Patterns for nth derivatives, complex-exponential methods and differentiating products.


### A-3(a) | Final 2022 | 3
Find the \(n\)-th derivative of \(\ln(ax+b)\).

#### Answer
:::final
\(\displaystyle \boxed{\frac{d^n}{dx^n}\ln(ax+b)=(-1)^{n-1}(n-1)!\frac{a^n}{(ax+b)^n}}\) for \(n\ge1\).
:::

#### Explanation
Differentiate several times to recognize the pattern: first \(a/(ax+b)\), next \(-a^2/(ax+b)^2\), then \(+2a^3/(ax+b)^3\). Each differentiation adds one factor of \(a\), raises the denominator power, and multiplies by the next integer, producing a factorial.

For \(n\ge1\),
\[
\boxed{\frac{d^n}{dx^n}\ln(ax+b)=(-1)^{n-1}(n-1)!\frac{a^n}{(ax+b)^n}.}
\]

The first derivative is \(a/(ax+b)\). Repeated differentiation gives the alternating sign, factorial and power shown.


### A-2(a) | Final 2024 | 4
Find the \(n\)-th derivative of \(e^{ax}\cos(bx+c)\).

#### Answer
:::final
\(\displaystyle \boxed{y^{(n)}=(a^2+b^2)^{n/2}e^{ax}\cos\bigl(bx+c+n\arg(a+ib)\bigr)}\), for \((a,b)\ne(0,0)\).
:::

#### Explanation
Differentiating \(e^{ax}\cos(bx+c)\) repeatedly with the product rule is tedious. Instead, view cosine as the real part of \(e^{i(bx+c)}\). Each derivative multiplies the complex exponential by \(a+ib\). Writing this multiplier in magnitude-and-angle form explains the increasing amplitude factor and phase shift.

\[
\boxed{y^{(n)}=(a^2+b^2)^{n/2}e^{ax}\cos\!\left(bx+c+n\tan^{-1}\frac ba\right)}
\]
for \(a\ne0\), with the phase more generally written \(n\arg(a+ib)\) to handle signs consistently.

Write \(e^{ax}\cos(bx+c)=\Re(e^{i c}e^{(a+ib)x})\). Differentiating \(n\) times multiplies by \((a+ib)^n\).


### A-2(b) | Final 2024 | 4
State Leibniz's theorem for the \(n\)-th derivative of a product.

#### Answer
:::final
\(\displaystyle \boxed{(uv)^{(n)}=\sum_{r=0}^{n}\binom nr u^{(r)}v^{(n-r)}}\).
:::

#### Explanation
The usual product rule splits one derivative between two factors. Applying it repeatedly distributes \(n\) derivatives in every possible way. The coefficient \(\binom nr\) counts the ways to assign \(r\) derivatives to \(u\) and the other \(n-r\) to \(v\).

If \(u,v\) are \(n\)-times differentiable, then
\[
\boxed{\frac{d^n}{dx^n}(uv)=\sum_{r=0}^{n}\binom nr u^{(r)}v^{(n-r)}.}
\]

This follows by induction from the product rule and Pascal's identity for binomial coefficients.


## Taylor and Maclaurin Series
desc: Series multiplication, Taylor polynomials and Lagrange remainder terms.


### A-3(a) | Final 2024 | 2
Find the first three nonzero terms of the Maclaurin series for \(e^x\cos x\).

#### Answer
:::final
\(\boxed{1+x-\frac{x^3}{3}}\)
:::

#### Explanation
A Maclaurin series is a Taylor series centered at \(x=0\). Multiply the known series for \(e^x\) and \(\cos x\), collecting coefficients of each power. The \(x^2\) terms cancel, so \(x^2\) must **not** be counted among the first three nonzero terms.

Using \(e^x=1+x+x^2/2+x^3/6+\cdots\) and \(\cos x=1-x^2/2+x^4/24-\cdots\),
\[
e^x\cos x=1+x+0x^2-\frac{x^3}{3}-\frac{x^4}{6}+\cdots.
\]
The first three nonzero terms are \(1+x-\frac{x^3}{3}\).

## Theorems and Series
desc: Mean value theorems, Taylor expansions, Leibniz's rule and homogeneous functions.


### A-2(c) | Final 2021 | 4
Expand \(\ln(1+x)\) in powers of \(x\) and give the Lagrange remainder.

#### Answer
:::final
\(\displaystyle \ln(1+x)=\sum_{k=1}^n(-1)^{k-1}\frac{x^k}{k}+R_n,\quad R_n=\frac{(-1)^nx^{n+1}}{(n+1)(1+\xi)^{n+1}}\), with \(\xi\) between \(0\) and \(x\).
:::

#### Explanation
The geometric series \(1/(1+t)=1-t+t^2-\cdots\) can be integrated from \(0\) to \(x\) to obtain the logarithm series for \(|x|<1\). A finite Taylor expansion still has an error term, called the **Lagrange remainder**. It evaluates the \((n+1)\)st derivative at an intermediate point \(\xi\).

For \(|x|<1\),
\[
\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots+(-1)^{n-1}\frac{x^n}{n}+R_n,
\]
where Taylor's theorem gives
\[
R_n=\frac{f^{(n+1)}(\xi)}{(n+1)!}x^{n+1}
=\frac{(-1)^n x^{n+1}}{(n+1)(1+\xi)^{n+1}}
\]
for some \(\xi\) between \(0\) and \(x\).


## Curve Sketching and Single-Variable Extrema
desc: Critical points, monotonicity, concavity, inflection points and local versus absolute extrema.


### A-2(a) | Final 2022 | 8
For \(f(x)=2x^2-x^4\), find intercepts, increasing/decreasing intervals, concavity, extrema and the Taylor polynomial about \(x=3\).

#### Answer
:::final
Intercepts: \(x=0,\pm\sqrt2\). Local maxima \(f(\pm1)=1\); local minimum \(f(0)=0\). Inflections \((\pm1/\sqrt3,5/9)\). Taylor polynomial: \(-63-96(x-3)-52(x-3)^2-12(x-3)^3-(x-3)^4\). See explanation for intervals and concavity.
:::

#### Explanation
A curve-sketching problem is a sequence of separate tests: solve \(f=0\) for intercepts; inspect the sign of \(f\prime\) for increasing/decreasing behavior; inspect \(f\prime\prime\) for concavity; and check sign changes to classify critical and inflection points. Because \(f\) is a polynomial of degree four, its fourth-degree Taylor expansion is exact.

- Intercepts: \(f(x)=x^2(2-x^2)=0\), so \(x=0,\pm\sqrt2\). The \(y\)-intercept is \((0,0)\).
- \(f'(x)=4x-4x^3=4x(1-x^2)\). Increasing on \((-\infty,-1)\cup(0,1)\); decreasing on \((-1,0)\cup(1,\infty)\).
- \(f''(x)=4-12x^2\). Concave up for \(|x|<1/\sqrt3\), concave down for \(|x|>1/\sqrt3\).
- Local maxima occur at \(x=\pm1\), with \(f(\pm1)=1\). At \(x=0\), there is a local minimum \(f(0)=0\). Since \(f(x)\to-\infty\) as \(|x|\to\infty\), there is no absolute minimum.
- Inflection points: \(x=\pm1/\sqrt3\), \(f=5/9\).

Taylor polynomial about \(x=3\), exact through degree four:
\[
f(x)=-63-96(x-3)-52(x-3)^2-12(x-3)^3-(x-3)^4.
\]


### A-2(a) | Term Test 2023 | 2.5
Find the maximum and minimum values of \(f(x)=5x^6-18x^5+15x^2-10\).

#### Answer
Differentiating, \(f'(x)=30x^5-90x^4+30x=30x(x^4-3x^3+1)\).

Setting \(f'(x)=0\), the critical points are \(x=0,\;0.764826,\;2.961500\) (approximately).

Now, \(f''(x)=150x^4-360x^3+30\).

- At \(x=0\), \(f''(0)>0\), so the local minimum is \(f(0)=-10\).
- At \(x\approx0.764826\), \(f''(x)<0\), so the local maximum is \(f(x)\approx-4.936\).
- At \(x\approx2.961500\), \(f''(x)>0\), so the local minimum is \(f(x)\approx-605.703\).

Since \(f(x)\to+\infty\) as \(x\to\pm\infty\), there is no absolute maximum.

**Therefore, the local maximum is \(\boxed{-4.936}\), and the absolute minimum is \(\boxed{-605.703}\).**
## Partial Derivatives and Coordinate Transformations
desc: The multivariable chain rule and conversion between Cartesian and polar derivatives.


### A-3(c) | Final 2021 | 4
For \(f=f(x,y)\), \(x=r\cos\theta,\ y=r\sin\theta\), show the relation between Cartesian and polar derivatives.

#### Answer
:::final
\(\displaystyle \boxed{f_x^2+f_y^2=f_r^2+\frac{f_\theta^2}{r^2}}\) for \(r>0\).
:::

#### Explanation
The function is the same, but its coordinates are changing from \((x,y)\) to \((r,\theta)\). Apply the multivariable chain rule to calculate how the output changes as \(r\) or \(\theta\) changes. Squaring the radial derivative and the suitably scaled angular derivative cancels their cross terms.

The correct identity is
\[
\boxed{f_x^2+f_y^2=f_r^2+\frac1{r^2}f_\theta^2.}
\]
The OCR version appears to omit the square on \(r\) in the denominator.

By the chain rule,
\(f_r=f_x\cos\theta+f_y\sin\theta\) and
\(f_\theta=-rf_x\sin\theta+rf_y\cos\theta\).
Squaring and adding gives \(f_r^2+f_\theta^2/r^2=f_x^2+f_y^2\).


## Homogeneous Functions and Euler’s Theorem
desc: Scaling degrees, Euler’s identity and applications to composite functions.


### A-3(a) | Final 2021 | 5
State and prove Euler's theorem on homogeneous functions.

#### Answer
:::final
For a differentiable degree-\(n\) homogeneous function, \(\boxed{xf_x+yf_y=nf}\).
:::

#### Explanation
“Homogeneous of degree \(n\)” means that multiplying **both** inputs by \(t\) multiplies the output by \(t^n\). Differentiating this scaling rule with respect to \(t\) and then setting \(t=1\) turns a property of rescaling into a relationship involving partial derivatives.

If \(u=f(x,y)\) is homogeneous of degree \(n\), so \(f(tx,ty)=t^n f(x,y)\), then
\[
\boxed{x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}=nu.}
\]

Differentiate \(f(tx,ty)=t^n f(x,y)\) with respect to \(t\):
\(x f_x(tx,ty)+y f_y(tx,ty)=nt^{n-1}f(x,y)\). Put \(t=1\).


### A-3(c) | Final 2024 | 4
Verify Euler's theorem for \(f(x,y)=x^n\sin(y/x)\).

#### Answer
:::final
\(\boxed{xf_x+yf_y=n x^n\sin(y/x)=nf}\).
:::

#### Explanation
First check degree: replacing \((x,y)\) by \((tx,ty)\) leaves \(y/x\) unchanged and multiplies \(x^n\) by \(t^n\). Next differentiate with respect to each variable. When forming \(xf_x+yf_y\), the two cosine terms cancel and only \(nf\) remains.

The function is homogeneous of degree \(n\), since \(f(tx,ty)=t^n x^n\sin(y/x)\). Therefore \(xf_x+yf_y=nf\).

Directly,
\[
f_x=nx^{n-1}\sin(y/x)-yx^{n-2}\cos(y/x),\quad
f_y=x^{n-1}\cos(y/x),
\]
so \(xf_x+yf_y=nx^n\sin(y/x)=nf\).

## Partial Derivatives and Extrema
desc: Multivariable differentiation, optimization and geometric applications.


### A-3(b) | Final 2021 | 4
If \(u=\cos^{-1}\!\left(\frac{x+y}{\sqrt{x}+\sqrt{y}}\right)\), show that \(xu_x+yu_y+\frac12\cot u=0\).

#### Answer
Let
\[
\cos u=\frac{x+y}{\sqrt{x}+\sqrt{y}}.
\]

The right-hand side is a homogeneous function of degree \(\frac12\), since the numerator has degree \(1\) and the denominator has degree \(\frac12\).

By Euler's theorem on homogeneous functions,
\[
x\frac{\partial(\cos u)}{\partial x}+y\frac{\partial(\cos u)}{\partial y}=\frac12\cos u.
\]

Using the chain rule,
\[
-x\sin u\,u_x-y\sin u\,u_y=\frac12\cos u.
\]

Taking \(-\sin u\) common,
\[
-\sin u(xu_x+yu_y)=\frac12\cos u.
\]

Dividing by \(-\sin u\),
\[
xu_x+yu_y=-\frac12\frac{\cos u}{\sin u}.
\]

Therefore,
\[
\boxed{xu_x+yu_y+\frac12\cot u=0}.
\]

Hence proved.

### A-3 | Term Test 2023 | 2.5

If \(z=\tan^{-1}\left(\frac{x^2+y^2}{x-y}\right)\), prove that

\[
xz_x+yz_y=\frac12\sin 2z,
\]

where \(z_x=\frac{\partial z}{\partial x}\) and \(z_y=\frac{\partial z}{\partial y}\).

#### Answer

\[
\boxed{xz_x+yz_y=\frac12\sin 2z}
\]

#### Explanation

**Step 1: Identify the homogeneous function.**

Given,

\[
z=\tan^{-1}\left(\frac{x^2+y^2}{x-y}\right).
\]

Taking the tangent of both sides,

\[
\tan z=\frac{x^2+y^2}{x-y}.
\]

Let

\[
u=\tan z=\frac{x^2+y^2}{x-y}.
\]

The numerator \(x^2+y^2\) is homogeneous of degree \(2\), while the denominator \(x-y\) is homogeneous of degree \(1\).

Therefore, \(u\) is homogeneous of degree \(2-1=1\).

**Step 2: Apply Euler's theorem.**

Euler's theorem states that if \(u\) is a differentiable homogeneous function of degree \(n\), then

\[
x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}=nu.
\]

Since \(u\) is homogeneous of degree \(1\),

\[
x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}=u.
\]

**Step 3: Differentiate using the chain rule.**

Since \(u=\tan z\),

\[
\frac{\partial u}{\partial x}=\sec^2z\frac{\partial z}{\partial x}
\]

and

\[
\frac{\partial u}{\partial y}=\sec^2z\frac{\partial z}{\partial y}.
\]

Substituting into Euler's theorem,

\[
x\sec^2z\frac{\partial z}{\partial x}
+y\sec^2z\frac{\partial z}{\partial y}
=\tan z.
\]

Factoring out \(\sec^2z\),

\[
\sec^2z\left(x\frac{\partial z}{\partial x}+y\frac{\partial z}{\partial y}\right)=\tan z.
\]

Therefore,

\[
x\frac{\partial z}{\partial x}+y\frac{\partial z}{\partial y}
=\frac{\tan z}{\sec^2z}.
\]

**Step 4: Simplify using trigonometric identities.**

Using

\[
\tan z=\frac{\sin z}{\cos z},
\qquad
\sec^2z=\frac{1}{\cos^2z},
\]

we obtain

\[
\begin{aligned}
x\frac{\partial z}{\partial x}+y\frac{\partial z}{\partial y}
&=\frac{\sin z}{\cos z}\cdot\cos^2z\\[4pt]
&=\sin z\cos z\\[4pt]
&=\frac12\sin 2z.
\end{aligned}
\]

Hence,

\[
\boxed{xz_x+yz_y=\frac12\sin 2z}.
\]

**Hence proved.**

**Note:** The result holds for \(x-y\neq 0\). If the original question gives \(\sin 2z\) instead of \(\frac12\sin 2z\), the stated result contains an error. The correct relation includes the factor \(\frac12\).

## Optimization Applications
desc: Two-variable critical points and geometric minimum-material problems.


### A-4(b) | Final 2023 | 4
Find the local extreme values of \(f(x,y)=2xy-5x^2-2y^2+4x+4y-4\).

#### Answer
:::final
Strict (and absolute) maximum \(\boxed{f(2/3,4/3)=0}\); no minimum.
:::

#### Explanation
For a function of two variables, a stationary point requires **both** first partial derivatives to be zero. Solve the resulting simultaneous equations. The second-derivative test uses \(D=f_{xx}f_{yy}-f_{xy}^2\): if \(D>0\) and \(f_{xx}<0\), the surface bends downward in both directions and the stationary point is a maximum. Here the quadratic part is negative definite, so the maximum is also global.

First find stationary points:
\[
f_x=2y-10x+4=0,\qquad f_y=2x-4y+4=0.
\]
From the first equation \(y=5x-2\); substituting into the second gives \(x=2/3\), then \(y=4/3\). At this point \(f(2/3,4/3)=0\). The Hessian test gives
\[
D=f_{xx}f_{yy}-f_{xy}^2=(-10)(-4)-2^2=36>0.
\]
Because \(f_{xx}=-10<0\), this is a strict local maximum. In fact, complete the square:
\[
f(x,y)=-5\left(x-\frac23\right)^2+2\left(x-\frac23\right)\left(y-\frac43\right)-2\left(y-\frac43\right)^2.
\]
This is nonpositive for all \((x,y)\), so \(0\) is the **absolute** maximum. Moving far away makes \(f\to-\infty\), hence no minimum exists.


### B-4(c) | Final 2021 | 5
An open tank has fixed volume, a square base of width \(x\), and height \(h\). Show when its lining cost is least.

#### Answer
:::final
\(\boxed{h=x/2}\) for an open tank with equal lining cost per unit area.
:::

#### Explanation
With fixed volume, height and base width cannot vary independently: \(h=V/x^2\). Because the top is open, the material covers the base \(x^2\) and four sides \(4xh\), not a lid. Substitute the volume relation into the surface-area formula and minimize the resulting one-variable function for \(x>0\).

Let volume \(V=x^2h\), so \(h=V/x^2\). The lined area is \(S=x^2+4xh=x^2+4V/x\). Then
\(S'=2x-4V/x^2=0\), so \(x^3=2V\). Consequently \(h=V/x^2=x/2\).
Thus the least lining cost occurs when the height is half the base width.


### B-5(a) | Final 2023 | 5
A conical tent has fixed volume. Find the ratio of height to base radius for minimum canvas area.

#### Answer
:::final
\(\boxed{h:r=\sqrt2:1}\).
:::

#### Explanation
A tent needs canvas for its **curved side**, not its circular floor. Since volume is fixed, use \(h=3V/(\pi r^2)\) to eliminate height from \(S=\pi r\sqrt{r^2+h^2}\). Squaring the positive area makes differentiation easier without changing the minimum. Substitute the minimizing radius back to obtain \(h/r\).

For radius \(r\), height \(h\), and slant height \(l=\sqrt{r^2+h^2}\), fixed volume means \(V=\pi r^2h/3\), so \(h=3V/(\pi r^2)\). Canvas area is the curved area \(S=\pi rl\). Minimizing \(S^2/\pi^2=r^2(r^2+h^2)=r^4+9V^2/(\pi^2r^2)\) gives
\(4r^3-18V^2/(\pi^2r^3)=0\), or \(r^6=9V^2/(2\pi^2)\). Hence \(h/r=\sqrt2\).
\[
\boxed{h:r=\sqrt2:1.}
\]

## Tangents, Normals and Curvature
desc: Tangent lines, normals, curvature and radius of curvature.


## Tangents and Normals
desc: Implicit differentiation and equations of tangent and normal lines.


### B-4(a) | Final 2021 | 4
Find the tangent and normal to \(y(x-2)(x-3)-x+7=0\) where it meets the \(x\)-axis.

#### Answer
:::final
Tangent: \(\boxed{x-20y-7=0}\). Normal: \(\boxed{20x+y-140=0}\).
:::

#### Explanation
Where a curve meets the \(x\)-axis, \(y=0\). Find that point before differentiating. Differentiate the implicit equation to obtain the tangent slope \(m\); the normal is perpendicular, so its slope is \(-1/m\). Substitute each slope and the point into the point–slope equation.

At the \(x\)-axis, \(y=0\), so \(-x+7=0\), giving \((7,0)\). Let \(F(x,y)=y(x-2)(x-3)-x+7\). Implicit differentiation gives
\[
y'=-\frac{y(2x-5)-1}{(x-2)(x-3)}.
\]
At \((7,0)\), \(y'=1/20\). Therefore:
- Tangent: \(y=(x-7)/20\), or \(x-20y-7=0\).
- Normal: \(y=-20(x-7)\), or \(20x+y-140=0\).


### B-5(a) | Term Test 2023 | 2.5
Find tangent and normal to \(y^2-6x^2+4y+19=0\) at \((2,1)\).

#### Answer
:::final
Tangent: \(\boxed{4x-y-7=0}\). Normal: \(\boxed{x+4y-6=0}\).
:::

#### Explanation
First verify that the supplied point actually lies on the curve. Differentiate implicitly, collecting all terms containing \(dy/dx\) on one side. The tangent uses the derivative as its slope; the normal uses the negative reciprocal. The prior explanation wrongly claimed the point was not on the curve.

Check the point: \(1^2-6(2)^2+4(1)+19=1-24+4+19=0\), so \((2,1)\) is on the curve. Implicitly differentiating,
\[
2yy'-12x+4y'=0\quad\Longrightarrow\quad y'=\frac{6x}{y+2}.
\]
At \((2,1)\), \(m=12/3=4\). Therefore the tangent is \(y-1=4(x-2)\), or \(4x-y-7=0\). The perpendicular normal has slope \(-1/4\), so \(y-1=-(x-2)/4\), or \(x+4y-6=0\).


## Curvature and Radius of Curvature
desc: Curvature of parametric curves and parabolas.


### B-4(c) | Final 2024 | 4
Find the radius of curvature of the cycloid \(x=a(\theta+\sin\theta),\ y=a(1-\cos\theta)\).

#### Answer
:::final
\(\boxed{\rho=4a\lvert\cos(\theta/2)\rvert}\) for regular points (\(a>0\)); the limiting value at cusps is \(0\).
:::

#### Explanation
Curvature measures how quickly a curve changes direction. For a parametric curve, the radius of curvature is \((x\prime^2+y\prime^2)^{3/2}/|x\prime y\prime\prime-y\prime x\prime\prime|\). Compute the first and second derivatives with respect to \(\theta\), then use \(1+\cos\theta=2\cos^2(\theta/2)\) to simplify.

For a parametric curve,
\[
\rho=\frac{(x'^2+y'^2)^{3/2}}{|x'y''-y'x''|}.
\]
Here \(x'=a(1+\cos\theta)\), \(y'=a\sin\theta\), \(x''=-a\sin\theta\), \(y''=a\cos\theta\). Simplification gives
\[
\boxed{\rho=4a\left|\cos\frac{\theta}{2}\right|.}
\]
At a cusp, \(\theta=(2k+1)\pi\), the radius tends to zero.


### B-4(b) | Final 2023 | 3
Find the radius of curvature of the parabola \(y^2=4x\) at its vertex.

#### Answer
:::final
\(\boxed{\rho=2}\).
:::

#### Explanation
The parabola \(y^2=4ax\) has vertex at the origin. Parameterize it by \(x=at^2\), \(y=2at\), then apply the parametric radius-of-curvature formula at \(t=0\). The standard result is \(2a\), so here it is \(2\).

For \(y^2=4ax\), the radius of curvature at the vertex is \(2a\). Here \(a=1\), so \(\boxed{\rho=2}\).

## Coordinate Geometry: Conics and Pair of Lines
desc: Classifying conics, rotating axes and equations of straight-line pairs.


## Conic Sections and Rotation of Axes
desc: Quadratic classification, diagonalization and 45-degree coordinate rotations.


### B-6(b) | Final 2021 | 5
Find the nature and standard form of \(5x^2-2xy+5y^2-8x-8y-8=0\).

#### Answer
:::final
Ellipse: \(\displaystyle \boxed{\frac{(X-\sqrt2)^2}{4}+\frac{Y^2}{8/3}=1}\), where \(X=(x+y)/\sqrt2\), \(Y=(x-y)/\sqrt2\).
:::

#### Explanation
The \(xy\) term means the principal axes are tilted. The substitutions \(X=(x+y)/\sqrt2\) and \(Y=(x-y)/\sqrt2\) align the coordinates with the quadratic form’s principal directions. After substitution, complete the square. A sum of two positive squared terms equal to \(1\) identifies an ellipse.

The quadratic part has matrix \(\begin{pmatrix}5&-1\\-1&5\end{pmatrix}\), with positive eigenvalues \(4,6\); hence the conic is an ellipse. Rotate axes by \(45^\circ\) to remove the \(xy\)-term. With \(X=(x+y)/\sqrt2,\ Y=(x-y)/\sqrt2\), the equation becomes
\[
4X^2+6Y^2-8\sqrt2X-8=0.
\]
Completing the square:
\[
4(X-\sqrt2)^2+6Y^2=16,
\quad\text{or}\quad
\boxed{\frac{(X-\sqrt2)^2}{4}+\frac{Y^2}{8/3}=1.}
\]


### B-5(a) | Final 2023 | 4
Transform \(x^2-y^2-2\sqrt2x-10\sqrt2y+2=0\) to axes rotated by \(45^\circ\).

#### Answer
:::final
\(\boxed{-2XY-12X-8Y+2=0}\), using \(x=(X-Y)/\sqrt2\), \(y=(X+Y)/\sqrt2\).
:::

#### Explanation
Rotating axes changes coordinates, not the geometric curve. For a \(45^\circ\) rotation use \(x=(X-Y)/\sqrt2\), \(y=(X+Y)/\sqrt2\). Substitute these formulas into **every** term, expand carefully, and collect the \(X\), \(Y\), and \(XY\) terms.

Use \(x=(X-Y)/\sqrt2,\ y=(X+Y)/\sqrt2\) (new axes rotated \(45^\circ\)). Then \(x^2-y^2=-2XY\), \(-2\sqrt2x=-2X+2Y\), and \(-10\sqrt2y=-10X-10Y\). Thus
\[
\boxed{-2XY-12X-8Y+2=0.}
\]
(Using the opposite rotation convention changes the signs of the mixed/linear terms accordingly.)


## Pairs of Straight Lines and Angle Bisectors
desc: Factoring second-degree equations and identifying parallel lines or angle bisectors.


### B-6(a) | Final 2021 | 5
Show that \(2x^2-xy-y^2+5x+y+2=0\) represents a pair of straight lines.

#### Answer
:::final
Lines: \(\boxed{2x+y+1=0}\) and \(\boxed{x-y+2=0}\); intersection \((-1,1)\).
:::

#### Explanation
A second-degree equation can represent two straight lines when its left side factors into two first-degree expressions. Multiply the proposed factors back to check every term. To find their intersection, solve the two line equations simultaneously. An angle bisector consists of points having equal **perpendicular distances** from the two lines.

Factorization:
\[
2x^2-xy-y^2+5x+y+2=(2x+y+1)(x-y+2).
\]
Thus the lines are \(2x+y+1=0\) and \(x-y+2=0\). Their intersection is found from \(y=-2x-1\) and \(y=x+2\), giving \((-1,1)\).

The angle bisectors satisfy equality of perpendicular distances:
\[
\boxed{\frac{2x+y+1}{\sqrt5}=\pm\frac{x-y+2}{\sqrt2}.}
\]


### B-6(b) | Term Test 2023 | 2.5
Prove that \(x^2+6xy+9y^2+4x+12y-5=0\) represents two parallel lines.

#### Answer
:::final
\(\boxed{x+3y=1\quad\text{or}\quad x+3y=-5}\) (parallel lines).
:::

#### Explanation
Group the polynomial by repeated expressions: the quadratic terms are \((x+3y)^2\), and the linear terms are \(4(x+3y)\). Set \(u=x+3y\), solve the simple quadratic in \(u\), and substitute back. Both final lines have the same \(x\) and \(y\) coefficients, so they are parallel.

Since \(x^2+6xy+9y^2=(x+3y)^2\) and \(4x+12y=4(x+3y)\), put \(u=x+3y\):
\[
u^2+4u-5=0=(u-1)(u+5).
\]
Therefore the lines are \(x+3y=1\) and \(x+3y=-5\), which are parallel.


### B-5(c) | Final 2023 | 4
Obtain the angle bisectors for the pair of lines \(ax^2+2hxy+by^2=0\).

#### Answer
:::final
\(\boxed{(a-b)xy+h(y^2-x^2)=0}\) (for a real, distinct pair of lines).
:::

#### Explanation
Two lines through the origin have angular bisectors through the origin as well. One way to derive the equation is to rotate the axes until the original quadratic has equal coefficients for the squared-coordinate terms. The bisector directions satisfy the displayed homogeneous quadratic. This assumes the original equation actually represents two real distinct lines.

The pair passes through the origin. The angle bisectors are
\[
\boxed{\frac{(a-b)xy+h(y^2-x^2)}{\sqrt{(a-b)^2+4h^2}}=0}
\]
equivalently \((a-b)xy+h(y^2-x^2)=0\).

## Three-Dimensional Geometry
desc: Direction cosines, planes, and shortest distance between lines.


## Direction Cosines and Angles in Space
desc: Unit direction vectors, dot products and cube-diagonal identities.


### B-7(a) | Final 2021 | 4
Define direction cosines and state their relation.

#### Answer
:::final
\(l=\cos\alpha,\ m=\cos\beta,\ n=\cos\gamma\), with \(\boxed{l^2+m^2+n^2=1}\).
:::

#### Explanation
A direction cosine is the cosine of the angle a line’s **unit direction vector** makes with a positive coordinate axis. The numbers \(l,m,n\) are the three components of that unit vector. Since its length is \(1\), the sum of their squares must be \(1\).

If a line makes angles \(\alpha,\beta,\gamma\) with the positive coordinate axes, its direction cosines are \(l=\cos\alpha,\ m=\cos\beta,\ n=\cos\gamma\). They satisfy
\[
\boxed{l^2+m^2+n^2=1.}
\]
If direction ratios are \(a,b,c\), then \(l=a/\sqrt{a^2+b^2+c^2}\), with analogous formulas for \(m,n\).


### B-7(b) | Final 2021 | 4
Show that the angle between lines with direction cosines \((l_1,m_1,n_1)\) and \((l_2,m_2,n_2)\) satisfies the dot-product formula.

#### Answer
:::final
\(\boxed{\cos\theta=l_1l_2+m_1m_2+n_1n_2}\) for oriented directions.
:::

#### Explanation
The dot product of two unit vectors equals the cosine of the angle between them. Because direction cosines are precisely the components of unit direction vectors, multiply corresponding components and add. If you need the smaller angle between unoriented lines, use the absolute value.

\[
\boxed{\cos\theta=l_1l_2+m_1m_2+n_1n_2.}
\]
This is the dot product of the two unit direction vectors. For the acute angle between unoriented lines, take the absolute value if necessary.


### B-7(c) | Final 2021 | 4
A line makes angles \(\alpha,\beta,\gamma,\delta\) with the four body diagonals of a cube. Show that the sum of the squared cosines is \(4/3\).

#### Answer
:::final
\(\boxed{\cos^2\alpha+\cos^2\beta+\cos^2\gamma+\cos^2\delta=\frac43}\).
:::

#### Explanation
Each cube body diagonal has direction components \(\pm1/\sqrt3\). Take the dot product of a general unit vector \((l,m,n)\) with four suitable diagonal directions and square the results. When the four expressions are added, all mixed products cancel, leaving four copies of \(l^2+m^2+n^2\) divided by three.

Choose unit vectors along four diagonals as
\((1,1,1)/\sqrt3,(1,1,-1)/\sqrt3,(1,-1,1)/\sqrt3,(-1,1,1)/\sqrt3\).
For a unit direction vector \((l,m,n)\), the four squared dot products sum to
\[
\frac13\sum(\pm l\pm m\pm n)^2=\frac43(l^2+m^2+n^2)=\boxed{\frac43}.
\]


## Planes and Shortest Distances in 3D
desc: Plane equations, quadratic pairs of planes and distance between skew lines.


### B-8(a) | Final 2021 | 4
Prove that the general first-degree equation in three variables represents a plane.

#### Answer
:::final
\(\boxed{Ax+By+Cz+D=0}\) is a plane whenever \((A,B,C)\ne(0,0,0)\).
:::

#### Explanation
The vector \((A,B,C)\) is perpendicular to every displacement that stays inside the plane \(Ax+By+Cz+D=0\). Thus all points on the plane have the same projection onto this fixed nonzero normal vector. This is exactly the geometric definition of a plane.

The equation \(Ax+By+Cz+D=0\), where \(A,B,C\) are not all zero, has normal vector \((A,B,C)\). It is the set of all points whose position vector has a fixed dot product with this nonzero normal vector, which is precisely a plane.


### B-8(b) | Final 2021 | 4
Find the condition for \(ax^2+by^2+cz^2+2fyz+2gzx+2hxy=0\) to represent a pair of planes through the origin.

#### Answer
:::final
\(\boxed{abc+2fgh-af^2-bg^2-ch^2=0}\) is necessary; for a **real** pair of planes the quadratic form must also factor into real linear factors.
:::

#### Explanation
Write the quadratic as \(\mathbf x^TM\mathbf x\) using its symmetric coefficient matrix \(M\). If it is a product of two linear forms, \(M\) has rank at most two, so its determinant must be zero. **Caution:** determinant zero alone does not guarantee two real planes; for instance \(x^2+y^2=0\) has determinant zero but no pair of real planes. For a real factorization, the rank-two form must be indefinite (one positive and one negative eigenvalue); rank-one cases give a repeated real plane up to sign.

Let
\[
M=\begin{pmatrix}a&h&g\\h&b&f\\g&f&c\end{pmatrix}.
\]
If the quadratic splits into two linear factors \((\mathbf p\cdot\mathbf x)(\mathbf q\cdot\mathbf x)\), its matrix is \(M=(\mathbf p\mathbf q^T+\mathbf q\mathbf p^T)/2\), so \(\operatorname{rank}M\le2\). Hence the determinant is zero:
\[
\det M=abc+2fgh-af^2-bg^2-ch^2=0.
\]
For a **real pair of distinct planes**, require in addition that the rank-two quadratic form be indefinite (its two nonzero eigenvalues have opposite signs). A rank-one form represents a coincident plane counted twice, up to an overall nonzero scalar. A positive semidefinite rank-two form such as \(x^2+y^2\) does **not** factor into two real planes despite its vanishing determinant.


### B-8(c) | Final 2021 | 6
Find the shortest distance between
\[
\frac{x-3}{3}=\frac{y-8}{-1}=\frac{z-3}{1},\qquad
\frac{x+3}{-3}=\frac{y+7}{2}=\frac{z-6}{4}.
\]

#### Answer
:::final
\(\boxed{d=3\sqrt{30}}\).
:::

#### Explanation
Two skew lines need not intersect, but they have a common perpendicular. The cross product of their direction vectors points along that perpendicular. Project the displacement between any point on the first line and any point on the second onto this direction; the absolute projection is the shortest distance.

Take points \(A=(3,8,3)\), \(B=(-3,-7,6)\) and direction vectors \(\mathbf u=(3,-1,1)\), \(\mathbf v=(-3,2,4)\). The skew-line distance is
\[
d=\frac{|(B-A)\cdot(\mathbf u\times\mathbf v)|}{|\mathbf u\times\mathbf v|}.
\]
Here \(\mathbf u\times\mathbf v=(-6,-15,3)\), \(|\mathbf u\times\mathbf v|=3\sqrt{30}\), and \(B-A=(-6,-15,3)\). Therefore
\[
\boxed{d=\frac{(-6,-15,3)\cdot(-6,-15,3)}{3\sqrt{30}}=\frac{270}{3\sqrt{30}}=3\sqrt{30}.}
\]
The line of shortest distance is parallel to \(\mathbf u\times\mathbf v\) and joins the two closest points; the displayed distance calculation is independent of parameterization.


### B-8(a) | Term Test 2023 | 2.5
Find the plane through \((2,2,1)\) and \((9,3,6)\), perpendicular to \(6x+2y+6z=9\).

#### Answer
:::final
\(\boxed{x+3y-2z-6=0}\).
:::

#### Explanation
The plane sought contains the segment joining the two given points, so its normal must be perpendicular to that segment’s direction. It is also perpendicular to the given plane, so its normal must be perpendicular to the given plane’s normal. A cross product supplies a vector perpendicular to both directions; then use point–normal form.

The given plane has normal \(\mathbf n=(6,2,6)\). The required plane contains direction \(\mathbf d=(7,1,5)\) and has a normal perpendicular to both \(\mathbf d\) and \(\mathbf n\). Take \(\mathbf N=\mathbf d\times\mathbf n=(-4, -12, 8)\), proportional to \((1,3,-2)\). Through \((2,2,1)\):
\[
x+3y-2z-6=0.
\]


## Source and Transcription Notes
desc: Source uncertainty and mathematical checks that matter when studying.


- **Final 2023 A-4(b):** The correct two-variable maximum is at \((2/3,4/3)\), with value \(0\).
- **Final 2021 B-8(b):** A zero determinant is not alone sufficient for a pair of *real* planes.
- The older OCR/source-quality caveat remains: questions missing from the scan have not been invented or silently reconstructed.
