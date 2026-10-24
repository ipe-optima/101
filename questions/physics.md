---
title: General Physics
code: PHY 0533 1107G / PHY 107G
description: Past questions with corrected statements, worked answers, and explanations.
icon: ⌘
color: #3bdb70
---

## Mechanics: Projectile Motion
desc: Motion under gravity, including trajectories, range, height, and flight time.

### A-1(b) | Final 2021 | 2022 | 2019
**Question:** What is projectile motion? Show that the trajectory of a projectile is parabolic.

#### Answer
Projectile motion is the motion of an object projected into the air that thereafter moves under gravity alone, neglecting air resistance.

#### Explanation
Choose the launch point as the origin. If the initial speed is \(u\) at angle \(\theta\) above the horizontal, then
:::eq
x = u cosθ · t
y = u sinθ · t − ½gt²
:::
Eliminate time using \(t=x/(u\cos\theta)\):
:::eq
y = x tanθ − gx²/(2u²cos²θ)
:::
This is quadratic in \(x\), so the trajectory is a parabola.

### A-1(c) | Final 2021 | 3
**Question:** A ball is projected with initial velocities (i) \(\vec u_1=3\hat i+6\hat j\) m/s and (ii) \(\vec u_2=4\hat i+8\hat j\) m/s. Compare their horizontal ranges and maximum heights.

#### Answer
For launch and landing at the same height, \(R=2u_xu_y/g\) and \(H=u_y^2/(2g)\).
:::eq
R₁ = 36/g ≈ 3.67 m
R₂ = 64/g ≈ 6.53 m
R₂/R₁ = 16/9
H₁ = 18/g ≈ 1.84 m
H₂ = 32/g ≈ 3.26 m
H₂/H₁ = 16/9
:::

#### Explanation
The horizontal and vertical components are given directly by the coefficients of \(\hat i\) and \(\hat j\). The results assume \(g=9.81\text{ m/s}^2\) and equal launch and landing heights.

### A-1 | Final 2022 | Cricket-ground problem
**Question:** The shortest boundary distance is 60 m. A batsman hits a ball at \(45^\circ\). Find the speed needed to reach the boundary, the range if the speed is halved at the same angle, and the maximum height in the first case.

#### Answer
For equal launch and landing heights, \(R=u^2\sin2\theta/g\). At \(45^\circ\), \(\sin 90^\circ=1\).
:::eq
u = √(Rg) = √(60 × 9.81) ≈ 24.26 m/s
R when speed is halved = R/4 = 15 m
H = u²sin²45°/(2g) = R/4 = 15 m
:::

#### Explanation
Range is proportional to the square of launch speed when the angle is fixed. Halving speed therefore reduces range to one quarter, not one half.

### A-1 | Final 2015 | Stone from a building
**Question:** A stone is thrown at \(40\text{ m/s}\), \(30^\circ\) above horizontal, from a building 200 m high. Take the launch point as the origin. Find its coordinates at \(t=6\) s and the time it reaches the ground.

#### Answer
:::eq
x(t) = u cosθ · t
y(t) = u sinθ · t − ½gt²
x(6) = 40 cos30° × 6 ≈ 207.8 m
y(6) = 20 × 6 − ½(9.81)(36) ≈ −56.6 m
:::
The ground is \(y=-200\) m. Solve \(20t-4.905t^2=-200\):
:::eq
4.905t² − 20t − 200 = 0
t = [20 + √(400 + 4(4.905)(200))]/9.81 ≈ 8.82 s
:::

#### Explanation
The negative value of \(y(6)\) means the stone is 56.6 m below the launch point at six seconds. The positive quadratic root gives the physical landing time.

### A-1 | General projectile formulas
**Question:** Obtain the horizontal range, maximum height, and time of flight of a projectile launched with speed \(u\) at angle \(\theta\).

#### Answer
:::eq
Time of flight: T = 2u sinθ/g
Maximum height: H = u²sin²θ/(2g)
Horizontal range: R = u²sin2θ/g
:::

#### Explanation
These expressions apply when air resistance is negligible and the projectile lands at its launch height. The range is maximum at \(\theta=45^\circ\), since \(\sin2\theta\leq1\).

## Mechanics: Newton's Laws, Work, and Gravitation
desc: Fundamental laws, dimensions, weightlessness, work-energy, and gravitation.

### A-4(a) | Final 2021 | 3
**Question:** State Newton's laws of motion. Using force, length, and time as fundamental quantities, find the dimension of mass.

#### Answer
1. **First law:** A body remains at rest or moves with constant velocity unless acted on by a net external force.
2. **Second law:** Net force equals rate of change of momentum; for constant mass, \(\vec F=m\vec a\).
3. **Third law:** Forces between two interacting bodies are equal in magnitude and opposite in direction, acting on different bodies.

Since \([F]=MLT^{-2}\),
:::eq
M = F L⁻¹ T²
[M] = [F][L]⁻¹[T]²
:::

### A-4(b) | Final 2021 | 2
**Question:** Describe two ways in which you can experience weightlessness.

#### Answer
- During free fall, such as in a freely falling lift or a parabolic-flight aircraft, the normal force is zero.
- In an orbiting spacecraft, the spacecraft and its occupants are in continuous free fall around Earth.

#### Explanation
Apparent weight is the support force (normal reaction), not the gravitational force itself. Gravity is still present in orbit.

### A-4(c) | Final 2021
**Question:** How can an experiment show that inertial mass and gravitational mass are equal?

#### Answer
Measure the acceleration of bodies of different composition in the same gravitational field, controlling for air resistance. Their free-fall accelerations are the same within experimental uncertainty. More directly, compare inertial mass from \(F=ma\) with gravitational mass from weight \(W=m_g g\); their ratio is found to be universal.

#### Explanation
The equivalence is an experimental result. A simple drop experiment demonstrates equal free-fall acceleration but does not by itself separately measure both masses.

### A-4(d) | Final 2021 | 4
**Question:** A 300 kg body rests on a truck. The truck slows from 100 km/h to 60 km/h in 15 s. Find the average horizontal force on the body.

