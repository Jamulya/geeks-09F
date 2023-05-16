const ROOT = document.getElementById('root')


const btnModal = document.createElement('button')
ROOT.append(btnModal)
btnModal.textContent = 'click me for more info';
btnModal.style.cssText = `
    background-color: red;
    color: white;
    font-size: 1rem;
    margin: 0 auto;
    margin-left: 20px;
    display: block;
    padding: 8px 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;    
`

btnModal.addEventListener('mouseover', () => {
    btnModal.style.backgroundColor = 'green'
})
btnModal.addEventListener('mouseout', () => {
    btnModal.style.backgroundColor = 'red'
})


const modalWindow = document.createElement('div')
modalWindow.style.cssText= `
// position: fixed;
// top: 50%;
// left: 50%;
// transform: translate(-50%, -50%);
position: relative;
width: 300px;
height: 300px;
background-color: #fff;
padding: 20px;
font-size: 1.5rem;
`
modalWindow.textContent = 'Lorem ipsum dolor sit amet consectetur.'


const modal = document.createElement('div')
modal.style.cssText = `
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: #00000080;
display: flex;
justify-content: center;
align-items: center;
`

modal.append(modalWindow)

btnModal.addEventListener('click', () => {
    ROOT.append(modal)
})


const closeModel = document.createElement('button')
closeModel.textContent = 'x'
modalWindow.append(closeModel)
closeModel.style.cssText = `
position: absolute;
top: 0;
right: 0;
background-color: red;
width: 30px;
height: 30px;
color: white;
border: none;
`


closeModel.addEventListener('click', () => {
    modal.remove()
})

modal.addEventListener('click', (event) => {
    if(event.target === modal){
        modal.remove()
    }
})




