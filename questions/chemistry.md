---
title: General Chemistry
code: CHE 0531 1101G
description: Past questions – Final 2025 and Midterm 2016 (IPE, SUST).
icon: ࿌
color: #3b5bdb
---

## Atomic Structure
desc: Quantum numbers, de Broglie, hydrogen spectrum, electron configurations, Slater's rules.

### A-1(a) | Final 2025 | 3
Indicate which of the following sets of quantum numbers (n, l, m<sub>l</sub>, m<sub>s</sub>) is unacceptable and explain why: (a) (1, 1, ½, ½)  (b) (2, 1, 1, +½)  (c) (4, 3, 2, +½)

#### Answer
:::final
Only set (a) is unacceptable.
:::

#### Explanation
Rules: n = 1, 2, 3…; l = 0 to n−1; m<sub>l</sub> = −l to +l (integers only); m<sub>s</sub> = ±½.

- **(a) (1, 1, ½, ½)** – ✗ Two errors: for n = 1, l can only be 0 (l = 1 is not allowed), and m<sub>l</sub> = ½ is not an integer.
- **(b) (2, 1, 1, +½)** – ✓ n = 2, l = 1 (2p), m<sub>l</sub> = +1 is within −1…+1.
- **(c) (4, 3, 2, +½)** – ✓ n = 4, l = 3 (4f), m<sub>l</sub> = +2 is within −3…+3.

### A-1(b) | Final 2025 | 2
How does de Broglie's hypothesis account for the fact that the energies of the electron in a hydrogen atom are quantized?

#### Answer
Treating the electron as a **standing wave** around the nucleus allows only whole-number wavelengths in an orbit, so only certain angular momenta (and hence energies) are allowed.

#### Explanation
For a stable orbit the wave must close on itself without destructive interference:

:::eq
2πr = nλ,   n = 1, 2, 3…
:::

De Broglie wavelength: λ = h/mv. Substituting:

:::eq
2πr = nh/mv  ⟹  mvr = nh/2π
:::

This is exactly Bohr's quantization of angular momentum. Since r and v depend on n, the energy E<sub>n</sub> = −13.6/n² eV also takes only discrete values. Non-integer wavelengths would interfere with themselves and cancel out.

### A-1(c) | Final 2025 | 5
State the names of the spectral series in the hydrogen spectrum. Write the Rydberg formula for hydrogen's spectral lines. Apply Bohr's model to explain the origin of spectral lines in the hydrogen atom.

#### Answer
| Series | Ends at n₁ | Region |
|---|---|---|
| Lyman | 1 | Ultraviolet |
| Balmer | 2 | Visible |
| Paschen | 3 | Infrared |
| Brackett | 4 | Infrared |
| Pfund | 5 | Far infrared |
| Humphreys | 6 | Far infrared |

:::eq
1/λ = R<sub>H</sub> (1/n₁² − 1/n₂²),  n₂ &gt; n₁,  R<sub>H</sub> = 1.097 × 10⁷ m⁻¹
:::

#### Explanation
##### Bohr's explanation
1. The electron moves only in certain stationary orbits with energy E<sub>n</sub> = −13.6 eV/n² and does not radiate while in one.
2. When the electron **jumps from a higher orbit (n₂) to a lower one (n₁)**, it emits a photon whose energy equals the difference: hν = E<sub>n₂</sub> − E<sub>n₁</sub>.
3. Putting in E<sub>n</sub> gives hν = 13.6 (1/n₁² − 1/n₂²) eV, which is the Rydberg formula (R<sub>H</sub> = 13.6 eV/hc).
4. Because the energy levels are discrete, only specific photon energies appear – producing sharp **lines** instead of a continuous spectrum. Absorption is the reverse process.

### M-1 | Midterm 2016 | 2.5
Calculate the wave number and wavelength of the spectral line in the spectrum of the hydrogen atom with excitation from the 2<sup>nd</sup> energy level to the 3<sup>rd</sup> energy level. R = 109737.31 cm⁻¹.

#### Answer
:::final
Wave number ≈ 1.524 × 10⁴ cm⁻¹; wavelength ≈ 6.56 × 10⁻⁵ cm = 656 nm (red, Balmer H-α)
:::

#### Explanation
:::eq
ν̃ = R (1/n₁² − 1/n₂²) = 109737.31 × (1/2² − 1/3²)
= 109737.31 × (1/4 − 1/9) = 109737.31 × 5/36
= 15241.3 cm⁻¹
:::

:::eq
λ = 1/ν̃ = 1/15241.3 = 6.561 × 10⁻⁵ cm = 656.1 nm
:::

This is the first line of the Balmer series (visible red). It is the same wavelength whether the electron is excited 2→3 (absorbed) or falls 3→2 (emitted).

### M-2 | Midterm 2016 | 4
Write down the ground-state electronic configuration of the following atoms/ions and determine their position in the periodic table: Co<sup>2+</sup> (Z = 27), Cr (Z = 24), Cl<sup>−</sup> (Z = 17).

