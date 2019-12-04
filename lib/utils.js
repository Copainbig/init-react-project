export const isAnyOptionSet = options => {
    return options.reduce((acc, curr) => {
        if (curr.value) acc=true;
        return acc;
    }, false)
}

