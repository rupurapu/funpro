'use strict'

const offset = [1,2];
const zoom = 2;
const angle = Math.PI;
const cos = Math.cos(angle);
const sin = Math.sin(angle);

const point = { x: 1, y: 1};

const pipeline  = [   // 2D-muunnoksia
    
    function translate(p){
        return { x: p.x + offset[0], y: p.y + offset[1] };
    },

    function scale(p){
        return { x: p.x * zoom, y: p.y * zoom};
    },

    function rotation(p){
        return {x: Math.round(p.x * cos - p.y * sin), y: Math.round(p.x * sin + p.y * cos)};
    }
];


function muunnos(point){
     for(let i=0; i<pipeline.length; i++){   
        point = pipeline[i](point);
    }
    return point;
}


console.log(point);
console.log(muunnos(point));