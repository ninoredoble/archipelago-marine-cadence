// Archipelago Marine Cadence — Oceanographic Telemetry Engine
// Geospatial Sanctuary Data Registry

const SANCTUARIES = {
  "macajalar": {
    tier: "NORTHERN MINDANAO PRIORITY SANCTUARY • TIER 1",
    title: "Macajalar Bay Marine Sanctuary",
    subhead: "Cagayan de Oro Coastal Reach • Misamis Oriental • 8°30'N 124°40'E",
    health: 94.2,
    area: "11,400 ha",
    depth: "42 - 180m",
    sst: "28.1°C",
    coral: "68.4%",
    notes: "Directly buffered by the Cagayan River estuary. Upstream siltation mitigation measures across Macasandig and Carmen have restored underwater visibility to 18 meters, promoting rapid staghorn coral (Acropora) recolonization.",
    species: [
      { icon: "🪸", name: "Staghorn Coral Reefs", latin: "Acropora cervicornis • High Benthic Density" },
      { icon: "🐢", name: "Hawksbill Sea Turtle", latin: "Eretmochelys imbricata • Coastal Forager" },
      { icon: "🐟", name: "Golden Trevally Schools", latin: "Gnathanodon speciosus • Bay Pelagic Indicator" }
    ]
  },
  "tubbataha": {
    tier: "UNESCO WORLD HERITAGE SITE • TIER 1",
    title: "Tubbataha Reefs Natural Park",
    subhead: "Sulu Sea Basin • Palawan • 8°50'N 119°55'E",
    health: 98.6,
    area: "97,030 ha",
    depth: "12 - 750m",
    sst: "28.4°C",
    coral: "84.2%",
    notes: "The apex coral atoll ecosystem of the Coral Triangle. Contains over 360 species of coral and acts as the genetic nursery seeding marine larvae throughout the central Philippines.",
    species: [
      { icon: "🦈", name: "Whitetip Reef Shark", latin: "Triaenodon obesus • Apex Apex Regulator" },
      { icon: "🪸", name: "Massive Porites Coral", latin: "Porites lutea • Century-Old Formations" },
      { icon: "🌊", name: "Giant Oceanic Manta Ray", latin: "Mobula birostris • Cleaning Station Resident" }
    ]
  },
  "apo-reef": {
    tier: "NATIONAL PARK & PROTECTED SEASCAPE",
    title: "Apo Reef Natural Park",
    subhead: "Mindoro Strait • Occidental Mindoro • 12°40'N 120°25'E",
    health: 91.5,
    area: "15,792 ha",
    depth: "10 - 240m",
    sst: "28.3°C",
    coral: "72.0%",
    notes: "The largest contiguous coral reef system in the Philippines and second largest globally behind Australia's Great Barrier Reef. Renowned for dramatic sheer drop-offs and gorgonian sea fans.",
    species: [
      { icon: "🦈", name: "Blacktip Reef Shark", latin: "Carcharhinus melanopterus • Lagoon Hunter" },
      { icon: "🪸", name: "Gorgonian Fan Coral", latin: "Subergorgia suberosa • Wall Dominant" },
      { icon: "🐢", name: "Green Sea Turtle", latin: "Chelonia mydas • Nesting Population" }
    ]
  },
  "camiguin": {
    tier: "ISLAND ECOSYSTEM SANCTUARY",
    title: "Camiguin Black Coral Sanctuary",
    subhead: "Bohol Sea • Northern Mindanao • 9°10'N 124°45'E",
    health: 93.8,
    area: "8,200 ha",
    depth: "30 - 320m",
    sst: "27.9°C",
    coral: "76.1%",
    notes: "Volcanic subsea slopes created rare ecological niches for rare black coral forests (Antipathes) and giant clams directly offshore from White Island and Mantigue.",
    species: [
      { icon: "🪸", name: "Deepwater Black Coral", latin: "Antipathes dichotoma • Volcanic Shelf" },
      { icon: "🦪", name: "Giant Clam Colonies", latin: "Tridacna gigas • Community Seeded" },
      { icon: "🐡", name: "Spotted Pufferfish", latin: "Arothron meleagris • Shallow Terrace" }
    ]
  },
  "taon": {
    tier: "CETACEAN HIGHWAY PROTECTED SEASCAPE",
    title: "Tañon Strait Protected Seascape",
    subhead: "Cebu & Negros Channel • 9°50'N 123°20'E",
    health: 89.2,
    area: "521,018 ha",
    depth: "80 - 500m",
    sst: "28.5°C",
    coral: "61.5%",
    notes: "A vital marine mammal migratory highway hosting 14 distinct species of whales and dolphins along with deep pelagic squid populations.",
    species: [
      { icon: "🐬", name: "Spinner Dolphin Pods", latin: "Stenella longirostris • Resident Megafauna" },
      { icon: "🐋", name: "Dwarf Sperm Whale", latin: "Kogia sima • Trench Forager" },
      { icon: "🪸", name: "Brain Coral Nodules", latin: "Platygyra daedalea • Coastal Fringe" }
    ]
  },
  "malapascua": {
    tier: "PELAGIC SHARK RESERVE",
    title: "Monad Shoal Pelagic Sanctuary",
    subhead: "Malapascua • Northern Cebu • 11°19'N 124°11'E",
    health: 92.0,
    area: "6,400 ha",
    depth: "18 - 250m",
    sst: "28.0°C",
    coral: "64.8%",
    notes: "The only known daily cleaning station on Earth where pelagic thresher sharks ascend from the twilight mesophotic depths to be cleaned by bluestreak cleaner wrasses.",
    species: [
      { icon: "🦈", name: "Pelagic Thresher Shark", latin: "Alopias pelagicus • Mesophotic Visitor" },
      { icon: "🐟", name: "Bluestreak Cleaner Wrasse", latin: "Labroides dimidiatus • Mutualist" },
      { icon: "🌊", name: "Devil Rays", latin: "Mobula mobular • Shoal Swarm" }
    ]
  },
  "coron": {
    tier: "BIOSPHERE RESERVE & ANCESTRAL WATERS",
    title: "Coron Island Biosphere Reserve",
    subhead: "Calamian Islands • Palawan • 11°55'N 120°15'E",
    health: 96.4,
    area: "22,284 ha",
    depth: "15 - 90m",
    sst: "28.6°C",
    coral: "79.5%",
    notes: "Enclosed karst lagoons (Kayangan & Barracuda) transitioning directly into fringing reefs. Indigenous Tagbanwa guardians practice customary marine zoning and sustainable catch quotas.",
    species: [
      { icon: "🦭", name: "Dugong (Sea Cow)", latin: "Dugong dugon • Seagrass Forager" },
      { icon: "🪸", name: "Pillar Coral Formations", latin: "Dendrogyra cylindrus • Lagoon Rim" },
      { icon: "🐟", name: "Humphead Wrasse", latin: "Cheilinus undulatus • Apex Benthic" }
    ]
  },
  "siargao": {
    tier: "PACIFIC OCEANIC MARINE PROTECTED AREA",
    title: "Siargao Pelagic Shelf & Marine Reserve",
    subhead: "Surigao del Norte • 9°52'N 126°03'E",
    health: 94.9,
    area: "278,914 ha",
    depth: "20 - 4,200m",
    sst: "28.2°C",
    coral: "74.1%",
    notes: "Faces the immense Philippine Trench. Oceanic upwelling provides dense nutrient blooms, fueling pelagic tuna runs, sea turtle nesting, and extensive mangrove waterways.",
    species: [
      { icon: "🐟", name: "Yellowfin Tuna", latin: "Thunnus albacares • Oceanic Migrant" },
      { icon: "🪸", name: "Table Coral Shelves", latin: "Acropora hyacinthus • High Wave Energy" },
      { icon: "🐢", name: "Loggerhead Turtle", latin: "Caretta caretta • Oceanic Transit" }
    ]
  }
};

