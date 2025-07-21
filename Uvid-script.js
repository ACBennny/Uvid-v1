

// This is for Preloader

let preload = document.querySelector('#preloader');

//This function makes the preloader to be removed after the skeleton of the website has been loaded
window.addEventListener("load", () => {
    preload.style.display = "none";
});









// After the preloader is gone , this will cmd the sign-in /sign up form to appear

let cover = document.querySelector('.cover');
let regb4 = document.querySelector('.reg-bf');


function opengates() {
    cover.style.display = "none";
    regb4.style.visibility = "visible";
    regb4.style.top = "7.5%";
    regb4.style.left = "5%";
    regb4.style.width = "90%";
    regb4.style.height = "85%";
}











// This contains all code related to the sign-in/sign-up fornm


        //This function enables the user to toggle between the sign in and sign up form
        let logn = document.querySelector('.log');
        let sgnn = document.querySelector('.sgn');
        let regBehind = document.querySelector('.prmptlog');
        let lsb = document.querySelector('.lsbut');
        let frm = document.querySelector('.fbx');
        let sgnh2 = lsb.getElementsByTagName('h2')[0];
        let logh2 = lsb.getElementsByTagName('h2')[1];

        // to toggle tosign up
        // this makes the border of the "sign up" visible to make user aware they're on the "sign up" form
        sgnh2.addEventListener('click' , () => {
            sgnh2.classList.add('lsactive');
            logh2.classList.remove('lsactive');
            frm.style.transform = "translateX(0px)";
        });

        // to toggle to sign in
        // this makes the border of the "sign in" visible to make user aware they're on the "sign in" form
        logh2.addEventListener('click' , () => {
            logh2.classList.add('lsactive');
            sgnh2.classList.remove('lsactive');
            frm.style.transform = "translateX(-350px)";
        });

        // to toggle to sign up
        // this makes the border of the "sign up" visible to make user aware they're on the "sign up" form
        sgnn.addEventListener('click' , () => {
            sgnh2.classList.add('lsactive');
            logh2.classList.remove('lsactive');
            frm.style.transform = "translateX(0px)";
        });

        // to toggle to sign in
        // this makes the border of the "sign in" visible to make user aware they're on the "sign in" form
        logn.addEventListener('click' , () => {
            logh2.classList.add('lsactive');
            sgnh2.classList.remove('lsactive');
            frm.style.transform = "translateX(-350px)";
        });






    // Before the user can create an account, they would need to agree to the terms and conditions
    // This button when clicked will allow the button to becom active
        let chkbx = document.querySelector('#chbx');

        chkbx.onclick = () => {
            accrt.classList.toggle('crttog');
        }




    // This slides to the sign in form so user can sign in

        // if and ONLY if certain conditions are met. They are;
        /* 
            1.  Username must be minimun of '5' characters but 
                not more than '20' characters
            2.  Password must be minimun of '8' characters but 
                not more than '100' characters
            3.  User must make sure password is the same for "Confirm password"
            4.  User must have a valid email (this will not be tested atm) 
        */

                let accrt = document.querySelector('#sgnsubmit');

                accrt.addEventListener('click' , () => {
                    
                    let crtacc = document.querySelector('.recbase0');
                    let signb = document.querySelector('.recbase5');
                    let failcreate = document.getElementById('xcrte');

                    var cx0;
                    var cy0;
                    var cy1;
                    var cz;

                    cx0 = document.getElementById('uname').value.toUpperCase();
                    cy0 = document.getElementById('upass').value.toUpperCase();
                    cy1 = document.getElementById('ucfmpass').value.toUpperCase();
                    cz = document.getElementById('umail').value.toUpperCase();

                        if(cx0.length>=5) 
                        {
                            if(cx0.length<21)
                            {
                                if(cy0.length>=8)
                                {
                                    if(cy0.length<101)
                                    {
                                        if(cy0 == cy1)
                                        {
                                            if(cz.length>10){
                                                crtacc.style.display = "flex";
                                                txtcnt1.innerText = uname.value;
                                                txtcnt2.innerText = umail.value;
                                            }
                                            else 
                                            {
                                                signb.style.display = "flex";
                                            }
                                        }
                                        else 
                                        {
                                            signb.style.display = "flex";
                                        }
                                    }
                                    else 
                                    {
                                        signb.style.display = "flex";
                                    }
                                }
                                else 
                                {
                                    signb.style.display = "flex";
                                }
                            }
                            else 
                            {
                                signb.style.display = "flex";
                            }
                        }
                        else
                        {
                            signb.style.display = "flex";
                        }



                        //to close popup
                        failcreate.onclick = () => {
                            signb.style.display = "none";
                            upass.value="";
                            ucfmpass.value="";
                        }
                });






    // After creating their account This prompts the user to use their details to sign in
    
        let crtacc = document.querySelector('.recbase0');   
        let endpro = document.querySelector('#cotn');
        let signfrm = document.querySelector('.signform');
        let frshfrm = document.querySelector('.rfrshfrm');
            endpro.onclick = () => {
                crtacc.style.display = "none";
                logh2.classList.add('lsactive');
                sgnh2.classList.remove('lsactive');
                signfrm.style.display = "none";
                frshfrm.style.display = "flex";
                frm.style.transform = "translateX(-350px)";

                // frm.classList.add('fbxalt');
                // uname.value="";
                // upass.value="";
            }

        



    // when user clicks the log in button this runs
        let aclgn = document.querySelector('#logsubmit');

        //this is a set of codes to basically replicate a real login system
            aclgn.addEventListener('click' , () => {
                
                let valg = document.querySelector('.recbase3');
                let valb = document.querySelector('.recbase4');
                let faillogin = document.getElementById('xuser');

                var x0;
                var y0;
                var x1;
                var y1;

                x0 = document.getElementById('uname').value.toUpperCase();
                y0 = document.getElementById('upass').value.toUpperCase();
                x1 = document.getElementById('usrlog').value.toUpperCase();
                y1 = document.getElementById('usrpass').value.toUpperCase();

                
                valg.style.display = "flex";

                    //don't work
                    // if(x1.length>=5) 
                    // {
                    //     if(x0 == x1) 
                    //     {
                    //         if(y0 == y1)
                    //         {
                    //             valg.style.display = "flex";
                    //         }
                    //         else 
                    //         {
                    //             valb.style.display = "flex";
                    //         }
                    //     }
                    //     else 
                    //     {
                    //         valb.style.display = "flex";
                    //     }
                    // }
                    // else
                    // {
                    //     valb.style.display = "flex";
                    // }



                    //to close popup
                    faillogin.onclick = () => {
                        valb.style.display = "none";
                        usrlog.value="";
                        usrpass.value="";
                    }
            });

                



    




