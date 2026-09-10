# Italian translation — review copy

The live page reads its Italian from **`Site/i18n/it.json`**. This file is a readable rendering of that dictionary for checking; correcting it changes nothing on its own.

**To apply a correction:** find the key (e.g. `law.p2`) in `it.json`, edit the value, then run `python Site/tools/build_artifact.py` and republish.

HTML tags, `\( … \)` mathematics and unit symbols are stripped below for readability but are present in the real strings — keep them intact when editing `it.json`.

## Conventions used

| English | Italian |
|---|---|
| complexity | complessità |
| energetic variation | variazione energetica |
| funnel | imbuto |
| throat | gola |
| collapse | collasso |
| entropy production | produzione di entropia |
| free energy | energia libera |
| phase transition | transizione di fase |
| singularity | singolarità |
| re-crystallisation | ricristallizzazione |
| internal work | lavoro interno |
| symmetry breaking | rottura di simmetria |
| out of equilibrium | fuori equilibrio |
| periphery | periferia |
| potential well | buca di potenziale |
| state space | spazio degli stati |
| plate (figure) | tavola |
| growth rate | tasso di crescita |
| order parameter | parametro d'ordine |
| hourglass | clessidra |
| sheet (manifold) | falda |
| bottleneck | strozzatura |
| hydrogen bond | legame a idrogeno |
| lecture notes | appunti di lezione |

Numbers take Italian decimal commas in prose and figure labels (2,5 kJ/mol) but keep the international point inside mathematics (`0.962`), which is physics convention. Reference titles stay in English because the papers are English.

---

## Page title and description

### `meta.desc`

> **EN** A lecture on the proposed law K = 1/ΔE — how a system's structural complexity, mapped onto an infinite funnel, performs its own work and falls in finite time into deterministic chaos.

> **IT** Una lezione sulla legge proposta K = 1/ΔE — come la complessità strutturale di un sistema, rappresentata su un imbuto infinito, compie il proprio lavoro e cade in un tempo finito nel caos deterministico.

### `meta.title`

> **EN** The Complexity Collapse

> **IT** Il collasso della complessità


## Masthead

### `mast.alt-portrait`

> **EN** Portrait of the lecturer

> **IT** Ritratto del docente

### `mast.h11`

> **EN** The Complexity Collapse, or how order spends itself to move

> **IT** Il collasso della complessità, ovvero come l’ordine spende se stesso per muoversi

### `mast.lbl1`

> **EN** The law

> **IT** La legge

### `mast.p1`

> **EN** A single reciprocal law — complexity is the inverse of energetic variation — turns out to describe a well with no floor. Follow it carefully and a system at perfect rest is obliged to consume its own structure in order to fall, and it reaches the bottom in finite time.

> **IT** Una sola legge reciproca — la complessità è l’inverso della variazione energetica — descrive una buca senza fondo. Seguitela con attenzione e un sistema in quiete perfetta è costretto a consumare la propria struttura per cadere, e raggiunge il fondo in un tempo finito.

### `mast.span1`

> **EN** Lecture Notes

> **IT** Appunti di lezione

### `mast.span2`

> **EN** Non-Equilibrium Systems

> **IT** Sistemi fuori equilibrio

### `mast.span3`

> **EN** Working paper · unrefereed

> **IT** Documento di lavoro · non sottoposto a revisione


## Contents / navigation

### `nav.01`

> **EN** The derivation

> **IT** La derivazione

### `nav.02`

> **EN** The proposal

> **IT** La proposta

### `nav.03`

> **EN** The core law

> **IT** La legge fondamentale

### `nav.04`

> **EN** State space & geometry

> **IT** Spazio degli stati & geometria

### `nav.05`

> **EN** The field’s two boundaries

> **IT** I due confini del campo

### `nav.06`

> **EN** Potential, work, Lagrangian

> **IT** Potenziale, lavoro, lagrangiana

### `nav.07`

> **EN** Finite-time collapse

> **IT** Collasso in tempo finito

### `nav.08`

> **EN** Out of equilibrium

> **IT** Fuori equilibrio

### `nav.09`

> **EN** Heat & entropy

> **IT** Calore & entropia

### `nav.10`

> **EN** Mass equivalence

> **IT** Equivalenza con la massa

### `nav.11`

> **EN** A sense of scale

> **IT** Un senso della scala

### `nav.12`

> **EN** The closed cycle

> **IT** Il ciclo chiuso

### `nav.13`

> **EN** The hourglass

> **IT** La clessidra

### `nav.14`

> **EN** The model, running

> **IT** Il modello in funzione

### `nav.15`

> **EN** Open questions

> **IT** Questioni aperte

### `nav.16`

> **EN** References

> **IT** Riferimenti

### `nav.17`

> **EN** Lecture contents

> **IT** Indice della lezione


## Interface strings (buttons, live model, contact)

### `ui.affiliation`

> **EN** Author of the complexity–energy proposal

> **IT** Autore della proposta complessità–energia

### `ui.correspondence`

> **EN** Correspondence

> **IT** Corrispondenza

### `ui.langNav`

> **EN** Language

> **IT** Lingua

### `ui.pause`

> **EN** Pause

> **IT** Pausa

### `ui.phaseLower`

> **EN** Lower expansion

> **IT** Espansione inferiore

### `ui.phaseThroat`

> **EN** Throat · chaos

> **IT** Gola · caos

### `ui.phaseUpper`

> **EN** Upper collapse

> **IT** Collasso superiore

### `ui.play`

> **EN** Play

> **IT** Riproduci

### `ui.skip`

> **EN** Skip to the lecture

> **IT** Vai alla lezione

### `ui.transNote`

> **EN** _(empty)_

> **IT** Tradotto dall’inglese · traduzione in revisione


## §00 - Prologue

### `prologue.h21`

> **EN** The proposal, in its own words

> **IT** La proposta, nelle sue stesse parole

### `prologue.lbl1`

> **EN** Prologue

> **IT** Prologo

### `prologue.p1`

> **EN** This began as a single sentence I wrote about complexity and energy. I did not expect it to go anywhere in particular. Follow it carefully, though, and it ends at an infinite funnel with no floor, a system that moves without being pushed, and a collapse that completes in finite time. Some of it, I have since found, is wrong — which is a far more useful thing to be than vaguely right.

> **IT** Tutto è nato da una singola frase che ho scritto sulla complessità e sull’energia. Non mi aspettavo che portasse da nessuna parte in particolare. Seguitela con attenzione, però, e finisce in un imbuto infinito senza fondo, in un sistema che si muove senza essere spinto e in un collasso che si compie in un tempo finito. Parte di tutto questo, come ho poi scoperto, è sbagliata — il che è assai più utile che essere vagamente nel giusto.

### `prologue.p2`

> **EN** I want to do two things in these notes. First, build the model out properly: state space, metric, potential, equations of motion, thermodynamics, the lot. Second — and this is the part that matters — show you exactly where it holds and exactly where it breaks, including the places my own arithmetic let me down. A model that survives its own derivation unscathed usually means nobody pushed.

> **IT** In questi appunti voglio fare due cose. Primo: costruire il modello per bene — spazio degli stati, metrica, potenziale, equazioni del moto, termodinamica, tutto quanto. Secondo — ed è la parte che conta — mostrarvi esattamente dove tiene ed esattamente dove cede, comprese le occasioni in cui la mia stessa aritmetica mi ha tradito. Un modello che esce indenne dalla propria derivazione di solito significa che nessuno ha spinto abbastanza.

### `prologue.p3`

> **EN** “…a novel conceptual and mathematical framework regarding the thermodynamic behavior of complex, self-organizing systems and the origin of life. Our model maps the structural transition of a life-bearing system from a state of absolute order and maximum complexity into a chaotic, divergent regime.”

> **IT** “…un quadro concettuale e matematico inedito sul comportamento termodinamico dei sistemi complessi auto-organizzanti e sull’origine della vita. Il nostro modello descrive la transizione strutturale di un sistema portatore di vita da uno stato di ordine assoluto e massima complessità a un regime caotico e divergente.”

### `prologue.p4`

> **EN** The foundational claim is that complexity is inversely proportional to energetic variation; that this can be drawn as a modified Torricelli trumpet; and that the transition out of stillness is powered not by any external force but by the accumulated complexity performing work on itself. Life, on this reading, is an out-of-equilibrium phase transition that a system ignites from its own stored order.

> **IT** L’affermazione di fondo è che la complessità è inversamente proporzionale alla variazione energetica; che ciò si può rappresentare come una tromba di Torricelli modificata; e che l’uscita dalla quiete non è alimentata da alcuna forza esterna, ma dalla complessità accumulata che compie lavoro su se stessa. La vita, in questa lettura, è una transizione di fase fuori equilibrio che il sistema accende attingendo al proprio ordine immagazzinato.

### `prologue.p5`

> **EN** What follows is not the original write-up but the model rebuilt properly, with the mathematics carried through. Where my own arithmetic slipped I have corrected it in place and recorded the correction in §13, because a derivation you cannot check is not a derivation. I would rather hand you the working than the conclusion.

> **IT** Quello che segue non è la stesura originale, ma il modello ricostruito per bene, con la matematica portata fino in fondo. Dove la mia aritmetica ha vacillato ho corretto sul posto e registrato la correzione nel §13, perché una derivazione che non si può verificare non è una derivazione. Preferisco consegnarvi il procedimento anziché la conclusione.

### `prologue.span1`

> **EN** As I first wrote it

> **IT** Come l’ho scritta la prima volta

### `prologue.span2`

> **EN** Theoretical physics proposal

> **IT** Proposta di fisica teorica

### `prologue.span3`

> **EN** A word before we start

> **IT** Una parola prima di cominciare


## §01 - The core law

### `law.aria1`

> **EN** Hyperbola of complexity K against energetic variation delta E z. K falls steeply from very large values near zero variation, passing through the point where both equal one, and flattens toward zero as variation grows. The high-K region is labelled order, the low-K region chaos.

> **IT** Iperbole della complessità K rispetto alla variazione energetica delta E z. K scende ripidamente da valori molto grandi vicino a variazione nulla, passa per il punto in cui entrambe valgono uno e si appiattisce verso zero al crescere della variazione. La regione ad alto K è etichettata ordine, quella a basso K caos.

### `law.figcaption1`

> **EN** Plate A. Equation (1) drawn out. The curve is a rectangular hyperbola, so the two regimes are not symmetric in any useful sense: order is a narrow, steep territory and chaos is a broad, flat one. The single crossing point where \(K = \Delta E_z = 1\) is the only state that is its own reciprocal — everything else in the model is on its way somewhere.

