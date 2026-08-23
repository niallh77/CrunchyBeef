const reviewedPlaces = [
  ['Bart’s C Thrift Shop', 52.6731, -6.2946, 'Shopping'],
  ['Kiltennel Beach', 52.6982, -6.2068, 'Beach & forest walk'],
  ['Amber Springs Hotel & Health Spa', 52.6806, -6.2831, 'Family hotel, pool & spa'],
  ['The Orphan Girl', 52.6730, -6.2210, 'Pub & food'],
  ['Movies at Gorey', 52.6834, -6.2796, 'Cinema'],
  ['Saltrock Dairy', 52.6598, -6.2472, 'Local produce'],
  ['Hughes Foodmarket & Coffee Shop', 52.6738, -6.2256, 'Local shop'],
  ['Bolands of Gorey', 52.6931, -6.2712, 'Home, garden & restaurant'],
  ['Ashdown Park Hotel & Leisure Club', 52.6818, -6.2811, 'Restaurant, spa & leisure'],
  ['Spice Home & Garden', 52.6711, -6.2963, 'Home & garden'],
  ['Seafield Hotel & Spa Resort', 52.6710, -6.2188, 'Bistro, dining & spa'],
  ['Ballymoney Beach', 52.6682, -6.2204, 'Beach'],
  ['Ballymoney Beach Shop', 52.6686, -6.2210, 'Coffee & ice cream'],
  ['Gorey District Park', 52.6804, -6.2924, 'Park & playground']
];

const googleMapsLink = name => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, Gorey, County Wexford`)}`;

function loadAsset(tag, attributes) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`${tag}[${attributes.key}="${attributes.value}"]`);
    if (existing) return resolve();
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => key !== 'key' && (element[key] = value));
    element.onload = resolve;
    element.onerror = reject;
    document.head.append(element);
  });
}

async function buildMap() {
  if (!location.pathname.endsWith('/to-do/local-area')) return;
  const mapElement = document.querySelector('[data-reviewed-places-map]');
  if (!mapElement) return;

  const placesList = document.querySelector('[data-reviewed-places-list]');
  placesList.innerHTML = reviewedPlaces.map(([name, , , category]) => `<li><a href="${googleMapsLink(name)}" target="_blank" rel="noreferrer">${name}</a><span>${category}</span></li>`).join('');

  try {
    await loadAsset('link', { key: 'data-leaflet-style', value: 'true', rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css' });
    await loadAsset('script', { key: 'data-leaflet-script', value: 'true', src: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js' });
    if (!window.L || mapElement.dataset.ready) return;

    mapElement.dataset.ready = 'true';
    const map = window.L.map(mapElement, { scrollWheelZoom: false, attributionControl: true }).setView([52.676, -6.255], 12);
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    const markers = reviewedPlaces.map(([name, latitude, longitude, category], index) => {
      const marker = window.L.circleMarker([latitude, longitude], {
        radius: 8, color: '#f3ead8', weight: 2, fillColor: '#b99964', fillOpacity: 1
      }).addTo(map);
      marker.bindPopup(`<strong>${index + 1}. ${name}</strong><br><span>${category}</span><br><a href="${googleMapsLink(name)}" target="_blank" rel="noreferrer">Open in Google Maps →</a>`);
      return marker;
    });
    map.fitBounds(window.L.featureGroup(markers).getBounds().pad(0.14));
  } catch {
    mapElement.classList.add('reviewed-places-map-unavailable');
    mapElement.textContent = 'The interactive map could not load. Use the recommendations below to open each place in Google Maps.';
  }
}

queueMicrotask(buildMap);
