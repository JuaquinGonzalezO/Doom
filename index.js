const req = fetch(`http://localhost:8087/categorias`).then((resp)=>{ 
    resp.json().then((data)=>{
      const [{id, nombreCategoria}] = data
      
      const idCategoriaOOM = document.getElementById('idCategoria')
      idCategoriaOOM.innerHTML = id
      const nombreCategoriaDOM = document.getElementById('nombreCategoria')
      nombreCategoriaDOM.innerHTML = nombreCategoria
    })
  }).catch(console.warn)