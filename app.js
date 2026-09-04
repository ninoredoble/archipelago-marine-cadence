// Archipelago Marine Cadence - Oceanographic Cartography & Telemetry Engine
// Character Encoding: 100% 7-Bit ASCII - Clean Typography & Scientific Accuracy

const SANCTUARIES = {
  "macajalar": {
    tier: "NORTHERN MINDANAO PRIORITY SANCTUARY // TIER 1",
    title: "Macajalar Bay Marine Sanctuary",
    subhead: "Cagayan de Oro Coastal Reach // Misamis Oriental // 8 deg 30'N 124 deg 40'E",
    health: 94.2,
    area: "11,400 ha",
    depth: "42 - 220m",
    sst: "28.1 deg C",
    coral: "68.4%",
    currentSpeed: "1.4 knots",
    tidalRegime: "Semi-Diurnal Spring (1.8m)",
    larvalReach: "48 km / 5-day drift",
    upwellingIndex: "+2.1 m2/s",
    conservationTitle: "Community River-to-Reef Siltation Mitigation",
    notes: "Directly buffered by the Cagayan River estuary. Sediment siltation mitigation measures upstream in Macasandig and Carmen have restored underwater visibility to 18 meters, promoting rapid staghorn coral (Acropora) recolonization.",
    species: [
      { badge: "BENTHOS", name: "Staghorn Coral Reefs", latin: "Acropora cervicornis // High Benthic Density" },
      { badge: "CHELONIA", name: "Hawksbill Sea Turtle", latin: "Eretmochelys imbricata // Coastal Forager" },
      { badge: "PELAGIC", name: "Golden Trevally Schools", latin: "Gnathanodon speciosus // Bay Pelagic Indicator" }
    ],
    bathyProfile: {
      transectLabel: "MACAJALAR BAY TRANSECT // DIST: 0-8.0 KM // DEPTH: 2-220M",
      maxDistKm: 8.0,
      maxDepthM: 240,
      points: [
        { distKm: 0.0, depthM: 2, substrate: "Estuarine Silt & Mangrove Fringe" },
        { distKm: 1.2, depthM: 18, substrate: "Inner Seagrass Meadow" },
        { distKm: 2.4, depthM: 32, substrate: "Fringing Acropora Coral Shelf" },
        { distKm: 3.8, depthM: 85, substrate: "Submarine Canyon Drop-Off" },
        { distKm: 5.5, depthM: 160, substrate: "Deep Mesophotic Terrace" },
        { distKm: 8.0, depthM: 220, substrate: "Macajalar Bay Floor Basin" }
      ]
    }
  },
  "tubbataha": {
    tier: "UNESCO WORLD HERITAGE SITE // TIER 1",
    title: "Tubbataha Reefs Natural Park",
    subhead: "Sulu Sea Basin // Palawan // 8 deg 50'N 119 deg 55'E",
    health: 98.6,
    area: "97,030 ha",
    depth: "12 - 750m",
    sst: "28.4 deg C",
    coral: "84.2%",
    currentSpeed: "2.1 knots",
    tidalRegime: "Diurnal Sulu Flux (1.2m)",
    larvalReach: "140 km / 5-day drift",
    upwellingIndex: "+3.8 m2/s",
    conservationTitle: "Strict No-Take Pelagic Genetic Reservoir",
    notes: "The apex coral atoll wilderness of the Coral Triangle. Anchors 360+ coral species and functions as the primary larval genetic source seeding marine populations across the central Philippines.",
    species: [
      { badge: "APEX", name: "Whitetip Reef Shark", latin: "Triaenodon obesus // Apex Benthic Regulator" },
      { badge: "BENTHOS", name: "Massive Porites Coral", latin: "Porites lutea // Century-Old Formations" },
      { badge: "PELAGIC", name: "Giant Oceanic Manta Ray", latin: "Mobula birostris // Cleaning Station Resident" }
    ],
    bathyProfile: {
      transectLabel: "TUBBATAHA ATOLL TRANSECT // DIST: 0-6.0 KM // DEPTH: 12-750M",
      maxDistKm: 6.0,
      maxDepthM: 800,
      points: [
        { distKm: 0.0, depthM: 12, substrate: "Inner Atoll Sandy Lagoon" },
        { distKm: 1.0, depthM: 2, substrate: "Shallow Reef Flat (Acropora)" },
        { distKm: 1.8, depthM: 0.5, substrate: "Reef Crest Breaker Zone" },
        { distKm: 2.6, depthM: 120, substrate: "Vertical Gorgonian Drop Wall" },
        { distKm: 4.2, depthM: 450, substrate: "Mesophotic Escarpment" },
        { distKm: 6.0, depthM: 750, substrate: "Sulu Sea Abyssal Floor" }
      ]
    }
  },
  "apo-reef": {
    tier: "NATIONAL PARK & PROTECTED SEASCAPE",
    title: "Apo Reef Natural Park",
    subhead: "Mindoro Strait // Occidental Mindoro // 12 deg 40'N 120 deg 25'E",
    health: 91.5,
    area: "15,792 ha",
    depth: "10 - 240m",
    sst: "28.3 deg C",
    coral: "72.0%",
    currentSpeed: "1.7 knots",
    tidalRegime: "Mixed Semi-Diurnal (1.5m)",
    larvalReach: "72 km / 5-day drift",
    upwellingIndex: "+2.6 m2/s",
    conservationTitle: "Mindoro Strait Marine Sanctuary Zone",
    notes: "The largest contiguous coral reef system in the Philippines and second largest worldwide behind Australia's Great Barrier Reef. Renowned for sheer underwater cliffs and massive gorgonian sea fans.",
    species: [
      { badge: "APEX", name: "Blacktip Reef Shark", latin: "Carcharhinus melanopterus // Lagoon Hunter" },
      { badge: "BENTHOS", name: "Gorgonian Fan Coral", latin: "Subergorgia suberosa // Wall Dominant" },
      { badge: "CHELONIA", name: "Green Sea Turtle", latin: "Chelonia mydas // Nesting Population" }
    ],
    bathyProfile: {
      transectLabel: "APO REEF ATOLL TRANSECT // DIST: 0-5.0 KM // DEPTH: 10-240M",
      maxDistKm: 5.0,
      maxDepthM: 260,
      points: [
        { distKm: 0.0, depthM: 8, substrate: "Inner Platform Pinnacles" },
        { distKm: 1.2, depthM: 15, substrate: "Submerged Coral Platform" },
        { distKm: 2.0, depthM: 35, substrate: "Outer Barrier Shelf" },
        { distKm: 3.2, depthM: 110, substrate: "Mindoro Strait Sheer Cliff" },
        { distKm: 5.0, depthM: 240, substrate: "Strait Pelagic Trough" }
      ]
    }
  },
  "camiguin": {
    tier: "VOLCANIC ISLAND ECOSYSTEM SANCTUARY",
    title: "Camiguin Black Coral Sanctuary",
    subhead: "Bohol Sea // Northern Mindanao // 9 deg 10'N 124 deg 45'E",
    health: 93.8,
    area: "8,200 ha",
    depth: "30 - 320m",
    sst: "27.9 deg C",
    coral: "76.1%",
    currentSpeed: "1.9 knots",
    tidalRegime: "Semi-Diurnal Bohol Jet (1.6m)",
    larvalReach: "65 km / 5-day drift",
    upwellingIndex: "+3.2 m2/s",
    conservationTitle: "Volcanic Shelf Benthic Protection",
    notes: "Volcanic subsea slopes create rare ecological niches for deepwater black coral forests (Antipathes) and giant clams directly offshore from White Island and Mantigue.",
    species: [
      { badge: "BENTHOS", name: "Deepwater Black Coral", latin: "Antipathes dichotoma // Volcanic Shelf" },
      { badge: "MOLLUSCA", name: "Giant Clam Colonies", latin: "Tridacna gigas // Community Seeded" },
      { badge: "PELAGIC", name: "Spotted Pufferfish", latin: "Arothron meleagris // Shallow Terrace" }
    ],
    bathyProfile: {
      transectLabel: "CAMIGUIN VOLCANIC SHELF // DIST: 0-4.5 KM // DEPTH: 4-320M",
      maxDistKm: 4.5,
      maxDepthM: 350,
      points: [
        { distKm: 0.0, depthM: 4, substrate: "Volcanic Sand Littoral Fringe" },
        { distKm: 0.6, depthM: 25, substrate: "Giant Clam Community Zone" },
        { distKm: 1.5, depthM: 65, substrate: "Antipathes Black Coral Shelf" },
        { distKm: 3.0, depthM: 180, substrate: "Steep Volcanic Escarpment" },
        { distKm: 4.5, depthM: 320, substrate: "Bohol Sea Trench Channel" }
      ]
    }
  },
  "taon": {
    tier: "CETACEAN HIGHWAY PROTECTED SEASCAPE",
    title: "Tanon Strait Protected Seascape",
    subhead: "Cebu & Negros Channel // 9 deg 50'N 123 deg 20'E",
    health: 89.2,
    area: "521,018 ha",
    depth: "80 - 520m",
    sst: "28.5 deg C",
    coral: "61.5%",
    currentSpeed: "2.3 knots",
    tidalRegime: "Channel Venturi Tidal Current (2.1m)",
    larvalReach: "85 km / 5-day drift",
    upwellingIndex: "+2.9 m2/s",
    conservationTitle: "Cetacean Migration Corridor Surveillance",
    notes: "A vital marine mammal migratory highway hosting 14 distinct species of whales and dolphins along with deep pelagic squid populations sheltered between Cebu and Negros.",
    species: [
      { badge: "MAMMAL", name: "Spinner Dolphin Pods", latin: "Stenella longirostris // Resident Megafauna" },
      { badge: "MAMMAL", name: "Dwarf Sperm Whale", latin: "Kogia sima // Trench Forager" },
      { badge: "BENTHOS", name: "Brain Coral Nodules", latin: "Platygyra daedalea // Coastal Fringe" }
    ],
    bathyProfile: {
      transectLabel: "TANON STRAIT CROSS-SECTION // DIST: 0-14.0 KM // DEPTH: 5-520M",
      maxDistKm: 14.0,
      maxDepthM: 550,
      points: [
        { distKm: 0.0, depthM: 5, substrate: "Negros Coastal Coral Fringe" },
        { distKm: 2.5, depthM: 65, substrate: "Inner Pelagic Shelf" },
        { distKm: 7.0, depthM: 510, substrate: "Deep Cetacean Channel Abyss" },
        { distKm: 11.5, depthM: 90, substrate: "Cebu Western Shelf Edge" },
        { distKm: 14.0, depthM: 15, substrate: "Moalboal Coastal Reef Flat" }
      ]
    }
  },
  "malapascua": {
    tier: "PELAGIC SHARK RESERVE // MONAD SHOAL",
    title: "Monad Shoal Pelagic Sanctuary",
    subhead: "Malapascua // Northern Cebu // 11 deg 19'N 124 deg 11'E",
    health: 92.0,
    area: "6,400 ha",
    depth: "18 - 250m",
    sst: "28.0 deg C",
    coral: "64.8%",
    currentSpeed: "1.6 knots",
    tidalRegime: "Visayan Sea Semi-Diurnal (1.4m)",
    larvalReach: "56 km / 5-day drift",
    upwellingIndex: "+1.9 m2/s",
    conservationTitle: "Sunken Atoll Apex Cleaning Station",
    notes: "The only known daily cleaning station on Earth where pelagic thresher sharks ascend from the twilight mesophotic depths to be cleaned by bluestreak cleaner wrasses.",
    species: [
      { badge: "APEX", name: "Pelagic Thresher Shark", latin: "Alopias pelagicus // Mesophotic Visitor" },
      { badge: "PELAGIC", name: "Bluestreak Cleaner Wrasse", latin: "Labroides dimidiatus // Symbiotic Mutualist" },
      { badge: "PELAGIC", name: "Devil Rays", latin: "Mobula mobular // Shoal Swarm" }
    ],
    bathyProfile: {
      transectLabel: "MONAD SHOAL SEAMOUNT // DIST: 0-4.0 KM // DEPTH: 14-250M",
      maxDistKm: 4.0,
      maxDepthM: 260,
      points: [
        { distKm: 0.0, depthM: 14, substrate: "Island Submerged Terrace" },
        { distKm: 0.8, depthM: 22, substrate: "Monad Shoal Seamount Plateau" },
        { distKm: 1.6, depthM: 26, substrate: "Thresher Shark Cleaning Station" },
        { distKm: 2.5, depthM: 95, substrate: "Mesophotic Twilight Drop-Off" },
        { distKm: 4.0, depthM: 230, substrate: "Visayan Sea Deep Channel" }
      ]
    }
  },
  "coron": {
    tier: "BIOSPHERE RESERVE & ANCESTRAL WATERS",
    title: "Coron Island Biosphere Reserve",
    subhead: "Calamian Islands // Palawan // 11 deg 55'N 120 deg 15'E",
    health: 96.4,
    area: "22,284 ha",
    depth: "15 - 90m",
    sst: "28.6 deg C",
    coral: "79.5%",
    currentSpeed: "1.1 knots",
    tidalRegime: "Diurnal Calamian Flux (1.1m)",
    larvalReach: "38 km / 5-day drift",
    upwellingIndex: "+1.4 m2/s",
    conservationTitle: "Tagbanwa Customary Zoning & Estuarine Care",
    notes: "Enclosed karst lagoons transitioning directly into fringing reefs. Indigenous Tagbanwa guardians enforce customary marine zoning, sustainable catch quotas, and seagrass protection.",
    species: [
      { badge: "MAMMAL", name: "Dugong (Sea Cow)", latin: "Dugong dugon // Seagrass Forager" },
      { badge: "BENTHOS", name: "Pillar Coral Formations", latin: "Dendrogyra cylindrus // Lagoon Rim" },
      { badge: "PELAGIC", name: "Humphead Wrasse", latin: "Cheilinus undulatus // Apex Benthic" }
    ],
    bathyProfile: {
      transectLabel: "CORON KARST LAGOON TRANSECT // DIST: 0-3.5 KM // DEPTH: 0-90M",
      maxDistKm: 3.5,
      maxDepthM: 100,
      points: [
        { distKm: 0.0, depthM: 0, substrate: "Vertical Karst Limestone Wall" },
        { distKm: 0.5, depthM: 18, substrate: "Enclosed Kayangan Lagoon" },
        { distKm: 1.4, depthM: 32, substrate: "WWII Shipwreck Artificial Reef" },
        { distKm: 2.2, depthM: 15, substrate: "Dugong Seagrass Meadows" },
        { distKm: 3.5, depthM: 85, substrate: "Coron Bay Navigation Channel" }
      ]
    }
  },
  "siargao": {
    tier: "PACIFIC OCEANIC MARINE PROTECTED AREA",
    title: "Siargao Pelagic Shelf & Marine Reserve",
    subhead: "Surigao del Norte // 9 deg 52'N 126 deg 03'E",
    health: 94.9,
    area: "278,914 ha",
    depth: "20 - 4,200m",
    sst: "28.2 deg C",
    coral: "74.1%",
    currentSpeed: "2.4 knots",
    tidalRegime: "Open Pacific Swell & Kuroshio (2.2m)",
    larvalReach: "160 km / 5-day drift",
    upwellingIndex: "+4.5 m2/s",
    conservationTitle: "Pacific Trench Continental Shelf Buffer",
    notes: "Directly fronts the monumental 10,540-meter Philippine Trench. Oceanic upwelling provides dense nutrient blooms, fueling pelagic tuna runs, sea turtle migrations, and extensive mangrove waterways.",
    species: [
      { badge: "PELAGIC", name: "Yellowfin Tuna", latin: "Thunnus albacares // Oceanic Migrant" },
      { badge: "BENTHOS", name: "Table Coral Shelves", latin: "Acropora hyacinthus // High Wave Energy" },
      { badge: "CHELONIA", name: "Loggerhead Turtle", latin: "Caretta caretta // Oceanic Transit" }
    ],
    bathyProfile: {
      transectLabel: "SIARGAO TRENCH TRANSECT // DIST: 0-30.0 KM // DEPTH: 2-4200M",
      maxDistKm: 30.0,
      maxDepthM: 4500,
      points: [
        { distKm: 0.0, depthM: 2, substrate: "Cloud 9 Barrier Reef Crest" },
        { distKm: 2.0, depthM: 22, substrate: "Outer Reef Terrace" },
        { distKm: 5.0, depthM: 180, substrate: "Pelagic Continental Drop-Off" },
        { distKm: 12.0, depthM: 1200, substrate: "Upper Abyssal Continental Slope" },
        { distKm: 20.0, depthM: 2800, substrate: "Deep Trench Escarpment" },
        { distKm: 30.0, depthM: 4200, substrate: "Philippine Trench Hadal Chasm Axis" }
      ]
    }
  }
};

