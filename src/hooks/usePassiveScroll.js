// src/hooks/usePassiveScroll.js
import { useEffect } from 'react';

export const usePassiveScroll = () => {
    useEffect(() => {
        // Override the addEventListener method to make wheel events passive by default
        const originalAddEventListener = EventTarget.prototype.addEventListener;

        EventTarget.prototype.addEventListener = function(type, listener, options) {
            if (type === 'wheel' || type === 'mousewheel' || type === 'touchstart' || type === 'touchmove') {
                if (typeof options === 'object') {
                    options.passive = true;
                } else if (typeof options === 'boolean') {
                    options = { capture: options, passive: true };
                } else {
                    options = { passive: true };
                }
            }
            originalAddEventListener.call(this, type, listener, options);
        };

        return () => {
            // Restore original method on cleanup
            EventTarget.prototype.addEventListener = originalAddEventListener;
        };
    }, []);
};