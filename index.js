function getFirstSelector(selector){
    return document.querySelector(selector)
};

function nestedTarget(){
    return document.querySelector('#nested .target')
};

function deepestChild(){
    let nodes = document.querySelectorAll("div#grand-node div")
    return nodes[nodes.length - 1]

};

function increaseRankBy(n){
    const listitems = document.querySelectorAll('ul.ranked-list li')
    listitems.forEach(li => li.innerHTML = parseInt(li.innerHTML) + n)
};
