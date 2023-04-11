function traerDatos () {
    const xhtpp = new XMLHttpRequest();
    xhtpp.open('GET','data.json',true);
    xhtpp.send();
    xhtpp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);

            let res = document.querySelector('.container-elementos');
            res.innerHTML='';
            console.log(datos   )

            for (let item of datos) {
                console.log(item)
                res.innerHTML += `
                <div class="elemento">
                    <div class="image"><img src="${item.icon}" alt="reaction"></div>
                    <p class="title-sumary" >${item.category}</p>
                    <p class="sumary-p" >${item.score}</p>
                    <p class="sumary-p2" ">/ 100</p>
                </div>
                `
            }   
        }
    }
}
traerDatos()