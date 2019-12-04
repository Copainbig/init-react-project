import chalk from "chalk";
import { isAnyOptionSet, getTitle, getProgressBar } from "./utils";

export default (fileName, isRedux, browserCache) => {
    const startMessage = `Creating the React project ${fileName} !!!`;
    console.log(chalk.red.bold(startMessage));
    console.log(chalk.bold(`\n${"#".repeat(startMessage.length)}\n`));

    // **** Display options detail ****
    console.log(getTitle("OPTIONS", startMessage.length))

    const options = {
        isRedux,
        browserCache
    }

    if(!isAnyOptionSet(Object.values(options))) console.log("-- No options set, let's use default configuration! -- ")
    if(isRedux) console.log("- This project will use REDUX! -");
    if(browserCache) console.log(`- The HTML file will be browser cached for ${browserCache} seconds. - `);

    // **** Create project ****
    console.log(getTitle("CREATION", startMessage.length));

    const progressBar = getProgressBar();
    progressBar.start(100,0)

    // TODO: to_some_stuff
    progressBar.update(50);

    progressBar.stop();    
}