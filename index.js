#!/usr/bin/env node
import program from "commander";
import handler from "./lib/handler";
import options from "./lib/options";


// TODO: handle missing argument
let cli = program
    .arguments('<projectName>');

options.forEach(elt => {
    if (elt.default) {
        cli = cli.option(elt.flag, elt.desc, elt.default);
    } else {
        cli = cli.option(elt.flag, elt.desc);
    }
});

cli.description('Simple and easily customizable react project creation CLI.')
    .action((projectName) => { 
        const params = options.map(elt => ({...elt, value: program[elt.name]}) );
        try{
            handler(projectName, params) 
        }catch (error) {
            console.error(error);
        }
    })
    .parse(process.argv);
