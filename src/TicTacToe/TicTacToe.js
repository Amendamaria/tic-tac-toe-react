import React, { useState } from 'react'
import './TicTacToe.css'
const TicTacToe = () => {
    const [turn, setTurn] = useState('x');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState(null);

    const checkForWinner = (squares) => {
        let combos = {
            across: [
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            down: [
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            diagonal: [
                [0,4,8],
                [2,4,6]
            ]
        };
    for(let combo in combos){
        combos[combo].forEach((pattern) => {
            if(
                squares[pattern[0]] === '' ||
                squares[pattern[1]] === '' || 
                squares[pattern[2]] === '') {
                //do nothing
            }
            else if(
                squares[pattern[0]] === squares[pattern[1]] && 
                squares[pattern[1]] === squares[pattern[2]]
            ) 
            {
                setWinner(squares[pattern[0]]);
            }
       
        });
    }
};
     const handleClick = (num) => {
        if(cells[num] !== '') {
            alert('Already filled');
            return;
        }
        let squares = [...cells];

       if(turn === 'x'){
        squares[num] = 'x';
        setTurn('o');
         }
         else{
            squares[num] = 'o';
            setTurn('x');
         }
         checkForWinner(squares);
        setCells(squares);
         console.log(squares);
    };
   
    const handleRestart = () => {
        setWinner(null);
        setCells(Array(9).fill(''));
    }
    const Cell = ({num}) => {
        return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
    };
  
  return (
    <div className='container'>
    <table>
        Turn: {turn}
        <tbody>
            <tr>
                <Cell num={0} />
                <Cell num={1}/>
                <Cell num={2}/>
            </tr>
            <tr>
                <Cell num={3}/>
                <Cell num={4} />
                <Cell num={5}/>
            </tr>
            <tr>
                <Cell num={6}/>
                <Cell num={7} />
                <Cell num={8}/>
            </tr>
        </tbody>
    </table>
    {winner && (
        <>
        <p>{winner}is the winner!</p>
        <button onClick={() => handleRestart()}>Play Again</button>
        </>
    )}
    </div>
  )
}

export default TicTacToe;