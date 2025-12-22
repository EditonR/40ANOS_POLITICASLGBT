document.addEventListener("DOMContentLoaded", () => {
  const areaSelect = document.getElementById("filterArea");
  const governoSelect = document.getElementById("filterGoverno");
  const anoSelect = document.getElementById("filterAno");

  const rows = document.querySelectorAll("tbody tr");

  
  const anos = new Set();

  rows.forEach(row => {
    const ano = row.children[2].textContent.trim();
    if (ano) anos.add(ano);
  });

  [...anos]
    .sort((a, b) => a - b)
    .forEach(ano => {
      const option = document.createElement("option");
      option.value = ano;
      option.textContent = ano;
      anoSelect.appendChild(option);
    });

  
  function filtrarTabela() {
    const areaValue = areaSelect.value;
    const governoValue = governoSelect.value;
    const anoValue = anoSelect.value;

    rows.forEach(row => {
      const area = row.children[0].textContent;
      const ano = row.children[2].textContent;
      const governo = row.children[6].textContent;

      const matchArea = !areaValue || area.includes(areaValue);
      const matchAno = !anoValue || ano.includes(anoValue);
      const matchGoverno = !governoValue || governo.includes(governoValue);

      row.style.display = (matchArea && matchAno && matchGoverno)
        ? ""
        : "none";
    });
  }

  
  areaSelect.addEventListener("change", filtrarTabela);
  governoSelect.addEventListener("change", filtrarTabela);
  anoSelect.addEventListener("change", filtrarTabela);
});
