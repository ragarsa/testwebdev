//MOCK-DATA
const mockData = [{
    name:"blue-street",
    title:'Photo of street',
    info:'Lorem'
},
{
    name:"blue-citie",
    title:'Photo of city',
    info:'City'
},
{
    name:"purple-flowers",
    title:'Photo of Flowers',
    info:'Flowers'
},
{
    name:"tree",
    title:'Photo of tree and rivers',
    info:'River'
}];

const contact = {};

//Query
const titleTopic = document.querySelector('.title-topics');
const textTopic = document.querySelector('.text-topics');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const phoneInput = document.querySelector('#phone-input');
const submitButton = document.querySelector('#submit-form');
const pTargetOne = document.querySelector('.warning-message-1');
const pTargetTwo = document.querySelector('.warning-message-2');
const pTargetThree = document.querySelector('.warning-message-3')


//Events

nameInput.addEventListener('change', () => {
    if( parseInt(nameInput.value.length) <= 5){pTargetOne.textContent = "Ingresa tu nombre completo"}
    setTimeout(() => {pTargetOne.textContent = ''}, 3000)
})


phoneInput.addEventListener('change', () => {
    if(phoneInput.value.length <= '9'){console.log('ingresa mas');
    pTargetTwo.textContent = "Tu número de celular debe contener al menos 10 dígitos";
    setTimeout(() => {pTargetTwo.textContent = ''}, 3000);
}
    
})

emailInput.addEventListener('change', () => {
    if(!emailInput.value.match('/@/')){pTargetThree.textContent = "Ingresa un correo válido"}
    setTimeout(() => {pTargetThree.textContent = ''}, 3000);
})

submitButton.addEventListener('click', () =>{
    contact['name'] = nameInput.value
    contact['email'] = emailInput.value
    contact['phone'] = phoneInput.value
   
})
//Functions
const text = ({alt}) => {
    mockData.map(({name, title, info}) => {
        if (name === alt) {
            titleTopic.innerText = ` ${title} `
            textTopic.innerText = `${info}`
        }
        
    })

    
}
