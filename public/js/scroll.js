if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
        const forceStartAtTop = () => {
            window.scrollTo(0, 0);
            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(() => window.scrollTo(0, 0));
            }
        };
        window.addEventListener('pageshow', forceStartAtTop);
        window.addEventListener('load', forceStartAtTop);
