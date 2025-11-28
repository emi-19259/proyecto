document.addEventListener("DOMContentLoaded", () => {

  // Datos de los 10 mamíferos actualizados
  const animales = [
    {
      nombre: "Jaguar",
      cientifico: "Panthera onca",
      familia: "Felidae",
      alimentacion: "Carnívoro (venados, pecaríes, monos, reptiles)",
      poblacion: "≈ 60 – 170 individuos estimados en la región protegida",
      img: "Extras/Jaguar.jpg"
    },

    {
      nombre: "Tapir Centroamericano",
      cientifico: "Tapirus bairdii",
      familia: "Tapiridae",
      alimentacion: "Herbívoro (hojas, frutos, brotes)",
      poblacion: "≈ 150 – 250 en zonas núcleo de la Lacandona",
      img: "Extras/Tapir.jpg"
    },

    {
      nombre: "Mono Araña",
      cientifico: "Ateles geoffroyi",
      familia: "Atelidae",
      alimentacion: "Frugívoro (frutas, semillas, hojas tiernas)",
      poblacion: "En declive; vulnerable pero presente en grupos",
      img: "Extras/Mono araña.jpg"
    },

    {
      nombre: "Ocelote",
      cientifico: "Leopardus pardalis",
      familia: "Felidae",
      alimentacion: "Carnívoro (roedores, aves, reptiles)",
      poblacion: "Estable, pero amenazado por pérdida de hábitat",
      img: "Extras/Ocelote.jpg"
    },

    {
      nombre: "Venado Cola Blanca",
      cientifico: "Odocoileus virginianus",
      familia: "Cervidae",
      alimentacion: "Herbívoro (hierbas, frutos, brotes, hojas)",
      poblacion: "Común en zonas conservadas",
      img: "Extras/Venado cola blanca.jpg"
    },

    {
      nombre: "Pecarí de Collar",
      cientifico: "Pecari tajacu",
      familia: "Tayassuidae",
      alimentacion: "Omnívoro (frutos, raíces, insectos)",
      poblacion: "Abundante en varios sectores de la Lacandona",
      img: "Extras/Pecari de collar.jpg"
    },

    {
      nombre: "Mapache",
      cientifico: "Procyon lotor",
      familia: "Procyonidae",
      alimentacion: "Omnívoro (frutas, insectos, huevos, pequeños vertebrados)",
      poblacion: "Común en áreas cercanas a cuerpos de agua",
      img: "Extras/Mapache.jpg"
    },

    {
      nombre: "Coatí",
      cientifico: "Nasua narica",
      familia: "Procyonidae",
      alimentacion: "Omnívoro (frutas, insectos, pequeños vertebrados)",
      poblacion: "Muy común; observado en grupos grandes",
      img: "Extras/Coati.jpg"
    },

    {
      nombre: "Armadillo Nueve Bandas",
      cientifico: "Dasypus novemcinctus",
      familia: "Dasypodidae",
      alimentacion: "Insectívoro (hormigas, termitas, larvas)",
      poblacion: "Frecuente en zonas de matorral y selva baja",
      img: "Extras/Armadillo nueve bandas.jpg"
    },

    {
      nombre: "Oso Hormiguero Menor (Tamandúa)",
      cientifico: "Tamandua mexicana",
      familia: "Myrmecophagidae",
      alimentacion: "Insectívoro (hormigas, termitas)",
      poblacion: "Presente pero difícil de observar",
      img: "Extras/Oso hormiguero menor.jpg"
    },

    {
      nombre: "Tlacuache Común",
      cientifico: "Didelphis marsupialis",
      familia: "Didelphidae",
      alimentacion: "Omnívoro (frutas, insectos, carroña, pequeños animales)",
      poblacion: "Muy común y adaptable a distintos ambientes",
      img: "Extras/Tlacuache comun.jpg"
    },

    {
      nombre: "Cacomixtle",
      cientifico: "Bassariscus sumichrasti",
      familia: "Procyonidae",
      alimentacion: "Omnívoro (frutas, insectos, aves pequeñas)",
      poblacion: "Moderado; activo principalmente de noche",
      img: "Extras/Cacomixtle.jpg"
    }
  ];

  const contenedor = document.getElementById("contenedor");

  animales.forEach(a => {
    const card = document.createElement("div");
    card.className = "card";

    // Etiquetas dl, dd, dt
    card.innerHTML = `
      <img src="${a.img}" alt="${a.nombre}">
      <h2>${a.nombre}</h2>

      <dl>
        <dt>Nombre científico</dt>
        <dd><em>${a.cientifico}</em></dd>

        <dt>Familia</dt>
        <dd>${a.familia}</dd>

        <dt>Alimentación</dt>
        <dd>${a.alimentacion}</dd>

        <dt>Población estimada</dt>
        <dd>${a.poblacion}</dd>
      </dl>

      <button class="btn ver">Ver fuentes</button>
      <button class="copy-btn">Copiar información</button>

      <div class="sources">
        <strong>Fuentes:</strong>
        <ul>
          <li>Estudios de foto–trampeo y censos en la Selva Lacandona</li>
          <li>Investigaciones UNAM / CONABIO / Conanp</li>
          <li>Revisión biológica general de cada especie</li>
        </ul>
      </div>
    `;

    // Mostrar / ocultar fuentes
    card.querySelector(".btn.ver").addEventListener("click", () => {
      const box = card.querySelector(".sources");
      box.style.display = box.style.display === "block" ? "none" : "block";
    });

    // Copiar información
    card.querySelector(".copy-btn").addEventListener("click", () => {
      const texto = `
${a.nombre}
Nombre científico: ${a.cientifico}
Familia: ${a.familia}
Alimentación: ${a.alimentacion}
Población estimada: ${a.poblacion}
      `.trim();

      navigator.clipboard.writeText(texto)
        .then(() => {
          card.querySelector(".copy-btn").textContent = "¡Copiado!";
          setTimeout(() => {
            card.querySelector(".copy-btn").textContent = "Copiar información";
          }, 1500);
        });
    });

    contenedor.appendChild(card);
  });

});