> **IT** Tavola A. L’equazione (1) tracciata. La curva è un’iperbole equilatera, quindi i due regimi non sono simmetrici in alcun senso utile: l’ordine è un territorio stretto e ripido, il caos uno ampio e piatto. L’unico punto di incrocio, dove \(K = \Delta E_z = 1\), è il solo stato che sia il proprio reciproco — tutto il resto, nel modello, è in transito verso qualcosa.

### `law.h21`

> **EN** Complexity as a reciprocal

> **IT** La complessità come reciproco

### `law.lbl1`

> **EN** The core law

> **IT** La legge fondamentale

### `law.p1`

> **EN** The whole edifice rests on one statement. Let \(K\) denote the structural complexity of a system and \(\Delta E\) its internal energetic variation — the spread, not the level, of its energy. The claim is that these are reciprocal:

> **IT** Tutto l’edificio poggia su una sola affermazione. Sia \(K\) la complessità strutturale di un sistema e \(\Delta E\) la sua variazione energetica interna — la dispersione, non il livello, della sua energia. La tesi è che le due grandezze siano reciproche:

### `law.p2`

> **EN** Read it as an assertion about information capacity. A system whose energy barely fluctuates is a system whose microstates are sharply distinguished: you can write a great deal into it and expect to read it back. Let the fluctuations grow and the distinctions blur — structure dissolves into noise. In the limit of no variation at all, the system holds unbounded structure and does absolutely nothing. In the limit of unbounded variation, it holds nothing at all.

> **IT** Leggetela come un’affermazione sulla capacità informativa. Un sistema la cui energia fluttua appena è un sistema i cui microstati sono nettamente distinti: vi si può scrivere molto e si può contare di rileggerlo. Lasciate crescere le fluttuazioni e le distinzioni si confondono — la struttura si dissolve nel rumore. Nel limite di variazione nulla il sistema contiene struttura illimitata e non fa assolutamente nulla. Nel limite di variazione illimitata non contiene nulla.

### `law.p3`

> **EN** That is the intuition, and it is a respectable one; it has cousins in the fluctuation–dissipation literature and in the thermodynamics of computation. What makes this proposal distinctive is the decision to treat equation (1) not as an analogy but as a field equation, and then to ask what geometry it implies.

> **IT** Questa è l’intuizione, ed è rispettabile; ha parenti nella letteratura sulla fluttuazione–dissipazione e nella termodinamica del calcolo. Ciò che rende distintiva questa proposta è la scelta di trattare l’equazione (1) non come un’analogia ma come un’equazione di campo, per poi chiedersi quale geometria essa implichi.

### `law.span1`

> **EN** Plate A

> **IT** Tavola A

### `law.span2`

> **EN** The reciprocal law as a curve

> **IT** La legge reciproca come curva

### `law.svg1`

> **EN** energetic variation ∆Eₒ

> **IT** variazione energetica ∆Eₒ

### `law.svg2`

> **EN** complexity K

> **IT** complessità K

### `law.svg3`

> **EN** ORDER · K → ∞

> **IT** ORDINE · K → ∞

### `law.svg4`

> **EN** CHAOS · K → 0

> **IT** CAOS · K → 0

### `law.svg5`

> **EN** the only self-dual state

> **IT** l’unico stato autoduale


## §02 - State space & geometry

### `geometry.alt1`

> **EN** Conceptual diagram of a glowing funnel over a base plane. The wide flat rim is labelled periphery, state of maximum complexity, with K tending to infinity and delta E z tending to zero. A line of spheres traces a path down the funnel wall to a bright central collapse labelled state of chaos, where K tends to zero and delta E z diverges. Side panels summarise four stages: periphery, inception, collapse, chaos.

> **IT** Diagramma concettuale di un imbuto luminoso sopra un piano di base. L’ampio bordo piatto è etichettato periferia, stato di massima complessità, con K che tende a infinito e delta E z che tende a zero. Una fila di sfere traccia un percorso lungo la parete dell’imbuto fino a un collasso centrale luminoso etichettato stato di caos, dove K tende a zero e delta E z diverge. I riquadri laterali riassumono quattro fasi: periferia, innesco, collasso, caos.

### `geometry.figcaption1`

> **EN** Plate 1. The geometry of equations (3) and (4), with the “line of life” drawn as the chronological trajectory across the base plane. The flared rim is the asymptotically flat region; the bright core is the puncture at \(r = 0\). The four side panels anticipate the stages we reach in §10.

> **IT** Tavola 1. La geometria delle equazioni (3) e (4), con la “linea della vita” tracciata come traiettoria cronologica sul piano di base. Il bordo svasato è la regione asintoticamente piatta; il nucleo luminoso è la puntura in \(r = 0\). I quattro riquadri laterali anticipano le fasi che raggiungiamo nel §10.

### `geometry.h21`

> **EN** A well built out of the law

> **IT** Una buca costruita a partire dalla legge

### `geometry.lbl1`

> **EN** State space & geometry

> **IT** Spazio degli stati & geometria

### `geometry.p1`

> **EN** To get dynamics we need somewhere for the system to live. Take the base state space of energetic variations to be the punctured plane \(M = \mathbb{R}^2 \setminus \{0\}\), with a point written \(q = (\Delta E_1, \Delta E_2)^{\mathsf T}\) — two independent channels along which the system's energy can vary. In polar coordinates:

> **IT** Per avere una dinamica serve un luogo in cui il sistema possa vivere. Prendiamo come spazio degli stati di base delle variazioni energetiche il piano bucato \(M = \mathbb{R}^2 \setminus \{0\}\), con un punto scritto \(q = (\Delta E_1, \Delta E_2)^{\mathsf T}\) — due canali indipendenti lungo i quali l’energia del sistema può variare. In coordinate polari:

### `geometry.p2`

> **EN** The origin is removed deliberately, and you should keep an eye on it: it is where the whole model will eventually go to die. Over this base we raise a vertical scalar field \(\Delta E_z\), the total combined energetic variation, defined so that it blows up at the centre:

> **IT** L’origine è rimossa deliberatamente, e conviene tenerla d’occhio: è lì che l’intero modello andrà a morire. Su questa base innalziamo un campo scalare verticale \(\Delta E_z\), la variazione energetica totale combinata, definito in modo che diverga al centro:

### `geometry.p3`

> **EN** The quarter-power is the interesting choice. It makes \(\Delta E_z\) decay slowly outward and diverge slowly inward — slowly enough that the surface has finite area over any annulus, steeply enough that it has no floor. This is the modified Torricelli trumpet of my first formulation: an infinite funnel. The constant \(3\) simply sets the scale; nothing below depends on it being three.

> **IT** La potenza un quarto è la scelta interessante. Fa decadere \(\Delta E_z\) lentamente verso l’esterno e divergere lentamente verso l’interno — abbastanza lentamente perché la superficie abbia area finita su ogni corona circolare, abbastanza ripidamente perché non abbia fondo. Questa è la tromba di Torricelli modificata della mia prima formulazione: un imbuto infinito. La costante \(3\) fissa soltanto la scala; nulla di quanto segue dipende dal fatto che sia tre.

### `geometry.p4`

> **EN** Embedding the surface as \((x,y,z) = (\Delta E_1, \Delta E_2, \Delta E_z)\) in Euclidean space and pulling back the flat metric gives the induced metric. With \(\mathrm{d}z/\mathrm{d}r = -\tfrac{3}{2}r^{-3/2}\):

> **IT** Immergendo la superficie come \((x,y,z) = (\Delta E_1, \Delta E_2, \Delta E_z)\) nello spazio euclideo e ritirando la metrica piatta si ottiene la metrica indotta. Con \(\mathrm{d}z/\mathrm{d}r = -\tfrac{3}{2}r^{-3/2}\):

### `geometry.p5`

> **EN** Notice the radial stretch factor. Far out, \(9/4r^3 \to 0\) and the surface is asymptotically flat — a plane. Close in, it diverges: radial distance on the surface runs away from radial distance in the base. The funnel's throat is infinitely deep as measured along the surface, even though it sits over a single missing point of the plane.

> **IT** Notate il fattore di dilatazione radiale. Molto lontano, \(9/4r^3 \to 0\) e la superficie è asintoticamente piatta — un piano. Vicino al centro diverge: la distanza radiale sulla superficie si allontana da quella nella base. La gola dell’imbuto è infinitamente profonda se misurata lungo la superficie, pur trovandosi sopra un singolo punto mancante del piano.

### `geometry.span1`

> **EN** Plate 1

> **IT** Tavola 1

### `geometry.span2`

> **EN** The conceptual model, as first drawn

> **IT** Il modello concettuale, nel primo disegno


## §03 - The two boundaries

### `boundaries.caption1`

> **EN** The two boundaries of the complexity field

> **IT** I due confini del campo di complessità

### `boundaries.h21`

> **EN** Two limits, and a warning about which \(\Delta E\) we mean

> **IT** Due limiti, e un avvertimento su quale \(\Delta E\) intendiamo

### `boundaries.lbl1`

> **EN** The field’s two boundaries

> **IT** I due confini del campo

### `boundaries.p1`

> **EN** Combining (1) and (3) gives the complexity field on the funnel. Here I must be pedantic, because my first pass was not: equation (1) is stated for a generic \(\Delta E\), but every subsequent calculation uses the vertical field \(\Delta E_z\). These are different objects. I will use \(\Delta E_z\) throughout and flag the substitution as an assumption, not a derivation:

> **IT** Combinando (1) e (3) si ottiene il campo di complessità sull’imbuto. Qui devo essere pedante, perché la mia prima stesura non lo era: l’equazione (1) è formulata per un \(\Delta E\) generico, ma ogni calcolo successivo usa il campo verticale \(\Delta E_z\). Sono oggetti diversi. Userò \(\Delta E_z\) in tutto il seguito e segnalerò la sostituzione come un’ipotesi, non come una derivazione:

### `boundaries.p2`

> **EN** So complexity grows as the square root of radius. The two boundaries follow immediately, and they are the load-bearing claims of the whole model:

> **IT** La complessità cresce dunque come la radice quadrata del raggio. I due confini seguono immediatamente, e sono le affermazioni portanti dell’intero modello:

### `boundaries.p3`

> **EN** The periphery is a zero-variance regime: spatially homogeneous (\(\nabla \Delta E_z \to 0\)), maximally ordered, and — this is the point — completely motionless. The origin is the opposite in every respect. The model's entire content is the passage between them.