#### Answer
| Species | Configuration | Position (of the element) |
|---|---|---|
| Co²⁺ | 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁷ = [Ar] 3d⁷ | Period 4, Group 9, d-block |
| Cr | [Ar] 4s¹ 3d⁵ | Period 4, Group 6, d-block |
| Cl⁻ | 1s² 2s² 2p⁶ 3s² 3p⁶ = [Ar] | Cl: Period 3, Group 17 (p-block, halogen) |

#### Explanation
- **Co** neutral is [Ar] 4s² 3d⁷. Cations lose the **4s** electrons first (outermost shell), so Co²⁺ = [Ar] 3d⁷.
- **Cr** is an exception: a half-filled 3d⁵ + 4s¹ is more stable than 4s² 3d⁴ (exchange energy and low repulsion).
- **Cl⁻** gains one electron into 3p (3p⁵ → 3p⁶), becoming isoelectronic with Ar.
- Period = highest n; group for d-block = number of (n−1)d + ns electrons (Co: 7+2 = 9; Cr: 5+1 = 6); for p-block = 10 + (ns + np electrons) (Cl: 10 + 7 = 17).

### M-5 | Midterm 2016 | 5
What is meant by the notation 1s¹ and 3p³? Draw the shapes of s and d orbitals. Which of the following orbitals do not exist: 1p, 2s, 2d, 3p, 3d, 3f, 4g?

#### Answer
**1s¹**: one electron in the s subshell of the first shell. **3p³**: three electrons in the p subshell of the third shell.

:::final
Orbitals that do not exist: 1p, 2d, 3f, 4g
:::

#### Explanation
Notation: **n** (shell number) + **letter** (subshell, l) + **superscript** (number of electrons).

Allowed subshells: l runs 0 to n−1, so n = 1 has only s; n = 2 has s, p; n = 3 has s, p, d; n = 4 has s, p, d, f. Thus 1p, 2d, 3f and 4g are impossible; 2s, 3p, 3d exist.

##### Shapes
<svg viewBox="0 0 440 150" width="440" role="img" aria-label="s and d orbital shapes">
<g transform="translate(60,70)"><circle r="38" fill="#3b5bdb" fill-opacity=".35" stroke="#3b5bdb" stroke-width="2"/><text y="68" text-anchor="middle" font-size="13">s – spherical</text></g>
<g transform="translate(200,70)"><g fill="#d9822b" fill-opacity=".4" stroke="#d9822b" stroke-width="2"><ellipse cx="22" cy="-22" rx="30" ry="12" transform="rotate(-45 22 -22)"/><ellipse cx="-22" cy="22" rx="30" ry="12" transform="rotate(-45 -22 22)"/><ellipse cx="-22" cy="-22" rx="30" ry="12" transform="rotate(45 -22 -22)" fill="#1f9d55" stroke="#1f9d55"/><ellipse cx="22" cy="22" rx="30" ry="12" transform="rotate(45 22 22)" fill="#1f9d55" stroke="#1f9d55"/></g><text y="82" text-anchor="middle" font-size="13">d (e.g. dxy) – four lobes</text></g>
<g transform="translate(350,70)"><ellipse cx="0" cy="-33" rx="12" ry="30" fill="#3b5bdb" fill-opacity=".4" stroke="#3b5bdb" stroke-width="2"/><ellipse cx="0" cy="33" rx="12" ry="30" fill="#3b5bdb" fill-opacity=".4" stroke="#3b5bdb" stroke-width="2"/><ellipse cx="0" cy="0" rx="32" ry="8" fill="#1f9d55" fill-opacity=".4" stroke="#1f9d55" stroke-width="2"/><text y="82" text-anchor="middle" font-size="13">dz² – lobes + ring</text></g>
</svg>

The s orbital is spherical with no angular nodes. Four of the five d orbitals have a cloverleaf shape (four lobes); d<sub>z²</sub> has two lobes along z with a ring in the xy-plane.

### M-6 | Midterm 2016 | 3
Determine the effective nuclear charge experienced by a 3p electron in a calcium atom.

#### Answer
:::final
Z<sub>eff</sub> = 20 − 11.25 = 8.75
:::

#### Explanation
Use **Slater's rules**. Calcium (Z = 20): 1s² 2s²2p⁶ 3s²3p⁶ 4s². Slater groups: (1s)(2s,2p)(3s,3p)(3d)(4s).

| Electrons | Number | Shielding each | Total |
|---|---|---|---|
| Same group (3s, 3p), other than the one considered | 7 | 0.35 | 2.45 |
| n−1 shell (2s, 2p) | 8 | 0.85 | 6.80 |
| n−2 shell (1s) | 2 | 1.00 | 2.00 |
| Outer (4s) | 2 | 0 | 0 |

:::eq
σ = 2.45 + 6.80 + 2.00 = 11.25
Z<sub>eff</sub> = Z − σ = 20 − 11.25 = 8.75
:::

Electrons in higher groups (4s) do not shield a 3p electron.

## Periodic Properties
desc: Ionization energy, atomic/ionic radius, electronegativity, electron affinity.

