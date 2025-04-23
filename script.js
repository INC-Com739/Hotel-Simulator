'use strict';

const guests = [];
const occupiedRooms = new Set();

function Guest(name, room, duration) {
  this.name = name;
  this.room = room;
  this.duration = duration;
}

document.getElementById('checkInForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('guestName').value;
  const room = parseInt(document.getElementById('roomNumber').value);
  const duration = parseInt(document.getElementById('stayDuration').value);
  
  if (occupiedRooms.has(room)) {
    alert('Room is already occupied. Please select a different room.');
    return;
  }
  
  const newGuest = new Guest(name, room, duration);
  guests.push(newGuest);
  occupiedRooms.add(room);
  displayGuests();
  this.reset();
});

function displayGuests() {
  const guestList = document.getElementById('guestList');
  guestList.innerHTML = '';
  guests.forEach(guest => {
    const card = `<div class="card">
                    <h5>${guest.name}</h5>
                    <p>Room: ${guest.room}</p>
                    <p>Duration: ${guest.duration} nights</p>
                  </div>`;
    guestList.innerHTML += card;
  });
}

