
/* 
    This will hold the code for the different sections of the website 
    The sections include:
    - Anime
    - TV
    - Documentaries
    - Movies
    - Latest
    - Upcoming
    - News
    - Cartoon
*/















// This is for Preloader

    let preload = document.querySelector('#preloader');

    //This function makes the preloader to be removed after the skeleton of the website has been loaded
    window.addEventListener("load", () => {
        preload.style.display = "none";
    });














    //  This alert the user to the slogan if user clicks on the company name
    
        let uvidgoal = document.querySelector('.logo');
        uvidgoal.onclick = () => {
            alert('Every genre you can think of.. we got it');
        }















// This will return back to the homepage of Uvids
    let backtohome = document.querySelector('.homepage');
    let backtohome1 = document.querySelector('.homepage1');
    backtohome.onclick = () => {
        const gotohome =  confirm('Are you sure you want to go back to home?');
        if (gotohome == false){
            event.preventDefault();
        }
        else
        {
            window.open(URL="/Users/user/Desktop/html/Uvid/Uvid.html", target="_top");
        }
    }
    backtohome1.onclick = () => {
        const gotohome1 =  confirm('Are you sure you want to go back to home?');
        if (gotohome1 == false){
            event.preventDefault();
        }
        else
        {
            window.open(URL="/Users/user/Desktop/html/Uvid/Uvid.html", target="_top");
        }
    }















//  Script for Search shows






    /********
     * This will
    * 1. It will open the search tab
    * 2. It will create an iframe
    *3. It will link the file containing the searchcontent
     ******/
        const srchbox = document.querySelector('.searchcontainer');
        const searchframe = document.querySelector('.searchsub1');

        const srchinitiaize = document.querySelector('.search-pull');
        const srchinitiaize1 = document.querySelector('.search-pull1');
            srchinitiaize.onclick = function opnclssearch() {
                srchbox.classList.add('srchatv');
                searchframe.classList.add('frameatv');
            }
            srchinitiaize1.onclick = function opnclssearch() {
                srchbox.classList.add('srchatv');
                searchframe.classList.add('frameatv');
            }


    /**
     * this will perform the opposite of the above
     */
    const searchxmark = document.querySelector('.closesearchctn');
    const searchxblank = document.querySelector('.searchsub2');

    searchxmark.onclick = function closesearch() {
        srchbox.classList.remove('srchatv');
        searchframe.classList.remove('frameatv');
    }

    searchxblank.onclick = function closesearch() {
        srchbox.classList.remove('srchatv');
        searchframe.classList.remove('frameatv');
    }































// RESPONSIVE


    // THis will open the the menu
    const openmen = document.querySelector('.baron');
    const menuicons = document.querySelector('.icnopener');

    openmen.onclick = () => {
        menuicons.classList.toggle('menicnatv');
        srchbox.classList.remove('srchatv');
        searchframe.classList.remove('frameatv');
    }



