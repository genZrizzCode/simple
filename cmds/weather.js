#!/usr/bin/env node

import https from 'https';

const city = process.argv[2] || 'Los Angeles';
const url = `https://wttr.in/${encodeURIComponent(city)}?format=j1`;

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const weather = JSON.parse(data);
      const current = weather.current_condition[0];
      console.log(`Weather for ${city}:`);
      console.log(`  Condition: ${current.weatherDesc[0].value}`);
      console.log(`  Temperature: ${current.temp_C}°C`);
      console.log(`  Feels like: ${current.FeelsLikeC}°C`);
      console.log(`  Humidity: ${current.humidity}%`);
      console.log(`  Wind: ${current.windspeedKmph} km/h ${current.winddir16Point}`);
      console.log(`  Pressure: ${current.pressure} hPa`);
    } catch (e) {
      console.error('Could not parse weather data.');
    }
  });
}).on('error', () => {
  console.error('Failed to fetch weather data.');
});

