"use strict";

const axios = require("axios");
const Room = require("./Room")

const VALID_COMMANDS = ["joke", "members"];

async function parseCommand({text, roomName}) {

  const command = text.slice(1);

  // TODO: Use a switch?

  console.log(roomName)

  if (command === "joke") {
    return await getDadJoke()
  } else if (command === "members") {
    const listOfMembers = [];
    const members = Room.get(roomName).members;
    members.forEach(m => listOfMembers.push(m.name))
    console.log("members", members)
    return listOfMembers.join(", ")
  }

}

async function getDadJoke() {
  const joke = await axios
    .get(
      `https://icanhazdadjoke.com`,
      {
        headers: {
          'User-Agent': 'Rithm School WebSocket Exercise',
          "Accept": "application/json"
        }
      }
    );

  return joke.data.joke;
}

module.exports = {
  parseCommand
};