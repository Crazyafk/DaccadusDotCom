// This File contains common functions used for All types of applications on the site.

// Find the Root Project URL for the current environment. Returns URL, ending with '/'.
export function getRootURL(): String
{
    let full_url: String = window.location.href

    const possible_roots: String[] = [
        'https://daccadus.com/',
        'https://www.daccadus.com/',
        'http://daccadus.com/',
        'http://www.daccadus.com/',
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

// Gets header from header.html and adds it to id #addheader div in the given document.
export async function addHeader(document: Document)
{
    const root: String = getRootURL()
    let headerdocstring: String = await ((await fetch(root+'header.html')).text())
    let headerdoc: Document = new DOMParser().parseFromString(headerdocstring as string, "text/html")
    let header: HTMLElement = headerdoc.getElementById('header')

    //replace root urls where needed
    let urls: HTMLCollection = header.getElementsByClassName("replace-root-url")
    for(let i = 0; i < urls.length; i++)
    {
        let url: HTMLAnchorElement = urls[i] as HTMLAnchorElement
        url.setAttribute("href", url.getAttribute("href").replace("root", root as string))
    }

    document.getElementById('addheader').appendChild(header)
}

// Takes a list of strings, turns them into a string seperated by ", "
export function listToString(list: string[]): String
{
    let result: String = ""
    for(let i = 0; i < list.length; i++)
    {
        let isLast: boolean = i == list.length - 1
        result = result.concat(list[i])
        if(!isLast){result = result.concat(", ")}
    }
    return(result)
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