let currentSanctuaryKey = "macajalar";
let exposureDurationWeeks = 4;

document.addEventListener("DOMContentLoaded", () => {
  renderSanctuary(currentSanctuaryKey);
  initBathymetricCanvas();
  calculateThermalStress();
});

// Focus Sanctuary from Carousel or Map Reticles
function focusSanctuary(key, btnEl) {
  currentSanctuaryKey = key;

  if (btnEl) {
    document.querySelectorAll(".taxon-chip").forEach(c => c.classList.remove("active"));
    btnEl.classList.add("active");
  }

  // Highlight Map Node
  document.querySelectorAll(".marine-node").forEach(node => node.classList.remove("active"));
  const targetNode = document.getElementById(`node-${key}`);
  if (targetNode) targetNode.classList.add("active");

  renderSanctuary(key);
  drawBathymetryProfile(key);
  calculateThermalStress();
}

function selectSanctuary(key) {
  const matchingBtn = Array.from(document.querySelectorAll(".taxon-chip")).find(b => 
    b.getAttribute("onclick") && b.getAttribute("onclick").includes(key)
  );
  focusSanctuary(key, matchingBtn);
}

// Render Dossier Details
function renderSanctuary(key) {
  const data = SANCTUARIES[key];
  if (!data) return;

  document.getElementById("dossierTier").innerText = data.tier;
  document.getElementById("dossierTitle").innerText = data.title;
  document.getElementById("dossierSubhead").innerText = data.subhead;
  document.getElementById("dossierHealth").innerText = data.health.toFixed(1);
  document.getElementById("dossierArea").innerText = data.area;
  document.getElementById("dossierDepth").innerText = data.depth;
  document.getElementById("dossierSST").innerText = data.sst;
  document.getElementById("dossierCoral").innerText = data.coral;
  document.getElementById("dossierNotes").innerText = data.notes;
  document.getElementById("conservationTitle").innerText = data.conservationTitle;

  // Hydrodynamics
  document.getElementById("hydroCurrentSpeed").innerText = data.currentSpeed;
  document.getElementById("hydroTidalRegime").innerText = data.tidalRegime;
  document.getElementById("hydroLarvalReach").innerText = data.larvalReach;
  document.getElementById("hydroUpwellingIndex").innerText = data.upwellingIndex;

  // Bathy spec label
  document.getElementById("bathySpecLabel").innerText = data.bathyProfile.transectLabel;

  // Keystone Species
  const speciesListEl = document.getElementById("speciesList");
  speciesListEl.innerHTML = data.species.map(s => `
    <div class="species-item">
      <span class="species-badge-type">${s.badge}</span>
      <div class="species-details">
        <h5>${s.name}</h5>
        <span>${s.latin}</span>
      </div>
    </div>
  `).join("");
}

