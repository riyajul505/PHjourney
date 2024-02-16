function triangleArea(){
    const base = parseFloat(document.getElementById('triangle-base').value);
    const height = parseFloat(document.getElementById('triangle-height').value);

    const result = (0.5*base*height);
    document.getElementById('triangle-span').innerText = result;
}


function recTiangleArea(){
    const width = parseFloat(document.getElementById('rectangle-width').value);

    const lenght = parseFloat(document.getElementById('rectangle-length').value);

    const result = (width*lenght);

    document.getElementById('rectangle-span').innerText = result;
}

function getValues(id){
    return parseFloat((document.getElementById(id).value))
}

function ParallelogramArea(){
    const base = getValues('Parallelogram-base');

    const height = getValues('Parallelogram-height');

    document.getElementById('Parallelogram-span').innerText = base*height;
}

