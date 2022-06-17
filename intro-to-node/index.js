//jshint esversion:6

// const fs = require('fs') //Import File System Module

// fs.copyFileSync("file1.txt", "file2.txt") //Copies file1.txt to file2.txt

var superheroes = require('superheroes')
var supervillains = require('supervillains')

var mySuperHeroName = superheroes.random()
console.log(mySuperHeroName)

var mySuperVillainName = supervillains.random()
console.log(mySuperVillainName)

