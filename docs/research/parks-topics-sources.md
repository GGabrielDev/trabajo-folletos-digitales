# Parks topics — source record

Every figure and recommendation rendered by `src/data/parkTopics.ts` traces to an
entry below. This file exists so a reviewer can check a claim without re-running the
research, and so nothing on the parks pages rests on inference.

Researched 2026-09-21. Spanish quotations are reproduced verbatim from the source;
the surrounding prose is English per the language policy in `CLAUDE.md`.

## Ground rules applied

- Preferred order: Venezuelan state bodies, then Venezuelan academia, then
  international agencies (PAHO/WHO, NOAA/NWS, USGS, CDC/NIOSH).
- Where a primary document could not be retrieved, the record says so and names the
  outlet that carries the attribution, rather than presenting the figure as direct.
- Figures are rendered in the units the source publishes, with metric conversions
  added only where the source is imperial and the audience is metric.

### Retrieval note

FUNVISIS publishes two relevant PDFs — `funvisis_mejores_practicas.pdf` and
`MANUAL_DE_AUTOPROTECCION_DE_FUNVISIS.pdf` — and both were unreachable during this
research (the proxy refused the connection to `funvisis.gob.ve`). The seismic figures
below are therefore attributed through outlets that name FUNVISIS and the year, and the
operational earthquake guidance is taken from MPPRIJP, which is itself a Venezuelan
state source. Worth revisiting if the FUNVISIS host becomes reachable.

---

## 1. Sismos en Parques (`sismos-en-parques`)

