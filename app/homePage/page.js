import React from 'react';
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown) => {
    
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.options');
    const selected = dropdown.querySelector('.selected');
    select.addEventListener('click', () => {
        select.classList.toggle('selected-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });
    options.forEach(option => {
        selected.innerText = option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
        options.forEach(option => {
            option.classList.remove('active');
        });
        option.classList.add('active');
    });
    
}
const homePage = () => {
    return (
        <div>
            <h1><center>Home Page</center></h1>
            <p><center>Introducing our new election app, designed to revolutionize the way you engage with the electoral process. This user-friendly app offers a range of features to simplify voting for users of all levels of experience. Stay informed with candidate profiles, ballot details, and real-time election updates. Easily locate your polling place and access personalized voting reminders. Securely register to vote and request absentee ballots with confidence in our robust security measures. With our election app, participating in democracy has never been more convenient or accessible. Join us in shaping the future of our communities with just a few taps on your device.</center></p>
            {}
        </div>
    );
};
export default homePage;
