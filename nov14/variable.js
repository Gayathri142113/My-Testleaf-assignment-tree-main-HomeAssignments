const  browserVersion="Chrome"

function getBrowser()
{
    if (browserVersion==="Chrome")
    {
        var getBrowserVersion="varchrome"
        console.log("var inside if block",getBrowserVersion)
    }
        console.log("var outside if block",getBrowserVersion)
}
getBrowser()