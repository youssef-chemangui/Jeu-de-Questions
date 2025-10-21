let xmlhttp = new XMLHttpRequest();
function loadXMLDoc() {
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            fetchData();
        }
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            displayById();
        }
    };
    xmlhttp.open("GET", "https://youssef-chemangui.github.io/Jeu-de-Questions/data/bdd.xml", true);
    xmlhttp.send();
}
    function fetchData() {
        let i;
        let xmlDoc = xmlhttp.responseXML;
        let table = "<tr><th>Question</th><th>Réponse 1</th><th>Réponse 2</th><th>Réponse 3</th></tr>";
        let x = xmlDoc.getElementsByTagName("question");
        for (i = 0; i < x.length; i++) {
            table += "<tr><td>" +
            x[i].getElementsByTagName("contenu")[0].textContent +
            "</td><td>" +
            x[i].getElementsByTagName("response1")[0].textContent +
            "</td><td>" + 
            x[i].getElementsByTagName("response2")[0].textContent +
            "</td><td>" + 
            x[i].getElementsByTagName("response3")[0].textContent +
            "</td>" +  
            "</tr>";
        }
        document.getElementById("data").innerHTML = table;
    }     
    function filtrerData() {
        let xmlDoc = xmlhttp.responseXML;
        let table = "<tr><th>Question</th><th>Réponse 1</th><th>Réponse 2</th><th>Réponse 3</th><th>Thématique</th><th>voir plus sur les détails</th></tr>";
        let x = xmlDoc.getElementsByTagName("question");
    

        let choix = document.getElementById("thematique").value;
    

        for (let i = 0; i < x.length; i++) {
            let thematique = x[i].getElementsByTagName("thematique")[0].textContent;
    

            if (choix === "tout" || thematique === choix) {
                table += "<tr><td>" +
                    x[i].getElementsByTagName("contenu")[0].textContent +
                    "</td><td>" +
                    x[i].getElementsByTagName("response1")[0].textContent +
                    "</td><td>" +
                    x[i].getElementsByTagName("response2")[0].textContent +
                    "</td><td>" +
                    
                    x[i].getElementsByTagName("response3")[0].textContent +
                    "</td><td>" +
                    thematique +
                    "</td><td>" +
                    "<a href='detail.html?id="
                    + x[i].getElementsByTagName("id")[0].textContent
                    + "'>Details</a>"
                    "</td></tr>";
            }
        }
    

        document.getElementById("data").innerHTML = table;
    }
    
    function displayById() {   
        let Questionid;
    
        Questionid = new URLSearchParams(window.location.search).get("id");
    
        let i;       
        let xmlDoc = xmlhttp.responseXML;   
        let x = xmlDoc.getElementsByTagName("Question");   
    
        for (i = 0; i < x.length; i++) {       
            if (x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue == Questionid){
                document.getElementById("txtcontenu").value = x[i].getElementsByTagName("contenu")[0].textContent;
                document.getElementById("txtthematique").value = x[i].getElementsByTagName("thematique")[0].textContent;
                document.getElementById("txtniveau").value = x[i].getElementsByTagName("niveau")[0].textContent;
            }
        }
    }