#### Answer
:::eq
u = 100/3.6 = 27.78 m/s
v = 60/3.6 = 16.67 m/s
a = (v − u)/t = −0.7407 m/s²
F = ma = 300(−0.7407) ≈ −222 N
:::

#### Explanation
The average force is about \(222\) N opposite the direction of motion, assuming the body slows at the same rate as the truck without slipping.

### A-2 | Final 2021 | Rotating wheel
**Question:** A point on a wheel has angular position \(\theta=2+4t^2+2t^3\) radians, and the wheel radius is 0.5 m. Find angular position and angular velocity at \(t=0\), and linear speed and radial acceleration at \(t=4\) s.

#### Answer
Angular velocity is \(\omega=d\theta/dt=8t+6t^2\).
:::eq
θ(0) = 2 rad
ω(0) = 0 rad/s
ω(4) = 8(4) + 6(4²) = 128 rad/s
v = rω = 0.5 × 128 = 64 m/s
aᵣ = rω² = 0.5 × 128² = 8192 m/s²
:::

#### Explanation
Linear velocity is tangent to the circular path and has magnitude \(v=r\omega\). Radial (centripetal) acceleration points toward the axis and has magnitude \(r\omega^2\).

### A-2(c) | Final 2021
**Question:** Define angular momentum. A 10 N force acts tangentially at a radius of 0.5 m. Find the rate of change of angular momentum.

#### Answer
For a particle, \(\vec L=\vec r\times\vec p\). The net torque satisfies
:::eq
dL/dt = τ
τ = rF sin90° = 0.5 × 10 = 5 N·m
:::
Thus the rate of change of angular momentum is \(5\text{ N·m}\), in the torque direction.

### A-3 | Final 2021 | Moment of inertia and angular momentum
**Question:** Define torque and angular momentum and derive their relation. Find the rotational kinetic energy and show that \(L=2K\) for a rigid body rotating with unit angular speed.

#### Answer
Torque is \(\vec\tau=\vec r\times\vec F\); angular momentum is \(\vec L=\vec r\times\vec p\). For a fixed inertial origin,
:::eq
τ = dL/dt
K = ½Iω²
L = Iω  (rotation about a principal/fixed axis)
:::
At \(\omega=1\text{ rad/s}\), \(L=I\) and \(K=I/2\), so \(L=2K\) numerically in SI units.

#### Explanation
The final statement is a numerical relation when angular speed is \(1\text{ rad/s}\); in general \(L/K=2/\omega\), so angular momentum and energy do not have the same physical units.

### A-3 | Gravitational law
**Question:** State Newton's law of universal gravitation.

#### Answer
Any two point masses \(m_1,m_2\) separated by distance \(r\) attract each other with force
:::eq
F = Gm₁m₂/r²
G ≈ 6.674 × 10⁻¹¹ N·m²/kg²
:::
The force acts along the line joining their centers and is attractive.

### A-2 | Work-energy theorem
**Question:** State the work-energy theorem.

#### Answer
The net work done on a particle equals its change in kinetic energy:
:::eq
W_net = ΔK = ½mv² − ½mu²
:::

#### Explanation
For a constant mass, integrate \(F\,dx=ma\,dx=mv\,dv\) along the path.

### A-2 | Elastic collision of equal masses
**Question:** Show that two equal masses exchange speeds in a one-dimensional elastic collision.

#### Answer
Momentum and kinetic energy conservation give
:::eq
u₁ + u₂ = v₁ + v₂
u₁² + u₂² = v₁² + v₂²
:::
Factoring the second relation and combining with the first yields \(v_1=u_2\) and \(v_2=u_1\), for the nontrivial collision solution.

#### Explanation
For equal masses in a one-dimensional elastic collision, the bodies exchange their velocities (including signs), not merely their speed magnitudes.

### A-4 | Escape velocity
**Question:** Define escape velocity and obtain its expression for a body launched from a planet of mass \(M\) and radius \(R\).

#### Answer
Escape velocity is the minimum launch speed needed to reach infinite distance with zero residual speed, neglecting air resistance and other bodies.
:::eq
½mvₑ² = GMm/R
vₑ = √(2GM/R) = √(2gR)
:::

## Mechanics: Collisions and Impulse
desc: Momentum conservation, impulse, and one-dimensional collision calculations.

### B-6(c) | Final 2021 | 7
**Question:** A 2 kg ball falls vertically onto a floor at 25 m/s and rebounds upward at 10 m/s. Find the impulse on the ball and the average force exerted by the floor if contact lasts 0.02 s.

#### Answer
Take upward as positive. Then \(v_i=-25\text{ m/s}\), \(v_f=+10\text{ m/s}\).
:::eq
J = Δp = m(v_f − v_i)
J = 2[10 − (−25)] = 70 N·s upward
F_avg = J/Δt = 70/0.02 = 3500 N upward on the ball
:::
The ball exerts an equal and opposite average force of \(3500\) N downward on the floor.

### A-2 | Final 2022 | 2021 | Collision of 5 kg and 10 kg blocks
**Question:** A 5.0 kg block moves at 25 m/s and collides with a 10.0 kg block moving at 10 m/s in the same direction. After collision, the 10 kg block moves at 15 m/s in the original direction. Find the final velocity of the 5 kg block and decide whether the collision is elastic.

#### Answer
Momentum conservation gives
:::eq
5(25) + 10(10) = 5v₁ + 10(15)
v₁ = 15 m/s
:::
Initial kinetic energy is \(K_i=\frac12(5)(25^2)+\frac12(10)(10^2)=2062.5\) J. Final kinetic energy is \(K_f=\frac12(5)(15^2)+\frac12(10)(15^2)=1687.5\) J. The loss is \(375\) J, so the collision is **inelastic**.

#### Explanation
Momentum is conserved for an isolated system, but kinetic energy is conserved only in an elastic collision.

### B-6(a,b) | Collision principles
**Question:** What is a collision? When is it elastic or inelastic? Show that momentum is conserved during a collision.

#### Answer
A collision is a short interaction during which bodies exert large forces on each other. It is elastic if total kinetic energy is conserved; it is inelastic if kinetic energy is not conserved. A perfectly inelastic collision has the bodies stick together.

