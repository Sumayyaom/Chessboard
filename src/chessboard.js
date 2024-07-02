import React from 'react';
import './chessboard.css';

const Chessboard = () => {
  const renderSquare = (i, isBlack) => {
    const style = {
      backgroundColor: isBlack ? 'black' : 'white',
    };

    return <div key={i} className="square" style={style}></div>;
  };

  const renderRow = (rowIndex) => {
    const row = [];
    for (let colIndex = 0; colIndex < 8; colIndex++) {
      const isBlack = (rowIndex + colIndex) % 2 === 1;
      row.push(renderSquare(rowIndex * 8 + colIndex, isBlack));
    }
    return (
      <div key={rowIndex} className="row">
        {row}
      </div>
    );
  };

  const renderBoard = () => {
    const board = [];
    for (let rowIndex = 0; rowIndex < 8; rowIndex++) {
      board.push(renderRow(rowIndex));
    }
    return board;
  };

  return <div className="chessboard">{renderBoard()}</div>;
};

export default Chessboard;
