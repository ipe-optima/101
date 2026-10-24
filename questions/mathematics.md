---
title: Mathematics
code: MAT 0541 1103G
description: Past questions with corrected statements and worked answers.
icon: ࿕
color: #3b5bdb
---

## Limits, Continuity and Differentiation
desc: Fundamental limits, derivatives, implicit differentiation and continuity.

### A-1(a) | Final 2021 | 4
Find \(dy/dx\) if \((\cos x)^y+(\sin y)^x=0\).

#### Answer
The equation as printed is not generally real-valued for arbitrary real \(x,y\), and the two terms are nonnegative wherever both powers are defined. Their sum can equal zero only in exceptional boundary cases. The question is likely corrupted in OCR and has been omitted rather than assigning an invalid derivative.

### A-1(b) | Final 2021 | 4
Differentiate \(\tan^{-1}\!\left(\frac{2x}{1-x^2}\right)\) with respect to \(\sin^{-1}\!\left(\frac{2x}{1+x^2}\right)\).

#### Answer
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

#### Explanation
Use \(dF/dG=(dF/dx)/(dG/dx)\). In the stated interval \(|x|<1\), the inverse-trigonometric identities reduce both expressions to \(2\tan^{-1}x\).

### A-1(b) | Final 2022 | 3
Evaluate \(\displaystyle\lim_{x\to0}\frac{1-\cos^3x}{\tan^2x}\).

#### Answer
:::final
\(\displaystyle \frac32\)
:::

#### Explanation
As \(x\to0\), \(1-\cos^3x\sim \frac32x^2\) and \(\tan^2x\sim x^2\). The ratio tends to \(3/2\).

### A-1(a) | Final 2024 | 5
Show that if a function is differentiable at a point, then it is continuous there. Give an example showing the converse is false.