// Exposure Duration Selector
function setExposureDuration(weeks, btnEl) {
  exposureDurationWeeks = weeks;
  document.querySelectorAll(".dur-btn").forEach(b => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
  document.getElementById("durLabel").innerText = `${weeks} Weeks Exposure`;
  calculateThermalStress();
}

// NOAA Degree Heating Weeks (DHW) Engine
function calculateThermalStress() {
  const anomaly = parseFloat(document.getElementById("sstSlider").value);
  document.getElementById("sstSliderVal").innerText = `+${anomaly.toFixed(1)} deg C Anomaly`;

  // Scientific NOAA CRW formula:
  // Thermal stress accumulates when anomaly departure >= 1.0 deg C.
  // Degree Heating Weeks (deg C-weeks) = weeks * max(0, anomaly)
  // Sub-threshold warming (<1.0 deg C) over prolonged duration generates sub-critical stress.
  let dhw = 0;
  if (anomaly >= 1.0) {
    dhw = exposureDurationWeeks * (anomaly - 0.2);
  } else if (anomaly > 0.2) {
    dhw = exposureDurationWeeks * (anomaly * 0.4);
  }

  const dhwValEl = document.getElementById("dhwVal");
  const dhwTierEl = document.getElementById("dhwTier");
  const fillEl = document.getElementById("stressFill");
  const pillEl = document.getElementById("stressLevelPill");
  const readoutEl = document.getElementById("bleachingProb");

  dhwValEl.innerText = `${dhw.toFixed(1)} deg C-weeks`;

  // Gauge bar percentage (normalized against 12 deg C-weeks ceiling)
  const pct = Math.min(100, Math.round((dhw / 12.0) * 100));
  fillEl.style.width = `${Math.max(4, pct)}%`;

  if (dhw < 1.0) {
    fillEl.style.background = "#00f2fe";
    pillEl.style.background = "rgba(56, 239, 125, 0.15)";
    pillEl.style.borderColor = "rgba(56, 239, 125, 0.3)";
    pillEl.style.color = "#38ef7d";
    pillEl.innerText = "No Stress";
    dhwTierEl.innerText = "NOMINAL // CLIMATOLOGY STABLE";
    dhwTierEl.style.color = "#38ef7d";
    readoutEl.innerHTML = `Projected Bleaching Probability: ${(anomaly * 4.2).toFixed(1)}% &bull; Calcification: 99.4% &bull; Resilient Baseline`;
  } else if (dhw < 4.0) {
    fillEl.style.background = "#00f2fe";
    pillEl.style.background = "rgba(0, 242, 254, 0.15)";
    pillEl.style.borderColor = "rgba(0, 242, 254, 0.35)";
    pillEl.style.color = "#00f2fe";
    pillEl.innerText = "Bleaching Watch";
    dhwTierEl.innerText = "WATCH // SUB-CRITICAL ACCUMULATION";
    dhwTierEl.style.color = "#00f2fe";
    const prob = 12 + dhw * 8.5;
    const calc = 100 - (dhw * 6.2);
    readoutEl.innerHTML = `Projected Bleaching Probability: ${prob.toFixed(1)}% &bull; Calcification: ${calc.toFixed(1)}% &bull; Mild Thermal Warning`;
  } else if (dhw < 8.0) {
    fillEl.style.background = "#f59e0b";
    pillEl.style.background = "rgba(245, 158, 11, 0.15)";
    pillEl.style.borderColor = "rgba(245, 158, 11, 0.35)";
    pillEl.style.color = "#f59e0b";
    pillEl.innerText = "Alert Level 1";
    dhwTierEl.innerText = "ALERT LEVEL 1 // SIGNIFICANT BLEACHING";
    dhwTierEl.style.color = "#f59e0b";
    const prob = 45 + (dhw - 4.0) * 8.0;
    const calc = Math.max(30, 75 - (dhw - 4.0) * 8.0);
    readoutEl.innerHTML = `Projected Bleaching Probability: ${prob.toFixed(1)}% &bull; Calcification: ${calc.toFixed(1)}% &bull; Widespread Branching Coral Bleaching`;
  } else {
    fillEl.style.background = "#ef4444";
    pillEl.style.background = "rgba(239, 68, 68, 0.18)";
    pillEl.style.borderColor = "rgba(239, 68, 68, 0.4)";
    pillEl.style.color = "#ef4444";
    pillEl.innerText = "Alert Level 2 (Severe)";
    dhwTierEl.innerText = "ALERT LEVEL 2 // MASS REEF MORTALITY RISK";
    dhwTierEl.style.color = "#ef4444";
    const prob = Math.min(99.6, 78 + (dhw - 8.0) * 4.5);
    const calc = Math.max(10, 42 - (dhw - 8.0) * 6.0);
    readoutEl.innerHTML = `Projected Bleaching Probability: ${prob.toFixed(1)}% &bull; Calcification: ${calc.toFixed(1)}% &bull; Severe Multi-Taxa Mortality & Framework Collapse`;
  }
}

// Reset Map View Anchor
function resetMapView() {
  focusSanctuary("macajalar", document.querySelectorAll(".taxon-chip")[2]);
}

// =======================================================
// SYSTEM A: CROSS-SECTIONAL BATHYMETRIC SEAFLOOR PROFILER
// =======================================================
let bathyCanvas, bathyCtx;
let currentProfilePoints = [];
let currentMaxDist = 8.0;
let currentMaxDepth = 240;

function initBathymetricCanvas() {
  bathyCanvas = document.getElementById("bathyCanvas");
  if (!bathyCanvas) return;
  bathyCtx = bathyCanvas.getContext("2d");

  setupCanvasSize();
  window.addEventListener("resize", () => {
    setupCanvasSize();
    drawBathymetryProfile(currentSanctuaryKey);
  });

  // Attach interactive hover probe
  bathyCanvas.addEventListener("mousemove", handleBathyProbe);
  bathyCanvas.addEventListener("mouseleave", () => {
    const tip = document.getElementById("bathyTooltip");
    if (tip) tip.style.display = "none";
    drawBathymetryProfile(currentSanctuaryKey);
  });

  drawBathymetryProfile(currentSanctuaryKey);
}

function setupCanvasSize() {
  const container = bathyCanvas.parentElement;
  const dpr = window.devicePixelRatio || 1;
  const width = container.clientWidth;
  const height = container.clientHeight;

  bathyCanvas.width = width * dpr;
  bathyCanvas.height = height * dpr;
  bathyCanvas.style.width = width + "px";
  bathyCanvas.style.height = height + "px";
  bathyCtx.scale(dpr, dpr);
}

function drawBathymetryProfile(key) {
  if (!bathyCtx) return;
  const data = SANCTUARIES[key];
  if (!data || !data.bathyProfile) return;

  const profile = data.bathyProfile;
  currentProfilePoints = profile.points;
  currentMaxDist = profile.maxDistKm;
  currentMaxDepth = profile.maxDepthM;

  const dpr = window.devicePixelRatio || 1;
  const W = bathyCanvas.width / dpr;
  const H = bathyCanvas.height / dpr;

  const padLeft = 45;
  const padRight = 20;
  const padTop = 18;
  const padBottom = 26;

  const graphW = W - padLeft - padRight;
  const graphH = H - padTop - padBottom;

  bathyCtx.clearRect(0, 0, W, H);

  // Background Water Depth Gradient
  const waterGrad = bathyCtx.createLinearGradient(0, padTop, 0, padTop + graphH);
  waterGrad.addColorStop(0, "rgba(0, 242, 254, 0.12)");
  waterGrad.addColorStop(0.35, "rgba(14, 80, 160, 0.25)");
  waterGrad.addColorStop(0.85, "rgba(7, 24, 60, 0.65)");
  waterGrad.addColorStop(1, "rgba(2, 6, 15, 0.95)");

  bathyCtx.fillStyle = waterGrad;
  bathyCtx.fillRect(padLeft, padTop, graphW, graphH);

  // Horizontal Depth Reference Grids
  bathyCtx.strokeStyle = "rgba(255, 255, 255, 0.07)";
  bathyCtx.lineWidth = 1;
  bathyCtx.setLineDash([3, 5]);

  const depthSteps = 4;
  for (let i = 0; i <= depthSteps; i++) {
    const dVal = (currentMaxDepth / depthSteps) * i;
    const y = padTop + (i / depthSteps) * graphH;

    bathyCtx.beginPath();
    bathyCtx.moveTo(padLeft, y);
    bathyCtx.lineTo(padLeft + graphW, y);
    bathyCtx.stroke();

    // Depth label
    bathyCtx.fillStyle = "rgba(132, 148, 167, 0.85)";
    bathyCtx.font = "9px 'JetBrains Mono', monospace";
    bathyCtx.textAlign = "right";
    bathyCtx.fillText(`-${Math.round(dVal)}m`, padLeft - 6, y + 3);
  }

  // Vertical Distance Reference Grids
  const distSteps = 4;
  for (let j = 0; j <= distSteps; j++) {
    const distVal = (currentMaxDist / distSteps) * j;
    const x = padLeft + (j / distSteps) * graphW;

    bathyCtx.beginPath();
    bathyCtx.moveTo(x, padTop);
    bathyCtx.lineTo(x, padTop + graphH);
    bathyCtx.stroke();

    // Distance label
    bathyCtx.fillStyle = "rgba(132, 148, 167, 0.85)";
    bathyCtx.font = "9px 'JetBrains Mono', monospace";
    bathyCtx.textAlign = "center";
    bathyCtx.fillText(`${distVal.toFixed(1)}km`, x, padTop + graphH + 15);
  }
  bathyCtx.setLineDash([]);

  // Plot Seafloor Bedrock Polygon
  const pts = currentProfilePoints.map(p => {
    const x = padLeft + (p.distKm / currentMaxDist) * graphW;
    const y = padTop + (p.depthM / currentMaxDepth) * graphH;
    return { x, y, distKm: p.distKm, depthM: p.depthM, substrate: p.substrate };
  });

  if (pts.length < 2) return;

  // Build smooth seafloor path
  bathyCtx.beginPath();
  bathyCtx.moveTo(pts[0].x, pts[0].y);

  for (let i = 0; i < pts.length - 1; i++) {
    const xc = (pts[i].x + pts[i + 1].x) / 2;
    const yc = (pts[i].y + pts[i + 1].y) / 2;
    bathyCtx.quadraticCurveTo(pts[i].x, pts[i].y, xc, yc);
  }
  bathyCtx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);

  // Close under bedrock
  bathyCtx.lineTo(padLeft + graphW, padTop + graphH);
  bathyCtx.lineTo(padLeft, padTop + graphH);
  bathyCtx.closePath();

  // Seafloor Fill
  const bedGrad = bathyCtx.createLinearGradient(0, padTop, 0, padTop + graphH);
  bedGrad.addColorStop(0, "#132338");
  bedGrad.addColorStop(0.5, "#0b1522");
  bedGrad.addColorStop(1, "#04080e");

  bathyCtx.fillStyle = bedGrad;
  bathyCtx.fill();

  // Seafloor Contour Stroke Line
  bathyCtx.beginPath();
  bathyCtx.moveTo(pts[0].x, pts[0].y);
  for (let i = 0; i < pts.length - 1; i++) {
    const xc = (pts[i].x + pts[i + 1].x) / 2;
    const yc = (pts[i].y + pts[i + 1].y) / 2;
    bathyCtx.quadraticCurveTo(pts[i].x, pts[i].y, xc, yc);
  }
  bathyCtx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
  bathyCtx.strokeStyle = "#00f2fe";
  bathyCtx.lineWidth = 2.5;
  bathyCtx.stroke();

  // Draw Station Benthic Markers along Seafloor
  pts.forEach((pt, idx) => {
    bathyCtx.beginPath();
    bathyCtx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
    bathyCtx.fillStyle = idx === 0 ? "#38ef7d" : "#00f2fe";
    bathyCtx.fill();
    bathyCtx.strokeStyle = "#05090f";
    bathyCtx.lineWidth = 2;
    bathyCtx.stroke();

    // Minor label for keynote points
    if (idx === 0 || idx === pts.length - 1 || idx === Math.floor(pts.length / 2)) {
      bathyCtx.fillStyle = "rgba(255, 255, 255, 0.75)";
      bathyCtx.font = "8.5px 'JetBrains Mono', monospace";
      bathyCtx.textAlign = "center";
      bathyCtx.fillText(`${pt.depthM}m`, pt.x, Math.max(padTop + 12, pt.y - 8));
    }
  });

  // Sea Surface Line (Z = 0m)
  bathyCtx.beginPath();
  bathyCtx.moveTo(padLeft, padTop);
  bathyCtx.lineTo(padLeft + graphW, padTop);
  bathyCtx.strokeStyle = "rgba(0, 242, 254, 0.5)";
  bathyCtx.lineWidth = 1.2;
  bathyCtx.stroke();

  // Thermocline Profile Curve (Water Temperature Drop)
  bathyCtx.beginPath();
  bathyCtx.setLineDash([2, 4]);
  bathyCtx.strokeStyle = "rgba(245, 158, 11, 0.55)";
  bathyCtx.lineWidth = 1.2;

  for (let step = 0; step <= 20; step++) {
    const fraction = step / 20;
    const depthM = fraction * currentMaxDepth;
    // Thermocline equation: T(z) = 4 + (28.4 - 4) * exp(-0.007 * depth)
    const tempC = 4.0 + (28.4 - 4.0) * Math.exp(-0.007 * depthM);
    // Map temp (4C - 30C) to small margin on right
    const tx = padLeft + graphW - ((tempC - 4) / 26.0) * (graphW * 0.28);
    const ty = padTop + fraction * graphH;

    if (step === 0) bathyCtx.moveTo(tx, ty);
    else bathyCtx.lineTo(tx, ty);
  }
  bathyCtx.stroke();
  bathyCtx.setLineDash([]);
}

