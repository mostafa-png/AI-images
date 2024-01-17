const api = "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" // 17:00 
const inp = document.getElementById('inp')
const images = document.querySelector('.images')

const getImage = async () => {
    // make  a request to open AI api
    const methods = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${api}`
        },
        body:JSON.stringify({
            "prompt":inp.value,
            "n":3,
            "size":"256x256"
        }) 
    }
    const res = await fetch("https://api.openai.com/v1/images/generations", methods) // 20:00
    //parse the response as json
    const data = await res.json()
    const listImage = data.data;
    images.innerHTML = ''
    listImage.map(photo => {
        const container = document.createElement("div")
        images.append(container)
        const img = document.createElement("img")
        container.append(img)
        img.src= photo.url
    })
}
