//   this section is for account recovery

    // if user is unable to log in
    
    let recacc = document.querySelector('.retnw');
    let reqfrm = document.querySelector('.recbase1');
    let re1 = reqfrm.getElementsByTagName('i')[0];
    let reaccreq = document.querySelector('#sendcde');
    let valfrm = document.querySelector('.recbase2');
    let re2 = valfrm.getElementsByTagName('i')[0];
    let valreq = document.querySelector('#valcde');

    //this displays a menu requesting for users email
    recacc.onclick = () => {
        reqfrm.style.display = "flex";
    }

        // tHis closes the menu opened by the function above when the "x" button is clicked
            re1.onclick = () => {
                reqfrm.style.display = "none";
            }

            // This opens a tab after sending a code to the inputed email
                reaccreq.onclick = () => {
                    reqfrm.style.display = "none";
                    valfrm.style.display = "flex";
                }

                //it closes the tab when 'x' button is clicked
                    re2.onclick = () => {
                        valfrm.style.display = "none";
                    }

                // WHen user inputs code
                    valreq.onclick = () => {
                        valfrm.style.display = "none";
                        valg.style.display = "flex";
                    }











// If users log in details are correct, this opens

    let valg = document.querySelector('.recbase3');
    let confrm = document.querySelector('#confm');
    let maingate = document.querySelector('.gate0');
    let g01 = document.querySelector('.gch1');
    let g02 = document.querySelector('.gch2');
    let g03 = document.querySelector('.gch3');
    let g04 = document.querySelector('.gch4');
    let g05 = document.querySelector('.gch5');
    let g06 = document.querySelector('.gch6');
    let g1 = document.querySelector('.g1');
    let g2 = document.querySelector('.g2');


    // function to animate the opening
        confrm.onclick = () => {
            valg.style.display = "none";
            regBehind.style.display = "none";
            g1.classList.add('gatexpand');
            g2.classList.add('gatexpand');
            g01.style.transform = "rotate(0deg)";
            g02.style.transform = "rotate(90deg)";
            g03.style.transform = "rotate(180deg)";
            g04.style.transform = "rotate(360deg)";
            g05.style.transform = "rotate(270deg)";
            g06.style.transform = "rotate(180deg)";
        }










