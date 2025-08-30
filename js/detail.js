let xmlhttp = new XMLHttpRequest();

function loadXMLDocAndDisplayBook(){       
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            displayBookById();
        }
    };

    xmlhttp.open("GET", "https://obiwan.univ-brest.fr/~e22204613/DATA/bdd.xml", true);
    xmlhttp.send();   
}

function displayBookById() {   
    let bookid;

    bookid = new URLSearchParams(window.location.search).get("id");

    let i;       
    let xmlDoc = xmlhttp.responseXML;   
    let x = xmlDoc.getElementsByTagName("Question");   

    for (i = 0; i < x.length; i++) {       
        if (x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue == bookid){
            document.getElementById("txtcontenu").value = x[i].getElementsByTagName("contenu")[0].textContent;
            document.getElementById("txtthematique").value = x[i].getElementsByTagName("thematique")[0].textContent;
            document.getElementById("txtniveau").value = x[i].getElementsByTagName("niveau")[0].textContent;
        }
    }
}