> **IT** La periferia è un regime a varianza nulla: spazialmente omogeneo (\(\nabla \Delta E_z \to 0\)), ordinato al massimo e — questo è il punto — completamente immobile. L’origine è l’opposto sotto ogni aspetto. Tutto il contenuto del modello è il passaggio tra i due.

### `boundaries.td1`

> **EN** asymptotically flat

> **IT** asintoticamente piatta

### `boundaries.td2`

> **EN** infinitely deep throat

> **IT** gola infinitamente profonda

### `boundaries.td3`

> **EN** vanishes

> **IT** si annulla

### `boundaries.td4`

> **EN** diverges

> **IT** diverge

### `boundaries.td5`

> **EN** absolute order, absolute stillness, maximum information density

> **IT** ordine assoluto, quiete assoluta, massima densità di informazione

### `boundaries.td6`

> **EN** deterministic chaos, total structural collapse

> **IT** caos deterministico, collasso strutturale totale

### `boundaries.th1`

> **EN** Quantity

> **IT** Grandezza

### `boundaries.th10`

> **EN** Physical reading

> **IT** Lettura fisica

### `boundaries.th2`

> **EN** Periphery \(r \to \infty\)

> **IT** Periferia \(r \to \infty\)

### `boundaries.th3`

> **EN** Singularity \(r \to 0^{+}\)

> **IT** Singolarità \(r \to 0^{+}\)

### `boundaries.th4`

> **EN** Energetic variation \(\Delta E_z\)

> **IT** Variazione energetica \(\Delta E_z\)

### `boundaries.th5`

> **EN** Structural complexity \(K\)

> **IT** Complessità strutturale \(K\)

### `boundaries.th6`

> **EN** Surface geometry

> **IT** Geometria della superficie

### `boundaries.th7`

> **EN** Potential \(V = -\Delta E_z\)

> **IT** Potenziale \(V = -\Delta E_z\)

### `boundaries.th8`

> **EN** Perturbation growth \(\lambda\)

> **IT** Crescita delle perturbazioni \(\lambda\)

### `boundaries.th9`

> **EN** Entropy production \(\dot S_{\mathrm{tot}}\)

> **IT** Produzione di entropia \(\dot S_{\mathrm{tot}}\)


## §04 - Potential, work, Lagrangian

### `kinematics.alt1`

> **EN** Diagram of an energy landscape funnel with orange trajectories spiralling from a wide rim down to a bright central singularity. A large equation reads K equals K nought over V effective. Panels at right cover system definitions, conjugate pairs, kinematics of the transition with work-threshold and work-done plots, and a thermodynamic interpretation showing the Lyapunov exponent moving from zero or negative to strictly positive.

> **IT** Diagramma di un imbuto nel paesaggio energetico con traiettorie arancioni che spiraleggiano da un ampio bordo fino a una singolarità centrale luminosa. Una grande equazione recita K uguale K zero diviso V efficace. I riquadri a destra trattano le definizioni del sistema, le coppie coniugate, la cinematica della transizione con i grafici della soglia di lavoro e del lavoro compiuto, e un’interpretazione termodinamica in cui l’esponente di Lyapunov passa da zero o negativo a strettamente positivo.

### `kinematics.figcaption1`

> **EN** Plate 2. The same well, annotated with the work argument. The lower-left chain — complexity decreases, internal work is done, potential falls and kinetic energy rises, chaos follows — is the causal skeleton of equations (8)–(12). Note that this plate writes the law in the alternative form \(K = K_0/V_{\mathrm{eff}}\); that is the same reciprocal with the scale constant made explicit.

> **IT** Tavola 2. La stessa buca, annotata con l’argomento del lavoro. La catena in basso a sinistra — la complessità diminuisce, si compie lavoro interno, il potenziale scende e l’energia cinetica sale, segue il caos — è lo scheletro causale delle equazioni (8)–(12). Notate che questa tavola scrive la legge nella forma alternativa \(K = K_0/V_{\mathrm{eff}}\); è lo stesso reciproco con la costante di scala resa esplicita.

### `kinematics.h21`

> **EN** The system that moves without being pushed

> **IT** Il sistema che si muove senza essere spinto

### `kinematics.lbl1`

> **EN** Potential, work, Lagrangian

> **IT** Potenziale, lavoro, lagrangiana

### `kinematics.p1`

> **EN** Take the potential energy to be the vertical field itself, with a sign so that the funnel is attractive:

> **IT** Prendiamo come energia potenziale il campo verticale stesso, con un segno tale che l’imbuto sia attrattivo:

### `kinematics.p2`

> **EN** This is a well with no bottom — shallower than Newtonian gravity at short range, but unbounded below all the same. Now the claim that gives the proposal its character. At the periphery there is no gradient to fall down and no external agent to provide a push. What breaks the symmetry?

> **IT** Questa è una buca senza fondo — meno profonda della gravità newtoniana a corto raggio, ma comunque illimitata verso il basso. Ora l’affermazione che dà carattere alla proposta. Alla periferia non c’è gradiente da discendere né agente esterno che fornisca una spinta. Che cosa rompe la simmetria?

### `kinematics.p3`

> **EN** The answer offered is that the system spends its own structure. It has accumulated an unbounded reservoir of complexity, and it converts a portion of that reservoir into work. Order is not a passive state here — it is fuel. This is the part I still think is worth taking seriously, whatever happens to the arithmetic around it.

> **IT** La risposta proposta è che il sistema spende la propria struttura. Ha accumulato un serbatoio illimitato di complessità e ne converte una porzione in lavoro. Qui l’ordine non è uno stato passivo — è combustibile. Questa è la parte che credo ancora valga la pena prendere sul serio, qualunque cosa accada all’aritmetica che le sta intorno.

### `kinematics.p4`

> **EN** Written along a trajectory \(\gamma(t)\) running from \(r_0\) inward to \(r(t)\), the internal work is the complexity given up:

> **IT** Scritto lungo una traiettoria \(\gamma(t)\) che va da \(r_0\) verso l’interno fino a \(r(t)\), il lavoro interno è la complessità ceduta:

### `kinematics.p5`

> **EN** Since the motion is inward, \(r(t) 0\): the system does positive work by becoming simpler. For a unit-mass point particle on the surface, the Lagrangian in planar projection is

> **IT** Poiché il moto è verso l’interno, \(r(t) 0\): il sistema compie lavoro positivo semplificandosi. Per una particella puntiforme di massa unitaria sulla superficie, la lagrangiana in proiezione piana è

### `kinematics.p6`

> **EN** The angular coordinate is cyclic, so its conjugate momentum is conserved — the model inherits an angular momentum for free:

> **IT** La coordinata angolare è ciclica, dunque il suo momento coniugato si conserva — il modello eredita gratis un momento angolare:

### `kinematics.p7`

> **EN** Two terms in competition: a centrifugal barrier going as \(r^{-3}\) and an attraction going as \(r^{-3/2}\). For any nonzero \(\ell\) the barrier wins as \(r \to 0\) and the particle never reaches the centre — it orbits. The collapse the proposal describes therefore requires \(\ell = 0\): a purely radial fall. That is a real constraint, and worth naming, because the pictures all show a spiral.

> **IT** Due termini in competizione: una barriera centrifuga che va come \(r^{-3}\) e un’attrazione che va come \(r^{-3/2}\). Per ogni \(\ell\) non nullo la barriera vince quando \(r \to 0\) e la particella non raggiunge mai il centro — orbita. Il collasso descritto dalla proposta richiede quindi \(\ell = 0\): una caduta puramente radiale. È un vincolo reale, e vale la pena dirlo, perché le figure mostrano tutte una spirale.

### `kinematics.span1`

> **EN** The central move

> **IT** La mossa centrale

### `kinematics.span2`

> **EN** Plate 2

> **IT** Tavola 2

### `kinematics.span3`

> **EN** Kinematics and dynamics of the transition

> **IT** Cinematica e dinamica della transizione


## §05 - Finite-time collapse

### `collapse.h21`

> **EN** How long the fall takes

> **IT** Quanto dura la caduta

### `collapse.h31`

> **EN** Why the collapse counts as chaotic

> **IT** Perché il collasso conta come caotico

### `collapse.lbl1`

> **EN** Finite-time collapse

> **IT** Collasso in tempo finito

### `collapse.p1`

> **EN** Set \(\ell = 0\). The equation of motion reduces to

> **IT** Poniamo \(\ell = 0\). L’equazione del moto si riduce a

### `collapse.p2`

> **EN** Energy is conserved, so integrating once from rest at \(r_0\) gives the inward speed directly:

> **IT** L’energia si conserva, dunque integrando una volta a partire dalla quiete in \(r_0\) si ottiene direttamente la velocità verso l’interno:

### `collapse.p3`

> **EN** The speed diverges — but only as \(r^{-1/4}\), which is gentle enough that the time integral converges. Substituting \(r = r_0 u\) and evaluating the resulting Beta integral, \(\int_0^1 u^{1/4}(1-u^{1/2})^{-1/2}\,\mathrm{d}u = 2B(\tfrac{5}{2},\tfrac{1}{2}) = 3\pi/4\), gives a closed form:

> **IT** La velocità diverge — ma solo come \(r^{-1/4}\), abbastanza dolcemente perché l’integrale del tempo converga. Sostituendo \(r = r_0 u\) e valutando l’integrale Beta che ne risulta, \(\int_0^1 u^{1/4}(1-u^{1/2})^{-1/2}\,\mathrm{d}u = 2B(\tfrac{5}{2},\tfrac{1}{2}) = 3\pi/4\), si ottiene una forma chiusa:

### `collapse.p4`

> **EN** This is the model's sharpest and most attractive result. The collapse is not asymptotic — it completes. A system starting at any finite radius reaches total structural collapse in finite time, scaling as the five-quarters power of where it started. Nothing about the setup guaranteed that; a slightly steeper funnel would have taken forever.

> **IT** Questo è il risultato più netto e più attraente del modello. Il collasso non è asintotico — si compie. Un sistema che parte da qualunque raggio finito raggiunge il collasso strutturale totale in un tempo finito, che scala come la potenza cinque quarti del punto di partenza. Nulla nell’impostazione lo garantiva; un imbuto poco più ripido avrebbe richiesto un tempo infinito.

### `collapse.p5`

> **EN** Linearise about the trajectory. A small radial perturbation \(\delta r\) obeys \(\delta\ddot r = -V''(r)\,\delta r\), and since \(V(r) = -3r^{-1/2}\) we have \(V''(r) = -\tfrac{9}{4}r^{-5/2}\):

