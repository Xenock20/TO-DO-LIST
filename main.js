const form = document.querySelector('form')
const list = document.getElementById('list')


form.addEventListener('click', (e) =>{
    e.preventDefault()

    const tarea = document.getElementById('tarea').value


    if(e.target.matches("input[name=add]")){
        if(tarea !== ""){
            const li = document.createElement('li')
            const span = document.createElement('span')
            span.textContent = tarea

            li.appendChild(span)
            li.appendChild(delBtn())

            list.appendChild(li)

            document.querySelector('.not').style.visibility = "hidden"
            document.querySelector('.not').style.display = "none"
        }
    }
})

function delBtn(){
    const boton = document.createElement('button')

    boton.textContent = "X"
    boton.className = "boton del"

    boton.addEventListener('click', (e)=>{
        const padre = e.target.parentElement
        list.removeChild(padre)
        

        if(document.querySelectorAll('li').length === 0){
            document.querySelector('.not').style.visibility = "visible"
            document.querySelector('.not').style.display = "block"
        }
    })

    return boton
}