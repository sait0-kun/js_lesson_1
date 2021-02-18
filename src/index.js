const sex = "man";
const age = 29;

// console.log("1.", sex === "man" && age < 30); // true
// console.log("2.", sex === "man" && age > 30); // false
// console.log("3.", sex === "woman" && age < 30); // false

// console.log("4.", sex === "man" || age < 30); // true
// console.log("5.", sex === "man" || age > 30); // true
// console.log("6.", sex === "woman" || age < 30); // true
// console.log("7.", sex === "woman" || age > 30); // false

// console.log("8.", !(sex === "man")); // false
// console.log("9.", !(age > 30)); // true
// console.log("10.", !(sex === "woman")); // true

// if ("") console.log("hello"); // false
// if (0) console.log("hello"); // false
// if (-0) console.log("hello"); // false
// if (NaN) console.log("hello"); // false
// if (null) console.log("hello"); // false
// if (undefined) console.log("hello"); // false

// sex === "man" && console.log("男です");
// sex === "woman" && console.log("男です");

sex === "man" || console.log("男です");
sex === "woman" || console.log("女です");