### A-2(a) | Final 2025 | 3
Two atoms have the electron configurations 1s²2s²2p⁶ and 1s²2s²2p⁶3s¹. The first ionization energy of one is 2080 kJ/mol and that of the other is 496 kJ/mol. Pair each ionization energy with one of the given electron configurations. Justify your choice.

#### Answer
:::final
1s²2s²2p⁶ (Ne) → 2080 kJ/mol  |  1s²2s²2p⁶3s¹ (Na) → 496 kJ/mol
:::

#### Explanation
- **Ne** has a stable, completely filled octet. Its outermost electron is in the 2nd shell, close to the nucleus and strongly attracted (high Z<sub>eff</sub>, little extra shielding). Removing it needs a lot of energy: 2080 kJ/mol.
- **Na** has a lone electron in the 3s orbital: a new shell, farther from the nucleus and well shielded by the 10 core electrons. It is easily lost: 496 kJ/mol.
- Removing Na's 3s electron also gives the stable Ne-like core, which further favors ionization.

### A-2(b) | Final 2025 | 2
Indicate which one of the two species is larger: (i) N³⁻ or F⁻; (ii) Fe²⁺ or Fe³⁺. Arrange the following atoms in order of decreasing atomic radius: Na, Al, P, Cl, Mg.

#### Answer
(i) **N³⁻** is larger. (ii) **Fe²⁺** is larger.

:::final
Decreasing radius: Na &gt; Mg &gt; Al &gt; P &gt; Cl
:::

#### Explanation
- **(i)** N³⁻ and F⁻ are isoelectronic (10 electrons). N has 7 protons, F has 9. Fewer protons → weaker pull on the same electron cloud → larger ion.
- **(ii)** Fe³⁺ has lost one more electron than Fe²⁺, so less electron–electron repulsion and a higher effective nuclear charge per electron → smaller radius.
- **Order:** all five are in Period 3. Across a period, nuclear charge increases while shielding stays about the same, so radius decreases left to right: Na (Group 1) → Mg → Al → P → Cl (Group 17).

### A-3(a) | Final 2025 | 2
Differentiate between the trends in electronegativity and electron affinity across a period.

#### Answer
Both generally **increase left to right**, but electronegativity rises smoothly, while electron affinity has several irregularities.

#### Explanation
| | Electronegativity | Electron affinity |
|---|---|---|
| Meaning | Tendency of an atom *in a bond* to attract the shared pair | Energy released when an isolated gaseous atom gains an electron |
| Nature | Relative, dimensionless (Pauling scale) | Measurable energy (kJ/mol) |
| Trend across a period | Steady increase (smaller radius, higher Z<sub>eff</sub>) | Increases overall but with exceptions: Group 2 (full s) and Group 15 (half-filled p) are lower than expected; noble gases ≈ 0 or positive |
| Largest in period | Halogen (F is the highest overall) | Halogen (Cl is actually higher than F) |

### M-3 | Midterm 2016 | 4
Define ionization energy and electron affinity. Ionization energy is always a positive quantity, whereas electron affinity may be either positive or negative – explain.

#### Answer
**Ionization energy (IE):** minimum energy needed to remove the most loosely bound electron from a gaseous atom (X → X⁺ + e⁻).

**Electron affinity (EA):** energy change when a gaseous atom accepts an electron (X + e⁻ → X⁻).

#### Explanation
- **IE is always positive (endothermic):** the electron is attracted to the nucleus, so energy must always be supplied to pull it away.
- **EA can be either sign:**
    - For most atoms (e.g. halogens) the incoming electron is attracted by the nucleus, so energy is **released** (ΔH negative, a favorable process).
    - For atoms with full or half-full subshells (noble gases, Be, Mg, N), the extra electron must go into a higher or already-occupied orbital, so energy must be **absorbed** (ΔH positive).
    - Second electron affinities (e.g. O⁻ → O²⁻) are always positive because of repulsion between the electron and an already negative ion.

## Stoichiometry & Solutions
desc: Mole calculations, gas volumes at STP, dilution.

### A-2(c) | Final 2025 | 5
A solution of hydrochloric acid (HCl) of concentration 0.250 M reacts with calcium carbonate: 2HCl(aq) + CaCO₃(s) → CaCl₂(aq) + CO₂(g) + H₂O(l).

(i) How many milliliters of 0.250 M HCl are required to react completely with 5.00 g of CaCO₃?
(ii) If the reaction is performed at STP, what volume of CO₂ gas is produced?
(iii) Explain how you would prepare 100 mL of 0.250 M HCl from a 2.00 M HCl stock solution.

#### Answer
:::final
(i) ≈ 400 mL  |  (ii) ≈ 1.12 L CO₂  |  (iii) 12.5 mL stock diluted to 100 mL
:::

#### Explanation
##### (i) Volume of HCl
:::eq
Molar mass CaCO₃ = 100.09 g/mol
moles CaCO₃ = 5.00 / 100.09 = 0.04995 mol
moles HCl = 2 × 0.04995 = 0.0999 mol (mole ratio 2:1)
V = n/M = 0.0999 / 0.250 = 0.3996 L ≈ 400 mL
:::