/* 
    This section askes the user to choose their prefered show
    The option chose will open the section with the same name
*/

    let fz = document.querySelector('.gnr');
    let fz1 = document.querySelector('#fz1');
    let fz2 = document.querySelector('#fz2');
    let fz3 = document.querySelector('#fz3');
    let fz4 = document.querySelector('#fz4');
    let fz5 = document.querySelector('#fz5');
    let fz6 = document.querySelector('#fz6');
    let home = document.querySelector('.home');
    fz.style.display = "flex";
    home.style.display = "none";

        function f1() {
            if(home.style.display == "none") {
                fz.style.display = "none";
                home.style.display = "flex";
                g1.style.width = "0%";
                g2.style.width = "0%";
                txtcnt5.innerText="Live Action";
            }
        }

        function f2() {
            if(home.style.display == "none") {
                fz.style.display = "none";
                home.style.display = "flex";
                g1.style.width = "0%";
                g2.style.width = "0%";
                txtcnt5.innerText="Documentaries";
            }
        }
        function f3() {
            if(home.style.display == "none") {
                fz.style.display = "none";
                home.style.display = "flex";
                g1.style.width = "0%";
                g2.style.width = "0%";
                txtcnt5.innerText="TV Show";
            }
        }
        function f4() {
            if(home.style.display == "none") {
                fz.style.display = "none";
                home.style.display = "flex";
                g1.style.width = "0%";
                g2.style.width = "0%";
                txtcnt5.innerText="Anime";
            }
        }
        function f5() {
            if(home.style.display == "none") {
                fz.style.display = "none";
                home.style.display = "flex";
                g1.style.width = "0%";
                g2.style.width = "0%";
                txtcnt5.innerText="Cartoon";
            }
        }
        function f6() {
            if(home.style.display == "none") {
                fz.style.display = "none";
                home.style.display = "flex";
                g1.style.width = "0%";
                g2.style.width = "0%";
                txtcnt5.innerText="not specific";
            }
        }









    // This allows the user to open the tab to reveal the buttons on the navbar
        const logohead = document.querySelector('.logo');
        const headabt = document.querySelector('.aboutme');
        const pan2 = document.querySelector('.pan2');
        const pan2a = document.querySelector('.pan2a');
        const ri = document.querySelector('.pan2a .fa-caret-right');
        const lef = document.querySelector('.pan2a .fa-caret-left');
        pan2.style.width = "0px";
        ri.style.display = "";
        lef.style.display = "none";
        
        function opnav(){
            if(pan2.style.width == "0px") {
                pan2.style.width = "170px";
                ri.style.display = "none";
                lef.style.display = "flex";
                headabt.classList.add('hideabtmefromclick');
                logohead.classList.add('hidelogo');
            } else {
                pan2.style.width = "0px";
                ri.style.display = "";
                lef.style.display = "none";
                logohead.classList.remove('hidelogo');
                headabt.classList.remove('hideabtmefromclick');
                uu.classList.remove('uuactive');
                a1.classList.remove('pactive');
                a2.classList.remove('pactive');
            }
        }








    // This is for the search bar

        const hh = document.getElementById("hh");
        const uu = document.getElementById("uu");
        const vv = document.getElementById('vv');
        const suggsrch = document.querySelector('.suggsrch');

        //opening/closing the searchbar when the search icon is clicked
        function valo() {
            uu.classList.toggle('uuactive');
            uu.classList.remove('uusuggatv');
            a1.classList.remove('pactive');
            a2.classList.remove('pactive');
            suggsrch.classList.add('suggatv');
            search.value="";
        }

        // closing the suggestion box that appears
        function vale(){
            suggsrch.classList.remove('suggatv');
            uu.classList.toggle('uusuggatv');
        }








    // This opens the dropdown menu when the "info" or "bars" icon is clicked
        let p1 = document.querySelector('#p1');
        let p2 = document.querySelector('#p2');
        let xset = document.querySelector('#xsettform');
        let a1 = document.querySelector('.p1');
        let a2 = document.querySelector('.p2');

        // when user clicks "bars" icon
        p1.onclick = () => {
            a1.classList.toggle('pactive');
            a2.classList.remove('pactive');
            uu.classList.remove('uuactive');
            search.value="";
        };


        // when user clicks "info" icon
        p2.onclick = () => {
            a2.classList.toggle('pactive');
            a1.classList.remove('pactive');
            uu.classList.remove('uuactive');
            search.value="";
        };









            //  This alert the user to the slogan if user clicks on the company name
            let uvidgoal = document.querySelector('.logo');
            uvidgoal.onclick = () => {
                alert('Every genre you can think of.. we got it');
            }

    

    








    /* This allows the user to open the different tabs from the dropdown menu */

    const popupBox = document.querySelectorAll('.menform');
    const opendspwall = document.querySelectorAll('.frmenu');
    const closedspwall = document.querySelectorAll('.xhlpform');

        //opening the popup
        var popup = function(popupClick){
            popupBox[popupClick].classList.add('frmactive');
        }

        opendspwall.forEach((opendspwalls, i) => {
            opendspwalls.addEventListener("click" , () => {
                popup(i);
            });
        });

        //this will close the popup
        closedspwall.forEach((closedspwalls, i) => {
            closedspwalls.addEventListener("click" , () => {
                popupBox.forEach((popupBoxes) => {
                    popupBoxes.classList.remove('frmactive');
                });
            });
        });











  // This section is for the dropdown menu in the customer care tab



        // This will open the dropdown menu
        let catvis = document.querySelector('.catvis');
        let catopt = document.querySelector('.catopt');
        let rtd = document.querySelector('.rtd');

        catvis.onclick = () => {
            catopt.classList.toggle('optdrp');
            catvis.classList.toggle('vistog');
            rtd.classList.toggle('rtd180');
            nom.style.display = "none";
            othcat.value="";
        };


        // These are for the different options in the dropdown menu
        // When clicked the dropdown menu is close and the name of the option appears at the top

            let cattitle1 = document.querySelector('#cattitle');
            let nom = document.querySelector('.entrnom');
            let cgy1 = document.querySelector('#cgy1');
            let cgy2 = document.querySelector('#cgy2');
            let cgy3 = document.querySelector('#cgy3');
            let cgy4 = document.querySelector('#cgy4');
            let certinp = document.querySelector('.cert');

            cgy1.onclick = () => {
                cattitle1.innerHTML = "Guidance";
                nom.style.display = "none";
                catopt.classList.remove('optdrp');
                catvis.classList.remove('vistog');
                rtd.classList.remove('rtd180');
            };
            cgy2.onclick = () => {
                cattitle1.innerHTML = "Information";
                nom.style.display = "none";
                catopt.classList.remove('optdrp');
                catvis.classList.remove('vistog');
                rtd.classList.remove('rtd180');
            };
            cgy3.onclick = () => {
                cattitle1.innerHTML = "Bugs";
                nom.style.display = "none";
                catopt.classList.remove('optdrp');
                catvis.classList.remove('vistog');
                rtd.classList.remove('rtd180');
            };
            cgy4.onclick = () => {
                cattitle1.innerHTML = "";
                nom.style.display = "flex";
                othcat.oninput = () => {
                    cattitle1.innerText = othcat.value;
                };
            };
            certinp.onclick = () => {
                nom.style.display = "none";
                catopt.classList.remove('optdrp');
                catvis.classList.remove('vistog');
                rtd.classList.remove('rtd180');
            };


        // This for the area where the user will describe their issue
            let lblcur = document.querySelector('.lblpoint');
            let descbox = document.querySelector('.descbx');
            let desclbl = document.querySelector('#desclbl');
            let submt = document.querySelector('.sbtform');

            descid.oninput = () => {
                desclbl.innerText = descid.value;
                if(descid.value.length>0)
                {
                    submt.style.width = "100%";
                }
                else
                {
                    submt.style.width = "0%";
                }
            }

            descbox.onclick = () => {
                descbox.style.color = "#fff";
                lblcur.classList.toggle('lblpointer');
                    if(descid.value.length<=0) {
                        desclbl.innerText = "";
                    } else {
                        desclbl.innerText = "continue typing..";
                }
            };




























