import chalk from "chalk";
import cliProgress from "cli-progress";

export const getTitle = (title, length) =>{
    if(length < title.length || !length){
        return chalk.bold(`\n# ${title} #\n`);
    } else {
        const halfWidth = (length/2) - (title.length/2);
        return chalk.bold(`\n${' '.repeat(halfWidth)} # ${title} #\n`);
    }
}

export const isAnyOptionSet = (options) => {
    return options.reduce((acc, curr) => {
        if (curr) acc=true;
        return acc;
    }, false)
}

export const getProgressBar = () => { return new cliProgress.SingleBar({    
        format: 'Progress {bar} {percentage}%',
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
    }
)};