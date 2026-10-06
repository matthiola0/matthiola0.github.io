import React from 'react';
import PropTypes from 'prop-types';

const silhouettes = {
  pawn: (
    <>
      <circle cx="40" cy="22" r="12" />
      <path d="M27 39h26l-4 8c-4 11-3 20 5 29H26c8-9 9-18 5-29l-4-8Z" />
      <path d="M27 43h26M29 68h22" fill="none" />
    </>
  ),
  bishop: (
    <>
      <circle cx="40" cy="10" r="3" />
      <path d="M40 16c-9 10-18 18-18 27 0 9 8 15 18 15s18-6 18-15c0-9-9-17-18-27Z" />
      <path d="m43 24-9 19M26 61h28M32 61c1 7-2 11-7 15h30c-5-4-8-8-7-15" />
    </>
  ),
  rook: (
    <>
      <path d="M20 14h10v10h10V14h10v10h10V14h6v23H20V14ZM27 38l3 25-7 13h38l-7-13 3-25" />
      <path d="M25 44h34M30 64h24M37 46v14" fill="none" />
    </>
  ),
  queen: (
    <>
      <circle cx="16" cy="19" r="3" />
      <circle cx="40" cy="10" r="3" />
      <circle cx="64" cy="19" r="3" />
      <path d="m17 26 9 26h28l9-26-15 12-8-21-8 21-15-12ZM27 58h26l-5 7 8 11H24l8-11-5-7Z" />
      <path d="M29 46h22M30 65h20" fill="none" />
    </>
  ),
};

const ChessPiece = ({ className, piece }) => (
  <svg className={className} viewBox="0 0 80 100" fill="none" aria-hidden="true" focusable="false">
    <g
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      strokeLinecap="round"
      fill="currentColor"
      fillOpacity="0.12"
    >
      {silhouettes[piece]}
      <path d="M22 81h36l6 9H16l6-9ZM14 91h52v5H14z" />
      <path d="M26 86h28" fill="none" />
    </g>
  </svg>
);

ChessPiece.propTypes = {
  className: PropTypes.string,
  piece: PropTypes.oneOf(['pawn', 'bishop', 'rook', 'queen']),
};
ChessPiece.defaultProps = { className: '', piece: 'pawn' };

export default ChessPiece;
