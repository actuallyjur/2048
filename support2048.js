function getPosTop(i,j){
    return 20+120*i;
}

function getPosLeft(i,j){
    return 20+120*j;
}

function getNumberBackgroundColor(value){
    switch(value){
        case 2:return '#eee4da';break;
        case 4:return '#ede0c8';break;
        case 8:return '#f2b179';break;
        case 16:return '#f59563';break;
        case 32:return '#f67c5f';break;
        case 64:return '#f65e3b';break;
        case 128:return '#edcf72';break;
        case 256:return '#edcc61';break;
        case 512:return '#99cc00';break;
        case 1024:return '#33b5e5';break;
        case 2048:return '#0099cc';break;
        case 4096:return '#aa66cc';break;
        case 8192:return '#9933cc';break;
    }
    return 'black';
}

function getNumberColor(value){
    if(value<=4){
        return '#776e65';
    }
    return 'white';
}

function nospace(board){
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
            if(board[i][j]==0)
                return false;
        }
    }
    return true;
}

function canMoveLeft(board){
    //如果当前格子有元素 考虑两种情况 第一种情况是左边有没有格子 第二种情况是左边的和自己是否相等
    for(let i=0;i<4;i++){
        for(let j=1;j<4;j++){
            if(board[i][j]!=0){
                if(board[i][j-1]==0 || board[i][j-1]==board[i][j])
                    return true;
            }
        }
    }
    return false;
}

function canMoveRight(board){
    //如果当前格子有元素 考虑两种情况 第一种情况是右边有没有格子 第二种情况是右边的和自己是否相等
    for(let i=0;i<4;i++){
        for(let j=2;j>=0;j--){
            if(board[i][j]!=0){
                if(board[i][j+1]==0 || board[i][j+1]==board[i][j])
                    return true;
            }
        }
    }
    return false;
}

function canMoveUp(board){
    //如果当前格子有元素 考虑两种情况 第一种情况是上边有没有格子 第二种情况是上边的和自己是否相等
    for(let j=0;j<4;j++){
        for(let i=1;i<4;i++){
            if(board[i][j]!=0){
                if(board[i-1][j]==0 || board[i-1][j]==board[i][j])
                    return true;
            }
        }
    }
    return false;
}

function canMoveDown(board){
    //如果当前格子有元素 考虑两种情况 第一种情况是上边有没有格子 第二种情况是上边的和自己是否相等
    for(let j=0;j<4;j++){
        for(let i=2;i>=0;i--){
            if(board[i][j]!=0){
                if(board[i+1][j]==0 || board[i+1][j]==board[i][j])
                    return true;
            }
        }
    }
    return false;
}

function noBlockHorizontal(row,col1,col2,board){
    for(let i=col1+1;i<col2;i++){
        if(board[row][i]!=0){
            return false;
        }
    }
    return true;
}

function noBlockVertical(col,row1,row2,board){
    for(let i=row1+1;i<row2;i++){
        if(board[i][col]!=0){
            return false;
        }
    }
    return true;
}

function noMove(board){
    if(canMoveDown(board)||canMoveUp(board)||canMoveLeft(board)||canMoveRight(board)){
        return false;
    }
    return true;
}