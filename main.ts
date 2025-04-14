import { seriesList } from "./dataseries.js";

const seriesTbody: HTMLElement = document.getElementById("series")!;

function renderSeriesInTable(): void {
  seriesList.forEach((s) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${s.id}</td>
      <td><a href="#">${s.name}</a></td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    `;
    seriesTbody.appendChild(row);
  });
}

function showAverageSeasons(): void {
  const totalSeasons = seriesList.reduce((sum, s) => sum + s.seasons, 0);
  const average = Math.round(totalSeasons / seriesList.length);

  const row = document.createElement("tr");
  row.innerHTML = `
    <td colspan="4" class="average-row">Seasons average: ${average}</td>
  `;
  seriesTbody.appendChild(row);
}

renderSeriesInTable();
showAverageSeasons();
