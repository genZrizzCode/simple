#!/usr/bin/env node

import https from 'https';

export default function(args) {
  let unit = 'metric';
  // Check for --imperial or -i flag
  if (args && (args.includes('--imperial') || args.includes('-i'))) {
    unit = 'imperial';
    args = args.filter(arg => arg !== '--imperial' && arg !== '-i');
  }
  const city = args && args[0] ? args.join(' ') : 'Los Angeles';
  const url = `https://wttr.in/${encodeURIComponent(city)}?format=j1`;

  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const weather = JSON.parse(data);
        const current = weather.current_condition[0];
        console.log(`Weather for ${city || 'Unknown location'}:`);
        console.log(`  Condition: ${current.weatherDesc[0].value}`);
        if (unit === 'imperial') {
          console.log(`  Temperature: ${current.temp_F}°F`);
          console.log(`  Feels like: ${current.FeelsLikeF}°F`);
          console.log(`  Wind: ${current.windspeedMiles} mph ${current.winddir16Point}`);
        } else {
          console.log(`  Temperature: ${current.temp_C}°C`);
          console.log(`  Feels like: ${current.FeelsLikeC}°C`);
          console.log(`  Wind: ${current.windspeedKmph} km/h ${current.winddir16Point}`);
        }
        console.log(`  Humidity: ${current.humidity}%`);
        console.log(`  Pressure: ${current.pressure} hPa`);
      } catch (e) {
        console.error('Could not parse weather data.');
      }
    });
  }).on('error', () => {
    console.error('Failed to fetch weather data.');
  });
}

