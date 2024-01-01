
export const formatSunriseTime = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    let formattedHours = hours % 12; // Convertir a formato de 12 horas
    formattedHours = formattedHours ? formattedHours : 12; // Si las horas son 0, entonces debería ser 12
    const period = hours < 12 ? 'AM' : 'PM'; // Determinar si es AM o PM

    return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
}
