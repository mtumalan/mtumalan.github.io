function main()
{
    document.getElementById('formSelectUser').onsubmit = async (e) =>
    {
        e.preventDefault()
        console.log("Showing user...");
        const data = new FormData(formSelectUser)//obtiene los datos del formulario
        const dataObj = Object.fromEntries(data.entries())//convierte los datos a un objeto

        let response = await fetch(`http://localhost:5500/api/users/${dataObj['userID']}`,{
            method: 'GET'
        })
        
        if(response.ok)
        {
            let results = await response.json() //convierte los results a json
        
            if(results.length > 0)
            {
                const headers = Object.keys(results[0])
                const values = Object.values(results)
    
                let table = document.createElement("table")//crea una tabla
    
                let tr = table.insertRow(-1)      //crea una fila            
    
                for(const header of headers)//crea los headers de la tabla
                {
                    let th = document.createElement("th")  //crea un header   
                    th.innerHTML = header//agrega el nombre del header
                    tr.appendChild(th)//agrega el header a la fila
                }
    
                for(const row of values)//crea los valores de la tabla
                {
                    let tr = table.insertRow(-1)//crea una fila
    
                    for(const key of Object.keys(row))///crea los valores de la fila
                    {
                        let tabCell = tr.insertCell(-1)//crea un valor
                        tabCell.innerHTML = row[key]//agrega el valor
                    }
                }
                //agrega una tabla al div con id getResultsID
                const container = document.getElementById('getResultsID')
                container.innerHTML = ''
                container.appendChild(table)
            }
            else
            {
                const container = document.getElementById('getResultsID')
                container.innerHTML = 'No results to show.'
            }
        }
        else{
            getResults.innerHTML = response.status
        }
    }
}
    document.getElementById('formInsert').onsubmit = async(e)=>
    {
        e.preventDefault()
        console.log("Inserting...")
        const data = new FormData(formInsert)
        const dataObj = Object.fromEntries(data.entries())
        
        let response = await fetch('http://localhost:5500/api/users',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, //indica que el contenido es json
            body: JSON.stringify(dataObj)
        })
        
        if(response.ok)
        {
            let results = await response.json()
        
            console.log(results)
            localStorage.setItem('username', dataObj.username);
            console.log(localStorage.getItem('username'));
            localStorage.setItem('userlog', true);
            console.log(localStorage.getItem('userlog'));
            console.log(localStorage.getItem('username'));
            location.href = "../index-1.html";
            //postResults.innerHTML = results.message + ' id: ' + results.id
        }
        else{
            postResults.innerHTML = response.status
        }
    }
    //document.getElementById("b-home").onclick = function () {
        //location.href = "index-1.html";
    //};
main()

