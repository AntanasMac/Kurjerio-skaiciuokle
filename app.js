function courierCalculator(dienosPajamos,dienosIslaidos,nuvaziuotasAtstumas,atliktiUzsakymai,isdirbtasLaikas) {

    const mokesciai = 0.21;
    const taupymasRemontams = 0.20;

    const MokestinisPaskaiciavimas = dienosPajamos * mokesciai;
    const mokestinisPaskaiciavimasSuapvalintas = MokestinisPaskaiciavimas.toFixed(2);

    const TaupymoPaskaiciavimas = (dienosPajamos - MokestinisPaskaiciavimas) * taupymasRemontams;
    const taupymasRemontamsSuapvalintas = TaupymoPaskaiciavimas.toFixed(2);

    const valandinisPelnas = dienosPajamos / isdirbtasLaikas;
    const valandinisPelnasSuapvalintas = valandinisPelnas.toFixed(2);

    const uzsakymoIkainis = dienosPajamos / atliktiUzsakymai;
    const uzsakymoIkainisSuapvalintas = uzsakymoIkainis.toFixed(2);

    const galutinisPelnas = dienosPajamos - (MokestinisPaskaiciavimas + TaupymoPaskaiciavimas + dienosIslaidos);
    const galutinisPelnasSuapvalintas = galutinisPelnas.toFixed(2);

    const dienosRealusisValandinisIkainis = galutinisPelnas / isdirbtasLaikas;
    const dienosRealusisValandinisIkainisSuapvalintas = dienosRealusisValandinisIkainis.toFixed(2);

    const kilometroUzdarbis = galutinisPelnas / nuvaziuotasAtstumas;
    const kilometroUzdarbisSuapvalinus = kilometroUzdarbis.toFixed(2);
   

    console.log(`dienosPajamos: ${dienosPajamos}`);
    console.log(`kiek atsideti mokesciams: ${mokestinisPaskaiciavimasSuapvalintas}`);
    console.log(`kiek atsideti taupymui remontams: ${taupymasRemontamsSuapvalintas}`);
    console.log(`nuvaziuotas atstumas: ${nuvaziuotasAtstumas}`);
    console.log(`Atliktu uzsakymu skaicius: ${atliktiUzsakymai}`);
    console.log(`vidutiniskas vieno uzsakymo ikainis: ${uzsakymoIkainisSuapvalintas}`);
    console.log(`Isdirbtas laikas: ${isdirbtasLaikas}`);
    console.log(`Valandinis pelnas: ${valandinisPelnasSuapvalintas}`);
    console.log(`Vidutinikas nuvaziuoto kilometro uzdarbis: ${kilometroUzdarbisSuapvalinus}`);
    console.log(`Dienos galutinis pelnas: ${galutinisPelnasSuapvalintas}`);
    console.log(`Vienos valandos darbo realusis uzdarbis (atskaicius darbui butinas sanaudas/mokescius/taupyma remontams): ${dienosRealusisValandinisIkainisSuapvalintas}`);

  }

  let dienosPajamosInput = 49.36;
  let PaskaiciavimoRezultatas = courierCalculator(dienosPajamosInput,15,83.9,12,6);