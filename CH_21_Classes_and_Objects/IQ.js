class Browser{
    // Param constructor (arguments)

    constructor(name){

        this.name = name;
        this.isOpen = true;
        console.log(name + "launched");
        
    }

    startBrowser(){
        console.log("Starting the browser")
    }

    closeBrowser(){
        console.log("starting the browser")
    }


}

let chrome = new Browser("chrome");
let firefox = new Browser("firefox");

console.log(chrome.isOpen);

