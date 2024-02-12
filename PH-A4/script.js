

function calculateMoney(ticketSale){
    if (ticketSale < 0){
        return ('Not a valid Number')
    }
    else{
        let total = ticketSale * 120;
        let expence = 500 + (8*50);
        return (total - expence)
    }
}




function checkName(name) {
    if (typeof name == "string"){
        const lastWord = name.length;
        let finalName = name.toLowerCase();
        if (finalName[lastWord-1] == "a" || finalName[lastWord-1] == "y" || finalName[lastWord-1] == "i" || finalName[lastWord-1] == "e" || finalName[lastWord-1] == "o" || finalName[lastWord-1] == "u" || finalName[lastWord-1] == "w" ){
            return ('Good Name')
        }
        else{
            return ('Bad Name')
        }
    }
    else {
        return ('invalid')
    }
}




function deleteInvalids(array) {
    let finalArray = []
    if (Array.isArray(array) == true){
        for (let i of array){
            if (typeof i == 'number' && isNaN(i) != true){
                finalArray.push(i)
            }
        }
        return finalArray
    }
    else{
        return ('Not valid')
    }
}





function password(infos) {
    let totalProperty = 0;
    const birth = `${(infos.birthYear)}`.length;
    for (let i in infos){
        totalProperty += 1;
    }

    if (totalProperty == 3 && birth == 4){
        return `${(infos.siteName[0]).toUpperCase()}${(infos.siteName.slice(1))}#${infos.name}@${infos.birthYear}`
        
    }
    else if (birth < 4 ){
        return ('invalid')
    }
    else{
        return ('invalid')
    }
}



function monthlySavings(arr , livingCost) {
    if (typeof arr == 'number' || typeof livingCost != 'number'){
        return ('invalid input')
    }
    else{
        sum = 0;
        for (let i of arr){
            if( i >= 3000){
                sum += (3000 - ((3000*20)/100));
            }
            else{
                sum+=i;
            }
        }
        
        const final = (sum - livingCost);
        if (final < 0){
            return 'earn more'
        }
        else{
            return final
        }
    }
}

