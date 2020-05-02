function showNumberWithAnimation(x,y,number){
    let numberCell=$('#number-cell-' + x + '-' + y);
    
    numberCell.css('backgroundColor',getNumberBackgroundColor(number));
    numberCell.css('color',getNumberColor(number));
    numberCell.text(number);

    numberCell.animate({
        width:'100px',
        height:'100px',
        top:getPosTop(x,y),
        left:getPosLeft(x,y),
    },50);
}

function showMoveAnimation(fromx,fromy,tox,toy){
    let numberCell=$('#number-cell-'+ fromx + '-' + fromy);
    numberCell.animate({
        top:getPosTop(tox,toy),
        left:getPosLeft(tox,toy)
    },200);
}

function updateScore(score){
    $('#score').text(score);
}