> **IT** Linearizziamo attorno alla traiettoria. Una piccola perturbazione radiale \(\delta r\) obbedisce a \(\delta\ddot r = -V''(r)\,\delta r\), e poiché \(V(r) = -3r^{-1/2}\) si ha \(V''(r) = -\tfrac{9}{4}r^{-5/2}\):

### `collapse.p6`

> **EN** The coefficient is positive, so perturbations grow rather than oscillate. The instantaneous growth rate is its square root:

> **IT** Il coefficiente è positivo, dunque le perturbazioni crescono invece di oscillare. Il tasso di crescita istantaneo è la sua radice quadrata:

### `collapse.p7`

> **EN** So neighbouring trajectories separate ever faster as the throat approaches, and the trajectory-averaged rate \(\lambda_{\max} = \lim_{t \to t_c} t^{-1}\!\int_0^t \lambda\,\mathrm{d}\tau\) is strictly positive. That establishes sensitive dependence on initial conditions. I want to be careful about how much that buys us, and I return to it in §13 — a diverging growth rate at a finite-time singularity is not the same thing as a strange attractor.

> **IT** Le traiettorie vicine si separano quindi sempre più rapidamente all’avvicinarsi della gola, e il tasso mediato sulla traiettoria \(\lambda_{\max} = \lim_{t \to t_c} t^{-1}\!\int_0^t \lambda\,\mathrm{d}\tau\) è strettamente positivo. Ciò stabilisce la dipendenza sensibile dalle condizioni iniziali. Voglio essere prudente su quanto questo ci compri, e ci torno nel §13 — un tasso di crescita divergente in una singolarità a tempo finito non è la stessa cosa di un attrattore strano.


## §06 - Out of equilibrium

### `thermo.aria1`

> **EN** Diagram of the phase transition. A left box labelled periphery holds maximum complexity, zero energy variation, static symmetry and zero growth rate. An arrow labelled internal work W equals minus delta K crosses to a right box labelled central collapse, holding zero complexity, diverging energy variation, deterministic chaos and a strictly positive growth rate. A note below records that the mechanics and the free energy disagree on the direction of travel.

> **IT** Diagramma della transizione di fase. Un riquadro a sinistra etichettato periferia contiene complessità massima, variazione energetica nulla, simmetria statica e tasso di crescita nullo. Una freccia etichettata lavoro interno W uguale meno delta K attraversa verso un riquadro a destra etichettato collasso centrale, che contiene complessità nulla, variazione energetica divergente, caos deterministico e un tasso di crescita strettamente positivo. Una nota in basso registra che la meccanica e l’energia libera sono in disaccordo sulla direzione del moto.

### `thermo.figcaption1`

> **EN** Plate B. The transition the model sets out to describe, with the contradiction recorded rather than hidden. The mechanical account and the thermodynamic account of the same passage currently disagree about which way the system goes.

> **IT** Tavola B. La transizione che il modello si propone di descrivere, con la contraddizione registrata anziché nascosta. Il resoconto meccanico e quello termodinamico dello stesso passaggio sono attualmente in disaccordo su quale direzione prenda il sistema.

### `thermo.h21`

> **EN** A free energy with nowhere to settle

> **IT** Un’energia libera che non ha dove posarsi

### `thermo.lbl1`

> **EN** Out of equilibrium

> **IT** Fuori equilibrio

### `thermo.p1`

> **EN** Now the thermodynamics. Treat \(K\) as the order parameter, take the internal energy to be the vertical field \(U(K) = \Delta E_z = 1/K\), and assign a configurational entropy \(S(K) = k_B \ln K\) — more structure, more accessible configurations. The non-equilibrium free energy is then

> **IT** Passiamo alla termodinamica. Trattiamo \(K\) come parametro d’ordine, prendiamo come energia interna il campo verticale \(U(K) = \Delta E_z = 1/K\) e assegniamo un’entropia configurazionale \(S(K) = k_B \ln K\) — più struttura, più configurazioni accessibili. L’energia libera di non equilibrio è allora

### `thermo.p2`

> **EN** Look for a stationary point:

> **IT** Cerchiamo un punto stazionario:

### `thermo.p3`

> **EN** Since \(K_{\mathrm{eq}} 0\), there is no stationary point anywhere in the physical domain \(K > 0\). The system has no equilibrium to sit in. Relaxing by gradient flow with mobility \(\Gamma > 0\):

> **IT** Poiché \(K_{\mathrm{eq}} 0\), non esiste alcun punto stazionario nel dominio fisico \(K > 0\). Il sistema non ha un equilibrio in cui posarsi. Rilassando per flusso di gradiente con mobilità \(\Gamma > 0\):

### `thermo.p4`

> **EN** And here is where I have to stop and be honest with you, because equation (21) does not say what the proposal wants it to say. Both terms are positive, so \(\dot K > 0\) everywhere: the gradient flow drives complexity up, toward the periphery, not down toward the throat. The free energy of (19) is monotonically decreasing in \(K\), which means it favours maximum order. The thermodynamics as written pushes the system in exactly the opposite direction from the mechanics of §5. That is not a rounding error; it is a structural problem, and it is the first item in §13.

> **IT** Ed è qui che devo fermarmi ed essere onesto con voi, perché l’equazione (21) non dice ciò che la proposta vorrebbe le facesse dire. Entrambi i termini sono positivi, dunque \(\dot K > 0\) ovunque: il flusso di gradiente spinge la complessità verso l’alto, verso la periferia, non verso il basso in direzione della gola. L’energia libera della (19) è monotonamente decrescente in \(K\), il che significa che favorisce il massimo ordine. La termodinamica, così come è scritta, spinge il sistema esattamente nella direzione opposta a quella della meccanica del §5. Non è un errore di arrotondamento: è un problema strutturale, ed è il primo punto del §13.

### `thermo.span1`

> **EN** Plate B

> **IT** Tavola B

### `thermo.span2`

> **EN** The transition, end to end

> **IT** La transizione, dall’inizio alla fine

### `thermo.svg1`

> **EN** PERIPHERY · r → ∞

> **IT** PERIFERIA · r → ∞

### `thermo.svg2`

> **EN** Maximum complexity

> **IT** Complessità massima

### `thermo.svg3`

> **EN** Static symmetry, at rest

> **IT** Simmetria statica, in quiete

### `thermo.svg4`

> **EN** order spent as work

> **IT** ordine speso come lavoro

### `thermo.svg5`

> **EN** COLLAPSE · r → 0

> **IT** COLLASSO · r → 0

### `thermo.svg6`

> **EN** Zero complexity

> **IT** Complessità nulla

### `thermo.svg7`

> **EN** Deterministic chaos

> **IT** Caos deterministico

### `thermo.svg8`

> **EN** Unresolved: the mechanics of eq. (13) travels left to right, but the gradient flow of eq. (21) travels right to left.

> **IT** Irrisolto: la meccanica dell’eq. (13) va da sinistra a destra, ma il flusso di gradiente dell’eq. (21) va da destra a sinistra.


## §07 - Heat & entropy

### `entropy.h21`

> **EN** What the fall dumps into the bath

> **IT** Che cosa la caduta riversa nel bagno termico

### `entropy.lbl1`

> **EN** Heat & entropy

> **IT** Calore & entropia

### `entropy.p1`

> **EN** Set the direction-of-travel problem aside and follow the mechanical collapse. In stochastic thermodynamics, the heat delivered to a bath at temperature \(T\) is the potential energy shed along the path:

> **IT** Mettiamo da parte il problema della direzione del moto e seguiamo il collasso meccanico. In termodinamica stocastica, il calore consegnato a un bagno a temperatura \(T\) è l’energia potenziale ceduta lungo il percorso:

### `entropy.p2`

> **EN** Because \(\dot r < 0\) on the collapse, (22) is positive: heat flows out. The system entropy follows from the Boltzmann–Shannon form over the complexity field, \(S_{\mathrm{sys}} = k_B \ln K = k_B(\tfrac12 \ln r - \ln 3)\):

> **IT** Poiché \(\dot r < 0\) durante il collasso, la (22) è positiva: il calore esce. L’entropia del sistema segue dalla forma di Boltzmann–Shannon sul campo di complessità, \(S_{\mathrm{sys}} = k_B \ln K = k_B(\tfrac12 \ln r - \ln 3)\):

### `entropy.p3`

> **EN** The system's own entropy falls as it collapses — it is losing structure, and \(S_{\mathrm{sys}}\) tracks \(\ln K\). The medium's rises. Summing and using \(|\dot r| = -\dot r\):

> **IT** L’entropia propria del sistema scende mentre collassa — sta perdendo struttura, e \(S_{\mathrm{sys}}\) segue \(\ln K\). Quella del mezzo sale. Sommando e usando \(|\dot r| = -\dot r\):

### `entropy.p4`

> **EN** The second law is satisfied, and near the throat the first term dominates comfortably — it goes as \(r^{-3/2}\) against the second's \(r^{-1}\). Substituting the asymptotic velocity (15):

> **IT** Il secondo principio è soddisfatto e, vicino alla gola, il primo termine domina largamente — va come \(r^{-3/2}\) contro \(r^{-1}\) del secondo. Sostituendo la velocità asintotica (15):

### `entropy.p5`

> **EN** Both diverge as \(r \to 0^{+}\), and both do so faster than the velocity itself. The collapse is irreversible in the strongest sense available: it produces unbounded entropy in bounded time. Integrating (26) against \(\mathrm{d}t = \mathrm{d}r/|\dot r|\) confirms the total dissipated heat diverges too, which tells us the model's bath must be idealised as infinite:

> **IT** Entrambe divergono per \(r \to 0^{+}\), e lo fanno più rapidamente della velocità stessa. Il collasso è irreversibile nel senso più forte disponibile: produce entropia illimitata in un tempo limitato. Integrando la (26) rispetto a \(\mathrm{d}t = \mathrm{d}r/|\dot r|\) si conferma che anche il calore dissipato totale diverge, il che ci dice che il bagno del modello va idealizzato come infinito:


## §08 - Mass equivalence

### `mass.h21`

> **EN** Substituting \(\Delta E = \Delta m c^{2}\)

> **IT** Sostituendo \(\Delta E = \Delta m c^{2}\)

### `mass.lbl1`

> **EN** Mass equivalence

> **IT** Equivalenza con la massa

### `mass.p1`

> **EN** A natural question: if energetic variation drives everything, and energy is mass, can the model be rewritten around mass variance? Substituting Einstein's relation into (1):

> **IT** Una domanda naturale: se la variazione energetica guida tutto, e l’energia è massa, si può riscrivere il modello attorno alla varianza di massa? Sostituendo la relazione di Einstein nella (1):

### `mass.p2`

