import { seriesList } from "./dataseries.js";
var seriesTbody = document.getElementById("series");
function renderSeriesInTable() {
    seriesList.forEach(function (s) {
        var row = document.createElement("tr");
        row.innerHTML = "\n      <td>".concat(s.id, "</td>\n      <td><a href=\"#\">").concat(s.name, "</a></td>\n      <td>").concat(s.channel, "</td>\n      <td>").concat(s.seasons, "</td>\n    ");
        seriesTbody.appendChild(row);
    });
}
function showAverageSeasons() {
    var totalSeasons = seriesList.reduce(function (sum, s) { return sum + s.seasons; }, 0);
    var average = Math.round(totalSeasons / seriesList.length);
    var row = document.createElement("tr");
    row.innerHTML = "\n    <td colspan=\"4\" class=\"average-row\">Seasons average: ".concat(average, "</td>\n  ");
    seriesTbody.appendChild(row);
}
renderSeriesInTable();
showAverageSeasons();