let currentSanctuaryKey = "macajalar";

document.addEventListener("DOMContentLoaded", () => {
  renderSanctuary(currentSanctuaryKey);
  calculateThermalStress();
});

// Focus Sanctuary from Carousel or Map
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
  document.getElementById("dossierHealth").innerText = data.health;
  document.getElementById("dossierArea").innerText = data.area;
  document.getElementById("dossierDepth").innerText = data.depth;
  document.getElementById("dossierSST").innerText = data.sst;
  document.getElementById("dossierCoral").innerText = data.coral;
  document.getElementById("dossierNotes").innerText = data.notes;

  const speciesListEl = document.getElementById("speciesList");
  speciesListEl.innerHTML = data.species.map(s => `
    <div class="species-item">
      <div class="species-symbol">${s.icon}</div>
      <div class="species-details">
        <h5>${s.name}</h5>
        <span>${s.latin}</span>
      </div>
    </div>
  `).join("");
}

// Thermal Anomaly Simulator Logic
function calculateThermalStress() {
  const anomaly = parseFloat(document.getElementById("sstSlider").value);
  document.getElementById("sstSliderVal").innerText = `+${anomaly.toFixed(1)}°C anomaly`;

  const fillEl = document.getElementById("stressFill");
  const pillEl = document.getElementById("stressLevelPill");
  const readEl = document.getElementById("bleachingProb");

  const pct = Math.min(100, Math.round((anomaly / 3.0) * 100));
  fillEl.style.width = `${pct}%`;

  if (anomaly < 0.8) {
    fillEl.style.background = "#00f2fe";
    pillEl.style.background = "rgba(56, 239, 125, 0.15)";
    pillEl.style.color = "#38ef7d";
    pillEl.innerText = "Low Thermal Stress";
    readEl.innerText = `Projected Bleaching Probability: ${(anomaly * 8.4).toFixed(1)}% (Nominal)`;
  } else if (anomaly < 1.6) {
    fillEl.style.background = "#f59e0b";
    pillEl.style.background = "rgba(245, 158, 11, 0.15)";
    pillEl.style.color = "#f59e0b";
    pillEl.innerText = "Bleaching Watch (Moderate)";
    readEl.innerText = `Projected Bleaching Probability: ${(24 + anomaly * 18).toFixed(1)}% (Thermal Accumulation)`;
  } else {
    fillEl.style.background = "#ff7675";
    pillEl.style.background = "rgba(255, 118, 117, 0.18)";
    pillEl.style.color = "#ff7675";
    pillEl.innerText = "Critical Bleaching Alert (Severe)";
    readEl.innerText = `Projected Bleaching Probability: ${Math.min(99.4, 48 + anomaly * 22).toFixed(1)}% (Mortality Risk)`;
  }
}

function resetMapView() {
  focusSanctuary("macajalar", document.querySelectorAll(".taxon-chip")[2]);
}