For two bodies in an isolated system, Newton's third law gives \(\vec F_{12}=-\vec F_{21}\). Over the same contact interval,
:::eq
Δp₁ = ∫F₁₂ dt
Δp₂ = ∫F₂₁ dt = −Δp₁
Δ(p₁+p₂) = 0
:::
Thus total linear momentum is conserved.

### A-2 | Head-on elastic collision: lighter body
**Question:** Under what condition does a lighter particle rebound with its initial velocity after a head-on elastic collision with a heavier body?

#### Answer
For a one-dimensional elastic collision with the heavier mass initially at rest, the lighter mass does **not** generally rebound with exactly its initial speed. Its final velocity is
:::eq
v₁ = [(m₁ − m₂)/(m₁ + m₂)]u₁
v₂ = [2m₁/(m₁ + m₂)]u₁
:::
If \(m_2\gg m_1\), then \(v_1\approx-u_1\): it rebounds with nearly the same speed in the opposite direction.

#### Explanation
The common exam statement is an approximation for a target much heavier than the projectile, not an exact result for arbitrary masses.

### A-2 | Final 2019 / 2015 | Elastic collision calculation
**Question:** Two bodies of masses 15 kg and 8 kg have initial velocities \(u_1=5\) m/s and \(u_2=-3\) m/s. Find their velocities after a one-dimensional elastic collision.

#### Answer
For an elastic collision,
:::eq
v₁ = [(m₁−m₂)u₁ + 2m₂u₂]/(m₁+m₂)
v₂ = [2m₁u₁ + (m₂−m₁)u₂]/(m₁+m₂)
v₁ = [(7)(5) + 16(−3)]/23 = −13/23 ≈ −0.565 m/s
v₂ = [150 + (−7)(−3)]/23 = 171/23 ≈ 7.435 m/s
:::

#### Explanation
The results satisfy both momentum and kinetic-energy conservation. The velocities are signed; a negative value means motion in the negative direction.

## Rotational Motion
desc: Angular kinematics, torque, moment of inertia, and rotational theorems.

### A-4 | Circular motion
**Question:** Does a particle moving around a circle at constant speed have acceleration? Explain.

#### Answer
Yes. Its velocity direction changes continuously, so it has centripetal acceleration directed toward the center:
:::eq
aᵣ = v²/r = rω²
:::
The acceleration is nonzero even though the speed is constant.

### A-4 | Moment of inertia of a solid cylinder
**Question:** Find the moment of inertia of a uniform solid cylinder about its central longitudinal axis.

#### Answer
For a cylinder of mass \(M\) and radius \(R\),
:::eq
I = ½MR²
:::

#### Explanation
This is the axis parallel to the cylinder's length and passing through its center. About a transverse axis through its center, the formula is different.

### A-4 | Parallel-axis theorem
**Question:** State and prove the parallel-axis theorem.

#### Answer
If \(I_{\rm cm}\) is the moment of inertia about an axis through the center of mass and \(I\) is about a parallel axis a distance \(d\) away, then
:::eq
I = I_cm + Md²
:::

#### Explanation
For particles with coordinates \(x_i\) measured from the center-of-mass axis, their coordinates from the displaced axis are \(x_i+d\). Hence \(I=\sum m_i(x_i+d)^2=\sum m_ix_i^2+2d\sum m_ix_i+d^2\sum m_i\). The middle term vanishes because \(\sum m_ix_i=0\), leaving \(I=I_{\rm cm}+Md^2\).

## Crystal Structure and Solid State
desc: Lattices, unit cells, packing fractions, Miller indices, and crystal diffraction.

### A-3(a) | Final 2021 | 2022 | 2023 | 2024
**Question:** Distinguish crystalline and amorphous solids.

#### Answer
| Crystalline solid | Amorphous solid |
|---|---|
| Long-range periodic atomic order | No long-range periodic order |
| Usually has a definite melting point | Softens over a temperature range |
| Often anisotropic in single-crystal form | Usually isotropic on a macroscopic scale |
| Gives sharp X-ray diffraction peaks | Gives diffuse diffraction features |
| Examples: NaCl, quartz, copper | Examples: glass, many plastics, pitch |

#### Explanation
Polycrystalline materials contain many crystallites with different orientations; their bulk behavior can be approximately isotropic even though each grain is crystalline.

### A-3(b) | Final 2021 | Unit cell and BCC sodium
**Question:** Sodium has a BCC structure, atomic mass 23 g/mol, and density \(2.18\times10^3\) kg/m³. Find the atoms per unit cell and lattice parameter \(a\).

#### Answer
A BCC conventional unit cell contains \(8(1/8)+1=2\) atoms. Use \(\rho=nM/(N_Aa^3)\):
:::eq
a³ = nM/(ρN_A)
a³ = 2(0.023)/(2.18×10³ × 6.022×10²³)
a ≈ 4.12 × 10⁻¹⁰ m = 4.12 Å
:::

#### Explanation
This uses the standard molar mass \(M=0.023\text{ kg/mol}\) and Avogadro constant \(N_A=6.022\times10^{23}\text{ mol}^{-1}\). The OCR's density unit is unclear; the physically reasonable sodium density is \(2.18\times10^3\text{ kg/m}^3\), equivalent to \(2.18\text{ g/cm}^3\).

### A-3 | Packing fraction of cubic lattices
**Question:** Define packing fraction and find it for simple cubic, BCC, and FCC structures.

#### Answer
Packing fraction is the fraction of a unit-cell volume occupied by its hard-sphere atoms.
:::eq
SC: N=1, a=2r → PF = π/6 ≈ 0.524 (52.4%)
BCC: N=2, √3a=4r → PF = π√3/8 ≈ 0.680 (68.0%)
FCC: N=4, √2a=4r → PF = π/(3√2) ≈ 0.740 (74.0%)
:::

#### Explanation
The geometrical contact is along a cube edge for simple cubic, a body diagonal for BCC, and a face diagonal for FCC.

### A-3 | Primitive cell and Bravais lattices
**Question:** Define a primitive cell, unit cell, lattice, and basis. Classify Bravais lattices.