// This section is for settings



    // It will allow user to be able to change the font style of the browser

        //opening/closing the menu
            let catvis1 = document.querySelector('.catvis0');
            let catopt0 = document.querySelector('.catopt0');
            let rtd0 = document.querySelector('.rtd0');

            catvis1.onclick = () => {
                catopt0.classList.toggle('optdrp');
                catvis1.classList.toggle('vistog');
                rtd0.classList.toggle('rtd180');
            };

        // This will hold the different font types
            let cattitle2 = document.querySelector('#cattitle0');
            let cgy5 = document.querySelector('#cgy5');
            let cgy6 = document.querySelector('#cgy6');
            let cgy7 = document.querySelector('#cgy7');
            let cgy8 = document.querySelector('#cgy8');
            let cgy9 = document.querySelector('#cgy9');
            let cgy10 = document.querySelector('#cgy10');
            let cgy11 = document.querySelector('#cgy11');
            let cgy12 = document.querySelector('#cgy12');
            let cgy13 = document.querySelector('#cgy13');
            let cgy14 = document.querySelector('#cgy14');

            cgy5.onclick = () => {
                document.body.style.fontFamily="Berlin Sans FB";
                cattitle2.innerHTML = "Default";
                catopt0.classList.remove('optdrp');
                catvis1.classList.remove('vistog');
                rtd0.classList.remove('rtd180');
            };
            cgy6.onclick = () => {
                document.body.style.fontFamily="Arial";
                cattitle2.innerHTML = "Arial";
                catopt0.classList.remove('optdrp');
                catvis1.classList.remove('vistog');
                rtd0.classList.remove('rtd180');
            };
            cgy7.onclick = () => {
                document.body.style.fontFamily="Times New Roman";
                cattitle2.innerHTML = "Times New Roman";
                catopt0.classList.remove('optdrp');
                catvis1.classList.remove('vistog');
                rtd0.classList.remove('rtd180');
            };
            cgy8.onclick = () => {
                document.body.style.fontFamily="Bahnschrift Light";
                cattitle2.innerHTML = "Bahnschrift Light";
                catopt0.classList.remove('optdrp');
                catvis1.classList.remove('vistog');
                rtd0.classList.remove('rtd180');
            };
            cgy9.onclick = () => {
                document.body.style.fontFamily="San serif";
                cattitle2.innerHTML = "San serif";
                catopt0.classList.remove('optdrp');
                catvis1.classList.remove('vistog');
                rtd0.classList.remove('rtd180');
            };
            cgy10.onclick = () => {
                document.body.style.fontFamily="Bauhaus 93";
                cattitle2.innerHTML = "Bauhaus 93";
                catopt0.classList.remove('optdrp');
                catvis1.classList.remove('vistog');
                rtd0.classList.remove('rtd180');
            };
            cgy11.onclick = () => {
                document.body.style.fontFamily="Calibri";
                cattitle2.innerHTML = "Calibri";
                catopt0.classList.remove('optdrp');
                catvis1.classList.remove('vistog');
                rtd0.classList.remove('rtd180');
            };
            cgy12.onclick = () => {
                document.body.style.fontFamily="Poppins";
                cattitle2.innerHTML = "Poppins";
                catopt0.classList.remove('optdrp');
                catvis1.classList.remove('vistog');
                rtd0.classList.remove('rtd180');
            };
            cgy13.onclick = () => {
                document.body.style.fontFamily="Agency FB";
                cattitle2.innerHTML = "Agency FB";
                catopt0.classList.remove('optdrp');
                catvis1.classList.remove('vistog');
                rtd0.classList.remove('rtd180');
            };
            cgy14.onclick = () => {
                document.body.style.fontFamily="Brush Script MT";
                cattitle2.innerHTML = "Brush Script MT";
                catopt0.classList.remove('optdrp');
                catvis1.classList.remove('vistog');
                rtd0.classList.remove('rtd180');
            };

  
            























