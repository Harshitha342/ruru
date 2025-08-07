function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const merdien = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    hours = hours.toString().padStart(2, '0'); // Ensure two digits
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds} ${merdien}`;
    document.getElementById('clock').textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);