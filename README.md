# Archipelago Marine Cadence

> **Philippine Coral Reef Telemetry & Oceanographic Sanctuary Explorer**  
> An interactive oceanographic cartography, bathymetric transect profiler, and NOAA Degree Heating Weeks (DHW) thermal stress engine modeling 8 critical marine protected areas (MPAs) across the Coral Triangle -- from Macajalar Bay (Cagayan de Oro) to Tubbataha Reefs and the Philippine Trench.

---

## Overview

The Philippine archipelago anchors the global epicenter of marine shorefish and coral diversity within the Coral Triangle. **Archipelago Marine Cadence** bridges geospatial marine cartography with physical oceanographic modeling, tracing benthic topography, pelagic larval corridors, and climate-induced thermal stress vulnerabilities.

Built without external heavy framework dependencies, the platform provides marine biologists, students, and ocean researchers with an interactive workstation to evaluate reef health indices, run cross-sectional bathymetric depth soundings, and simulate coral bleaching probabilities under fluctuating sea surface temperature (SST) anomalies.

---

## Key Oceanographic Systems

### 1. Cross-Sectional Bathymetric Seafloor Profiler
- **Dynamic Seafloor Transects**: Generates cross-sectional elevation transects from coastal shoreline (0 km) out to deep pelagic and abyssal depths (up to 30.0 km offshore).
- **Zonal Light Modeling**:
  - *Euphotic Sunlight Zone (0 - 200m)*: Primary hermatypic coral reef growth (*Acropora*, *Porites*, *Dendrogyra*).
  - *Mesophotic Twilight Zone (200 - 1,000m)*: Cold-water gorgonians, black coral terraces (*Antipathes*), and pelagic cleaning stations.
  - *Abyssal / Hadal Zone (> 1,000m)*: Deep sea floor and trench plunge down to 4,200m+ (Philippine Trench axis).
- **Thermocline Curve Overlay**: Plots non-linear water temperature dissipation with depth according to the physical gradient equation:
  `T(z) = 4.0 + (T_surf - 4.0) * exp(-0.007 * z)`
- **Interactive Depth Probe**: Hovering across any section of the seafloor transect displays localized depth soundings, water temperature, light penetration classification, and benthic substrate characteristics.

### 2. NOAA Degree Heating Weeks (DHW) Thermal Stress Engine
- **SST Anomaly Departure Slider**: Simulates sea surface temperature departures from +0.0 deg C to +3.5 deg C above climatological Maximum Monthly Mean (MMM).
- **Thermal Accumulation Duration**: Models exposure across 1, 4, 8, and 12-week windows.
- **Scientific DHW Risk Tiers (NOAA Coral Reef Watch calibrated)**:
  - *No Stress (< 1.0 deg C-weeks)*: Normal calcification (~100%), resilient baseline.
  - *Bleaching Watch (1.0 - 4.0 deg C-weeks)*: Sub-critical thermal accumulation, mild zooxanthellae expulsion.
  - *Alert Level 1 (4.0 - 8.0 deg C-weeks)*: Significant bleaching of branching *Acropora* and tabular corals.
  - *Alert Level 2 (>= 8.0 deg C-weeks)*: Severe mass reef mortality risk, structural framework erosion, 10-20+ year ecological recovery horizon.

### 3. Hydrodynamic Vectors & Larval Dispersion Modeling
- **Current Velocity Tracking**: Models Kuroshio Branch and Bohol Sea jet velocities (1.1 to 2.4 knots).
- **Tidal Flux Characterization**: Analyzes semi-diurnal spring, channel venturi, and diurnal tidal elevation regimes.
- **Larval Drift Reach**: Estimates 5-day pelagic larval dispersal envelopes (38 km to 160 km) between regional MPAs.
- **Ekman Upwelling Indices**: Models coastal upwelling and nutrient transport values (+1.4 to +4.5 m2/s).

---

## Monitored Marine Sanctuaries