//  This is for My Shows tab



    // this will cause the differnt sections to expand and contract in length

     const openBox1 = document.querySelector('.sce1');
     const openBox2 = document.querySelector('.sce2');
     const openBox3 = document.querySelector('.sce3');
     const openBox4 = document.querySelector('.sce4');
     const openBox5 = document.querySelector('.sce5');
     const xpand1 = document.querySelector('#xpd1');
        const xpand2 = document.querySelector('#xpd2');
        const xpand3 = document.querySelector('#xpd3');
        const xpand4 = document.querySelector('#xpd4');
        const xpand5 = document.querySelector('#xpd5');
        // const closedsp = document.querySelector('.scxpand');

    xpand1.onclick = () => {
        openBox1.classList.toggle('scbodyxpd');
        xpand1.classList.toggle('xpdrotate');
        

        openBox2.classList.remove('scbodyxpd');
        openBox3.classList.remove('scbodyxpd');
        openBox4.classList.remove('scbodyxpd');
        openBox5.classList.remove('scbodyxpd');

        xpand2.classList.remove('xpdrotate');
        xpand3.classList.remove('xpdrotate');
        xpand4.classList.remove('xpdrotate');
        xpand5.classList.remove('xpdrotate');
    }
    xpand2.onclick = () => {
        openBox2.classList.toggle('scbodyxpd');
        xpand2.classList.toggle('xpdrotate');
        
        openBox1.classList.remove('scbodyxpd');
        openBox3.classList.remove('scbodyxpd');
        openBox4.classList.remove('scbodyxpd');
        openBox5.classList.remove('scbodyxpd');

        xpand1.classList.remove('xpdrotate');
        xpand3.classList.remove('xpdrotate');
        xpand4.classList.remove('xpdrotate');
        xpand5.classList.remove('xpdrotate');
    }
    xpand3.onclick = () => {
        openBox3.classList.toggle('scbodyxpd');
        xpand3.classList.toggle('xpdrotate');

        openBox1.classList.remove('scbodyxpd');
        openBox2.classList.remove('scbodyxpd');
        openBox4.classList.remove('scbodyxpd');
        openBox5.classList.remove('scbodyxpd');

        xpand1.classList.remove('xpdrotate');
        xpand2.classList.remove('xpdrotate');
        xpand4.classList.remove('xpdrotate');
        xpand5.classList.remove('xpdrotate');
    }
    xpand4.onclick = () => {
        openBox4.classList.toggle('scbodyxpd');
        xpand4.classList.toggle('xpdrotate');

        openBox1.classList.remove('scbodyxpd');
        openBox2.classList.remove('scbodyxpd');
        openBox3.classList.remove('scbodyxpd');
        openBox5.classList.remove('scbodyxpd');

        xpand2.classList.remove('xpdrotate');
        xpand3.classList.remove('xpdrotate');
        xpand1.classList.remove('xpdrotate');
        xpand5.classList.remove('xpdrotate');
    }
    xpand5.onclick = () => {
        openBox5.classList.toggle('scbodyxpd');
        xpand5.classList.toggle('xpdrotate');

        openBox2.classList.remove('scbodyxpd');
        openBox3.classList.remove('scbodyxpd');
        openBox4.classList.remove('scbodyxpd');
        openBox1.classList.remove('scbodyxpd');

        xpand2.classList.remove('xpdrotate');
        xpand3.classList.remove('xpdrotate');
        xpand4.classList.remove('xpdrotate');
        xpand1.classList.remove('xpdrotate');
    }



    // Code for the profile box
    // This will allow the user to open the menu too see various options

        let profrm = document.querySelector('.profform');
        let recbase6 = document.querySelector('.recbase6');
        recbase6.style.display = "none";
        function profilemenu () {
            if(recbase6.style.display == "none"){
                recbase6.style.display = "flex";
            }
            else{
                recbase6.style.display = "none";
                changedppass.classList.remove('profchngatv');
                changedpmail.classList.remove('profchngatv');
                changedpname.classList.remove('profchngatv');
                changforepic.classList.remove('profchngatv');
                changebackpic.classList.remove('profchngatv');
            }
        }

        // This will allow the user to user to change their user name
            let changedpname = document.querySelector('.chngusrnom');
            let optbut1 = document.querySelector('.optbutn1');
                optbut1.onclick = () => {
                    changedpname.classList.toggle('profchngatv');
                    // this will close the other forms while it is active
                    changedpmail.classList.remove('profchngatv');
                    changedppass.classList.remove('profchngatv');
                    changforepic.classList.remove('profchngatv');
                    changebackpic.classList.remove('profchngatv');
                }

        // This will allow the user to user to change their user email
            let changedpmail = document.querySelector('.chngusrmail');
            let optbut2 = document.querySelector('.optbutn2');
                optbut2.onclick = () => {
                    changedpmail.classList.toggle('profchngatv');
                    // this will close the other forms while it is active
                    changedpname.classList.remove('profchngatv');
                    changedppass.classList.remove('profchngatv');
                    changforepic.classList.remove('profchngatv');
                    changforepic.classList.remove('profchngatv');
                    changebackpic.classList.remove('profchngatv');
                }

        // This will allow the user to user to change their user [password]
            let changedppass = document.querySelector('.chngusrpass');
            let optbut3 = document.querySelector('.optbutn3');

                optbut3.onclick = () => {
                    changedppass.classList.toggle('profchngatv');
                    // this will close the other forms while it is active
                    changedpmail.classList.remove('profchngatv');
                    changedpname.classList.remove('profchngatv');
                    changforepic.classList.remove('profchngatv');
                    changebackpic.classList.remove('profchngatv');
                }
        
        // This will allow the user to user to change their user [foreground picture]
            let changforepic = document.querySelector('.chngpicfore');
            let optbut4 = document.querySelector('.optbutn4');

                optbut4.onclick = () => {
                    changforepic.classList.toggle('profchngatv');
                    // this will close the other forms while it is active
                    changedpmail.classList.remove('profchngatv');
                    changedpname.classList.remove('profchngatv');
                    changedppass.classList.remove('profchngatv');
                    changebackpic.classList.remove('profchngatv');
                }

                // This will incur the change of the picture
                const mainpic = document.querySelector('.profiledpimg');
                let fstpic = document.querySelector('#forepic');

                fstpic.addEventListener('change' , () => {
                    mainpic.src = URL.createObjectURL(fstpic.files[0]);
                });

                //This will remove the current picture and revert to default
                const foreresetpic = document.getElementById("profforereset");
                foreresetpic.addEventListener('click' , () => {
                    mainpic.src = "Uvid-img/27.png";
                });




                

        // This will allow the user to user to change their user [background picture]
            let changebackpic = document.querySelector('.chngpicback');
            let optbut5 = document.querySelector('.optbutn5');

                optbut5.onclick = () => {
                    changebackpic.classList.toggle('profchngatv');
                    // this will close the other forms while it is active
                    changedpmail.classList.remove('profchngatv');
                    changedpname.classList.remove('profchngatv');
                    changedppass.classList.remove('profchngatv');
                    changforepic.classList.remove('profchngatv');
                }

                // This will simulate the change of the picture
                const minpic = document.querySelector('.backgrdpicture');
                let scdpic = document.querySelector('#backpic');

                scdpic.addEventListener('change' , () => {
                    minpic.src = URL.createObjectURL(scdpic.files[0]);
                });

                //This will remove the current picture and revert to default
                const backresetpic = document.getElementById("profbcgreset");
                backresetpic.addEventListener('click' , () => {
                    minpic.src = "Uvid-img/26.jpg";
                });
























    /*---------------------------For DESKTOP -----------------------*/


    // This is will open the different links
    // I'm choosing to do this instead of adding the "a" tag




    // to...

        // open TV
        let section1 = document.querySelector('.s1');
        section1.onclick = () => {
            window.open(URL="Uvid-content/Uvid-TV.html", target="_blank");
        }

        // open MOVIES
        let section2 = document.querySelector('.s2');
        section2.onclick = () => {
            window.open(URL="Uvid-content/Uvid-Movies.html", target="_blank");
        }

        // open DOCUMENTARIES
        let section3 = document.querySelector('.s3');
        section3.onclick = () => {
            window.open(URL="Uvid-content/Uvid-Documentary.html", target="_blank");
        }

        // open ANIME
        let section4 = document.querySelector('.s4');
        section4.onclick = () => {
            window.open(URL="Uvid-content/Uvid-Anime.html", target="_blank");
        }

        // open CARTOON
        let section5 = document.querySelector('.s5');
        section5.onclick = () => {
            window.open(URL="Uvid-content/Uvid-Cartoon.html", target="_blank");
        }

        // open NEWS
        let section6 = document.querySelector('.sd0');
        section6.onclick = () => {
            window.open(URL="Uvid-content/Uvid-News.html", target="_blank");
        }

        // open UPCOMING
        let section7 = document.querySelector('.sd2');
        section7.onclick = () => {
            window.open(URL="Uvid-content/Uvid-Upcoming.html", target="_blank");
        }

        // open LATEST
        let section8 = document.querySelector('.sd3');
        section8.onclick = () => {
            window.open(URL="Uvid-content/Uvid-Latest.html", target="_blank");
        }


































    //     //opening the popup
    //     var opup = function(opupClick){
    //         openBox[opupClick].classList.add('scbodyxpd');
    //     }

    //     opendsp.forEach((opendsps, i) => {
    //         opendsps.addEventListener("click" , () => {
    //             opup(i);
    //         });
    //     });

    //     //this will close the popup
    //     closedsp.forEach((closedsps, i) => {
    //         closedsps.addEventListener("click" , () => {
    //             openBox.forEach((opupBoxes) => {
    //                 opupBoxes.classList.remove('scbodyxpd');
    //             });
    //         });
    //     });
