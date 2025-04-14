import { series } from "./dataseries.js";
import { Serie } from "./series.js";

const tbody: HTMLElement = document.getElementById("series")!;
const averageText: HTMLElement = document.getElementById("average")!;

renderSeries(series);
averageText.textContent = `Seasons average: ${getAverageSeasons(series)}`;

function renderSeries(seriesList: Serie[]): void {
  seriesList.forEach((s) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${s.id}</td>
      <td><a href="#" class="serie-link" data-id="${s.id}">${s.name}</a></td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    `;
    tbody.appendChild(row);
  });

  document.querySelectorAll(".serie-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = parseInt((link as HTMLElement).getAttribute("data-id")!);
      const serie = series.find((s) => s.id === id);
      if (serie) showSerieDetail(serie);
    });
  });
}

function getAverageSeasons(seriesList: Serie[]): number {
  const total = seriesList.reduce((sum, s) => sum + s.seasons, 0);
  return total / seriesList.length;
}

function showSerieDetail(serie: Serie): void {
  const card = document.getElementById("series-detail")!;
  const img = document.getElementById("series-img") as HTMLImageElement;
  img.src = serie.image!.startsWith("./") ? serie.image! : `./${serie.image}`;
  const title = document.getElementById("series-title")!;
  const desc = document.getElementById("series-desc")!;
  const link = document.getElementById("series-link") as HTMLAnchorElement;
  title.textContent = serie.name;
  desc.textContent = serie.description!;
  link.href = serie.link!;
  link.textContent = serie.link!;
  card.style.display = "block";
}

