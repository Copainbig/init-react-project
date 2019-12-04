#!/usr/bin/env node
import commander from "commander";
import handler from "./lib/handler";

commander.arguments('<project_name>')
    .option('-r, --redux <use_redux>', 'If you need to use redux.')
    .option('-b, --browser-cache <browser_cache>', 'Set the duration your HTML file will be cached by the browser (in seconds).')
    .description('Simple and easily customizable react project creation CLI.')
    .action((project_name) => { 
        handler(project_name, commander["redux"], commander["browserCache"]) 
    })
    .parse(process.argv)