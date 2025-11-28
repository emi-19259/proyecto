document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("alimentacion");

  select.addEventListener("change", function () {
    const tipo = select.value;
    if (tipo !== "") {
      const url = `Tipos de dietas.html?tipo=${tipo}`;
      window.open(url, "_blank"); // Abre en nueva ventana o pestaña
    }
  });
});