> **EN** With partial mass variations \((\Delta m_1, \Delta m_2)\) and radial coordinate \(r_m\), the field surface becomes

> **IT** Con variazioni parziali di massa \((\Delta m_1, \Delta m_2)\) e coordinata radiale \(r_m\), la superficie del campo diventa

### `mass.p3`

> **EN** The factors of \(c^{2}\) cancel exactly — and that cancellation is the whole result. Every dynamical equation comes back in identical form; only the label on the horizontal axis has changed, from “energy variance” to “mass variance.” The substitution is a change of units, not new physics. It is worth doing precisely because it settles the question: nothing relativistic enters, and the appearance of \(c\) in intermediate lines is bookkeeping. (I carried a stray \(1/c^{2}\) through this expression first time round; it should cancel, as above.)

> **IT** I fattori \(c^{2}\) si cancellano esattamente — e quella cancellazione è tutto il risultato. Ogni equazione dinamica ritorna in forma identica; cambia soltanto l’etichetta sull’asse orizzontale, da “varianza di energia” a “varianza di massa”. La sostituzione è un cambio di unità, non nuova fisica. Vale la pena farla proprio perché chiude la questione: nulla di relativistico entra in gioco, e la comparsa di \(c\) nei passaggi intermedi è contabilità. (La prima volta mi sono portato dietro un \(1/c^{2}\) di troppo in questa espressione; deve cancellarsi, come sopra.)


## §09 - A sense of scale

### `scale.aria1`

> **EN** Dot plot of six molecular energies on a logarithmic axis from 1 to 2000 kilojoules per mole. Thermal motion at 2.5, hydrogen bond in water shown as a range from 20 to 23 and highlighted, latent heat of vaporisation at 40.65, covalent oxygen-hydrogen bond at 460, carbon first ionisation at 1086.5, and hydrogen first ionisation at 1312.

> **IT** Grafico a punti di sei energie molecolari su un asse logaritmico da 1 a 2000 kilojoule per mole. Moto termico a 2,5, legame a idrogeno nell’acqua mostrato come intervallo da 20 a 23 ed evidenziato, calore latente di vaporizzazione a 40,65, legame covalente ossigeno-idrogeno a 460, prima ionizzazione del carbonio a 1086,5 e prima ionizzazione dell’idrogeno a 1312.

### `scale.aria2`

> **EN** Three water molecules. Each has a red oxygen atom marked delta minus, joined by thick grey covalent bonds to two blue hydrogen atoms marked delta plus. Two dashed cyan lines run from hydrogens of the upper molecules to the oxygen of the lower one; these are labelled hydrogen bonds at 20 to 23 kilojoules per mole, against the covalent bonds at about 460.

> **IT** Tre molecole d’acqua. Ciascuna ha un atomo di ossigeno rosso contrassegnato delta meno, unito da spessi legami covalenti grigi a due atomi di idrogeno azzurri contrassegnati delta più. Due linee ciano tratteggiate vanno dagli idrogeni delle molecole superiori all’ossigeno di quella inferiore; sono etichettate come legami a idrogeno da 20 a 23 kilojoule per mole, contro i legami covalenti a circa 460.

### `scale.figcaption1`

> **EN** Plate C. Six energies spanning nearly three decades, placed by position on a logarithmic axis (marks are positioned, not sized, so the log scale stays honest). The hydrogen bond is highlighted because it is the interesting case: strong enough to hold structure together, weak enough that thermal noise dismantles it constantly. Any candidate for \(\Delta E\) in a chemical setting has to live in this band.

> **IT** Tavola C. Sei energie che coprono quasi tre decadi, collocate per posizione su un asse logaritmico (i segni sono posizionati, non dimensionati, così la scala logaritmica resta onesta). Il legame a idrogeno è evidenziato perché è il caso interessante: abbastanza forte da tenere insieme la struttura, abbastanza debole perché il rumore termico la smonti continuamente. Qualunque candidato per \(\Delta E\) in un contesto chimico deve stare in questa fascia.

### `scale.figcaption2`

> **EN** Plate 3. The hydrogen bond, for orientation. The grey links are covalent and cost about \(460\ \mathrm{kJ\,mol^{-1}}\); the dotted links are the hydrogen bonds at \(20\)–\(23\). Water's whole character — its heat capacity of \(4.184\ \mathrm{J\,g^{-1}\,{}^\circ C^{-1}}\), its latent heat, its liquidity at habitable temperatures — comes from that twenty-fold gap.

> **IT** Tavola 3. Il legame a idrogeno, per orientarsi. I collegamenti grigi sono covalenti e costano circa \(460\ \mathrm{kJ\,mol^{-1}}\); quelli tratteggiati sono i legami a idrogeno, a \(20\)–\(23\). Tutto il carattere dell’acqua — la sua capacità termica di \(4.184\ \mathrm{J\,g^{-1}\,{}^\circ C^{-1}}\), il suo calore latente, la sua liquidità alle temperature abitabili — viene da quel fattore venti.

### `scale.h21`

> **EN** Interlude: what \(\Delta E\) is worth in real units

> **IT** Intermezzo: quanto vale \(\Delta E\) in unità reali

### `scale.lbl1`

> **EN** A sense of scale

> **IT** Un senso della scala

### `scale.p1`

> **EN** We have been treating \(\Delta E\) as an abstract quantity with a convenient constant of 3. Before going further it is worth grounding it, because if this framework is ever to say anything about prebiotic chemistry — which is the ambition behind the proposal — then \(\Delta E\) has to be commensurate with the energies real molecules actually trade.

> **IT** Fin qui abbiamo trattato \(\Delta E\) come una grandezza astratta con una comoda costante pari a 3. Prima di procedere conviene ancorarla, perché se questo quadro deve mai dire qualcosa sulla chimica prebiotica — che è l’ambizione dietro la proposta — allora \(\Delta E\) deve essere commensurabile con le energie che le molecole reali scambiano davvero.

### `scale.p2`

> **EN** The relevant span is remarkable. Room-temperature thermal jostling is about \(2.5\ \mathrm{kJ\,mol^{-1}}\). A hydrogen bond between water molecules costs roughly \(20\)–\(23\ \mathrm{kJ\,mol^{-1}}\) to break, so hydrogen bonds sit only about eight times above the noise floor — which is exactly why they break and re-form on picosecond timescales and why liquid water behaves as it does. Stripping an electron off a hydrogen atom costs \(1312\ \mathrm{kJ\,mol^{-1}}\), five hundred times more.

> **IT** L’intervallo in gioco è notevole. L’agitazione termica a temperatura ambiente vale circa \(2.5\ \mathrm{kJ\,mol^{-1}}\). Rompere un legame a idrogeno fra molecole d’acqua costa in media \(20\)–\(23\ \mathrm{kJ\,mol^{-1}}\), dunque i legami a idrogeno stanno solo circa otto volte sopra la soglia di rumore — ed è esattamente per questo che si rompono e si riformano su scale di picosecondi, e perché l’acqua liquida si comporta come si comporta. Strappare un elettrone a un atomo di idrogeno costa \(1312\ \mathrm{kJ\,mol^{-1}}\), cinquecento volte tanto.

### `scale.p3`

> **EN** Values at 298 K unless noted; latent heat quoted at 100 °C.

> **IT** Valori a 298 K salvo diversa indicazione; calore latente riferito a 100 °C.

### `scale.p4`

> **EN** The hydrogen ionisation figure also drops out of the Bohr model, which is a useful sanity check on the units: with \(E_n = -13.6\,\mathrm{eV}/n^{2}\), the ground state sits at \(-13.6\ \mathrm{eV}\) and the energy to remove the electron to infinity is \(\Delta E = E_\infty - E_1 = 13.6\ \mathrm{eV}\). Carbon's \(11.26\ \mathrm{eV}\) is lower than nitrogen's \(14.53\) and higher than boron's \(8.30\), tracking effective nuclear charge across period 2.

> **IT** Il valore di ionizzazione dell’idrogeno si ricava anche dal modello di Bohr, utile verifica sulle unità: con \(E_n = -13.6\,\mathrm{eV}/n^{2}\), lo stato fondamentale sta a \(-13.6\ \mathrm{eV}\) e l’energia per portare l’elettrone all’infinito è \(\Delta E = E_\infty - E_1 = 13.6\ \mathrm{eV}\). Gli \(11.26\ \mathrm{eV}\) del carbonio sono inferiori ai \(14.53\) dell’azoto e superiori agli \(8.30\) del boro, seguendo la carica nucleare efficace lungo il secondo periodo.

### `scale.span1`

> **EN** Plate C

> **IT** Tavola C

### `scale.span2`

> **EN** Molecular energies, logarithmic

> **IT** Energie molecolari, scala logaritmica

### `scale.span3`

> **EN** Plate 3

> **IT** Tavola 3

### `scale.span4`

> **EN** The bond in question

> **IT** Il legame in questione

### `scale.summary1`

> **EN** Table view

> **IT** Vista in tabella

### `scale.svg1`

> **EN** Thermal motion · k₋T (298 K)

> **IT** Moto termico · k₋T (298 K)

### `scale.svg10`

> **EN** Covalent O-H bond: about 460 kJ/mol

> **IT** Legame covalente O-H: circa 460 kJ/mol

### `scale.svg11`

> **EN** Carbon first ionisation: 1086.5 kJ/mol

> **IT** Prima ionizzazione del carbonio: 1086,5 kJ/mol

### `scale.svg12`

> **EN** Hydrogen first ionisation: 1312 kJ/mol

> **IT** Prima ionizzazione dell’idrogeno: 1312 kJ/mol

### `scale.svg13`

> **EN** energy per mole · kJ mol⁻¹ · logarithmic

> **IT** energia per mole · kJ mol⁻¹ · logaritmica

### `scale.svg14`

> **EN** the noise floor

> **IT** la soglia di rumore

### `scale.svg15`

> **EN** ≈ 8× the noise floor

> **IT** ≈ 8× la soglia di rumore

### `scale.svg16`

> **EN** Covalent bond

> **IT** Legame covalente

### `scale.svg17`

> **EN** ≈ 460 kJ mol⁻¹

> **IT** ≈ 460 kJ mol⁻¹

### `scale.svg18`

> **EN** Hydrogen bond

> **IT** Legame a idrogeno

### `scale.svg19`

> **EN** 20–23 kJ mol⁻¹

> **IT** 20–23 kJ mol⁻¹

### `scale.svg2`

> **EN** Hydrogen bond in water

> **IT** Legame a idrogeno nell’acqua

### `scale.svg3`

> **EN** Vaporising water · latent heat

> **IT** Vaporizzazione dell’acqua · calore latente

