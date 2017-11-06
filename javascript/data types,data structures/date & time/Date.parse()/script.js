// Method Date.parse() parses a string date according to the format "YYYY-MM-DDTHH:mm:ss.sssZ" and returns the number of milliseconds

// with UTC time zone
var msUTC = Date.parse("2012-01-25T12:20:10Z");
console.log(msUTC + " ms"); // 1327494010000 ms

// with +02:00 time zone
var ms = Date.parse("2012-01-25T12:20:10+02:00");
console.log(ms + " ms"); // 1327486810000 ms
