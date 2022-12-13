import { useEffect } from "react";

/**
 * Utility hook to setup an event listener on an HTML element.
 *
 * @example
 * useEventListener(ref, 'mouseenter', () => {}
 *   // this gets called when the mouse enters the ref
 * });
 */
export function useEventListener<
  R extends Window,
  K extends keyof WindowEventMap
>(
  ref: R,
  eventType: K,
  callback: (this: R, ev: WindowEventMap[K]) => void
): void;
export function useEventListener<
  R extends HTMLElement | null,
  K extends keyof HTMLElementEventMap
>(
  ref: R,
  eventType: K,
  callback: (this: R, ev: HTMLElementEventMap[K]) => void
): void;
export function useEventListener<
  R extends HTMLElement | Window | null,
  K extends keyof (WindowEventMap | HTMLElementEventMap)
>(ref: R, eventType: K, callback: EventListenerOrEventListenerObject): void;
export function useEventListener<
  R extends HTMLElement | Window | null,
  K extends keyof (WindowEventMap | HTMLElementEventMap)
>(ref: R, eventType: K, callback: EventListenerOrEventListenerObject): void {
  useEffect(() => {
    ref?.addEventListener(eventType, callback);
    return () => ref?.removeEventListener(eventType, callback);
  }, [ref, eventType, callback]);
}