### `scale.svg4`

> **EN** Covalent O–H bond

> **IT** Legame covalente O–H

### `scale.svg5`

> **EN** Carbon · first ionisation

> **IT** Carbonio · prima ionizzazione

### `scale.svg6`

> **EN** Hydrogen · first ionisation

> **IT** Idrogeno · prima ionizzazione

### `scale.svg7`

> **EN** Thermal motion: 2.5 kJ/mol

> **IT** Moto termico: 2,5 kJ/mol

### `scale.svg8`

> **EN** Hydrogen bond in water: 20 to 23 kJ/mol

> **IT** Legame a idrogeno nell’acqua: da 20 a 23 kJ/mol

### `scale.svg9`

> **EN** Latent heat of vaporisation: 40.65 kJ/mol

> **IT** Calore latente di vaporizzazione: 40,65 kJ/mol

### `scale.td1`

> **EN** breaks and re-forms on ~10⁻¹² s

> **IT** si rompe e si riforma su ~10⁻¹² s

### `scale.td2`

> **EN** ~20× a hydrogen bond

> **IT** ~20× un legame a idrogeno

### `scale.td3`

> **EN** from a 2p orbital, [He]2s²2p²

> **IT** da un orbitale 2p, [He]2s²2p²

### `scale.td4`

> **EN** 2.18×10⁻¹⁸ J per atom

> **IT** 2,18×10⁻¹⁸ J per atomo

### `scale.th1`

> **EN** Interaction

> **IT** Interazione

### `scale.th2`

> **EN** Note

> **IT** Nota

### `scale.th3`

> **EN** Thermal motion, \(k_B T\)

> **IT** Moto termico, \(k_B T\)

### `scale.th4`

> **EN** Hydrogen bond in water

> **IT** Legame a idrogeno nell’acqua

### `scale.th5`

> **EN** Latent heat of vaporisation

> **IT** Calore latente di vaporizzazione

### `scale.th6`

> **EN** Covalent O–H bond

> **IT** Legame covalente O–H

### `scale.th7`

> **EN** Carbon, first ionisation

> **IT** Carbonio, prima ionizzazione

### `scale.th8`

> **EN** Hydrogen, first ionisation

> **IT** Idrogeno, prima ionizzazione


## §10 - The closed cycle

### `cycle.aria1`

> **EN** Cycle diagram. Four stages run left to right: periphery, inception, collapse, singularity, joined by labelled arrows reading internal work, potential gradient, and finite time t c. A return path loops from the singularity back to the periphery, labelled dissipation and re-crystallisation and marked as asserted, not derived.

> **IT** Diagramma del ciclo. Quattro fasi scorrono da sinistra a destra: periferia, innesco, collasso, singolarità, unite da frecce etichettate lavoro interno, gradiente del potenziale e tempo finito t c. Un percorso di ritorno si richiude dalla singolarità alla periferia, etichettato dissipazione e ricristallizzazione e segnalato come affermato, non derivato.

### `cycle.figcaption1`

> **EN** Plate D. The cycle, with the four derived stages drawn solid and the return path drawn dashed. The dashing is doing real work here: it marks the one leg of the loop that the mathematics does not supply.

> **IT** Tavola D. Il ciclo, con le quattro fasi derivate tracciate continue e il percorso di ritorno tratteggiato. Il tratteggio qui svolge un lavoro reale: segna l’unico tratto dell’anello che la matematica non fornisce.

### `cycle.h21`

> **EN** Four stages and a return

> **IT** Quattro fasi e un ritorno

### `cycle.h41`

> **EN** The periphery · maximum order

> **IT** La periferia · ordine massimo

### `cycle.h42`

> **EN** Inception · internal work

> **IT** Innesco · lavoro interno

### `cycle.h43`

> **EN** Collapse · non-equilibrium acceleration

> **IT** Collasso · accelerazione fuori equilibrio

### `cycle.h44`

> **EN** Singularity · deterministic chaos

> **IT** Singolarità · caos deterministico

### `cycle.h45`

> **EN** Return · re-crystallisation

> **IT** Ritorno · ricristallizzazione

### `cycle.lbl1`

> **EN** The closed cycle

> **IT** Il ciclo chiuso

### `cycle.p1`

> **EN** Assembled in order, the model describes a cycle rather than a one-way trip. Here is the sequence, with the state of the system at each step.

> **IT** Messo in ordine, il modello descrive un ciclo anziché un viaggio di sola andata. Ecco la sequenza, con lo stato del sistema a ogni passo.

### `cycle.p2`

> **EN** The system sits at the flat outer boundary with zero energetic variation and unbounded complexity. Entropy production vanishes. It is symmetric, information-dense, and completely still.

> **IT** Il sistema siede sul confine esterno piatto, con variazione energetica nulla e complessità illimitata. La produzione di entropia si annulla. È simmetrico, denso di informazione e completamente immobile.

### `cycle.p3`

> **EN** With no external force available, the system converts stored complexity into work, \(W_{\mathrm{int}} = -\Delta K\). This is the symmetry-breaking step: it buys the first infinitesimal displacement and lowers the free energy enough to overcome static inertia.

> **IT** Senza alcuna forza esterna disponibile, il sistema converte la complessità immagazzinata in lavoro, \(W_{\mathrm{int}} = -\Delta K\). Questo è il passo di rottura della simmetria: acquista il primo spostamento infinitesimo e abbassa l’energia libera quanto basta per vincere l’inerzia statica.

### `cycle.p4`

> **EN** Captured by the gradient of \(V(r) = -3r^{-1/2}\), the system accelerates inward. Potential converts to kinetic variation, complexity falls, and entropy production turns strictly positive — the dynamics become irreversible.

> **IT** Catturato dal gradiente di \(V(r) = -3r^{-1/2}\), il sistema accelera verso l’interno. Il potenziale si converte in variazione cinetica, la complessità scende e la produzione di entropia diventa strettamente positiva — la dinamica si fa irreversibile.

### `cycle.p5`

> **EN** At \(r = 0\), reached after the finite time \(t_c\) of equation (16), complexity vanishes and energetic variation diverges. Neighbouring trajectories separate without bound. This is the terminus of the mechanical account.

> **IT** In \(r = 0\), raggiunto dopo il tempo finito \(t_c\) dell’equazione (16), la complessità si annulla e la variazione energetica diverge. Le traiettorie vicine si separano senza limite. Questo è il capolinea del resoconto meccanico.

### `cycle.p6`

> **EN** The proposed closure: having dissipated maximally, energy redistributes outward, the system recovers structure, and the peripheral condition is restored. This is the least secure stage of the model — it is asserted rather than derived, and §11 is the attempt to give it a geometry.

> **IT** La chiusura proposta: dopo aver dissipato al massimo, l’energia si redistribuisce verso l’esterno, il sistema recupera struttura e la condizione periferica è ristabilita. È la fase meno solida del modello — è affermata anziché derivata, e il §11 è il tentativo di darle una geometria.

### `cycle.span1`

> **EN** ∆K &lt; 0 · W &gt; 0 · first motion

> **IT** ∆K &lt; 0 · W &gt; 0 · primo moto

### `cycle.span2`

> **EN** Q dissipated · K → ∞ · cycle closes

> **IT** Q dissipato · K → ∞ · il ciclo si chiude

### `cycle.span3`

> **EN** Plate D

> **IT** Tavola D

### `cycle.span4`

> **EN** The cycle as a closed loop

> **IT** Il ciclo come anello chiuso

### `cycle.svg1`

> **EN** 01 PERIPHERY

> **IT** 01 PERIFERIA

### `cycle.svg10`

> **EN** asserted, not derived — the return path is the model’s weakest link

> **IT** affermato, non derivato — il percorso di ritorno è l’anello più debole del modello

### `cycle.svg11`

> **EN** Stages 01–04 follow from equations (5)–(18). Stage 05 requires new physics at the singularity; the dashed return marks that gap.

> **IT** Le fasi 01–04 seguono dalle equazioni (5)–(18). La fase 05 richiede nuova fisica nella singolarità; il ritorno tratteggiato segna quella lacuna.

### `cycle.svg2`

> **EN** Maximum order

> **IT** Ordine massimo

### `cycle.svg3`

> **EN** 02 INCEPTION

> **IT** 02 INNESCO

### `cycle.svg4`

> **EN** Order spent

> **IT** Ordine speso

### `cycle.svg5`

> **EN** 03 COLLAPSE

> **IT** 03 COLLASSO

### `cycle.svg6`

> **EN** Irreversible fall

> **IT** Caduta irreversibile

### `cycle.svg7`

> **EN** 04 SINGULARITY

> **IT** 04 SINGOLARITÀ

### `cycle.svg8`

> **EN** Chaos

> **IT** Caos

### `cycle.svg9`

> **EN** 05 · DISSIPATION & RE-CRYSTALLISATION

> **IT** 05 · DISSIPAZIONE & RICRISTALLIZZAZIONE


## §11 - The hourglass

### `hourglass.aria1`

> **EN** Cross-section of an hourglass-shaped field. An upper funnel with a wide dashed rim narrows to a bright central throat; below it a mirrored lower funnel widens back out to a second rim. A white spiral traces the collapse from the upper rim into the throat; a teal spiral traces the expansion out through the lower funnel. Labels mark the upper periphery with maximum complexity and zero energy variation, the internal work that breaks equilibrium, the singularity throat with zero complexity and diverging energy variation and a positive growth rate, and the lower boundary where complexity regenerates.

> **IT** Sezione di un campo a forma di clessidra. Un imbuto superiore con ampio bordo tratteggiato si restringe verso una gola centrale luminosa; sotto, un imbuto inferiore speculare si riallarga fino a un secondo bordo. Una spirale bianca traccia il collasso dal bordo superiore nella gola; una spirale verde acqua traccia l’espansione attraverso l’imbuto inferiore. Le etichette segnano la periferia superiore con complessità massima e variazione energetica nulla, il lavoro interno che rompe l’equilibrio, la gola della singolarità con complessità nulla, variazione energetica divergente e tasso di crescita positivo, e il confine inferiore dove la complessità si rigenera.

### `hourglass.eq32`

> **EN** $$ \Delta E_z(r) \;=\; \begin{cases} \; +3\,r^{-1/2}, & z > 0 \quad \text{(upper: contracting, collapse regime)}\\[4pt] \; -3\,r^{-1/2}, & z < 0 \quad \text{(lower: expanding, emergence regime)} \end{cases} $$

