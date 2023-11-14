const doc = document;

const src = doc.getElementById("inp-line");
const outsrc = doc.getElementById("out-line");
let prntSrc = doc.getElementById("inp");
let prntOut = doc.getElementById("out");


console.log(outsrc)

outsrc.innerText = "hi"

outsrc.innerHTML = "No Link Available"
outsrc.removeAttribute("href");

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs != undefined) {
        let url = tabs[0].url;

        let domain = (((url.split("://"))[1]).split("/"))[0]
        domain = domain.toLowerCase();

        src.innerHTML = "Src : <u style=\"color:grey\">" + domain + "</u>"



        prntSrc.href = "https://" + domain;

        if (domain === "ncert.nic.in") {


            if ((((((url.split("://"))[1]).split("/"))[1]).toLowerCase()).includes("textbook.php?")) {


                let fileAdd = url.split("?")[1];
                prntOut.href = "https://"+domain+"/textbook/pdf/"+(fileAdd.split("="))[0]+((((fileAdd.split("="))[1]).split("-"))[0]).padStart(2,"0")+".pdf";



                // outsrc.innerHTML = html


                outsrc.innerHTML = "Here : <u style=\"color:grey\">" + "Click Here to View PDF" + "</u>"



            }

            else {
                outsrc.innerHTML = "No Link Available"
                // prntOut.removeAttribute("href");
                prntOut.href = "https://linkedin.com/in/wpsadi"
            }

        }

        else {
            outsrc.innerHTML = "No Link Available"
            // prntOut.removeAttribute("href");
            prntOut.href = "https://linkedin.com/in/wpsadi"
        }
    }
    else {
        src.innerHTML = "No Link Available"
        prntSrc.removeAttribute("href");

        outsrc.innerHTML = "No Link Available"
        // prntOut.removeAttribute("href");
        prntOut.href = "https://linkedin.com/in/wpsadi"
    }



});