##### (ii) Volume of CO₂ at STP
:::eq
1 mol CaCO₃ → 1 mol CO₂, so n(CO₂) = 0.04995 mol
V = 0.04995 × 22.4 L/mol = 1.12 L
:::

##### (iii) Dilution (M₁V₁ = M₂V₂)
:::eq
2.00 × V₁ = 0.250 × 100 mL  ⟹  V₁ = 12.5 mL
:::

Procedure: pipette 12.5 mL of the 2.00 M stock into a 100 mL volumetric flask that already holds some distilled water (add acid to water), then add distilled water up to the 100 mL mark, stopper, and mix by inverting.

## Acids, Bases & Buffers
desc: Acid strength, buffers, Henderson–Hasselbalch, polyprotic acids.

### A-3(b) | Final 2025 | 2
Arrange the following acids in terms of increasing strength: HClO₃, H₂SO₄, H₂S₂O₃, H₃PO₄. Give the reasons for your justifications.

#### Answer
:::final
H₃PO₄ &lt; H₂S₂O₃ &lt; HClO₃ &lt; H₂SO₄
:::

#### Explanation
For oxyacids, strength rises with the number of **terminal (non-OH) oxygens** on the central atom and with the central atom's **electronegativity and oxidation state**. These pull electron density away from the O–H bond and stabilize the conjugate base by delocalizing its negative charge.

| Acid | Terminal O on central atom | Central atom | Approx. pK<sub>a1</sub> |
|---|---|---|---|
| H₃PO₄ | 1 | P (+5), least electronegative | ≈ 2.1 |
| H₂S₂O₃ | 2 (plus one S–S link) | S | ≈ 0.6 |
| HClO₃ | 2 | Cl (+5), very electronegative | ≈ −1 |
| H₂SO₄ | 2 | S (+6), highest oxidation state | ≈ −3 |

- **H₃PO₄** has only one terminal oxygen, so it is the weakest of the four.
- **H₂S₂O₃** has two terminal oxygens, but one position is occupied by sulfur, which withdraws electrons less strongly than oxygen. It is stronger than H₃PO₄ but weaker than the other two.
- **HClO₃ and H₂SO₄** are both strong acids. H₂SO₄ is stronger because sulfur is in its highest oxidation state (+6).

*Note:* pK<sub>a</sub> values of very strong acids are approximate and vary by source; the ordering is the same in all of them.

### A-3(c) | Final 2025 | 3
A buffer is prepared by mixing 0.200 M acetic acid and 0.100 M sodium acetate. Calculate the pH, and explain how the Henderson–Hasselbalch equation simplifies buffer design. (K<sub>a</sub> of acetic acid = 1.8 × 10⁻⁵, pK<sub>a</sub> ≈ 4.74)

#### Answer
:::final
pH = 4.74 + log(0.100/0.200) ≈ 4.44
:::

#### Explanation
:::eq
pK<sub>a</sub> = −log(1.8 × 10⁻⁵) = 4.74
pH = pK<sub>a</sub> + log([A⁻]/[HA]) = 4.74 + log(0.100/0.200)
   = 4.74 − 0.301 = 4.44
:::

If your course uses pK<sub>a</sub> = 4.76, the answer is 4.46, so the pH is about **4.4–4.5** either way.

##### How Henderson–Hasselbalch simplifies buffer design
- It avoids solving the full equilibrium (ICE table / quadratic) – the pH depends only on pK<sub>a</sub> and the **ratio** of base to acid.
- Choose an acid whose pK<sub>a</sub> is within ±1 of the target pH, then set the ratio [A⁻]/[HA] to get the exact pH (ratio 0.1–10).
- Buffer capacity is highest when [A⁻] = [HA] (pH = pK<sub>a</sub>); total concentration sets the capacity.
- Diluting both components equally does not change the pH (ratio is unchanged).

### A-3(b)-OR | Final 2025 | 2 | or
Why are polyprotic acids (like H₃PO₄) weaker in subsequent ionization steps?

#### Answer
Each further proton must be removed from an increasingly **negatively charged** species, which holds on to H⁺ more strongly.

#### Explanation
:::eq
H₃PO₄ ⇌ H⁺ + H₂PO₄⁻   K<sub>a1</sub> ≈ 7.5 × 10⁻³
H₂PO₄⁻ ⇌ H⁺ + HPO₄²⁻   K<sub>a2</sub> ≈ 6.2 × 10⁻⁸
HPO₄²⁻ ⇌ H⁺ + PO₄³⁻   K<sub>a3</sub> ≈ 4.8 × 10⁻¹³
:::

- Electrostatic attraction: pulling a positive H⁺ away from an anion with charge −1, then −2, becomes harder.
- In addition, H⁺ already produced in the first step suppresses later ionizations (common-ion effect).
- So K<sub>a1</sub> &gt; K<sub>a2</sub> &gt; K<sub>a3</sub>, typically by factors of 10⁴–10⁶.

## Chemical Bonding
desc: Polar covalent bonds, hybridization, Lewis structures, formal charge.

### A-3(d) | Final 2025 | 3
What is a polar covalent bond? Describe how atoms in methane combine to form covalent bonds.