#### Answer
If \(f'(a)\) exists, then
\[
f(x)-f(a)=(x-a)\frac{f(x)-f(a)}{x-a}.
\]
Taking \(x\to a\), the quotient tends to \(f'(a)\), so \(f(x)-f(a)\to0\). Hence \(f\) is continuous at \(a\).

The converse is false: \(f(x)=|x|\) is continuous at \(0\), but its left derivative is \(-1\) and its right derivative is \(1\), so it is not differentiable there.

### A-1(b) | Term Test 2023 | 2.5
Show that \(f(x)=|x-2|\) is not differentiable at \(x=2\).

#### Answer
For \(x<2\), \(f(x)=2-x\), so \(f'_-(2)=-1\). For \(x>2\), \(f(x)=x-2\), so \(f'_+(2)=1\). Since the one-sided derivatives differ, \(f\) is not differentiable at \(2\).

### A-1(c) | Final 2022 | 3
If \(\tan y=\frac{2t}{1-t^2}\) and \(\sin x=\frac{2t}{1+t^2}\), find \(dy/dx\).

#### Answer
Using the usual parameter identities locally, \(y=2\tan^{-1}t\) and \(x=2\tan^{-1}t\), so \(dy/dx=1\), provided the chosen branches are consistent.

#### Explanation
Differentiate with respect to \(t\): \(dy/dt=2/(1+t^2)\) and \(dx/dt=2/(1+t^2)\).

### A-1(d) | Final 2022 | 3
Let
\[
f(x)=\begin{cases}
-2\sin x,&-\pi\le x\le-\pi/2,\\
a\sin x+b,&-\pi/2<x<\pi/2,\\
\cos x,&\pi/2\le x\le\pi.
\end{cases}
\]
Find \(a,b\) if \(f\) is continuous on \([-\pi,\pi]\).

#### Answer
Continuity at \(x=-\pi/2\) gives \(2=-a+b\). Continuity at \(x=\pi/2\) gives \(a+b=0\). Solving,
:::final
\(a=-1,\quad b=1\).
:::

### A-2(a) | Final 2022 | 8
For \(f(x)=2x^2-x^4\), find intercepts, increasing/decreasing intervals, concavity, extrema and the Taylor polynomial about \(x=3\).

#### Answer
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
\(f'(x)=30x(x^4-3x^3+x)=30x(x^3-3x^2+1)\). Critical points are \(x=0\) and the three real roots of \(x^3-3x^2+1=0\). Numerical/closed-form classification is best done by evaluating \(f''(x)=150x^4-360x^3+30\) at those roots. There is no absolute maximum or minimum on \(\mathbb R\), because \(f(x)\to+\infty\) as \(x\to\pm\infty\). This OCR question likely expects local extrema; exact roots of the cubic can be used if required.

### A-4(a) | Final 2023 | 3
Evaluate \(\displaystyle\lim_{x\to0}(\cos x)^{1/x^2}\).

#### Answer
:::final
\(e^{-1/2}\)
:::

#### Explanation
Let \(L=(\cos x)^{1/x^2}\). Then
\[
\ln L=\lim_{x\to0}\frac{\ln(\cos x)}{x^2}=-\frac12,
\]
using \(\ln(\cos x)\sim-x^2/2\). Hence \(L=e^{-1/2}\).

### A-4(b) | Final 2023 | 3
Evaluate \(\displaystyle\lim_{x\to0}\left(\frac1{\sin x}-\frac1x\right)\).

#### Answer
:::final
\(0\)
:::

#### Explanation
Combine the fractions:
\[
\frac{x-\sin x}{x\sin x}.
\]
Since \(x-\sin x\sim x^3/6\) and \(x\sin x\sim x^2\), the ratio tends to \(0\).

### A-3(a) | Final 2024 | 2
Find the first three nonzero terms of the Maclaurin series for \(e^x\cos x\).

#### Answer
Using \(e^x=1+x+x^2/2+x^3/6+\cdots\) and \(\cos x=1-x^2/2+x^4/24-\cdots\),
\[
e^x\cos x=1+x+0x^2-\frac{x^3}{3}-\frac{x^4}{6}+\cdots.
\]
The first three nonzero terms are \(1+x-\frac{x^3}{3}\).

## Theorems and Series
desc: Mean value theorems, Taylor expansions, Leibniz's rule and homogeneous functions.

### A-2(a) | Final 2021 | 5
State and prove the Mean Value Theorem.

#### Answer
**Theorem.** If \(f\) is continuous on \([a,b]\) and differentiable on \((a,b)\), then there is \(c\in(a,b)\) such that
\[
f'(c)=\frac{f(b)-f(a)}{b-a}.
\]

#### Explanation
Define \(g(x)=f(x)-\left[f(a)+\frac{f(b)-f(a)}{b-a}(x-a)\right]\). Then \(g(a)=g(b)=0\). By Rolle's theorem, some \(c\in(a,b)\) satisfies \(g'(c)=0\), which gives the result.

### A-2(b) | Final 2021 | 3
Does \(f(x)=x+1/x\) on \([1/2,3]\) satisfy the Mean Value Theorem? Find \(c\).

#### Answer
The function is continuous on \([1/2,3]\) and differentiable on \((1/2,3)\), so the theorem applies. Here \(f(3)=10/3\), \(f(1/2)=5/2\), and the secant slope is \(5/9\). Since \(f'(x)=1-1/x^2\),
\[
1-\frac1{c^2}=\frac59\implies c=\frac32.
\]

### A-4(a) | Final 2022 | 3
State Rolle's theorem and verify it for \(f(x)=1/(2-x^2)\) on \([-1,1]\).

#### Answer
Rolle's theorem requires continuity on \([-1,1]\), differentiability on \((-1,1)\), and equal endpoint values. The function meets the first two conditions, but
\(f(-1)=f(1)=1\), so all hypotheses hold. Since
\[
f'(x)=\frac{2x}{(2-x^2)^2},
\]
\(f'(c)=0\) gives \(c=0\), which lies in \((-1,1)\).

### A-4(b) | Final 2022 | 3
For \(f(x)=x(x-1)(x-3)\) on \([0,4]\), find the value(s) required by the Mean Value Theorem.

#### Answer
\(f(0)=0,\ f(4)=12\), so the secant slope is \(3\). Expanding \(f=x^3-4x^2+3x\), we have \(f'=3x^2-8x+3\). Solve \(f'(c)=3\):
\[
3c^2-8c=0\implies c=0\text{ or }c=\frac83.
\]
Only interior values qualify, so \(c=8/3\).

### A-3(a) | Final 2022 | 3
Find the \(n\)-th derivative of \(\ln(ax+b)\).

#### Answer
For \(n\ge1\),
\[
\boxed{\frac{d^n}{dx^n}\ln(ax+b)=(-1)^{n-1}(n-1)!\frac{a^n}{(ax+b)^n}.}
\]

#### Explanation
The first derivative is \(a/(ax+b)\). Repeated differentiation gives the alternating sign, factorial and power shown.

### A-2(a) | Final 2024 | 4
Find the \(n\)-th derivative of \(e^{ax}\cos(bx+c)\).

#### Answer
\[
\boxed{y^{(n)}=(a^2+b^2)^{n/2}e^{ax}\cos\!\left(bx+c+n\tan^{-1}\frac ba\right)}
\]
for \(a\ne0\), with the phase more generally written \(n\arg(a+ib)\) to handle signs consistently.

#### Explanation
Write \(e^{ax}\cos(bx+c)=\Re(e^{i c}e^{(a+ib)x})\). Differentiating \(n\) times multiplies by \((a+ib)^n\).

### A-2(b) | Final 2024 | 4
State Leibniz's theorem for the \(n\)-th derivative of a product.

#### Answer
If \(u,v\) are \(n\)-times differentiable, then
\[
\boxed{\frac{d^n}{dx^n}(uv)=\sum_{r=0}^{n}\binom nr u^{(r)}v^{(n-r)}.}
\]

#### Explanation
This follows by induction from the product rule and Pascal's identity for binomial coefficients.

### A-2(c) | Final 2021 | 4
Expand \(\ln(1+x)\) in powers of \(x\) and give the Lagrange remainder.

#### Answer
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

### A-3(a) | Final 2021 | 5
State and prove Euler's theorem on homogeneous functions.

#### Answer
If \(u=f(x,y)\) is homogeneous of degree \(n\), so \(f(tx,ty)=t^n f(x,y)\), then
\[
\boxed{x\frac{\partial u}{\partial x}+y\frac{\partial u}{\partial y}=nu.}
\]

#### Explanation
Differentiate \(f(tx,ty)=t^n f(x,y)\) with respect to \(t\):
\(x f_x(tx,ty)+y f_y(tx,ty)=nt^{n-1}f(x,y)\). Put \(t=1\).

### A-3(c) | Final 2024 | 4
Verify Euler's theorem for \(f(x,y)=x^n\sin(y/x)\).

#### Answer
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
The OCR expression is ambiguous: the displayed quotient is not homogeneous of degree zero and does not lead to the stated identity in general. The commonly intended form is likely \(\cos u=(x+y)/(\sqrt{x}+\sqrt{y})^2\), which is homogeneous of degree zero; however, that form gives \(xu_x+yu_y=0\). The question has been flagged as corrupted rather than silently altered.

### A-3(c) | Final 2021 | 4
For \(f=f(x,y)\), \(x=r\cos\theta,\ y=r\sin\theta\), show the relation between Cartesian and polar derivatives.

#### Answer
The correct identity is
\[
\boxed{f_x^2+f_y^2=f_r^2+\frac1{r^2}f_\theta^2.}
\]
The OCR version appears to omit the square on \(r\) in the denominator.

#### Explanation
By the chain rule,
\(f_r=f_x\cos\theta+f_y\sin\theta\) and
\(f_\theta=-rf_x\sin\theta+rf_y\cos\theta\).
Squaring and adding gives \(f_r^2+f_\theta^2/r^2=f_x^2+f_y^2\).

### A-3 | Term Test 2023 | 2.5
If \(z=\tan^{-1}\!\left(\frac{x^2+y^2}{x-y}\right)\), prove the corresponding homogeneous-function relation.

#### Answer
As printed, the argument \((x^2+y^2)/(x-y)\) is homogeneous of degree \(1\), not degree \(0\). Let \(q=\tan z=(x^2+y^2)/(x-y)\). Euler's theorem gives \(xq_x+yq_y=q\). Since \(q_x=\sec^2z\,z_x\) and \(q_y=\sec^2z\,z_y\),
\[
\boxed{xz_x+yz_y=\sin z\cos z=\tfrac12\sin2z.}
\]
Thus the printed right-hand side \(\sin2z\) is missing a factor \(1/2\).

### A-4(b) | Final 2023 | 4
Find the local extreme values of \(f(x,y)=2xy-5x^2-2y^2+4x+4y-4\).

#### Answer
\(f_x=2y-10x+4=0\), \(f_y=2x-4y+4=0\). Solving gives \(x=2/9,\ y=10/9\). The Hessian has \(f_{xx}=-10,\ f_{yy}=-4,\ f_{xy}=2\), and determinant \(40-4=36>0\), with \(f_{xx}<0\); hence this is a strict local maximum.
\[
f(2/9,10/9)=-\frac89.
\]
There is no local minimum.

### B-4(c) | Final 2021 | 5
An open tank has fixed volume, a square base of width \(x\), and height \(h\). Show when its lining cost is least.

#### Answer
Let volume \(V=x^2h\), so \(h=V/x^2\). The lined area is \(S=x^2+4xh=x^2+4V/x\). Then
\(S'=2x-4V/x^2=0\), so \(x^3=2V\). Consequently \(h=V/x^2=x/2\).
Thus the least lining cost occurs when the height is half the base width.

### B-5(a) | Final 2023 | 5
A conical tent has fixed volume. Find the ratio of height to base radius for minimum canvas area.

#### Answer
For radius \(r\), height \(h\), and slant height \(l=\sqrt{r^2+h^2}\), fixed volume means \(V=\pi r^2h/3\), so \(h=3V/(\pi r^2)\). Canvas area is the curved area \(S=\pi rl\). Minimizing \(S^2/\pi^2=r^2(r^2+h^2)=r^4+9V^2/(\pi^2r^2)\) gives
\(4r^3-18V^2/(\pi^2r^3)=0\), or \(r^6=9V^2/(2\pi^2)\). Hence \(h/r=\sqrt2\).
\[
\boxed{h:r=\sqrt2:1.}
\]

## Tangents, Normals and Curvature
desc: Tangent lines, normals, curvature and radius of curvature.

### B-4(a) | Final 2021 | 4
Find the tangent and normal to \(y(x-2)(x-3)-x+7=0\) where it meets the \(x\)-axis.

#### Answer
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
The point \((2,1)\) does **not** lie on the curve: \(1+4-24+19=0\) actually does equal zero, so it is on the curve. Differentiate:
\(2yy'-12x+4y'=0\), hence \(y'=\frac{6x}{y+2}\). At \((2,1)\), slope \(m=4\).
- Tangent: \(y-1=4(x-2)\), i.e. \(4x-y-7=0\).
- Normal: \(y-1=-\frac14(x-2)\), i.e. \(x+4y-6=0\).

### B-4(c) | Final 2024 | 4
Find the radius of curvature of the cycloid \(x=a(\theta+\sin\theta),\ y=a(1-\cos\theta)\).

#### Answer
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
For \(y^2=4ax\), the radius of curvature at the vertex is \(2a\). Here \(a=1\), so \(\boxed{\rho=2}\).

## Coordinate Geometry: Conics and Pair of Lines
desc: Classifying conics, rotating axes and equations of straight-line pairs.

### B-6(b) | Final 2021 | 5
Find the nature and standard form of \(5x^2-2xy+5y^2-8x-8y-8=0\).

#### Answer
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

### B-6(a) | Final 2021 | 5
Show that \(2x^2-xy-y^2+5x+y+2=0\) represents a pair of straight lines.

#### Answer
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
Since \(x^2+6xy+9y^2=(x+3y)^2\) and \(4x+12y=4(x+3y)\), put \(u=x+3y\):
\[
u^2+4u-5=0=(u-1)(u+5).
\]
Therefore the lines are \(x+3y=1\) and \(x+3y=-5\), which are parallel.

### B-5(a) | Final 2023 | 4
Transform \(x^2-y^2-2\sqrt2x-10\sqrt2y+2=0\) to axes rotated by \(45^\circ\).

#### Answer
Use \(x=(X-Y)/\sqrt2,\ y=(X+Y)/\sqrt2\) (new axes rotated \(45^\circ\)). Then \(x^2-y^2=-2XY\), \(-2\sqrt2x=-2X+2Y\), and \(-10\sqrt2y=-10X-10Y\). Thus
\[
\boxed{-2XY-12X-8Y+2=0.}
\]
(Using the opposite rotation convention changes the signs of the mixed/linear terms accordingly.)

### B-5(c) | Final 2023 | 4
Obtain the angle bisectors for the pair of lines \(ax^2+2hxy+by^2=0\).

#### Answer
The pair passes through the origin. The angle bisectors are
\[
\boxed{\frac{(a-b)xy+h(y^2-x^2)}{\sqrt{(a-b)^2+4h^2}}=0}
\]
equivalently \((a-b)xy+h(y^2-x^2)=0\).

## Three-Dimensional Geometry
desc: Direction cosines, planes, and shortest distance between lines.

### B-7(a) | Final 2021 | 4
Define direction cosines and state their relation.

#### Answer
If a line makes angles \(\alpha,\beta,\gamma\) with the positive coordinate axes, its direction cosines are \(l=\cos\alpha,\ m=\cos\beta,\ n=\cos\gamma\). They satisfy
\[
\boxed{l^2+m^2+n^2=1.}
\]
If direction ratios are \(a,b,c\), then \(l=a/\sqrt{a^2+b^2+c^2}\), with analogous formulas for \(m,n\).

### B-7(b) | Final 2021 | 4
Show that the angle between lines with direction cosines \((l_1,m_1,n_1)\) and \((l_2,m_2,n_2)\) satisfies the dot-product formula.

#### Answer
\[
\boxed{\cos\theta=l_1l_2+m_1m_2+n_1n_2.}
\]
This is the dot product of the two unit direction vectors. For the acute angle between unoriented lines, take the absolute value if necessary.

### B-7(c) | Final 2021 | 4
A line makes angles \(\alpha,\beta,\gamma,\delta\) with the four body diagonals of a cube. Show that the sum of the squared cosines is \(4/3\).

#### Answer
Choose unit vectors along four diagonals as
\((1,1,1)/\sqrt3,(1,1,-1)/\sqrt3,(1,-1,1)/\sqrt3,(-1,1,1)/\sqrt3\).
For a unit direction vector \((l,m,n)\), the four squared dot products sum to
\[
\frac13\sum(\pm l\pm m\pm n)^2=\frac43(l^2+m^2+n^2)=\boxed{\frac43}.
\]

### B-8(a) | Final 2021 | 4
Prove that the general first-degree equation in three variables represents a plane.

#### Answer
The equation \(Ax+By+Cz+D=0\), where \(A,B,C\) are not all zero, has normal vector \((A,B,C)\). It is the set of all points whose position vector has a fixed dot product with this nonzero normal vector, which is precisely a plane.

### B-8(b) | Final 2021 | 4
Find the condition for \(ax^2+by^2+cz^2+2fyz+2gzx+2hxy=0\) to represent a pair of planes through the origin.

#### Answer
The homogeneous quadratic represents a pair of planes if and only if its determinant vanishes:
\[
\boxed{\begin{vmatrix}
a&h&g\\
h&b&f\\
g&f&c
\end{vmatrix}=abc+2fgh-af^2-bg^2-ch^2=0.}
\]

### B-8(c) | Final 2021 | 6
Find the shortest distance between
\[
\frac{x-3}{3}=\frac{y-8}{-1}=\frac{z-3}{1},\qquad
\frac{x+3}{-3}=\frac{y+7}{2}=\frac{z-6}{4}.
\]

#### Answer
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
The given plane has normal \(\mathbf n=(6,2,6)\). The required plane contains direction \(\mathbf d=(7,1,5)\) and has a normal perpendicular to both \(\mathbf d\) and \(\mathbf n\). Take \(\mathbf N=\mathbf d\times\mathbf n=(-4, -12, 8)\), proportional to \((1,3,-2)\). Through \((2,2,1)\):
\[
x+3y-2z-6=0.
\]

## Notes on OCR Corrections
desc: Ambiguous or mathematically inconsistent source text is handled explicitly.

- Repeated OCR text such as “\(1-x\)” in identities involving \(y=\cos(m\sin^{-1}x)\) has been corrected only where the standard identity is unambiguous: the usual differential equation is \((1-x^2)y''-xy'+m^2y=0\), and differentiating it \(n\) times yields \((1-x^2)y^{(n+2)}-(2n+1)xy^{(n+1)}+(m^2-n^2)y^{(n)}=0\).
- Some questions in the source have missing symbols, garbled equations, or incompatible printed conclusions. They are marked as ambiguous or omitted instead of inventing a definitive answer.
- For a skew-line shortest-distance question, the formula \(d=|(\mathbf B-\mathbf A)\cdot(\mathbf u\times\mathbf v)|/|\mathbf u\times\mathbf v|\) is the reliable general method; check any numerical result against the exact line equations before using it.
