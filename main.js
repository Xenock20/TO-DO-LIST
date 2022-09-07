const form = document.querySelector('form')
const list = document.getElementById('list')
let id = 0
const LISTA = []


function add(tr, id){
            const li = document.createElement('li')
            const span = document.createElement('span')
            span.textContent = tr
            li.setAttribute("id", id)

            li.appendChild(span)
            li.appendChild(delBtn())

            list.appendChild(li)
}


form.addEventListener('click', (e) =>{
    e.preventDefault()

    const tarea = document.getElementById('tarea').value


    if(e.target.matches("input[name=add]")){
        if(tarea !== ""){

            add(tarea, id)
            LISTA.push({
                id: id,
                tr: tarea,
                eliminado: false
            })

            id++

            console.log(LISTA)

            document.querySelector('.not').style.visibility = "hidden"
            document.querySelector('.not').style.display = "none"
        }
    }
})

document.addEventListener('keyup', (e) =>{
    if(e.key == 'Enter'){
        const tarea = document.getElementById('tarea').value


        if(form.target.matches("input[name=add]")){
            if(tarea !== ""){

                add(tarea)
                LISTA.push({
                id: id,
                tr: tarea
                })

                id++

                document.querySelector('.not').style.visibility = "hidden"
                document.querySelector('.not').style.display = "none"
            }
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
        LISTA.forEach(ele =>{
            const elemento = Object.values(ele)
            if(elemento[0] === parseInt(padre.id)){
                LISTA.splice(LISTA.indexOf(ele), 1)
            }
        })     

        if(document.querySelectorAll('li').length === 0){
            document.querySelector('.not').style.visibility = "visible"
            document.querySelector('.not').style.display = "block"
        }
    })

    return boton
}

