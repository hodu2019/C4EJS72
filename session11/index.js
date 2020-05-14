
const root = document.getElementById('root')

async function getData () {
    let res = await fetch('https://5ebd20d6ec34e90016191f8a.mockapi.io/C4E72')
    let data = await res.json()
    return data
}

async function renderUI () {
    let data = await getData()
    root.innerHTML = ""
    console.log(data)
    data.forEach((element) => {
        
        let component = `
        <div>
            <p> ${element.name}</p>
            <img src="${element.avatar}" alt="">
        </div>
        <button onclick ="deletePost(${element.id})">del</button>
        <br>
        `
    root.innerHTML += component
    });
}

async function deletePost(id) {
    console.log(id)
    await fetch(`https://5ebd20d6ec34e90016191f8a.mockapi.io/C4E72/${id}`, {
        method: "delete"
    })
    renderUI()
} 
renderUI()


// const deleteButton = document.getElementById('delete')

// deleteButton.addEventListener('click', () => {
//     fetch('https://5ebd20d6ec34e90016191f8a.mockapi.io/C4E72/1',{
//         method : "delete",
//     }) 
// })

// function uploadData (url,data) {
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
// }

// let formUserInput = document.getElementById('form')

// formUserInput.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let data = {
//         "name": formUserInput.user.value
//     }
//     let url = 'https://5ebd20d6ec34e90016191f8a.mockapi.io/C4E72'
//     uploadData(url,data)
// })


