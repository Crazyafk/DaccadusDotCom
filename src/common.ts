// This File contains common functions used for All types of applications on the site.

// Find the Root Project URL for the current environment. Returns URL, ending with '/'.
export function getRootURL(): String
{
    let full_url: String = window.location.href

    const possible_roots: String[] = [
        'http://127.0.0.1:5500/',
        'https://crazyafk.github.io/DaccadusDotCom/'
        ]

    for(var root of possible_roots) //If root is part of url, return root!
    {
        if(full_url.indexOf(root as string) !== -1) //Slightly more verbose, older solution for greater compatability
        {
            return(root);
        }
    }

    throw Error("Root URL not found. If you have changed the site URL or are using a different test environment,"+
        " you will need to update the list of possible roots in common.ts.getRootURL()")
}

// Creates FormData object when Form Submitted. (using Listeners)
// Passes it to the Callback function for page-specific processing.
export function addFormListener(document: Document, callback: CallableFunction)
{
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector("#form") as HTMLFormElement
        if(form){
            form.addEventListener("submit", (event) => {
                event.preventDefault()
                const formData = new FormData(form)
                console.log(formData)
                callback(formData)
            })
        }
    })
}

// Initiates download of given object as a JSON in the client's browser.
// Courtesy of mlimper on StackOverflow: https://stackoverflow.com/a/30800715
export function downloadObjectAsJson(exportObj: any, exportName: string){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}
