// code your solution here
function saturdayFun(activity){
    if(activity){
        return `This Saturday, I want to ${activity}!`
    }
    else if(" "){
        return `This Saturday, I want to roller-skate!`
    }
    
}

const mondayWork = function(work){
    if(work){
        return `This Monday, I will ${work}.`
    }
    else if(" "){
        return `This Monday, I will go to the office.`
    }
}
function wrapAdjective(input="*"){
    return function(par="special"){
        return `You are ${input}${par}${input}!`
    }
}
