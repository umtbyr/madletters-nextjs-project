const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

export function generateRoomCode() {
  let roomCode = "";

  while (roomCode.length <= 6) {
    roomCode += chars[Math.floor(Math.random() * 35)];
  }

  return roomCode;

  //then add valdation isAlreadyExists
}