#### Answer
A **polar covalent bond** is a bond in which the shared electron pair is unequally shared because the two atoms differ in electronegativity, creating partial charges (δ⁺ and δ⁻), e.g. H–Cl.

#### Explanation
##### Bonding in CH₄
1. Carbon (ground state 2s² 2p²) has only two unpaired electrons, but it forms four bonds.
2. One 2s electron is **promoted** to the empty 2p orbital: 2s¹ 2p³ (four unpaired electrons).
3. The 2s and three 2p orbitals **hybridize** into four equivalent **sp³** orbitals pointing to the corners of a tetrahedron (109.5°).
4. Each sp³ orbital overlaps head-on with an H 1s orbital, forming four identical C–H **σ bonds**, each sharing a pair of electrons.

Each C–H bond is only slightly polar (ΔEN ≈ 0.35) and the symmetric tetrahedral shape cancels the dipoles, so methane is a nonpolar molecule.

### M-4 | Midterm 2016 | 2.5
Draw the Lewis structure for the CO₃²⁻ ion and show the formal charges for each atom.

#### Answer
:::final
One C=O (O formal charge 0), two C–O⁻ (each −1), C = 0. Total = −2.
:::

#### Explanation
Total valence electrons: 4 (C) + 3×6 (O) + 2 (charge) = 24.

<svg viewBox="0 0 260 190" width="260" role="img" aria-label="Lewis structure of carbonate">
<g stroke="currentColor" stroke-width="2" fill="none" style="color:var(--text)"><line x1="130" y1="95" x2="130" y2="40"/><line x1="136" y1="95" x2="136" y2="40"/><line x1="130" y1="95" x2="85" y2="125"/><line x1="130" y1="95" x2="175" y2="125"/></g>
<g font-size="18" text-anchor="middle"><text x="133" y="100">C</text><text x="133" y="30">O</text><text x="75" y="140">O</text><text x="185" y="140">O</text></g>
<g font-size="13" text-anchor="middle"><text x="152" y="26">0</text><text x="54" y="125">−1</text><text x="208" y="125">−1</text><text x="150" y="88">0</text></g>
<text x="130" y="180" text-anchor="middle" font-size="12">overall charge 2−, lone pairs omitted</text>
</svg>

:::eq
Formal charge = valence e⁻ − nonbonding e⁻ − ½(bonding e⁻)
C: 4 − 0 − 4 = 0
O (double bond): 6 − 4 − 2 = 0
O (single bond): 6 − 6 − 1 = −1 (×2)
:::

The double bond can be on any of the three oxygens, giving **three resonance structures**; the real ion has three equal C–O bonds (bond order 1⅓) with the −2 charge delocalized.

## Gases & Kinetic Theory
desc: Maxwell distribution, mean free path, KMT, transport properties, critical phenomena.

### A-3(a)-OR | Final 2025 | 3 | or
What does the Maxwell speed distribution curve tell us? Does Maxwell's theory work for a sample of 200 molecules? Explain.

#### Answer
The curve shows the **fraction of molecules having each speed** at a given temperature. For 200 molecules the theory works only roughly, since it is a statistical law that needs a very large number of molecules.

#### Explanation
- Molecules have a **wide range of speeds**; the curve is asymmetric with a peak at the most probable speed, so v<sub>mp</sub> &lt; v<sub>avg</sub> &lt; v<sub>rms</sub>.
- Raising T shifts the peak right and flattens/broadens the curve (more fast molecules, which explains faster reactions and evaporation).
- At the same T, lighter molecules have a broader curve with a higher peak speed.
- The area under the curve is 1 (all molecules).

**200 molecules:** the Maxwell distribution comes from statistics and assumes enormous numbers (~10²⁰ or more). With only 200 molecules the fluctuations are large, so the observed histogram would be jagged and deviate noticeably from the smooth curve. It would hold only approximately.

### A-3(c)-OR | Final 2025 | 5 | or
The average distance traveled by a molecule between successive collisions is called the mean free path. For a given amount of gas, how does the mean free path depend on (a) density, (b) temperature at constant volume, (c) pressure at constant temperature, (d) volume at constant temperature, and (e) size of the atoms?

#### Answer
:::eq
λ = kT / (√2 π d² P) = V / (√2 π d² N)
:::

| Variable | Effect on λ |
|---|---|
| (a) Density ↑ | λ ∝ 1/density – decreases |
| (b) T at constant V | No change (independent of T) |
| (c) P at constant T | λ ∝ 1/P – decreases |
| (d) V at constant T | λ ∝ V – increases |
| (e) Atom size (d) | λ ∝ 1/d² – larger atoms, shorter λ |

#### Explanation
Using λ = V/(√2 π d² N), where N/V is the number density:

- **(a)** More molecules per unit volume means collisions are more frequent, so the path between them shrinks.
- **(b)** At constant V (and N), the formula has no T. Molecules move faster but collide proportionally more often, so λ stays the same.
- **(c)** At constant T, higher P squeezes molecules closer (higher number density) so λ falls.
- **(d)** Larger V at constant N means lower density, so molecules travel farther before colliding.
- **(e)** A bigger molecule has a bigger collision cross-section (πd²), so collisions happen sooner.