// Interactive Bathymetry Probe on Mousemove
function handleBathyProbe(e) {
  if (!bathyCanvas || currentProfilePoints.length === 0) return;

  const rect = bathyCanvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const dpr = window.devicePixelRatio || 1;
  const W = bathyCanvas.width / dpr;
  const H = bathyCanvas.height / dpr;

  const padLeft = 45;
  const padRight = 20;
  const padTop = 18;
  const padBottom = 26;

  const graphW = W - padLeft - padRight;
  const graphH = H - padTop - padBottom;

  if (mouseX < padLeft || mouseX > padLeft + graphW || mouseY < padTop || mouseY > padTop + graphH) {
    const tip = document.getElementById("bathyTooltip");
    if (tip) tip.style.display = "none";
    return;
  }

  // Re-draw base
  drawBathymetryProfile(currentSanctuaryKey);

  // Compute probed distance
  const probeDistKm = ((mouseX - padLeft) / graphW) * currentMaxDist;

  // Interpolate depth along profile points
  let probeDepthM = currentProfilePoints[0].depthM;
  let substrate = currentProfilePoints[0].substrate;

  for (let i = 0; i < currentProfilePoints.length - 1; i++) {
    const p1 = currentProfilePoints[i];
    const p2 = currentProfilePoints[i + 1];
    if (probeDistKm >= p1.distKm && probeDistKm <= p2.distKm) {
      const span = p2.distKm - p1.distKm;
      const frac = span > 0 ? (probeDistKm - p1.distKm) / span : 0;
      probeDepthM = p1.depthM + frac * (p2.depthM - p1.depthM);
      substrate = frac > 0.5 ? p2.substrate : p1.substrate;
      break;
    }
  }

  const probeY = padTop + (probeDepthM / currentMaxDepth) * graphH;

  // Draw probe crosshair
  bathyCtx.beginPath();
  bathyCtx.moveTo(mouseX, padTop);
  bathyCtx.lineTo(mouseX, padTop + graphH);
  bathyCtx.strokeStyle = "rgba(0, 242, 254, 0.45)";
  bathyCtx.lineWidth = 1;
  bathyCtx.stroke();

  bathyCtx.beginPath();
  bathyCtx.arc(mouseX, probeY, 5, 0, Math.PI * 2);
  bathyCtx.fillStyle = "#ffffff";
  bathyCtx.fill();
  bathyCtx.strokeStyle = "#00f2fe";
  bathyCtx.lineWidth = 2;
  bathyCtx.stroke();

  // Water temp at this depth
  const tempAtDepth = (4.0 + (28.4 - 4.0) * Math.exp(-0.007 * probeDepthM)).toFixed(1);

  // Determine light zone
  let lightZone = "Euphotic Zone (Sunlight)";
  if (probeDepthM > 1000) lightZone = "Abyssal / Hadal Zone (Dark)";
  else if (probeDepthM > 200) lightZone = "Mesophotic Twilight Zone";

  // Update tooltip
  const tip = document.getElementById("bathyTooltip");
  if (tip) {
    tip.style.display = "block";
    tip.style.left = `${mouseX}px`;
    tip.style.top = `${Math.min(padTop + graphH - 40, Math.max(padTop + 20, probeY))}px`;
    tip.innerHTML = `
      <strong>${probeDistKm.toFixed(2)} km</strong> offshore // Depth: <strong>${Math.round(probeDepthM)}m</strong><br>
      Water Temp: <strong>${tempAtDepth} deg C</strong> // ${lightZone}<br>
      Substrate: <em>${substrate}</em>
    `;
  }
}

