import { useCallback, useRef, type MouseEvent, type PointerEvent } from 'react';

const DRAG_THRESHOLD = 5;

interface DragState {
  pointerId: number | null;
  startX: number;
  startY: number;
  scrollLeft: number;
  scrollTop: number;
  moved: boolean;
}

export const useDragToScroll = () => {
  const drag = useRef<DragState>({
    pointerId: null,
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
    moved: false,
  });

  const onPointerDown = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (drag.current.pointerId !== null) return;

    drag.current.pointerId = event.pointerId;
    drag.current.moved = false;
    drag.current.startX = event.clientX;
    drag.current.startY = event.clientY;
    drag.current.scrollLeft = event.currentTarget.scrollLeft;
    drag.current.scrollTop = event.currentTarget.scrollTop;
    event.currentTarget.setPointerCapture(event.pointerId);
  }, []);

  const onPointerMove = useCallback((event: PointerEvent<HTMLDivElement>) => {
    const state = drag.current;
    if (state.pointerId !== event.pointerId) return;

    const dx = event.clientX - state.startX;
    const dy = event.clientY - state.startY;

    if (!state.moved && Math.hypot(dx, dy) > DRAG_THRESHOLD) {
      state.moved = true;
    }

    event.currentTarget.scrollLeft = state.scrollLeft - dx;
    event.currentTarget.scrollTop = state.scrollTop - dy;
  }, []);

  const endDrag = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (drag.current.pointerId === event.pointerId) {
      drag.current.pointerId = null;
    }
  }, []);

  const onClickCapture = useCallback((event: MouseEvent<HTMLDivElement>) => {
    if (drag.current.moved) {
      event.preventDefault();
      event.stopPropagation();
      drag.current.moved = false;
    }
  }, []);

  return { onPointerDown, onPointerMove, onPointerUp: endDrag, onPointerCancel: endDrag, onClickCapture };
};
