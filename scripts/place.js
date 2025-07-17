document.querySelector('#date').textContent = new Date().getFullYear();
document.querySelector('#last-day-mod').textContent = new Date().toDateString()

function calculateWindChill(temp, windSpeed, unit) {
  return (unit === "metric" && temp <= 10 && windSpeed > 4.8)
    ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2)
    : (unit === "imperial" && temp <= 50 && windSpeed > 3)
      ? (35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)).toFixed(2)
      : "N/A";
}