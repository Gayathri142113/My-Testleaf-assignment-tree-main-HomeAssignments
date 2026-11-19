function launchBrowser(String)
{
let browserName=String
if (browserName==="Chrome")
{
    console.log("The Given browser is ",browserName)
}
else
{
    console.log("The Given browser is ",browserName)
}
}

function runTests(String)
{
    let testType=String
    switch (testType) {
case "uat":
console.log("uat");
break;
case "sanity":
console.log("sanity");
break;
case "regression":
console.log("regression");
break;
default:
console.log("smoke"); 
}
}
launchBrowser("Chrome");
runTests("uat");
launchBrowser("edge");
runTests("sanity")
launchBrowser("Firefox");
runTests("regression")
launchBrowser("default");
runTests("")