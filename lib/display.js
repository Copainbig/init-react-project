import chalk from "chalk";
import cliProgress from "cli-progress";
import { isAnyOptionSet } from "./utils";
import { valuePlaceholder } from "./constants";

export const getProgressBar = () => { return new cliProgress.SingleBar({    
    format: 'Progress {bar} {percentage}%',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
}
)};

const getStartMessage = projectName => {
    const startMessage = `Creating the React project : `;
    const startMessageUnderline = `${"#".repeat(projectName.length + startMessage.length + 5)}\n`;
    return `\n${chalk.bold(startMessage)} ${chalk.red.bold(projectName)} !!!\n${startMessageUnderline}`;
}

const getTitle = title => chalk.bold(`\n${' '.repeat(6)} # ${title} #\n`);

const getOptionsDetails = options => {
    if(!isAnyOptionSet(options)) {
        return "-- No options set, let's use default configuration! -- ";
    } else {
        const optionsToDisplay = [];
        options.forEach(elt => {
            if (elt.value) {
                const optionsDescription = `- ${elt.selectionMessage.replace(valuePlaceholder, elt.value)}`
                optionsToDisplay.push(optionsDescription);
            }
        });
        return optionsToDisplay.join("\n");
    }
}

const getEndMessage = () => (
`
########################
Setup is over! Have fun!
`
);

export const  display = {
    showStartMessage: projectName => console.log(getStartMessage(projectName)),
    showTitle: title => console.log(getTitle(title)),
    showOptionsDetails: options => console.log(getOptionsDetails(options)),
    showEndMessage: () => console.log(getEndMessage())
}