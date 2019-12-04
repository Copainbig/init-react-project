import { getProgressBar, display } from "./display";

export default (projectName, options) => {
    console.log(projectName)
    if(!projectName) throw new Error("Missing argument : project_name");
    display.showStartMessage(projectName);

    // **** Display options detail ****
    display.showTitle("OPTIONS");
    display.showOptionsDetails(options);

    // **** Create project ****
    display.showTitle("CREATION");

    const progressBar = getProgressBar();
    progressBar.start(100,0)

    // TODO: to_some_stuff
    progressBar.update(50);

    progressBar.stop();    
    display.showEndMessage();
};