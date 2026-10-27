---
title: Mathematics Practice Exam
code: MAT 0541 1103G
time: 3 Hours
icon: ࿕
color: #b30000
---

# Set A

**Total: 60 marks · 15 questions · Answer all questions.** Each question is original and based on the concepts recurring in the supplied previous-year collection. Use radians for trigonometric limits.

### A-1 | Model Set A | 3
Evaluate \(\displaystyle\lim_{x\to0}\frac{1-\cos(4x)}{x^2}\).

#### Answer
:::final
\(\boxed{8}\)
:::

#### Explanation
\(\displaystyle \frac{1-\cos(4x)}{x^2}=8\left(\frac{\sin(2x)}{2x}\right)^2\longrightarrow8.\)

### A-2 | Model Set A | 4
Find \(k,b\) so that \(f(x)=\begin{cases}x^2+kx,&x<1,\\3x+b,&x\ge1\end{cases}\) is differentiable at \(x=1\). Verify continuity there.

#### Answer
:::final
\(\boxed{k=1,\quad b=-1}\); the function is continuous and differentiable at \(1\).
:::

#### Explanation
Equality of one-sided derivatives requires \(2+k=3\), giving \(k=1\). Equality of one-sided values requires \(1+k=3+b\), giving \(b=-1\). Both values at \(x=1\) are \(2\), and both derivatives are \(3\).

### A-3 | Model Set A | 3
For the curve \(x^2+xy+y^2=7\), calculate \(dy/dx\) at \((1,2)\).

#### Answer
:::final
\(\boxed{-\frac45}\)
:::

