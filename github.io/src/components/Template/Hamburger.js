import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import routes from '../../data/routes';
import ChessPiece from './chess-piece';

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const trigger = useRef(null);
  const dialog = useRef(null);
  const closeButton = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const panel = dialog.current;
    const opener = trigger.current;
    const previousOverflow = document.body.style.overflow;
    const desktop = window.matchMedia?.('(min-width: 981px)');
    const closeOnDesktop = ({ matches }) => {
      if (matches) setOpen(false);
    };
    const dismissBackdrop = (event) => {
      const bounds = panel.getBoundingClientRect();
      if (event.target === panel && (event.clientX < bounds.left || event.clientX > bounds.right)) {
        setOpen(false);
      }
    };
    const keepFocusInside = (event) => {
      if (event.key !== 'Tab') return;
      const targets = panel.querySelectorAll('a[href], button:not([disabled])');
      const first = targets[0];
      const last = targets[targets.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    if (desktop?.matches) {
      setOpen(false);
      return undefined;
    }
    panel.showModal();
    closeButton.current.focus();
    document.body.style.overflow = 'hidden';
    panel.addEventListener('click', dismissBackdrop);
    panel.addEventListener('keydown', keepFocusInside);
    desktop?.addEventListener('change', closeOnDesktop);

    return () => {
      panel.removeEventListener('click', dismissBackdrop);
      panel.removeEventListener('keydown', keepFocusInside);
      desktop?.removeEventListener('change', closeOnDesktop);
      if (panel.open) panel.close();
      document.body.style.overflow = previousOverflow;
      if (opener.isConnected) opener.focus();
    };
  }, [open]);

  return (
    <div className="hamburger-container">
      <button
        ref={trigger}
        type="button"
        className="menu-toggle"
        aria-label="Open menu"
        aria-controls="mobile-navigation"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <span /><span /><span />
      </button>
      {open && createPortal(
        <dialog
          ref={dialog}
          id="mobile-navigation"
          className="mobile-drawer"
          aria-label="Navigation menu"
          aria-modal="true"
          onClose={() => setOpen(false)}
          onCancel={(event) => {
            event.preventDefault();
            setOpen(false);
          }}
        >
          <div className="drawer-top">
            <p>Po-Yu Pan / The contents</p>
            <button
              ref={closeButton}
              type="button"
              className="drawer-close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
          <h2>Your next move.</h2>
          <nav className="drawer-links" aria-label="Mobile navigation">
            {routes.map((route, index) => (
              <NavLink
                to={route.path}
                end={route.index}
                key={route.path}
                onClick={() => setOpen(false)}
              >
                <span className="drawer-number" aria-hidden="true">0{index}</span>
                <span>{route.index ? 'Home' : route.label}</span>
                <span className="drawer-arrow" aria-hidden="true">↗</span>
              </NavLink>
            ))}
          </nav>
          <div className="drawer-footer">
            <a href="mailto:hi@matthiola.dev">hi@matthiola.dev</a>
            <div className="drawer-board" aria-hidden="true" />
          </div>
          <div className="drawer-study" aria-hidden="true">
            <span className="drawer-study-arch" />
            <ChessPiece piece="rook" className="drawer-rook" />
            <ChessPiece piece="pawn" className="drawer-pawn" />
          </div>
        </dialog>,
        document.body,
      )}
    </div>
  );
};

export default Hamburger;