#### Answer
- **Lattice:** an infinite periodic array of equivalent points.
- **Basis:** the atom or group of atoms attached to every lattice point.
- **Unit cell:** a repeating volume that generates the crystal by translation.
- **Primitive cell:** a unit cell containing exactly one lattice point in total, counting fractional contributions from boundaries.

There are 14 three-dimensional Bravais lattices in seven crystal systems: cubic, tetragonal, orthorhombic, monoclinic, triclinic, hexagonal, and trigonal (rhombohedral). The lattice types are primitive (P), body-centered (I), face-centered (F), and base-centered (C), where allowed by each system.

#### Explanation
A conventional BCC unit cell contains two lattice points and is non-primitive; a primitive BCC cell can be chosen with volume half that of the conventional cube. A crystal structure is the lattice plus its basis.

### A-3 | Non-Bravais lattice
**Question:** Define a non-Bravais lattice with an example.

#### Answer
A non-Bravais crystal arrangement cannot be described as one identical atom or basis point at every point of a single Bravais lattice with all lattice points equivalent under translation alone. The honeycomb arrangement of graphene is a common example: it can be described as a triangular Bravais lattice with a two-atom basis. The NaCl structure can likewise be described using a Bravais lattice and a multi-ion basis.

### A-3 | Coordination number
**Question:** Define coordination number and state it for SC, BCC, and FCC.

#### Answer
Coordination number is the number of nearest neighbors surrounding an atom.
:::eq
Simple cubic: 6
BCC: 8
FCC: 12
:::

### A-3 | Miller indices
**Question:** Define Miller indices and state the rules for finding them.

#### Answer
Miller indices \((hkl)\) label the orientation of a family of crystal planes.
1. Find the plane's intercepts with the crystallographic axes in units of \(a,b,c\).
2. Take the reciprocals of the intercepts.
3. Clear fractions to obtain the smallest integers \(h,k,l\).
4. A plane parallel to an axis has zero index for that axis; a negative intercept is marked with a bar.

#### Explanation
For a cubic crystal, the interplanar spacing is
:::eq
d_hkl = a/√(h²+k²+l²)
:::
For an orthogonal cell with unequal lattice parameters, \(1/d_{hkl}^2=h^2/a^2+k^2/b^2+l^2/c^2\).

### A-3 | Interplanar spacing
**Question:** Find the separation between adjacent \((hkl)\) planes in a cubic crystal of lattice parameter \(a\).

#### Answer
:::eq
d_hkl = a/√(h²+k²+l²)
:::

#### Explanation
This follows from the geometry of the intercepts \(a/h\), \(a/k\), and \(a/l\). For example, \(d_{121}=a/\sqrt6\).

### A-3 | Crystal planes (001), (020), (111), (224), (220), (402), (406)
**Question:** Describe how to sketch crystal planes from Miller indices.

#### Answer
For a cubic cell, a plane \((hkl)\) intercepts the axes at \(a/h,\ a/k,\ a/l\); a zero index means parallel to that axis. Thus:
- \((001)\): intercepts \(z=a\); parallel to \(x,y\).
- \((020)\): intercepts \(y=a/2\); parallel to \(x,z\).
- \((111)\): intercepts \(x=y=z=a\).
- \((224)\): intercepts \(x=a/2,\ y=a/2,\ z=a/4\).
- \((220)\): intercepts \(x=a/2,\ y=a/2\); parallel to \(z\).
- \((402)\): intercepts \(x=a/4,\ z=a/2\); parallel to \(y\).
- \((406)\): intercepts \(x=a/4,\ z=a/6\); parallel to \(y\).

#### Explanation
When an intercept falls outside the drawn cell, translate the parallel plane to show an equivalent plane segment inside the cell. Miller indices describe orientation, not a unique position.

### A-3 | NaCl crystal structure
**Question:** Describe the unit cell of sodium chloride.

#### Answer
NaCl has the rock-salt structure: one ion species forms an FCC lattice and the other occupies all octahedral sites. Each Na⁺ is surrounded by six Cl⁻ nearest neighbors and vice versa. The conventional cubic cell contains four NaCl formula units (four Na⁺ and four Cl⁻ ions).

### A-3 | Density and lattice parameter
**Question:** Find a cubic crystal's lattice parameter from density and formula mass.

#### Answer
For a unit cell containing \(Z\) formula units of molar mass \(M\),
:::eq
ρ = ZM/(N_A a³)
a = [ZM/(ρN_A)]^(1/3)
:::

#### Explanation
Use consistent SI units. For a simple-cubic structure of a one-atom element, \(Z=1\); for BCC, \(Z=2\); for FCC, \(Z=4\). For a compound, \(Z\) is the number of formula units per unit cell.

### B-7(a) | X-ray diffraction and Bragg's law
**Question:** Derive Bragg's law. Why can visible light not normally produce Bragg diffraction from atomic planes? State an application.

