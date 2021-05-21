export const getNameData = (data, title) => {
    switch (title) {
        case 'starlink':
            return data.map(element => element.version);
        case 'capsules':
            return data.map(element => element.type);
        default:
            return data.map(element => element.name);
        // case 'rockets':
        //     return data.map(element => element.name);
        // case 'crew':
        //     return data.map(element => element.name);
    }
}