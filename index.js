#!/usr/bin/env node
import program from "commander";
import handler from "./lib/handler";
import options from "./lib/options";


// TODO: handle missing argument
let cli = program
    .arguments('<project_name>');

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

//Display help if mandatory top-level argument missing
if(!program.args.length){
    console.log(" --- Missing argument <project_name> ---");
    program.help();
}
