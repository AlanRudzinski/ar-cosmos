export const cleanTitle = (string) => {
    return capitalizeFirstLetter(string.toLowerCase().replace('_', ' '))
}

export const capitalizeFirstLetter = (string) => {
    if(!string) return
      return string.charAt(0).toUpperCase() + string.slice(1);
}