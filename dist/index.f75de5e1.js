AOS.init();
const dataDoEvento = new Date("Jan 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaDoEvento = timeStampDoEvento - timeStampAtual;
    const diaEmMs = 86400000;
    const horaEmMs = 3600000;
    const minutoEmMs = 60000;
    const diasAteOEvento = Math.floor(distanciaDoEvento / diaEmMs);
    const horasAteOEvento = Math.floor(distanciaDoEvento % diaEmMs / horaEmMs);
    const minutosAteOEvento = Math.floor(distanciaDoEvento % horaEmMs / minutoEmMs);
    const segundosAteOEvento = Math.floor(distanciaDoEvento % minutoEmMs / 1000);
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    if (distanciaDoEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
