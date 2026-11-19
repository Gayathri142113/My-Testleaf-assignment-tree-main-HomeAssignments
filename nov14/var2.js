const  browserVersion="Chrome"

function getBrowser()
{
    if (browserVersion==="Chrome")
    {
        let browserVersion="varchrome"
        console.log("var inside if block",browserVersion)
    }
        console.log("var outside if block",browserVersion)
}
getBrowser()