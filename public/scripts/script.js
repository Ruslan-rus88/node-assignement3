console.log('from js');

const addElement = (text) => {
    console.log('add element', text);
    const p = document.createElement('p');
    p.innerHTML = text
    const container = document.getElementById('container');
    container.appendChild(p);
}