let industry = [];
let params = {};

Promise.all([
  fetch("industry_timeseries.csv").then(r => r.text()),
  fetch("model_params.json").then(r => r.json())
]).then(([csv, json]) => {
  params = json;

  const rows = csv.trim().split("\n").slice(1);
  rows.forEach(r => {
  const [q, v] = r.split(",");

  if (q >= "2000Q1") {
    industry.push({ q, v: parseFloat(v) });
  }
});


  drawChart();s
});

function drawChart(predicted=null) {
  const labels = industry.map(d => d.q);
  const values = industry.map(d => d.v);

  if (predicted) {
    labels.push("NEXT");
    values.push(predicted);
  }

  new Chart(document.getElementById("chart"), {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "Industry Value ($)",
        data: values,
        borderWidth: 2
      }]
    }
  });
}

function predictFromAnime() {
  const anime = parseFloat(document.getElementById("animeCount").value);
  const g = params.w0 + params.w1 * anime + params.w2 * params.pred_mean_score;
  const pred = params.last_value * Math.exp(g / 4);

  document.getElementById("output").innerText =
    `Predicted Market Value: $${pred.toFixed(0)}`;

  drawChart(pred);
}

function predictFromMarket() {
  const target = parseFloat(document.getElementById("targetValue").value);
  const growth = Math.log(target / params.last_value);

  const num = growth - params.w0 - params.w2 * params.pred_mean_score;
  const anime = num <= 0 ? 0 : num / params.w1;

  document.getElementById("output").innerText =
    `Estimated Anime Count: ${anime.toFixed(0)}`;
}
