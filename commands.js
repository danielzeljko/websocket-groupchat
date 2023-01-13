"use strict";

const VALID_COMMANDS = ["joke"]

function parseCommand(msg){
  // msg = /joke

  const command = msg.slice(1);

  if(VALID_COMMANDS.includes(command)){
    // GET DAD JOKE
  }

}

async function getDadJoke(){

}

module.exports = {
  parseCommand
}