> **IT** $$ \Delta E_z(r) \;=\; \begin{cases} \; +3\,r^{-1/2}, & z > 0 \quad \text{(superiore: contrazione, regime di collasso)}\\[4pt] \; -3\,r^{-1/2}, & z < 0 \quad \text{(inferiore: espansione, regime di emergenza)} \end{cases} $$

### `hourglass.figcaption1`

> **EN** Plate E. The hourglass of equations (32)–(35), drawn to the actual profile \(z = 3r^{-1/2}\) rather than sketched, with the trajectories projected onto the surface so the spiral rides the far wall where it should. Both rims are dashed because both are at infinity: the drawing truncates them at \(r = 4\), and the throat at \(r = 0.09\).

> **IT** Tavola E. La clessidra delle equazioni (32)–(35), disegnata sul profilo reale \(z = 3r^{-1/2}\) anziché abbozzata, con le traiettorie proiettate sulla superficie così che la spirale corra sulla parete lontana dove deve. Entrambi i bordi sono tratteggiati perché entrambi sono all’infinito: il disegno li tronca a \(r = 4\), e la gola a \(r = 0.09\).

### `hourglass.h21`

> **EN** Giving the return path a geometry

> **IT** Dare una geometria al percorso di ritorno

### `hourglass.lbl1`

> **EN** The hourglass

> **IT** La clessidra

### `hourglass.p1`

> **EN** If the cycle is to close, the funnel cannot simply end. The proposed fix is to reflect it: past the throat the manifold widens again into a second, inverted funnel, making the whole field an hourglass — two sheets joined at a bottleneck. Formally, \(\Delta E_z\) becomes piecewise:

> **IT** Se il ciclo deve chiudersi, l’imbuto non può semplicemente finire. La correzione proposta è rifletterlo: oltre la gola la varietà si allarga di nuovo in un secondo imbuto invertito, rendendo l’intero campo una clessidra — due falde unite da una strozzatura. Formalmente, \(\Delta E_z\) diventa definito a tratti:

### `hourglass.p2`

> **EN** Complexity is defined by the magnitude, so it is single-valued across the whole vertical domain and recovers on the way out just as it was lost on the way in:

> **IT** La complessità è definita dal modulo, dunque è univoca su tutto il dominio verticale e si recupera in uscita esattamente come si era perduta in entrata:

### `hourglass.p3`

> **EN** The dynamics need one more ingredient. A deterministic trajectory arriving at \(r = 0\) has no way to choose the outgoing branch — the equations are exhausted at the throat. So a stochastic term \(\eta(t)\) is introduced to carry the system across the bottleneck:

> **IT** Alla dinamica serve un ingrediente in più. Una traiettoria deterministica che arriva in \(r = 0\) non ha modo di scegliere il ramo uscente — le equazioni sono esaurite nella gola. Si introduce quindi un termine stocastico \(\eta(t)\) per traghettare il sistema oltre la strozzatura:

### `hourglass.p4`

> **EN** The \(\operatorname{sgn}(z)\) reverses the force below the throat, so the lower sheet expels rather than attracts, and the system runs back out to \(r \to \infty\) where \(K \to \infty\) again. Energetic fluctuations decay into the environment as heat \(Q(t)\); structure re-assembles; the outer boundary condition is restored. The loop closes.

> **IT** Il fattore \(\operatorname{sgn}(z)\) inverte la forza sotto la gola, così la falda inferiore respinge invece di attrarre, e il sistema torna verso \(r \to \infty\), dove \(K \to \infty\) di nuovo. Le fluttuazioni energetiche decadono nell’ambiente come calore \(Q(t)\); la struttura si riassembla; la condizione di confine esterna è ristabilita. L’anello si chiude.

### `hourglass.p5`

> **EN** I should be plain that \(\eta(t)\) is where the difficulty has been relocated rather than removed. It is doing indispensable work — without it nothing crosses — and the model does not say what it is. That is the second item in §13.

> **IT** Devo dire chiaramente che \(\eta(t)\) è il punto in cui la difficoltà è stata spostata, non rimossa. Svolge un lavoro indispensabile — senza di esso nulla attraversa — e il modello non dice che cosa sia. È il secondo punto del §13.

### `hourglass.span1`

> **EN** Plate E

> **IT** Tavola E

### `hourglass.span2`

> **EN** The hourglass field, cross-section

> **IT** Il campo a clessidra, sezione

### `hourglass.svg1`

> **EN** UPPER PERIPHERY

> **IT** PERIFERIA SUPERIORE

### `hourglass.svg10`

> **EN** Self-assembly, K → ∞

> **IT** Auto-assemblaggio, K → ∞

### `hourglass.svg11`

> **EN** Heat Q shed outward

> **IT** Calore Q ceduto verso l’esterno

### `hourglass.svg12`

> **EN** Inward collapse

> **IT** Collasso verso l’interno

### `hourglass.svg13`

> **EN** Maximum dissipation

> **IT** Dissipazione massima

### `hourglass.svg14`

> **EN** Outward re-crystallisation

> **IT** Ricristallizzazione verso l’esterno

### `hourglass.svg2`

> **EN** Max complexity K → ∞

> **IT** Complessità max K → ∞

### `hourglass.svg3`

> **EN** Variation ∆Eₒ → 0

> **IT** Variazione ∆Eₒ → 0

### `hourglass.svg4`

> **EN** INTERNAL WORK

> **IT** LAVORO INTERNO

### `hourglass.svg5`

> **EN** W = −∆K breaks

> **IT** W = −∆K rompe

### `hourglass.svg6`

> **EN** static equilibrium

> **IT** l’equilibrio statico

### `hourglass.svg7`

> **EN** SINGULARITY THROAT

> **IT** GOLA DELLA SINGOLARITÀ

### `hourglass.svg8`

> **EN** crossed only by η(t)

> **IT** attraversata solo da η(t)

### `hourglass.svg9`

> **EN** LOWER BOUNDARY

> **IT** CONFINE INFERIORE


## §12 - The model, running

### `model-section.button1`

> **EN** Reset view

> **IT** Reimposta vista

### `model-section.h21`

> **EN** Watch it fall

> **IT** Guardatelo cadere

### `model-section.lbl1`

> **EN** The model, running

> **IT** Il modello in funzione

### `model-section.p1`

> **EN** Static plates only get you so far with a system whose whole content is a passage. Below, the hourglass is rendered live: the state point traverses the upper funnel, accelerates into the throat, crosses, and expands out through the lower sheet. Drag to orbit, scroll to zoom. The readouts are computed from the equations above, not scripted.

> **IT** Le tavole statiche portano solo fino a un certo punto, con un sistema il cui contenuto è tutto un passaggio. Qui sotto la clessidra è resa dal vivo: il punto di stato attraversa l’imbuto superiore, accelera nella gola, la valica e si espande attraverso la falda inferiore. Trascinate per ruotare, rotella per lo zoom. Le letture sono calcolate dalle equazioni qui sopra, non recitate a copione.

### `model-section.p2`

> **EN** Drag to orbitScroll to zoom

> **IT** Trascina per ruotareRotella per lo zoom

### `model-section.p3`

> **EN** 3D view unavailable in this browser — see Plate E above for the static cross-section.

> **IT** Vista 3D non disponibile in questo browser — vedere la Tavola E sopra per la sezione statica.

### `model-section.p4`

> **EN** Two honest caveats about what you are looking at. The throat is regularised at \(r_{\min} = 0.3\): a true \(r \to 0\) funnel cannot be meshed, so \(\Delta E_z\) and \(\lambda\) stay finite on screen where the model says they diverge. And the traversal is driven at constant cycle rate rather than integrated from equation (14) — the shape of the path is faithful, the timing is not. The real fall spends almost all of \(t_c\) in the outer region and crosses the last decade of radius almost instantly.

> **IT** Due avvertenze oneste su ciò che state guardando. La gola è regolarizzata a \(r_{\min} = 0.3\): un imbuto con \(r \to 0\) autentico non è mappabile in mesh, dunque \(\Delta E_z\) e \(\lambda\) restano finiti sullo schermo dove il modello li vuole divergenti. E la traversata è guidata a velocità di ciclo costante anziché integrata dall’equazione (14) — la forma del percorso è fedele, il ritmo no. La caduta reale passa quasi tutto \(t_c\) nella regione esterna e attraversa l’ultima decade di raggio quasi istantaneamente.

### `model-section.span1`

> **EN** Phase domain

> **IT** Dominio di fase

### `model-section.span2`

> **EN** Radius r

> **IT** Raggio r

### `model-section.span3`

> **EN** Variation ∆Eₒ

> **IT** Variazione ∆Eₒ

### `model-section.span4`

> **EN** Complexity K

> **IT** Complessità K

### `model-section.span5`

> **EN** Growth rate λ

> **IT** Tasso di crescita λ


## §13 - Open questions

### `open.h21`

> **EN** Where the model needs work

> **IT** Dove il modello ha bisogno di lavoro

### `open.h41`

> **EN** 1 · The free energy runs the wrong way

> **IT** 1 · L’energia libera va nella direzione sbagliata

### `open.h42`

> **EN** 2 · The return path is asserted

> **IT** 2 · Il percorso di ritorno è affermato, non dimostrato

### `open.h43`

> **EN** 3 · \(K = 1/\Delta E\) and \(K = 1/\Delta E_z\) are different laws

> **IT** 3 · \(K = 1/\Delta E\) e \(K = 1/\Delta E_z\) sono leggi diverse

### `open.h44`

> **EN** 4 · The Lyapunov coefficient was wrong

> **IT** 4 · Il coefficiente di Lyapunov era sbagliato

### `open.h45`

> **EN** 5 · The collapse time was off by a factor of three

> **IT** 5 · Il tempo di collasso era sbagliato di un fattore tre

### `open.h46`

> **EN** 6 · Divergence is not the same as chaos

> **IT** 6 · Divergenza non è sinonimo di caos

### `open.lbl1`

> **EN** Open questions

> **IT** Questioni aperte

### `open.p1`

> **EN** This is the part I would ask you to remember. The model has a core I still believe is worth something — complexity as fuel, and a well that empties in finite time — surrounded by six problems of quite different severity. Four of these I can repair. Two I cannot, at least not without new physics, and I would rather say so plainly than leave them for someone else to find.

> **IT** Questa è la parte che vi chiederei di ricordare. Il modello ha un nucleo che credo ancora valga qualcosa — la complessità come combustibile e una buca che si svuota in un tempo finito — circondato da sei problemi di gravità molto diversa. Quattro li so riparare. Due no, almeno non senza nuova fisica, e preferisco dirlo chiaramente piuttosto che lasciarli trovare a qualcun altro.

### `open.p10`

