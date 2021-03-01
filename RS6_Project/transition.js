window.addEventListener('DOMContentLoaded', ()=>{
    const transitionEl = document.querySelector('.transition');
    const anchors = document.querySelectorAll('.transition__href');

    setTimeout(()=>{
        transitionEl.classList.remove('transition--active');
    },500);

    for (let i=0; i<anchors.length; i++){
        const anchor = anchors[i];
        anchor.addEventListener('click', e=>{
            e.preventDefault();
            let target = e.target;
            console.log(target);

            transitionEl.classList.add('transition--active');

            setTimeout(()=>{
                window.location.href = target;
            },500);
        });
    }
});