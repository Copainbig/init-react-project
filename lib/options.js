import { valuePlaceholder } from "./constants";

export default [
    {
        name: "redux",
        flag: "-r, --redux",
        desc: "If you need to use redux.",
        selectionMessage: "This project will use Redux."
    },
    {
        name: "browserCache",
        flag: "-b, --browser-cache <browser_cache>",
        desc: "Set the duration your HTML file will be cached by the browser (in seconds).",
        selectionMessage: `The browser cache duration of the HTML file has been set to ${valuePlaceholder} seconds.`
    },
    {
        name: "storybook",
        flag: "-s, --storybook",
        desc: "If you want to use Storybook.",
        selectionMessage: "This project will use Storybook."
    },
    {
        name: "intl",
        flag: "-i, --intl",
        desc: "If you want to add support for the i18n.",
        selectionMessage: "This project will use react-intl."
    },
]