#### Answer
For X-rays reflected by successive parallel crystal planes separated by distance \(d\), the extra path of the lower reflected ray is \(2d\sin\theta\), where \(\theta\) is the glancing angle measured from the plane. Constructive interference requires
:::eq
2d sinθ = nλ   (Bragg's law)
:::
X-ray wavelengths (roughly \(10^{-11}\)–\(10^{-10}\) m) are comparable to atomic plane spacings. Visible wavelengths are hundreds of nanometers, much larger than those spacings, so ordinary atomic-plane Bragg diffraction cannot occur at a physical angle. Applications include determining crystal structure, lattice spacing, and X-ray wavelength.

### A-7(b) | Final 2021 | Bragg calculation
**Question:** X-rays strike NaCl planes at a glancing angle of \(30.0^\circ\); plane spacing is 39.8 pm and reflection is first order. Find the wavelength.

#### Answer
:::eq
nλ = 2d sinθ
λ = 2(39.8 pm)sin30° = 39.8 pm
:::

### A-7(b) | Final 2021–2022 | Bragg spectrometer
**Question:** First-order maximum occurs at glancing angle \(8^\circ\) for plane spacing \(d=2.80\times10^{-10}\) m. Find the wavelength and the second-order glancing angle.

#### Answer
:::eq
λ = 2d sin8° ≈ 7.79 × 10⁻¹¹ m = 0.779 Å
sinθ₂ = 2λ/(2d) = λ/d
θ₂ = arcsin(2 sin8°) ≈ 16.2°
:::

#### Explanation
For the same wavelength and plane spacing, \(n\lambda=2d\sin\theta_n\). A second-order maximum is possible because \(2\sin8^\circ<1\).

### A-2(c) | Final 2024 | Bragg angle for a cubic crystal
**Question:** A cubic crystal has \(a=4.2\) Å. Find the first-order scattering angle for X-rays of wavelength \(0.8\) Å reflected from the \((260)\) planes.

#### Answer
:::eq
d₂₆₀ = 4.2/√(2²+6²+0²) Å = 4.2/√40 Å ≈ 0.664 Å
sinθ = λ/(2d) = 0.8/(2 × 0.664) ≈ 0.602
θ ≈ 37.0°, so 2θ ≈ 74.0°
:::

#### Explanation
The scattering angle is conventionally \(2\theta\); the Bragg angle is \(\theta\). If \(\lambda>2d\), no Bragg maximum of that order is possible.

### A-2(c) | Final 2025 | Second-order reflection
**Question:** A cubic crystal has \(a=4.2\) Å. Find the second-order scattering angle \(2\theta\) for reflection from the \((406)\) planes using \(\lambda=0.6\) Å.

#### Answer
:::eq
d₄₀₆ = 4.2/√(4²+0²+6²) Å = 4.2/√52 Å ≈ 0.582 Å
sinθ = nλ/(2d) = 2(0.6)/(2 × 0.582) ≈ 1.031
:::
No real Bragg angle exists for the stated second-order reflection because \(\sin\theta>1\).

#### Explanation
The supplied values are inconsistent with a second-order reflection. The first-order reflection is possible: \(\sin\theta=0.6/(2\times0.582)\approx0.516\), giving \(\theta\approx31.1^\circ\) and \(2\theta\approx62.2^\circ\).

### A-6 | Longest wavelength analyzed by a crystal
**Question:** Find the longest wavelength that can be diffracted by a crystal with plane spacing \(d=2.82\) Å in first and second order.

#### Answer
The Bragg condition requires \(\sin\theta\leq1\), so \(n\lambda\leq2d\).
:::eq
First order: λ_max = 2d = 5.64 Å
Second order: λ_max = d = 2.82 Å
:::

## Oscillations and Simple Harmonic Motion
desc: SHM, damped and forced oscillations, resonance, and spring-mass systems.

### A-4 | Simple harmonic motion
**Question:** Define SHM, derive its differential equation, and write its solution.

#### Answer
Simple harmonic motion (SHM) is periodic motion in which acceleration is proportional to displacement from equilibrium and directed toward equilibrium.
:::eq
F = −kx
ma = −kx
d²x/dt² + ω²x = 0, where ω = √(k/m)
x(t) = A cos(ωt + φ)
:::
The period is \(T=2\pi/\omega\), and the frequency is \(f=1/T\).

#### Explanation
The constants \(A\) and \(\phi\) are determined by the initial position and velocity.

### A-4(c) | Final 2022 | SHM time interval
**Question:** An oscillator has amplitude 25 cm and period \(1/3\) s. Find the minimum time to move between positions 12.5 cm on either side of the mean position.

#### Answer
The positions are \(x=\pm A/2\). Let \(x=A\sin\omega t\), so the phase angles are \(\pi/6\) and \(5\pi/6\) for the shortest passage across the mean.
:::eq
Δφ = 5π/6 − π/6 = 2π/3
Δt = (Δφ/2π)T = T/3 = 1/9 s ≈ 0.111 s
:::

### A-3 | Spring-mass period
**Question:** A 4.0 kg mass stretches a spring by 16 cm. It is removed and a 0.5 kg mass is attached. Find the new period of oscillation.

#### Answer
The spring constant is found from the static extension of the 4 kg mass:
:::eq
k = mg/x = 4.0(9.81)/0.16 ≈ 245.3 N/m
T = 2π√(m/k) = 2π√(0.5/245.3) ≈ 0.284 s
:::

#### Explanation
Assume the spring obeys Hooke's law and its mass is negligible.

### A-3 | Energy in SHM
**Question:** Express kinetic and potential energy of an SHM oscillator and show that total energy is proportional to amplitude squared.

#### Answer
For \(x=A\cos\omega t\), \(v=-A\omega\sin\omega t\):
:::eq
U = ½kx² = ½kA²cos²(ωt)
K = ½mv² = ½mω²A²sin²(ωt)
E = K + U = ½kA² = constant
:::
Since \(k=m\omega^2\), total energy is proportional to \(A^2\).

### A-3 | Damped harmonic oscillation
**Question:** What is damped harmonic motion? Write its differential equation and discuss average power dissipation.

#### Answer
Damped oscillation occurs when resistive forces remove mechanical energy. For viscous damping \(F_d=-b\dot x\),
:::eq
mẍ + bẋ + kx = 0
:::
For underdamping, \(x=A_0e^{-bt/(2m)}\cos(\omega_dt+\phi)\), where \(\omega_d=\sqrt{k/m-b^2/(4m^2)}\).

#### Explanation
The instantaneous power supplied by the damping force is \(P=F_dv=-bv^2\leq0\). For a lightly damped oscillator with \(x=A\cos\omega t\), average dissipated power is approximately
:::eq
P_avg = −½bω²A²
:::
The positive rate of energy loss is \(\frac12b\omega^2A^2\). Since the amplitude decays, the average loss also changes with time.

### A-3 | Forced oscillation and resonance
**Question:** Define forced oscillation and resonance. Give the equation of forced motion.

#### Answer
A forced oscillator is driven by an external periodic force:
:::eq
mẍ + bẋ + kx = F₀ cos(ωt)
:::
Resonance is the large response that occurs when the driving frequency is near the system's natural frequency. Damping limits the amplitude and shifts the exact peak frequency slightly below \(\sqrt{k/m}\) for displacement resonance in the usual damped model.

### A-3 | Periodic motion
**Question:** What is periodic motion? Give examples.

#### Answer
Periodic motion repeats itself after a fixed time interval \(T\). Examples include ideal pendulum oscillation at small amplitude, a mass on a spring, uniform circular motion, and a sinusoidal wave at a fixed point.

## Waves and Sound
desc: Progressive waves, wave speed, classification, and interference.

### B-5(a) | Final 2021
**Question:** What is a progressive wave? Show that a plane progressive wave can be represented as \(y=a\sin(\omega t-kx)\).

#### Answer
A progressive (travelling) wave transfers energy through a medium or space without net transport of matter. For a sinusoidal wave travelling in the \(+x\) direction,
:::eq
y(x,t) = A sin(ωt − kx + φ)
k = 2π/λ
ω = 2πf
v = ω/k = fλ
:::

#### Explanation
At fixed phase, \(\omega t-kx=\text{constant}\), so \(dx/dt=\omega/k>0\). Thus the wave travels in the positive \(x\)-direction. A minus sign between \(\omega t\) and \(kx\) represents travel in \(+x\); a plus sign represents travel in \(-x\).

### B-8(a) | Wave classification
**Question:** Classify waves and write an equation for a travelling wave.

#### Answer
Waves may be classified as:
- **Mechanical** or **electromagnetic**, depending on whether a material medium is required.
- **Transverse** or **longitudinal**, depending on oscillation direction relative to propagation.
- **Progressive** or **standing**, depending on whether the pattern travels or has fixed nodes and antinodes.

A one-dimensional sinusoidal travelling wave is \(y=A\sin(kx-\omega t+\phi)\), with \(v=\omega/k=f\lambda\).

### B-8(c) | Plane and spherical waves
**Question:** How can plane and spherical waves be created?

#### Answer
A plane wave can be approximated by a source very far away or by passing a wave through a suitable collimating system/aperture so that wavefront curvature is negligible over the region of interest. A small point-like source radiating uniformly in a homogeneous medium produces approximately spherical wavefronts.

### B-5(b) | Final 2021 | 2023 | 2024 | 2025
**Question:** Derive the speed of a longitudinal wave in a gas and explain Laplace's correction to Newton's formula.

#### Answer
The general speed of a longitudinal sound wave is
:::eq
v = √(B/ρ)
:::
where \(B\) is the appropriate bulk modulus and \(\rho\) is density. For a gas, sound propagation is approximately adiabatic, so \(B=\gamma P\):
:::eq
v = √(γP/ρ)
:::

#### Explanation
Newton assumed isothermal compression, giving \(v_N=\sqrt{P/\rho}\), which underestimates the measured speed. Laplace corrected this by recognizing that rapid sound-wave compressions and expansions are adiabatic, introducing the factor \(\gamma=C_p/C_v\). Waves generally travel faster in solids than in gases because solids have much larger elastic moduli relative to density.

### B-8(b) | Interference of waves
**Question:** Define superposition and derive constructive and destructive interference for two sinusoidal waves.

#### Answer
The principle of superposition states that the resultant displacement is the algebraic sum of the displacements produced by each wave separately. For equal-amplitude waves
:::eq
y₁ = A sin(ωt)
y₂ = A sin(ωt + δ)
y = 2A cos(δ/2) sin(ωt + δ/2)
Resultant amplitude R = 2A|cos(δ/2)|
:::
Constructive interference occurs when \(\delta=2n\pi\), giving maximum amplitude \(2A\). Destructive interference occurs when \(\delta=(2n+1)\pi\), giving zero amplitude for equal amplitudes.

### B-8 | Wave on a rope
**Question:** A transverse wave is \(y=15\sin[\pi(0.02x-2.00t)]\), where \(x,y\) are in cm and \(t\) in seconds. Find amplitude, frequency, speed, and wavelength.

#### Answer
Compare with \(y=A\sin(kx-\omega t)\):
:::eq
A = 15 cm
k = 0.02π rad/cm
ω = 2π rad/s
f = ω/(2π) = 1 Hz
λ = 2π/k = 100 cm = 1.00 m
v = fλ = 100 cm/s = 1.00 m/s
:::
The phase is \(0.02\pi x-2\pi t\), so the wave travels in the \(+x\) direction.

### B-8 | Coherent sources
**Question:** What are coherent sources, and how can coherence be achieved?

#### Answer
Coherent sources emit waves of the same frequency with a constant phase difference. Coherence is commonly achieved by splitting light from one source into two beams, for example with Young's double-slit arrangement, rather than relying on two independent lamps.

## Optics: Interference and Lenses
desc: Young's double-slit experiment, fringe width, lens combinations, and light theories.

### B-8 | Young's double-slit experiment
**Question:** Derive the fringe width in Young's double-slit experiment.

#### Answer
For slit separation \(d\), screen distance \(D\), wavelength \(\lambda\), and small angle \(\theta\), path difference is \(\Delta=d\sin\theta\approx dy/D\). Bright fringes occur at \(\Delta=n\lambda\); dark fringes at \(\Delta=(n+\frac12)\lambda\). The fringe width is
:::eq
β = λD/d
:::

### B-8 | Young's double-slit numerical
**Question:** Slit separation is 1.8 mm, fringe width is 0.32 mm, and screen distance is 1.1 m. Find the wavelength.

#### Answer
:::eq
λ = βd/D
λ = (0.32×10⁻³)(1.8×10⁻³)/1.1
λ ≈ 5.24×10⁻⁷ m = 524 nm
:::

### B-8 | Young's double-slit numerical, sodium light
**Question:** Slit separation is 2.5 mm, screen distance 50 cm, and wavelength \(5890\) Å. Find the angular position of the first maximum and the fringe width.

#### Answer
:::eq
λ = 5890 Å = 5.890×10⁻⁷ m
θ₁ ≈ λ/d = (5.890×10⁻⁷)/(2.5×10⁻³)
θ₁ ≈ 2.36×10⁻⁴ rad = 0.0135°
β = λD/d = (5.890×10⁻⁷)(0.50)/(2.5×10⁻³)
β ≈ 1.178×10⁻⁴ m = 0.118 mm
:::

### B-8 | Maximum intensity in interference
**Question:** Show that the maximum intensity of two interfering waves of equal intensity \(I_0\) is \(4I_0\).

#### Answer
Intensity is proportional to the square of resultant amplitude. For equal individual amplitudes \(A\), the maximum resultant amplitude is \(2A\), hence
:::eq
I_max ∝ (2A)² = 4A²
I_max = 4I₀
:::
The minimum intensity is zero for perfect destructive interference of equal-amplitude coherent waves.

### B-4 | Thin lenses in contact or separated
**Question:** Two thin lenses of focal lengths \(f_1\) and \(f_2\) are placed coaxially in air with separation \(d\). Obtain the equivalent focal length.

#### Answer
Using the thin-lens sign convention, the equivalent power is
:::eq
1/F = 1/f₁ + 1/f₂ − d/(f₁f₂)
:::
For lenses in contact, \(d=0\) and \(1/F=1/f_1+1/f_2\).

### B-4(c) | Final 2024 | Converging and diverging lenses
**Question:** A converging lens and a diverging lens, each of focal-length magnitude 12 cm, are separated by 6 cm in air. Find equivalent focal length and power.

#### Answer
Take \(f_1=+12\) cm, \(f_2=-12\) cm and \(d=6\) cm:
:::eq
1/F = 1/12 − 1/12 − 6/[12(−12)] = 1/24 cm⁻¹
F = +24 cm = +0.24 m
P = 1/F(m) = +4.17 D
:::

### B-4(a) | Principal foci of a lens
**Question:** Define the principal foci of a lens.

#### Answer
The principal focus of a converging lens is the point on its principal axis where rays parallel to the axis converge after refraction. For a diverging lens, parallel rays diverge after refraction as if they originated from a virtual principal focus. A thin lens has two principal foci, one on each side.

### B-4 | Convex lens image cases
**Question:** Describe image formation by a convex lens when the object is at infinity, at \(2F\), at \(F\), and between \(F\) and the optical center.

#### Answer
- Object at infinity: image at the far focal plane, real, inverted, highly diminished.
- Object at \(2F\): image at \(2F\) on the other side, real, inverted, same size.
- Object at \(F\): emergent rays are parallel; image is at infinity.
- Object between \(F\) and the lens: image is virtual, upright, magnified, on the object's side.

### B-6 | Wave and electromagnetic theories of light
**Question:** Distinguish the classical wave theory and electromagnetic theory of light.

#### Answer
The classical wave theory treats light as a wave and explains reflection, refraction, interference, diffraction, and polarization. Maxwell's electromagnetic theory identifies light as a transverse electromagnetic wave consisting of mutually perpendicular electric and magnetic fields; it predicts speed \(c=1/\sqrt{\mu_0\epsilon_0}\) in vacuum. The electromagnetic theory is a more specific physical account of light's wave nature. Quantum effects require the photon model in situations such as the photoelectric effect.

### B-6 | Fizeau's method
**Question:** Describe Fizeau's method for measuring the speed of light.

#### Answer
A beam from a source passes through a gap in a rapidly rotating toothed wheel, travels to a distant mirror, and returns. At a suitable wheel speed, the returning beam is blocked by the next tooth. If the round-trip distance is \(2L\), the travel time is \(2L/c\). The wheel's rotation rate and tooth-gap geometry determine this time, allowing \(c=2L/t\) to be calculated.

## Electrostatics
desc: Charge, Coulomb's law, electric field, Gauss's law, and potential.

### B-2 | Quantization of charge
**Question:** Describe the quantization of electric charge.

#### Answer
Electric charge occurs in integer multiples of the elementary charge:
:::eq
q = ne, where n is an integer
e = 1.602176634 × 10⁻¹⁹ C
:::
Quarks have fractional charges but are not observed as isolated free particles under ordinary conditions.

### B-2 | Coulomb's law
**Question:** State Coulomb's law in scalar and vector form.

#### Answer
Two stationary point charges \(q_1\) and \(q_2\) separated by distance \(r\) exert forces along the line joining them:
:::eq
F = (1/4πε₀)|q₁q₂|/r²
𝐅₁₂ = (1/4πε₀)(q₁q₂/r²) r̂₁₂
:::
Here \(\hat r_{12}\) points from charge 1 to charge 2; the force on charge 2 due to charge 1 is \((1/4\pi\epsilon_0)(q_1q_2/r^2)\hat r_{12}\). Like charges repel and unlike charges attract.

### B-2 | Electric and gravitational force between proton and electron
**Question:** Compare the magnitudes of electrostatic and gravitational forces between an electron and a proton.

#### Answer
The ratio is independent of their separation:
:::eq
F_e/F_g = ke²/(Gmₑmₚ) ≈ 2.27 × 10³⁹
:::
The electrostatic attraction is about \(10^{39}\) times stronger than gravity for this pair.

### B-3 | Gauss's law
**Question:** State Gauss's law and give its differential form.

#### Answer
The total electric flux through a closed surface equals the enclosed charge divided by \(\epsilon_0\):
:::eq
∮ E·dA = Q_enclosed/ε₀
∇·E = ρ/ε₀
:::
The differential form follows from the integral form using the divergence theorem.

### B-3 | Derive Coulomb's law from Gauss's law
**Question:** Deduce Coulomb's law for a point charge using Gauss's law.

#### Answer
For a point charge \(q\), choose a spherical Gaussian surface of radius \(r\). By symmetry, \(E\) is radial and constant on the sphere:
:::eq
E(4πr²) = q/ε₀
E = q/(4πε₀r²)
:::
The force on a test charge \(q_0\) is \(\vec F=q_0\vec E\), which gives Coulomb's law.

### B-5(c) | Electric potential of a point charge
**Question:** Show that electric potential due to a point charge can be written as \(V=q/(4\pi\epsilon_0r)\).

#### Answer
Taking potential to be zero at infinity,
:::eq
V(r) = −∫∞ʳ E·dl = q/(4πε₀r)
:::
This expression is for a point charge in vacuum; the sign follows the sign of \(q\).

### B-4 | Electric field of a uniformly charged ring
**Question:** A ring of radius \(R\) carries total charge \(Q\). Find the electric field at a point on its axis a distance \(z\) from its center.

#### Answer
By symmetry, transverse field components cancel and only the axial components remain:
:::eq
E_z = (1/4πε₀) Qz/(R²+z²)^(3/2)
:::
The direction is along the axis away from the ring for \(Q>0,z>0\), and reversed for the opposite sign of \(Qz\).

### B-4 | Electric field of an infinite charged sheet
**Question:** State the electric field of an infinite uniformly charged sheet and describe the field lines.

#### Answer
For a sheet with surface charge density \(\sigma\),
:::eq
E = |σ|/(2ε₀)
:::
The field is uniform and perpendicular to the sheet on each side; it points away from a positive sheet and toward a negative sheet. Between oppositely charged parallel infinite plates, the fields add to approximately \(E=\sigma/\epsilon_0\) and point from positive to negative.

### B-4 | Electric field strength and potential
**Question:** Define electric field strength and electric potential.

#### Answer
Electric field strength is force per unit positive test charge, \(\vec E=\vec F/q\), in N/C (equivalently V/m). Electric potential is potential energy per unit charge, \(V=U/q\), in volts. The electric field points in the direction of decreasing potential: \(\vec E=-\nabla V\).

### B-4 | Electric field lines
**Question:** Describe field lines for a positive charge, negative charge, dipole, equal positive charges, and a parallel-plate capacitor.

#### Answer
- Positive point charge: radial lines outward.
- Negative point charge: radial lines inward.
- Electric dipole: lines originate on the positive charge and terminate on the negative charge.
- Two equal positive charges: lines emerge from both charges and bend away from the region between them; no line connects the charges.
- Ideal parallel-plate capacitor: approximately straight, parallel, equally spaced lines from the positive plate to the negative plate between the plates; fringing occurs at the edges.

## Magnetism
desc: Biot–Savart law, magnetic field of wires and coils, and Ampère's law.

### B-3 | Biot–Savart law
**Question:** State Biot–Savart law.

#### Answer
The magnetic field contribution from a current element \(I\,d\vec\ell\) at displacement \(\vec r\) is
:::eq
d𝐁 = (μ₀/4π) I (d𝐥 × r̂)/r²
:::
The direction is given by the right-hand rule. Integrating over the current path gives the total field.

### B-3 | Magnetic field of an infinite straight wire
**Question:** Use the Biot–Savart law to find the magnetic field a distance \(R\) from a long straight wire carrying current \(I\).

#### Answer
Integrating the Biot–Savart contributions along an infinitely long straight wire gives
:::eq
B = μ₀I/(2πR)
:::
The field lines are concentric circles around the wire, with direction set by the right-hand rule.

### B-5 | Ampère's law
**Question:** State Ampère's law.

#### Answer
For steady currents in vacuum,
:::eq
∮ B·dl = μ₀ I_enclosed
:::
In differential form, \(\nabla\times\vec B=\mu_0\vec J\) for magnetostatics. Maxwell's displacement-current term is required for the general time-dependent form.

### B-3 | Magnetic field at the center of a circular coil
**Question:** A circular coil has radius 40 mm, 250 turns, and current 20 mA. Find the magnetic field at its center.

#### Answer
:::eq
B = μ₀NI/(2R)
R = 0.040 m, I = 0.020 A, N = 250
B = (4π×10⁻⁷)(250)(0.020)/(2×0.040)
B ≈ 7.85 × 10⁻⁵ T
:::

### B-6(c) | Magnetic field due to an orbiting electron
**Question:** An electron moves in a circular orbit of radius \(5.1\times10^{-11}\) m at frequency \(6.8\times10^{15}\) revolutions/s. Find the magnetic field at the center.

#### Answer
The magnitude of the equivalent current is \(I=ef\), and for a circular loop \(B=\mu_0I/(2r)\).
:::eq
I = (1.602×10⁻¹⁹)(6.8×10¹⁵) ≈ 1.09×10⁻³ A
B = μ₀I/(2r) ≈ 1.34 × 10⁻⁵ T
:::

## Properties of Matter
desc: Elasticity, plasticity, stress-strain behavior, and band theory.

### B-7(c) | Elasticity and plasticity
**Question:** Define elasticity and plasticity. Describe a stress-strain diagram.

#### Answer
**Elasticity** is the ability of a material to return to its original shape after the deforming force is removed. **Plasticity** is the ability to undergo permanent deformation.

For a typical ductile material, a stress-strain curve includes:
- An initial approximately linear elastic region obeying Hooke's law, \(\sigma=E\epsilon\).
- A yield region where plastic deformation begins.
- A strain-hardening region where greater stress is needed for further plastic strain.
- An ultimate tensile strength, followed by necking and fracture.

#### Explanation
The exact curve varies with material. Stress is force divided by cross-sectional area; strain is fractional change in length.

### B-6(b) | Band theory
**Question:** Explain the band-theory distinction between metals, insulators, and semiconductors.

#### Answer
- **Metal:** a band is partially filled or valence and conduction bands overlap, allowing mobile carriers.
- **Insulator:** a large forbidden energy gap separates the filled valence band from the empty conduction band.
- **Semiconductor:** a relatively small gap permits thermal or optical excitation of carriers; conductivity increases with carrier concentration and generally with temperature.

## Constants and Common Formulae
desc: Useful constants and equations for the questions in this collection.

### Reference | Physical constants
#### Answer
- Gravitational acceleration near Earth's surface: \(g\approx9.81\text{ m/s}^2\).
- Avogadro constant: \(N_A=6.02214076\times10^{23}\text{ mol}^{-1}\).
- Elementary charge: \(e=1.602176634\times10^{-19}\text{ C}\).
- Vacuum permittivity: \(\epsilon_0\approx8.854\times10^{-12}\text{ F/m}\).
- Vacuum permeability: \(\mu_0\approx4\pi\times10^{-7}\text{ H/m}\) (exact in the traditional approximation used in many textbook problems).
- Speed of light in vacuum: \(c\approx2.998\times10^8\text{ m/s}\).

#### Explanation
For numerical answers, convert all quantities to SI units before substituting. OCR text may omit powers or units; where an interpretation was necessary, it is stated in the relevant solution.
