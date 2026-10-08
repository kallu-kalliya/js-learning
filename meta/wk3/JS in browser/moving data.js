//JSON is just a string - but there are rules that it must follow
/*
it must be a properly-formatted string

Only a subset of values in JavaScript can be properly stringified to JSON and parsed from a JavaScript object into a JSON string.

These values include:

primitive values: strings, numbers, bolleans, null

complex values: objects and arrays (no functions!)

Objects have double-quoted strings for all keys

Properties are comma-delimited both in JSON objects and in JSON arrays, just like in regular JavaScript code

String properties must be surrounded in double quotes. For example:





 */

const currencyInfo = {
    [
        USD: {
            // ...
        },
        GBP: {
            // ...
        },
        EUR: {
            // ...
        }
    ]
}