### B-5(a) | Final 2025 | 3
What are the basic assumptions of the kinetic molecular theory of gases?

#### Answer
1. A gas consists of a large number of tiny molecules in constant random motion.
2. The volume of the molecules is negligible compared with the volume of the container.
3. There are no attractive or repulsive forces between molecules (except during collisions).
4. Collisions between molecules and with the walls are perfectly elastic (no energy loss).
5. The average kinetic energy is proportional to absolute temperature (KE<sub>avg</sub> = 3/2 kT) and is the same for all gases at the same T.
6. Gas pressure results from molecular collisions with the container walls.

#### Explanation
From these assumptions, one derives PV = ⅓ N m v̄² and thus the ideal gas law. Real gases deviate when assumptions 2 and 3 fail: at high pressure (molecular volume matters) and low temperature (attractive forces matter), which is why the van der Waals equation adds corrections.

### B-5(b) | Final 2025 | 3
How does mean free path affect thermal conductivity and viscosity of gases?

#### Answer
Both are **transport properties** carried by molecules moving between collisions: a longer mean free path lets each molecule carry momentum (viscosity) or energy (thermal conductivity) farther, so both increase with λ.

#### Explanation
:::eq
η = ⅓ ρ v̄ λ      κ = ⅓ ρ v̄ λ C<sub>v</sub> (per unit mass)
:::

