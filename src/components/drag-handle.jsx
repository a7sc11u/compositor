import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

/**
 * DragHandle
 *
 * Renders a pseudo-draggable full-height button that a
 */
export const DragHandle = ({ onDrag }) => {
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = useCallback(() => {
    setDragging(() => true);
  }, []);

  const handleMouseUp = useCallback((e) => {
    setDragging(() => false);
  }, []);

  const handleDrag = useCallback(
    (e) => {
      onDrag(e);
    },
    [dragging]
  );

  const addEventListeners = useCallback(() => {
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleMouseUp);

    document.addEventListener('touchmove', handleDrag);
    document.addEventListener('touchend', handleMouseUp);
  }, [handleDrag, handleMouseUp]);

  const removeEventListeners = useCallback(() => {
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleMouseUp);

    document.removeEventListener('touchmove', handleDrag);
    document.removeEventListener('touchend', handleMouseUp);
  }, [handleDrag, handleMouseUp]);

  // add event listeners
  useEffect(() => {
    if (dragging) {
      addEventListeners();
    } else {
      removeEventListeners();
    }
    return () => {
      removeEventListeners();
    };
  }, [dragging]);

  return (
    <HandleButton onMouseDown={handleMouseDown}>
      <HandleOutline />
    </HandleButton>
  );
};

const HandleButton = styled.button`
  cursor: col-resize;
  width: var(--sizes-4);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border: 0;
  margin-right: calc(var(--space-2) * -1);
  background-color: transparent;
  &:focus {
    outline: none;
  }
  &:active {
    cursor: grabbing;
  }
`;

const HandleOutline = styled.div`
  background-color: var(--colors-grays-500);
  width: var(--sizes-px);
  position: absolute;
  left: 50%;
  margin-left: calc(var(--space-px) * -1);
  top: 0;
  height: 100%;
`;