1. **Macajalar Bay Marine Sanctuary (Cagayan de Oro, Misamis Oriental)**:
   - *Depth*: 42 - 220m | *Area*: 11,400 ha | *Coral Cover*: 68.4%
   - Coastal reach directly buffered by the Cagayan River watershed. Upstream siltation mitigation measures across Macasandig and Carmen have restored water clarity to 18m, fostering rapid *Acropora* recovery.
2. **Tubbataha Reefs Natural Park (UNESCO / Sulu Sea, Palawan)**:
   - *Depth*: 12 - 750m | *Area*: 97,030 ha | *Coral Cover*: 84.2%
   - Pristine coral atoll wilderness and premier larval genetic source feeding central Philippine marine ecosystems.
3. **Apo Reef Natural Park (Mindoro Strait, Occidental Mindoro)**:
   - *Depth*: 10 - 240m | *Area*: 15,792 ha | *Coral Cover*: 72.0%
   - Largest contiguous coral atoll in the country, marked by sheer vertical drop-offs and gorgonian sea fan walls.
4. **Camiguin Black Coral Sanctuary (Bohol Sea, Northern Mindanao)**:
   - *Depth*: 30 - 320m | *Area*: 8,200 ha | *Coral Cover*: 76.1%
   - Volcanic benthic shelves sheltering rare black coral (*Antipathes dichotoma*) and community-seeded giant clams (*Tridacna gigas*).
5. **Tanon Strait Protected Seascape (Cebu & Negros Channel)**:
   - *Depth*: 80 - 520m | *Area*: 521,018 ha | *Coral Cover*: 61.5%
   - Narrow cetacean migration channel hosting 14 distinct species of whales and dolphins.
6. **Monad Shoal Pelagic Sanctuary (Malapascua, Northern Cebu)**:
   - *Depth*: 18 - 250m | *Area*: 6,400 ha | *Coral Cover*: 64.8%
   - World's premier daily cleaning station where pelagic thresher sharks ascend from mesophotic depths.
7. **Coron Island Biosphere Reserve (Calamianes, Northern Palawan)**:
   - *Depth*: 15 - 90m | *Area*: 22,284 ha | *Coral Cover*: 79.5%
   - Ancestral waters managed by the Tagbanwa people with karst limestone lagoons and dugong seagrass beds.
8. **Siargao Pelagic Shelf & Marine Reserve (Surigao del Norte)**:
   - *Depth*: 20 - 4,200m | *Area*: 278,914 ha | *Coral Cover*: 74.1%
   - Oceanic barrier reef fronting the 10,540-meter-deep Philippine Trench with intense nutrient upwelling.

---

## Technical Specifications

- **Frontend Core**: Vanilla HTML5, Canvas 2D API, SVG Cartography, Vanilla ES6+ JavaScript.
- **Styling**: Pure Vanilla CSS3 with bespoke oceanographic dark palette (`#020509` to `#00f2fe`), responsive grid layouts, and zero external runtime libraries.
- **Data Integrity**: 100% 7-bit ASCII character encoding (zero mojibake / raw multi-byte byte errors).
- **Telemetry Export**: In-browser client-side JSON research export with full geospatial and thermal simulation data.

---

## Running Locally

```bash
# Clone the repository
git clone https://github.com/ninoredoble/archipelago-marine-cadence.git

# Navigate into directory
cd archipelago-marine-cadence

# Open index.html in any modern web browser
# (Windows)
start index.html

# (macOS)
open index.html

# (Linux)
xdg-open index.html
```

---

## Citation & Attribution

Oceanographic baselines, SST climatology limits, and bathymetric slopes referenced from:
- **NOAA Coral Reef Watch (CRW)**: Degree Heating Week (DHW) metrics and Maximum Monthly Mean (MMM) thresholds.
- **NAMRIA (National Mapping and Resource Information Authority)**: Philippine nautical charts and PRS92 datum.
- **University of the Philippines Marine Science Institute (UP-MSI)**: Benthic coral cover and larval connectivity research.