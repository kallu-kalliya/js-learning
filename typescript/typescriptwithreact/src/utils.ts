import { words } from "./word";

/*
CHALLENGE 1: Type the return value of getRandomWord()
CHALLENGE 2: Type the randomIndex variable 
*/


/*
CHALLENGE 1: Complete the getRandomIndex function
CHALLENGE 2: Add type annotations where relevant
CHALLENGE 3: Use getRandomIndex in getRandomWord and
             getFarewellText
*/
function getRandomIndex(length:number):number{
     const randomIndex:number = Math.floor(Math.random() * length)
     return randomIndex
}

export function getRandomWord():string {
    const randomIndex = getRandomIndex(words.length)
    return words[randomIndex]
}

/*
CHALLENGE 1: Type the parameter of getFarwellText()
CHALLENGE 2: Type the return value of getFarewellText()
CHALLENGE 3: Type the options variable
CHALLENGE 4: Type the randomIndex variable 
*/


export function getFarewellText(language:string):string {
    const options:string[] = [
        `Farewell, ${language}`,
        `Adios, ${language}`,
        `R.I.P., ${language}`,
        `We'll miss you, ${language}`,
        `Oh no, not ${language}!`,
        `${language} bites the dust`,
        `Gone but not forgotten, ${language}`,
        `The end of ${language} as we know it`,
        `Off into the sunset, ${language}`,
        `${language}, it's been real`,
        `${language}, your watch has ended`,
        `${language} has left the building`
    ];

    const randomIndex = getRandomIndex(options.length)
    return options[randomIndex];
}