- Since λ ∝ 1/ρ, the product ρλ is independent of pressure. So **η and κ do not change with pressure** over a wide range (Maxwell's surprising result).
- Both rise with temperature as v̄ ∝ √T (unlike liquids, whose viscosity falls with T).
- At very low pressure, λ becomes comparable to the container size and conductivity then drops with pressure (this is how a vacuum flask insulates).

### B-5(c) | Final 2025 | 4
What is meant by the critical temperature of a gas? Sketch Andrews' P–V isotherms for CO₂ at different temperatures (below, at, and above the critical temperature). (i) Label the regions: liquid, vapor, and liquid–vapor equilibrium. (ii) Indicate critical temperature (T<sub>c</sub>), critical pressure (P<sub>c</sub>), and critical volume (V<sub>c</sub>).

#### Answer
**Critical temperature (T<sub>c</sub>)** is the highest temperature at which a gas can be liquefied by applying pressure. Above T<sub>c</sub> no amount of pressure will liquefy it. For CO₂: T<sub>c</sub> ≈ 31 °C (304 K), P<sub>c</sub> ≈ 73 atm, V<sub>c</sub> ≈ 94 cm³/mol.

<svg viewBox="0 0 380 270" width="420" role="img" aria-label="Andrews isotherms for CO2">
<g stroke="currentColor" stroke-width="1.5" fill="none" style="color:var(--text)"><line x1="45" y1="245" x2="360" y2="245"/><line x1="45" y1="245" x2="45" y2="15"/></g>
<text x="205" y="266" text-anchor="middle" font-size="13">Volume (V)</text>
<text x="10" y="130" font-size="13" transform="rotate(-90 10 130)" text-anchor="middle">Pressure (P)</text>
<path d="M72 165 C 80 125 120 112 150 112 C 180 112 195 135 200 165" stroke="#888" stroke-width="1.5" stroke-dasharray="5 4" fill="#d9822b" fill-opacity=".12"/>
<path d="M50 30 C 95 85 150 105 345 165" stroke="#d9534f" stroke-width="2.5" fill="none"/>
<path d="M55 38 C 95 95 125 112 150 112 C 175 114 215 165 345 195" stroke="#1f9d55" stroke-width="2.5" fill="none"/>
<path d="M63 45 L 73 165 L 200 165 C 230 165 260 205 345 222" stroke="#3b5bdb" stroke-width="2.5" fill="none"/>
<circle cx="150" cy="112" r="4.5" fill="#1f9d55"/>
<line x1="45" y1="112" x2="150" y2="112" stroke="#888" stroke-dasharray="3 3"/><line x1="150" y1="112" x2="150" y2="245" stroke="#888" stroke-dasharray="3 3"/>
<g font-size="12"><text x="24" y="108">Pc</text><text x="144" y="260">Vc</text><text x="156" y="104">C (critical point)</text><text x="290" y="150" style="fill:#d9534f">T &gt; Tc</text><text x="290" y="190" style="fill:#1f9d55">T = Tc</text><text x="280" y="216" style="fill:#3b5bdb">T &lt; Tc</text><text x="78" y="85">Liquid</text><text x="235" y="95">Vapor / gas</text><text x="100" y="152">L + V</text></g>
</svg>

#### Explanation
- **T &lt; T<sub>c</sub> (blue):** compressing the vapor reaches a horizontal flat segment where liquid and vapor coexist at constant (vapor) pressure; once all is liquid the curve rises steeply (liquids are almost incompressible).
- **T = T<sub>c</sub> (green):** the flat segment shrinks to a single inflection point with a horizontal tangent, the critical point (T<sub>c</sub>, P<sub>c</sub>, V<sub>c</sub>). Liquid and vapor become indistinguishable.
- **T &gt; T<sub>c</sub> (red):** smooth, hyperbola-like curve; the gas never liquefies (supercritical fluid).
- The dashed dome encloses the liquid–vapor equilibrium region; liquid lies to the left of/above the dome, gas to the right.

In an exam, draw at least three isotherms, shade/label the dome, and mark P<sub>c</sub> and V<sub>c</sub> on the axes with dashed lines from the critical point.

## Chemical Kinetics
desc: Reaction order, integrated rate laws, Arrhenius equation.

### B-4(a) | Final 2025 | 5
A student notices that doubling the concentration of a reactant has no effect on the rate of reaction. What order of reaction could this be and why? Deduce the integrated rate equation for this order of reaction.

#### Answer
:::final
Zero order: rate = k[A]⁰ = k  →  [A] = [A]₀ − kt
:::

#### Explanation
If rate = k[A]ⁿ and doubling [A] gives the same rate, then 2ⁿ = 1, so n = 0. The rate is constant and independent of concentration (e.g. surface-catalyzed reactions when the surface is saturated).

:::eq
−d[A]/dt = k
∫ d[A] from [A]₀ to [A] = −k ∫ dt from 0 to t
[A] − [A]₀ = −kt  ⟹  [A] = [A]₀ − kt
:::

- Plot of [A] vs t is a straight line with slope −k.
- Half-life: t<sub>½</sub> = [A]₀ / 2k (it depends on the initial concentration).
- Units of k: mol L⁻¹ s⁻¹.

### B-4(b) | Final 2025 | 3
How could you experimentally determine the activation energy of a reaction from the graph using the Arrhenius equation?

#### Answer
Measure the rate constant k at several temperatures, plot **ln k vs 1/T**, and get E<sub>a</sub> from the slope: **E<sub>a</sub> = −slope × R**.

#### Explanation
:::eq
k = A e<sup>−Ea/RT</sup>  ⟹  ln k = ln A − (E<sub>a</sub>/R)(1/T)
:::

This is a straight line y = c + mx, with y = ln k, x = 1/T (in K⁻¹), slope m = −E<sub>a</sub>/R and intercept ln A.

1. Run the reaction at 4–5 temperatures (in kelvin) and find k at each.
2. Plot ln k (y-axis) against 1/T (x-axis); the line slopes downward.
3. Slope = −E<sub>a</sub>/R, so E<sub>a</sub> = −(slope) × 8.314 J mol⁻¹ K⁻¹.
4. The intercept on the y-axis gives ln A (frequency factor).

Alternative from two points: ln(k₂/k₁) = (E<sub>a</sub>/R)(1/T₁ − 1/T₂).

### B-4(c) | Final 2025 | 2
A reaction of the form aA → products is second-order with a rate constant of 0.225 L/(mol·s). If the initial concentration of A is 0.293 mol/L, what is the molar concentration of A after 35.4 s?

#### Answer
:::final
[A] ≈ 0.0879 mol/L
:::

#### Explanation
Second-order integrated law:

:::eq
1/[A] = 1/[A]₀ + kt
1/[A] = 1/0.293 + (0.225)(35.4)
      = 3.413 + 7.965 = 11.378 L/mol
[A] = 1/11.378 = 0.0879 mol/L
:::

This law comes from integrating −d[A]/dt = k[A]²; the half-life is t<sub>½</sub> = 1/(k[A]₀).

*Note:* the rate is taken as −d[A]/dt = k[A]² (i.e. the coefficient *a* is absorbed into k), which is the usual textbook convention for this type of problem.

## Organic Chemistry
desc: Markovnikov addition, aromaticity, carbonyl reactivity, oxidation.

### B-6(a) | Final 2025 | 2
Propene (CH₃–CH=CH₂) reacts with HBr to give two possible products: 2-bromopropane and 1-bromopropane. How do you determine which one will be the minor product?

#### Answer
Apply **Markovnikov's rule**: the minor product is the one with Br on the terminal (less substituted) carbon, i.e. **1-bromopropane**. The major product is 2-bromopropane.

#### Explanation
*Note: the reaction scheme in the original scan was unreadable, so this question has been restated as propene + HBr, the standard example.*

- H⁺ adds first to the double bond. Adding to C-1 gives a **secondary carbocation** (at C-2); adding to C-2 would give a less stable **primary carbocation**.
- The more stable carbocation (hyperconjugation and inductive effects from more alkyl groups) forms faster, and Br⁻ then attacks it → major product, 2-bromopropane.
- The product formed through the less stable carbocation, 1-bromopropane, is the minor one (anti-Markovnikov).

Shortcut: "the rich get richer" – H goes to the carbon that already has more hydrogens.

### B-6(b) | Final 2025 | 4
What is the difference between anti-aromatic and non-aromatic compounds? Why does benzene undergo electrophilic substitution instead of addition reactions?

#### Answer
| | Anti-aromatic | Non-aromatic |
|---|---|---|
| Structure | Cyclic, planar, fully conjugated | Fails at least one of: cyclic, planar, fully conjugated |
| π electrons | 4n (e.g. 4, 8) | Not applicable |
| Stability | Destabilized (very reactive), e.g. cyclobutadiene | Normal, no special effect, e.g. cyclohexene |

#### Explanation
Hückel's rule: aromatic = cyclic + planar + fully conjugated + (4n + 2) π electrons. Anti-aromatic has the same first three criteria but 4n π electrons. Anti-aromatic molecules often distort to non-planar shapes to avoid the instability.

##### Benzene: substitution, not addition
- Benzene has 6 delocalized π electrons and a large resonance (aromatic) stabilization of about 150 kJ/mol.
- Addition would destroy the aromatic ring, losing this stability, so it is energetically unfavorable.
- In electrophilic substitution, the electrophile attacks, forming a carbocation (arenium ion); then loss of H⁺ **restores the aromatic ring**. The net result is substitution with retention of aromaticity.

### B-6(c) | Final 2025 | 4
Why are aldehydes generally more reactive than ketones towards nucleophilic addition reactions? 3.00 g of ethanol is completely oxidized to ethanoic acid. Calculate the mass of ethanoic acid produced, assuming a 100% yield.

#### Answer
Aldehydes are less hindered and have a more electrophilic carbonyl carbon.

:::final
Mass of CH₃COOH ≈ 3.91 g
:::

#### Explanation
##### Reactivity
- **Steric:** an aldehyde has one small H and one R group on the carbonyl carbon; a ketone has two bulky R groups, making it harder for the nucleophile to approach, and the crowded tetrahedral product is less stable.
- **Electronic:** alkyl groups are electron-donating (+I) and reduce the partial positive charge on the carbonyl carbon. Ketones have two such groups, aldehydes only one, so the aldehyde carbon is more electrophilic.

##### Calculation
:::eq
C₂H₅OH + 2[O] → CH₃COOH + H₂O (1:1 mole ratio)
M(C₂H₅OH) = 46.07 g/mol; M(CH₃COOH) = 60.05 g/mol
moles = 3.00 / 46.07 = 0.0651 mol
mass = 0.0651 × 60.05 = 3.91 g
:::

## Fuels & Environment
desc: Octane number, antiknock agents, fertilizers and eutrophication.

### B-6(a)-OR | Final 2025 | 3 | or
Explain the concept of octane number. Why is iso-octane assigned a value of 100 while n-heptane is 0?

#### Answer
The **octane number** measures a fuel's resistance to knocking (premature auto-ignition) in an engine. It equals the percentage of iso-octane in an iso-octane/n-heptane mixture that matches the fuel's knocking behavior.

#### Explanation
- The scale is an arbitrary reference: **iso-octane (2,2,4-trimethylpentane)** burns smoothly and resists knock, so it was defined as 100; **n-heptane**, a straight-chain alkane that knocks badly, was defined as 0.
- Branched hydrocarbons are more resistant to the low-temperature chain-branching oxidation reactions that cause auto-ignition under compression, so they burn evenly when the spark fires.
- Straight-chain alkanes such as n-heptane undergo these oxidation reactions easily, so part of the fuel–air mixture ignites before the flame front reaches it, causing knocking.
- Example: gasoline with octane number 90 behaves like a 90 % iso-octane + 10 % n-heptane blend.

### B-6(b)-OR | Final 2025 | 4 | or
Discuss the environmental impact of excessive fertilizer use, particularly in terms of eutrophication.

#### Answer
Excess N and P fertilizer runs off into water bodies, causing **eutrophication**: algal blooms → oxygen depletion → death of aquatic life.

#### Explanation
1. **Nutrient runoff:** unused nitrate and phosphate wash into rivers and lakes.
2. **Algal bloom:** nutrients fuel rapid growth of algae, covering the surface and blocking sunlight.
3. **Die-off and decomposition:** dead algae are decomposed by bacteria that consume dissolved O₂ (high BOD).
4. **Hypoxia / dead zones:** low oxygen kills fish and other organisms, reducing biodiversity; some algae release toxins.

**Other impacts:** nitrate contamination of groundwater (health risk: methemoglobinemia, or "blue baby syndrome"), N₂O emission (potent greenhouse gas), soil acidification and loss of soil health.

**Remedies:** precise fertilizer application, buffer strips, crop rotation, organic or slow-release fertilizer.

### B-6(c)-OR | Final 2025 | 3 | or
Why is tetraethyl lead no longer used as an antiknock additive in petrol? What alternatives are used today?

#### Answer
Tetraethyl lead (TEL) was phased out because it is a **toxic pollutant** and it **poisons catalytic converters**.

#### Explanation
- Combustion releases lead compounds into the air, soil and water; lead is a neurotoxin, especially harmful to children's brain development.
- Lead deactivates the platinum/palladium/rhodium catalysts in catalytic converters, so cars could not meet emission standards for CO, NOx and hydrocarbons.

**Alternatives:**

- Oxygenates such as **ethanol**, ETBE and MTBE (MTBE use has been reduced in many countries due to groundwater contamination)
- Refinery processes: catalytic reforming, alkylation and isomerization to produce high-octane branched hydrocarbons and aromatics
- Other additives such as MMT (methylcyclopentadienyl manganese tricarbonyl) in some regions