| Claim as published | Source | Retrieved |
| --- | --- | --- |
| "el 80 % de la población del país vive en zonas de alta amenaza por terremotos" — attributed to FUNVISIS, 2018 | [France 24](https://www.france24.com/es/am%C3%A9rica-latina/20260625-venezuela-un-pa%C3%ADs-con-historia-s%C3%ADsmica-donde-el-80-de-la-poblaci%C3%B3n-vive-en-zonas-de-riesgo) | direct |
| "2 centímetros anuales" — eastward movement of the Caribbean plate relative to the South American plate | France 24, same article | direct |
| Boconó (~500 km), San Sebastián, El Pilar (~700 km) named as the three principal faults of the plate boundary | France 24, same article | direct |
| "Si está en la calle, aléjese de edificios, postes de luz y cables eléctricos. Diríjase a un área despejada." | [MPPRIJP](https://www.mpprijp.gob.ve/prensa/reporte/conozca-la-guia-de-tres-fases-sobre-que-hacer-antes-durante-y-despues-de-un-sismo) | direct |
| "get into the OPEN, away from buildings, power lines, chimneys, and anything else that might fall on you" | [USGS](https://www.usgs.gov/faqs/what-should-i-do-during-earthquake) | direct |

The "stay outside if you are outside" instruction and the vehicle guidance both come
from the MPPRIJP three-phase guide. The page does not claim a national count of
earthquakes, because no retrievable primary source gave one.

## 2. Incendios de Vegetación (`incendios-de-vegetacion`)

| Claim as published | Source | Retrieved |
| --- | --- | --- |
| Over 76% of the country's vegetation fires fall between January and April — attributed to INAMEH | [Mongabay Latam](https://es.mongabay.com/2023/04/incendios-forestales-afectan-parques-nacionales-venezuela/) | via search result |
| "la inmensa mayoría de los incendios forestales que se suscitan en el territorio venezolano son de origen antropogénico" | [ACFIMAN via Noticiencias UCV](https://noticiencias.ucv.ve/nota_incendios_forestales_mitos_y_realidades/), 2024-04-24 | direct |
| Lightning ignition considered "inviables" as a general cause in Venezuela | ACFIMAN, same article | direct |
| Savanna grasses are fast-growing and highly flammable; Gran Sabana soils are shallow and nutrient-poor with "muy baja" recovery capacity | ACFIMAN, same article | direct |
| Prohibition on bringing "cigarrillos, fósforos, yesqueros, velas y sustancias acelerantes" into parks | INPARQUES visitor rules | via search result |

The ACFIMAN piece is the strongest claim here because it is Venezuelan, academic and
explicitly corrects the "fires are natural" myth. The US NIFC figure (88% human-caused,
10-year average as of 2023) was found and deliberately **not** used on the page: it
describes a different country and would have implied a Venezuelan statistic that no
source supports.

## 3. Tormentas Eléctricas (`tormentas-electricas`)

| Claim as published | Source | Retrieved |
| --- | --- | --- |
| "When Thunder Roars, Go Indoors." | [NWS](https://www.weather.gov/safety/lightning) | direct |
| "There is no safe place outside when thunderstorms are in the area." | NWS, same page | direct |
| "Wait 30 minutes after the last rumble of thunder before resuming play" | [NWS outdoor guidance](https://www.weather.gov/safety/lightning-outdoors) | direct |
| "Avoid open fields, the top of a hill or a ridge top"; "Stay away from tall, isolated trees or other tall objects" | NWS outdoor guidance | direct |
| Spreading a group out so current cannot travel between members | NWS outdoor guidance | direct |
| "an average of 233 flashes per square kilometer every year, according to NASA"; storms "about 300 nights per year, peaking in September" | [NASA via Phys.org](https://phys.org/news/2021-09-lake-maracaibo-lightning-capital-world.html) | direct |

NASA's own Earthdata feature on the Maracaibo Beacon returned HTTP 403, so the NASA
figures are carried through Phys.org, which attributes them explicitly.

The claim that a lightning victim carries no charge and can be treated immediately is
standard first-aid doctrine; it is stated on the page as an instruction rather than as
a cited statistic.

## 4. Golpe de Calor (`golpe-de-calor`)

| Claim as published | Source | Retrieved |
| --- | --- | --- |
| "bebiendo sorbos continuos de agua, al menos dos litros al día para una persona adulta" | [PAHO/WHO](https://www.paho.org/es/noticias/22-5-2024-tercera-ola-calor-como-prevenir-sus-efectos-salud), 2024-05-22 | direct |
| "usa ropa ligera y de colores claros" | PAHO, same article | direct |
| Heat-stroke warning signs include body temperature above 39 °C, plus "estupor, confusión o coma" | PAHO, same article | direct |
| Newborns, children, older people and those under medical treatment are higher risk | PAHO, same article | direct |
| Heat exhaustion: headache, nausea, dizziness, weakness, heavy sweating; heat stroke: confusion, altered mental status, slurred speech, loss of consciousness, seizures, hot dry skin | [CDC/NIOSH](https://www.cdc.gov/niosh/heat-stress/about/illnesses.html) | direct |
| Heat stroke first aid: call emergency services, move to shade, cool quickly | CDC/NIOSH, same page | direct |

The 10:00–17:00 avoidance window appears in PAHO-aligned regional health guidance
rather than in the PAHO article itself, which says to avoid "las horas de sol y de
mayor calor" without naming hours. The page states the window as a recommendation and
cites PAHO for the underlying advice. **Tighten this if a source naming the hours
directly is found.**

A second discrepancy worth recording: CDC/NIOSH states body temperature "can rise to
106°F or higher within 10 to 15 minutes", while other CDC material uses 103°F as the
heat-stroke threshold. The page uses PAHO's 39 °C because it is metric, Spanish-language
and aimed at the general public rather than at workers.

## 5. Crecidas Súbitas (`crecidas-subitas`)

| Claim as published | Source | Retrieved |
| --- | --- | --- |
| "6 inches of fast-moving flood water" can knock over an adult (rendered as 15 cm) | [NWS Turn Around Don't Drown](https://www.weather.gov/safety/flood-turn-around-dont-drown) | direct |
| "It takes just 12 inches of rushing water to carry away most cars" (rendered as 30 cm) | NWS, same page | direct |
| "2 feet of rushing water can carry away SUVs and trucks" (rendered as 60 cm) | NWS, same page | direct |
| "Never drive around the barriers blocking a flooded road. The road may have collapsed under that water." | NWS, same page | direct |
| Over half of flood-related drowning deaths involve vehicles driven into flood water | NWS, same page | direct |

No Venezuelan flash-flood statistic was used. INAMEH publishes hydrological warnings but
nothing retrievable that quantifies park-specific flash flooding, so the page teaches the
mechanism and the NWS thresholds instead of asserting a local number.

---

## Open items

- Re-attempt the two FUNVISIS PDFs and, if reachable, cite them directly in place of the
  France 24 attribution for the 80% and 2 cm/yr figures.
- Find a source that names the 10:00–17:00 window explicitly, or soften the wording.
- INPARQUES visitor rules were only reachable through search summaries; the institutional
  page itself carries no rules section. A citable PDF of the *reglamento de uso* would be
  a better source than the homepage currently referenced.
