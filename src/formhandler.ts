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

export function addFormListener(document: Document, callback: CallableFunction)
{
    console.log("getformdata onLoad called");
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