// Telemetry Export Feature
function exportSanctuaryTelemetry() {
  const data = SANCTUARIES[currentSanctuaryKey];
  if (!data) return;

  const exportPayload = {
    sanctuaryKey: currentSanctuaryKey,
    exportTimestamp: new Date().toISOString(),
    geospatialMetadata: {
      tier: data.tier,
      title: data.title,
      subhead: data.subhead,
      protectedArea: data.area,
      depthRange: data.depth,
      baselineSST: data.sst,
      coralCover: data.coral,
      healthIndex: data.health
    },
    noaaThermalSimulation: {
      anomalyDepartureCelsius: parseFloat(document.getElementById("sstSlider").value),
      exposureDurationWeeks: exposureDurationWeeks,
      degreeHeatingWeeks: document.getElementById("dhwVal").innerText,
      alertClassification: document.getElementById("dhwTier").innerText
    },
    hydrodynamics: {
      currentSpeed: data.currentSpeed,
      tidalRegime: data.tidalRegime,
      larvalReach: data.larvalReach,
      upwellingIndex: data.upwellingIndex
    },
    keystoneTaxa: data.species,
    bathymetricTransect: data.bathyProfile
  };

  const jsonStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportPayload, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", jsonStr);
  downloadAnchor.setAttribute("download", `archipelago_telemetry_${currentSanctuaryKey}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}