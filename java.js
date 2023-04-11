function traerDatos () {
    const xhtpp = new XMLHttpRequest();
    xhtpp.open('GET','data.json',true);
    xhtpp.send();
    xhtpp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText)

            
        }
    }
}