#### Explanation
The point lies on the curve because \(1+2+4=7\). Implicit differentiation gives
\(\displaystyle 2x+y+xy'+2yy'=0,\qquad y'=-\frac{2x+y}{x+2y}.\)
At \((1,2)\), \(y'=-4/5\).

### A-4 | Model Set A | 4
Verify the hypotheses of the Mean Value Theorem for \(f(x)=x^2+2x\) on \([1,3]\), and find every corresponding \(c\).

#### Answer
:::final
\(\boxed{c=2}\)
:::

#### Explanation
A polynomial is continuous on \([1,3]\) and differentiable on \((1,3)\). The secant slope is \((f(3)-f(1))/(3-1)=(15-3)/2=6\). Since \(f'(c)=2c+2\), solving \(2c+2=6\) yields \(c=2\in(1,3)\).

### A-5 | Model Set A | 4
Using Leibniz's rule, obtain a formula for the \(n\)-th derivative of \(y=x^2e^{2x}\), for integers \(n\ge2\).

#### Answer
:::final
\(\boxed{y^{(n)}=e^{2x}\left(2^n x^2+n2^n x+n(n-1)2^{n-2}\right)}\)
:::

#### Explanation
Only the zeroth, first and second derivatives of \(x^2\) survive in Leibniz's sum:
\(\displaystyle (x^2e^{2x})^{(n)}=x^2(2^ne^{2x})+n(2x)(2^{n-1}e^{2x})+\binom n2(2)(2^{n-2}e^{2x}).\)
Collect terms to obtain the displayed result.

### A-6 | Model Set A | 3
Find the Maclaurin expansion of \(\displaystyle\frac{\sin x}{1+x}\) through the term in \(x^3\).

#### Answer
:::final
\(\boxed{x-x^2+\frac56x^3+O(x^4)}\)
:::

#### Explanation
Multiply \(\sin x=x-x^3/6+O(x^5)\) by \((1+x)^{-1}=1-x+x^2-x^3+O(x^4)\). The coefficient of \(x^3\) is \(1-1/6=5/6\). This series is valid near \(x=0\).

### A-7 | Model Set A | 6
For \(f(x)=x^3-3x^2-9x+5\), determine all stationary points and their nature, the intervals of increase/decrease, and the point of inflection.

#### Answer
:::final
Local maximum \(\boxed{(-1,10)}\); local minimum \(\boxed{(3,-22)}\); inflection point \(\boxed{(1,-6)}\). Increasing on \(( -\infty,-1)\cup(3,\infty)\); decreasing on \((-1,3)\).
:::

#### Explanation
\(\displaystyle f'(x)=3x^2-6x-9=3(x+1)(x-3),\qquad f''(x)=6x-6.\)
The sign of \(f'\) is positive, negative, positive across \(-1,3\), respectively. Evaluating gives \(f(-1)=10\) and \(f(3)=-22\). Since \(f''\) changes sign at \(x=1\), and \(f(1)=-6\), the inflection point is \((1,-6)\).

### A-8 | Model Set A | 4
Let \(z=x^2y+\sin(xy)\), where \(x=t^2\) and \(y=1/t\) for \(t>0\). Find \(dz/dt\) at \(t=1\) using the chain rule or substitution.

#### Answer
:::final
\(\boxed{3+\cos1}\)
:::

#### Explanation
After substitution, \(x^2y=t^3\) and \(xy=t\), so \(z=t^3+\sin t\). Thus \(dz/dt=3t^2+\cos t\); setting \(t=1\) yields \(3+\cos1\).

### A-9 | Model Set A | 4
Show by direct partial differentiation that Euler's identity holds for \(u=(x^2+y^2)^{3/2}\). State its degree of homogeneity.

#### Answer
:::final
Degree \(\boxed{3}\), and \(\boxed{xu_x+yu_y=3u}\).
:::

#### Explanation
For positive scaling factor \(t\), \(u(tx,ty)=t^3u(x,y)\). Moreover, \(u_x=3x\sqrt{x^2+y^2}\) and \(u_y=3y\sqrt{x^2+y^2}\). Hence
\(\displaystyle xu_x+yu_y=3(x^2+y^2)\sqrt{x^2+y^2}=3u.\)
The identity also holds at the origin, where both sides are zero.

### A-10 | Model Set A | 4
Find and classify the stationary point of \(f(x,y)=x^2+2y^2-4x+8y+1\). Is it an absolute extremum?

#### Answer
:::final
\(\boxed{\text{Absolute minimum }-11\text{ at }(2,-2)}\); no maximum.
:::

#### Explanation
\(\displaystyle f(x,y)=(x-2)^2+2(y+2)^2-11.\)
The squared terms are nonnegative and vanish together only at \((2,-2)\). The same point follows from \(f_x=2x-4=0\), \(f_y=4y+8=0\). The function is unbounded above.

### A-11 | Model Set A | 4
Find the equations of the tangent and normal to \(x^2+4y^2=20\) at \((2,2)\).

#### Answer
:::final
Tangent: \(\boxed{x+4y=10}\). Normal: \(\boxed{y-2=4(x-2)}\).
:::

#### Explanation
The point satisfies \(4+16=20\). Implicit differentiation yields \(2x+8yy'=0\), so \(y'=-x/(4y)=-1/4\) at \((2,2)\). The tangent has slope \(-1/4\); the perpendicular normal has slope \(4\).

### A-12 | Model Set A | 3
Determine the radius of curvature of \(y=x^2/4\) at its vertex.

#### Answer
:::final
\(\boxed{\rho=2}\)
:::

#### Explanation
For \(y=f(x)\), \(\rho=(1+y'^2)^{3/2}/|y''|\). Here \(y'=x/2\), \(y''=1/2\), and the vertex is \((0,0)\). Therefore \(\rho=1/(1/2)=2\).

### A-13 | Model Set A | 6
Rotate axes using \(X=(x+y)/\sqrt2\) and \(Y=(x-y)/\sqrt2\). Transform \(5x^2+6xy+5y^2=8\) into standard form, classify the conic, and state its semiaxis lengths.

#### Answer
:::final
\(\boxed{\frac{X^2}{1}+\frac{Y^2}{4}=1}\); ellipse with semiaxes \(\boxed{1,2}\).
:::

#### Explanation
From the inverse substitution \(x=(X+Y)/\sqrt2\), \(y=(X-Y)/\sqrt2\), we obtain \(x^2+y^2=X^2+Y^2\) and \(xy=(X^2-Y^2)/2\). Consequently,
\(\displaystyle 5(X^2+Y^2)+3(X^2-Y^2)=8 \quad\Longrightarrow\quad8X^2+2Y^2=8.\)
Dividing by \(8\) yields \(X^2+Y^2/4=1\); the longer semiaxis lies along the \(Y\)-axis.

### A-14 | Model Set A | 4
Show that \(2x^2+xy-y^2-3x+3y-2=0\) represents two straight lines, and determine their intersection.

#### Answer
:::final
\(\boxed{2x-y+1=0,\quad x+y-2=0}\); intersection \(\boxed{(1/3,5/3)}\).
:::

#### Explanation
Factor:
\(\displaystyle 2x^2+xy-y^2-3x+3y-2=(2x-y+1)(x+y-2).\)
The simultaneous equations give \(y=2x+1\) and \(y=2-x\); hence \(3x=1\) and \(y=5/3\).

### A-15 | Model Set A | 4
Find the shortest distance between the skew lines \(\mathbf r=(0,0,0)+s(1,1,0)\) and \(\mathbf r=(1,2,3)+t(1,0,1)\), where \(s,t\in\mathbb R\).

#### Answer
:::final
\(\boxed{\frac4{\sqrt3}}\)
:::

#### Explanation
With \(\mathbf u=(1,1,0)\), \(\mathbf v=(1,0,1)\), and displacement \(\mathbf w=(1,2,3)\),
\(\displaystyle \mathbf u\times\mathbf v=(1,-1,-1),\qquad d=\frac{|\mathbf w\cdot(\mathbf u\times\mathbf v)|}{\|\mathbf u\times\mathbf v\|} =\frac{|1-2-3|}{\sqrt3}=\frac4{\sqrt3}.\)

---

# Set B

**Total: 60 marks · 15 questions · Answer all questions.** Questions differ from Set A and from those in the source collection.

### B-1 | Model Set B | 3
Evaluate \(\displaystyle\lim_{x\to0}\frac{e^{3x}-1-3x}{x^2}\).

#### Answer
:::final
\(\boxed{\frac92}\)
:::

#### Explanation
Using \(e^{3x}=1+3x+\frac92x^2+O(x^3)\), the numerator is \(\frac92x^2+O(x^3)\). Divide by \(x^2\) and let \(x\to0\).

### B-2 | Model Set B | 4
For \(f(x)=\begin{cases}ax+b,&x<2,\\x^2+1,&x\ge2,\end{cases}\) find \(a,b\) so that \(f\) is differentiable at \(x=2\). Check continuity.

#### Answer
:::final
\(\boxed{a=4,\quad b=-3}\); continuous and differentiable at \(2\).
:::

#### Explanation
Matching derivatives gives \(a=2(2)=4\). Matching values gives \(2a+b=2^2+1=5\), so \(b=-3\). Both branches then approach \(5\) at \(x=2\), which equals \(f(2)\).

### B-3 | Model Set B | 3
A parametric curve is given by \(x=t^2+1\), \(y=t^3-t\). Find \(dy/dx\) at \(t=2\).

#### Answer
:::final
\(\boxed{\frac{11}{4}}\)
:::

#### Explanation
\(\displaystyle \frac{dy}{dx}=\frac{dy/dt}{dx/dt}=\frac{3t^2-1}{2t},\qquad t=2\implies\frac{12-1}{4}=\frac{11}{4}.\)
The parameterization is regular in the \(x\)-direction at \(t=2\) because \(dx/dt=4\ne0\).

### B-4 | Model Set B | 4
State the conditions of Rolle's theorem and verify it for \(f(x)=x^2-4x+3\) on \([1,3]\). Find the guaranteed point.

#### Answer
:::final
\(\boxed{c=2}\)
:::

#### Explanation
Rolle's theorem applies if \(f\) is continuous on \([a,b]\), differentiable on \((a,b)\), and \(f(a)=f(b)\); it then guarantees \(f'(c)=0\) for some \(c\in(a,b)\). Here \(f\) is a polynomial, \(f(1)=f(3)=0\), and \(f'(x)=2x-4\). Hence \(c=2\).

### B-5 | Model Set B | 4
Find the \(n\)-th derivative of \(y=\sin(3x+\pi/6)\) for nonnegative integers \(n\).

#### Answer
:::final
\(\boxed{y^{(n)}=3^n\sin\!\left(3x+\frac\pi6+\frac{n\pi}{2}\right)}\)
:::

#### Explanation
Each differentiation multiplies the amplitude by \(3\) and shifts the phase forward by \(\pi/2\). The pattern holds for \(n=0\) and propagates by differentiating once more, establishing the formula by induction.

### B-6 | Model Set B | 3
Write the Maclaurin polynomial of degree three for \(\ln(1+x)\). Use it to estimate \(\ln(1.1)\), and bound the absolute error using the alternating-series estimate.

#### Answer
:::final
\(\boxed{P_3(x)=x-\frac{x^2}{2}+\frac{x^3}{3}}\); \(\boxed{\ln(1.1)\approx0.09533333}\), with error at most \(\boxed{0.000025}\).
:::

#### Explanation
For \(0<x\le1\), the logarithm series is alternating with decreasing term sizes. At \(x=0.1\),
\(\displaystyle P_3(0.1)=0.1-0.005+\frac{0.001}{3}=0.09533333\ldots, \quad |R_3|\le\frac{(0.1)^4}{4}=0.000025.\)

### B-7 | Model Set B | 6
For \(f(x)=x^4-4x^2\), find the stationary points, classify them, identify intervals of increase/decrease, and calculate all inflection points.

#### Answer
:::final
Local (and absolute) minima: \(\boxed{(\pm\sqrt2,-4)}\). Local maximum: \(\boxed{(0,0)}\). Inflection points: \(\boxed{\left(\pm\sqrt{\frac23},-\frac{20}{9}\right)}\). Decreasing on \(( -\infty,-\sqrt2)\cup(0,\sqrt2)\); increasing on \((-\sqrt2,0)\cup(\sqrt2,\infty)\).
:::

#### Explanation
\(\displaystyle f'(x)=4x(x^2-2),\qquad f''(x)=12x^2-8.\)
The derivative changes signs \(-,+,-,+\) at \(-\sqrt2,0,\sqrt2\), respectively, giving the stated extrema and monotonicity. The second derivative changes sign at \(x=\pm\sqrt{2/3}\); there, \(f=4/9-8/3=-20/9\). Since \(f(x)\to\infty\) as \(|x|\to\infty\), the minima are absolute and no absolute maximum exists.

### B-8 | Model Set B | 4
For \(z=e^{xy}\), compute \(z_{xy}\) and \(z_{yx}\), and evaluate each at \((1,0)\).

#### Answer
:::final
\(\boxed{z_{xy}=z_{yx}=(1+xy)e^{xy}}\); both equal \(\boxed{1}\) at \((1,0)\).
:::

#### Explanation
Since \(z_x=ye^{xy}\), differentiating with respect to \(y\) gives \(z_{xy}=e^{xy}+xye^{xy}\). Similarly, from \(z_y=xe^{xy}\), differentiate with respect to \(x\). Substituting \((1,0)\) yields \(1\).

### B-9 | Model Set B | 4
Determine the degree of homogeneity of \(u=(x^3+y^3)/(x+y)\), for \(x+y\ne0\), and verify Euler's theorem explicitly.

#### Answer
:::final
Degree \(\boxed{2}\); \(\boxed{xu_x+yu_y=2u}\).
:::

#### Explanation
Factor \(x^3+y^3=(x+y)(x^2-xy+y^2)\), so on the given domain \(u=x^2-xy+y^2\). Thus \(u_x=2x-y\) and \(u_y=2y-x\), giving
\(\displaystyle xu_x+yu_y=x(2x-y)+y(2y-x)=2(x^2-xy+y^2)=2u.\)

### B-10 | Model Set B | 4
Find and classify the stationary point of \(f(x,y)=x^2+y^2-2x+4y+7\), and determine whether the extremum is global.

#### Answer
:::final
\(\boxed{\text{Absolute minimum }2\text{ at }(1,-2)}\); no maximum.
:::

#### Explanation
Complete the square:
\(\displaystyle f(x,y)=(x-1)^2+(y+2)^2+2.\)
Both squares vanish only at \((1,-2)\). Equivalently, the gradient vanishes there and the Hessian is \(2I\), positive definite. The function is unbounded above.

### B-11 | Model Set B | 4
Find tangent and normal equations to the parabola \(y^2=8x\) at \((2,4)\).

#### Answer
:::final
Tangent: \(\boxed{y=x+2}\). Normal: \(\boxed{y=-x+6}\).
:::

#### Explanation
The point is on the curve because \(16=8\cdot2\). Differentiating gives \(2yy'=8\), hence \(y'=4/y=1\) at \((2,4)\). The tangent slope is \(1\) and normal slope is \(-1\); insert the given point.

### B-12 | Model Set B | 3
The circle \(x=3\cos t\), \(y=3\sin t\) is traced parametrically. Use the parametric curvature formula to find its radius of curvature.

#### Answer
:::final
\(\boxed{\rho=3}\) at every point.
:::

#### Explanation
Here \(x'=-3\sin t\), \(y'=3\cos t\), \(x''=-3\cos t\), \(y''=-3\sin t\). Hence
\(\displaystyle \rho=\frac{(x'^2+y'^2)^{3/2}}{|x'y''-y'x''|}= \frac{9^{3/2}}{|9\sin^2t+9\cos^2t|}=\frac{27}{9}=3.\)

### B-13 | Model Set B | 6
Using \(X=(x+y)/\sqrt2\) and \(Y=(x-y)/\sqrt2\), reduce \(x^2+4xy+y^2=3\) to standard form. Name the conic, identify the transverse direction, and state its vertices in the rotated coordinates.

#### Answer
:::final
\(\boxed{X^2-\frac{Y^2}{3}=1}\), a hyperbola with transverse axis along \(X\); vertices \(\boxed{(X,Y)=(\pm1,0)}\).
:::

#### Explanation
The rotation gives \(x^2+y^2=X^2+Y^2\) and \(4xy=2(X^2-Y^2)\). Therefore \(3X^2-Y^2=3\), or \(X^2-Y^2/3=1\). The positive squared term shows that the transverse axis is the \(X\)-axis; setting \(Y=0\) yields the vertices.

### B-14 | Model Set B | 4
Show that \(x^2-4xy+4y^2-2x+4y-3=0\) is a pair of real parallel lines, and write their individual equations.

#### Answer
:::final
\(\boxed{x-2y=3\quad\text{or}\quad x-2y=-1}\) (distinct parallel lines).
:::

#### Explanation
Put \(u=x-2y\). The equation is \(u^2-2u-3=0=(u-3)(u+1)\), so \((x-2y-3)(x-2y+1)=0\). Both lines have the same normal \((1,-2)\) and different constants, hence they are parallel and distinct.

### B-15 | Model Set B | 4
Find the equation of the plane through \(P=(1,0,2)\), \(Q=(2,1,2)\), and \(R=(1,1,3)\).

#### Answer
:::final
\(\boxed{x-y+z=3}\)
:::

#### Explanation
Two directions in the plane are \(\overrightarrow{PQ}=(1,1,0)\) and \(\overrightarrow{PR}=(0,1,1)\). Their cross product is \((1,-1,1)\), a normal vector. The plane through \(P\) is
\(\displaystyle (1,-1,1)\cdot((x,y,z)-(1,0,2))=0, \quad\text{i.e. } x-y+z=3.\)
Both \(Q\) and \(R\) satisfy this equation.

---

## Coverage and Marking Summary

Each set contains **15 compulsory questions** with the same distribution: **4 × 3 marks + 9 × 4 marks + 2 × 6 marks = 60 marks**. The two 6-mark questions assess multi-step curve analysis and conic reduction; the remaining questions test shorter, focused techniques. Both sets cover limits, continuity, differentiation, mean value theorems, higher derivatives, series, single- and multivariable calculus, Euler's theorem, tangents, curvature, conics, line pairs, and three-dimensional geometry. Different examples and operations are used in the two sets.

*Source basis: the supplied previous-year Mathematics questionnaire (2021–2024 finals and a 2023 term test). This mock is new practice material, not a reproduction of any past paper.*