> **EN** Status Corrected in place. Conclusion unchanged.

> **IT** Stato Corretto sul posto. Conclusione invariata.

### `open.p11`

> **EN** I first reported \(t_c = \tfrac{4}{5\sqrt6} r_0^{5/4} \approx 0.327\,r_0^{5/4}\). That is what you get by using the near-throat asymptote \(\dot r \approx -\sqrt6\,r^{-1/4}\) over the whole path, but that approximation fails badly near \(r_0\), where the true speed is zero. Evaluating the integral exactly gives \(t_c = \tfrac{3\pi}{4\sqrt6} r_0^{5/4} \approx 0.962\,r_0^{5/4}\) — close to three times longer.

> **IT** All’inizio avevo riportato \(t_c = \tfrac{4}{5\sqrt6} r_0^{5/4} \approx 0.327\,r_0^{5/4}\). È quello che si ottiene usando l’asintoto vicino alla gola \(\dot r \approx -\sqrt6\,r^{-1/4}\) su tutto il percorso, ma quell’approssimazione cade rovinosamente vicino a \(r_0\), dove la velocità vera è nulla. Valutando l’integrale in modo esatto si ottiene \(t_c = \tfrac{3\pi}{4\sqrt6} r_0^{5/4} \approx 0.962\,r_0^{5/4}\) — quasi tre volte più lungo.

### `open.p12`

> **EN** Status Corrected in eq. (16). Finiteness, the load-bearing claim, holds either way.

> **IT** Stato Corretto nell’eq. (16). La finitezza, che è l’affermazione portante, vale in entrambi i casi.

### `open.p13`

> **EN** A positive, diverging \(\lambda\) at a finite-time singularity shows that nearby trajectories separate. It does not establish deterministic chaos in the technical sense: there is no bounded invariant set here, no recurrence, no mixing, no strange attractor — the trajectory simply leaves the manifold in finite time and stops existing. Purely radial collapse with \(\ell = 0\) is, in fact, perfectly integrable. Genuine chaos would need the \(\ell \neq 0\) case of equation (12) together with the stochastic throat crossing, and that system has not been analysed.

> **IT** Un \(\lambda\) positivo e divergente in una singolarità a tempo finito mostra che le traiettorie vicine si separano. Non stabilisce il caos deterministico in senso tecnico: qui non c’è alcun insieme invariante limitato, nessuna ricorrenza, nessun mescolamento, nessun attrattore strano — la traiettoria lascia semplicemente la varietà in un tempo finito e cessa di esistere. Il collasso puramente radiale con \(\ell = 0\) è, di fatto, perfettamente integrabile. Il caos autentico richiederebbe il caso \(\ell \neq 0\) dell’equazione (12) insieme all’attraversamento stocastico della gola, e quel sistema non è stato analizzato.

### `open.p14`

> **EN** Status Overstated in my first pass. The weaker claim — sensitive dependence — is sound.

> **IT** Stato Sopravvalutato nella mia prima stesura. L’affermazione più debole — la dipendenza sensibile — regge.

### `open.p15`

> **EN** On the standing of this work. These notes set out an unrefereed proposal of my own. Nothing in them has been peer reviewed, and the framework should not be cited as established physics. Equations (1)–(35) are internally consistent as presented here except where items 1 and 2 above say otherwise.

> **IT** Sullo stato di questo lavoro. Questi appunti espongono una proposta mia, non sottoposta a revisione. Nulla di quanto contengono è stato valutato da pari, e il quadro non va citato come fisica consolidata. Le equazioni (1)–(35) sono internamente coerenti come qui presentate tranne dove i punti 1 e 2 sopra dicono il contrario.

### `open.p2`

> **EN** This is the serious one. In equation (19), \(U = 1/K\) decreases in \(K\) and \(S = k_B \ln K\) increases in \(K\), so \(F = U - TS\) is monotonically decreasing: the free energy is minimised at \(K \to \infty\). The correct conclusion from \(K_{\mathrm{eq}} = -1/k_B T outward, toward maximum order, not inward toward the collapse. The mechanics and the thermodynamics contradict each other.

> **IT** Questo è quello grave. Nell’equazione (19), \(U = 1/K\) decresce in \(K\) e \(S = k_B \ln K\) cresce in \(K\), dunque \(F = U - TS\) è monotonamente decrescente: l’energia libera è minima per \(K \to \infty\). La conclusione corretta da \(K_{\mathrm{eq}} = -1/k_B T verso l’esterno, verso il massimo ordine, non verso l’interno in direzione del collasso. Meccanica e termodinamica si contraddicono.

### `open.p3`

> **EN** I papered over this in the first write-up by putting \(\dot K > 0\) in one place and \(\dot K < 0\) in another with the same right-hand side. That is not a typo one can fix; the sign is determined. Either \(S(K)\) is the wrong entropy functional, or \(K\) is not the right order parameter, or the collapse is not free-energy driven at all and must be sustained by an external flux the model does not include.

> **IT** Nella prima stesura ho aggirato la cosa scrivendo \(\dot K > 0\) in un punto e \(\dot K < 0\) in un altro con lo stesso membro di destra. Non è un errore di battitura rimediabile: il segno è determinato. O \(S(K)\) è il funzionale di entropia sbagliato, o \(K\) non è il parametro d’ordine giusto, oppure il collasso non è guidato dall’energia libera e deve essere sostenuto da un flusso esterno che il modello non include.

### `open.p4`

> **EN** Status Unresolved. Blocks the “spontaneous phase transition” reading.

> **IT** Stato Irrisolto. Blocca la lettura come “transizione di fase spontanea”.

### `open.p5`

> **EN** The cycle closes only because \(\eta(t)\) in equation (34) carries the system through the throat. But at \(r = 0\) the velocity, the potential, the entropy production and the growth rate have all diverged; \(\eta(t)\) is being asked to act at precisely the point where the description has broken down. Calling it “quantum or stochastic fluctuation” names the gap without filling it.

> **IT** Il ciclo si chiude solo perché \(\eta(t)\) nell’equazione (34) traghetta il sistema attraverso la gola. Ma in \(r = 0\) la velocità, il potenziale, la produzione di entropia e il tasso di crescita sono tutti divergenti; a \(\eta(t)\) si chiede di agire esattamente nel punto in cui la descrizione ha ceduto. Chiamarlo “fluttuazione quantistica o stocastica” dà un nome alla lacuna senza colmarla.

### `open.p6`

> **EN** Status Unresolved. Requires a regularisation of the singularity.

> **IT** Stato Irrisolto. Richiede una regolarizzazione della singolarità.

### `open.p7`

> **EN** Equation (1) is stated for a generic energetic variation; every calculation afterward uses the constructed vertical field \(\Delta E_z = 3r^{-1/2}\). The substitution is never justified, and it matters: the base-plane variations \(\Delta E_1, \Delta E_2\) go to zero at the periphery while \(r \to \infty\), so “\(\Delta E \to 0\) implies \(K \to \infty\)” and “\(r \to \infty\) implies \(K \to \infty\)” are being used interchangeably when only the second follows from (5).

> **IT** L’equazione (1) è formulata per una variazione energetica generica; ogni calcolo successivo usa il campo verticale costruito \(\Delta E_z = 3r^{-1/2}\). La sostituzione non è mai giustificata, e conta: le variazioni sul piano di base \(\Delta E_1, \Delta E_2\) tendono a zero alla periferia mentre \(r \to \infty\), dunque “\(\Delta E \to 0\) implica \(K \to \infty\)” e “\(r \to \infty\) implica \(K \to \infty\)” vengono usate in modo interscambiabile quando solo la seconda segue dalla (5).

### `open.p8`

> **EN** Status Repairable by stating (5) as a definition, which is what I have done.

> **IT** Stato Riparabile enunciando la (5) come definizione, che è ciò che ho fatto.

### `open.p9`

> **EN** My first pass gave \(\delta\ddot r = \tfrac34 r^{-5/2}\delta r\) and hence \(\lambda = (\sqrt{3}/2)\,r^{-5/4}\). But \(V = -3r^{-1/2}\) gives \(V' = \tfrac32 r^{-3/2}\) and \(V'' = -\tfrac94 r^{-5/2}\), so the coefficient is \(9/4\) and \(\lambda = \tfrac32 r^{-5/4}\), as in equation (18). The scaling exponent — the part that carries the physics — is unaffected.

> **IT** La mia prima stesura dava \(\delta\ddot r = \tfrac34 r^{-5/2}\delta r\) e quindi \(\lambda = (\sqrt{3}/2)\,r^{-5/4}\). Ma \(V = -3r^{-1/2}\) dà \(V' = \tfrac32 r^{-3/2}\) e \(V'' = -\tfrac94 r^{-5/2}\), dunque il coefficiente è \(9/4\) e \(\lambda = \tfrac32 r^{-5/4}\), come nell’equazione (18). L’esponente di scala — la parte che porta la fisica — non ne è toccato.


## §14 - References

### `refs.h21`

> **EN** Where to read further

> **IT** Dove approfondire

### `refs.lbl1`

> **EN** References

> **IT** Riferimenti


## Colophon

### `colo.p1`

> **EN** I proposed the reciprocal law \(K = 1/\Delta E\), its mapping onto a modified Torricelli trumpet, and the argument that a system at rest breaks its own symmetry by spending stored structure as work.

> **IT** Ho proposto la legge reciproca \(K = 1/\Delta E\), la sua rappresentazione su una tromba di Torricelli modificata e l’argomento secondo cui un sistema in quiete rompe la propria simmetria spendendo come lavoro la struttura immagazzinata.

### `colo.p2`

> **EN** These notes set the model out at full strength and carry the mathematics through to the finite-time collapse. Where my derivations do not hold I have said so and shown the working — all six points are listed by name in §13.

> **IT** Questi appunti espongono il modello in tutta la sua forza e portano la matematica fino al collasso in tempo finito. Dove le mie derivazioni non tengono l’ho detto e ho mostrato il procedimento — tutti e sei i punti sono elencati per nome nel §13.

### `colo.p3`

> **EN** The Complexity Collapse · lecture notes on the proposed law \(K = 1/\Delta E\) Plates 1–3 accompanied the original formulation; Plates A–E were drawn for these notes from the equations as corrected. Mathematics set with MathJax. Live model rendered with three.js.

> **IT** Il collasso della complessità · appunti di lezione sulla legge proposta \(K = 1/\Delta E\) Le Tavole 1–3 accompagnavano la formulazione originale; le Tavole A–E sono state disegnate per questi appunti a partire dalle equazioni corrette. Matematica composta con MathJax. Modello dal vivo reso con three.js.

