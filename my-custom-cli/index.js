#!/usr/bin/env node
const fetch = require('node-fetch');
const inquirer = require('inquirer');
// const yargs = require("yargs")

// const { argv } = yargs(process.argv)

const printFirstSixMoves = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokemon = await response.json();
  const moves = pokemon.moves.map(({ move }) => move.name);
  console.log(moves.slice(0, 6));
};

const prompt = inquirer.createPromptModule();

prompt([
  {
    type: 'input',
    name: 'pokemonName',
    message: "Enter a pokemon name to view it's first 6 moves",
  },
]).then((asnwers) => {
  const pokemonName = asnwers.pokemonName;
  printFirstSixMoves(pokemonName);
});
