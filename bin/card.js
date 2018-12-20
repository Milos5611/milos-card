#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round'
}

// Text + chalk definitions
const data = {
    name: chalk.white('Milos Nikolic/'),
    handle: chalk.cyan('Milos5611'),
    work: chalk.white('IT Consultant / Senior software engineer'),
    github: chalk.cyan('https://github.com/Milos5611'),
    linkedin: chalk.cyan('https://www.linkedin.com/in/nikolicmilos/'),
    npx: chalk.white('npx Milos5611'),
    labelWork: chalk.white.bold('      Work:'),
    labelGitHub: chalk.white.bold('    GitHub:'),
    labelLinkedIn: chalk.white.bold('  LinkedIn:'),
    labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + newline + githubing + newline + linkedining + newline + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
