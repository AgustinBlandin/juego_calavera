const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', stargame);

function stargame() {
   
    let canvasSize;
    
    if (window.innerHeight>window.innerWidth){
        canvasSize=window.innerWidth*0.75;
    }else{
        canvasSize=window.innerHeight*0.75;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);
    

    let elementSize=canvasSize/10;

    console.log(elementSize+' '+canvasSize)

    game.font = elementSize + 'px Verdana';
    game.textAling='end';
   // game.fillText(emojis['PLAYER'], 100, 100);
    //game.fillText("hola", elementSize, elementSize);


    const map = maps[2];
    const mapRows=map.trim().split('\n');
    const mapRowCol=mapRows.map(row => row.trim().split(''));
    console.log({map,mapRowCol,mapRows})


   for(j=1; j<=10; j++) {
        for(i=1; i <= 10; i++) {
            game.fillText(emojis[mapRowCol[j-1][i-1]], elementSize*i-elementSize, elementSize*j);
        }
    }

    

    

    //game.fillRect(0,0,100,100);
    //game.clearRect(0,0,99,99);
}
