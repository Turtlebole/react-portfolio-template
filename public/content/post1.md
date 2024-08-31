# Test post

**Date:** August 15, 2024  



## Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.



```js
   sectionsRef.current.forEach(section => {
    gsap.fromTo(section,
        { opacity: 0, filter: 'blur(10px)' },
        {
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1.5,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 50%',
                scrub: 0.5,
            },
        }
    );
});
```