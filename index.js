// let player1="virat",
// player2="sachin",
// player3="dhoni";




// console.log(player1+player2+player3)


// const STADIUMS1='chinnaswamy',
// STADIUMS2='chepauk',
// STADIUMS3='wankhade';

// console.log(STADIUMS1,STADIUMS2,STADIUMS3)


// if(true){

//     var rcb="royal challengeres banglore"
// }


// console.log("1",rcb)






// const status='raining'
// let isMatchToday;

// if(status==="raining"){

//     isMatchToday="yes"
// }

// else{

    
//     isMatchToday="No"
// }

// console.log("3",isMatchToday)


// let climate='sun'
// let matchStatus

// climate==='sun' ?  console.log(" we  have a match today") :  console.log("  no we  have a match today") 



// const team1Score='280',
// team2Score="134"

// team1Score > team2Score ?  console.log('team 1 wins') : console.log('team 2 wins')



// let playerFirstName='',
// playerMidName='',
// playerLastName='kohli';

// let nameInJersey=playerFirstName|| playerMidName|| playerLastName


// console.log('',nameInJersey)



// let sponsors=false
//  audiences=true;

//  const isMatchHappening= sponsors || audiences


//  isMatchHappening ? "yes match happen" : " no match "

//  console.log(isMatchHappening)




// // OR operator


// const umpires=true,
//       audiences=true,
//       sponsorss=false ;


//       let isMatchsToday;

//       isMatchToday=umpires && audiences && sponsors

//       isMatchToday ? console.log('yes today we are having a match') : console.log('No we dont having a match') 



// // NotOperator

// // seee index.html

// // Nullish operator


// let duckScore=0
//    centuryScore=100;

//    let playerScore=duckScore ?? centuryScore

//    console.log('43',playerScore)

// // javascript functions


// function  showMyFavCricketPlayer(x="virat"){

//     console.log(`my fav cricket player is ${x}`)
// }




// let favPlayer;

// showMyFavCricketPlayer(favPlayer)


// // see index.html


// // fn expression and declaration


// // fn declaration


// function showPlayerName(){

//     console.log(`player is sachin`)
// }


// const hello=showPlayerName

// hello()



// fn expression


// const showme=function(){


//     console.log("this is")
// }

// showme()


//callBack functions



// function thirdUmpireDecision(groundUmpireDecision,callBackFn){


//     if(!groundUmpireDecision) return ''

//     else{

//         callBackFn()
//     }

// }


// thirdUmpireDecision(true,getCameraAngle)


//  function  getCameraAngle(){

//     console.log("camera angle is 16* ")
//  }




// callback functions Advanced


const DecisionResult=[]

const [dec1,dec2]= DecisionResult




function thirdUmpireDecision(groundUmpireDecisions,checkingCamera1,checkingCamera2){

    if(!groundUmpireDecisions) return ''
  

        checkingCamera1()

        checkingCamera2()


}


thirdUmpireDecision(true,checkingCamera1,checkingCamera2)



function checkingCamera1(){
  checkingCamera3()
}


function checkingCamera2(){

    checkingCamera3()
}


function checkingCamera3(){

    let decision=prompt('what is ur decision')
  let result= decision==='out' ? 'true': 'false'
  
     console.log('43',result)
     DecisionResult.push(result)
     console.log('23',DecisionResult)
}

if( DecisionResult.length <1){

   
    
    const [result1]=DecisionResult

    
    result1   ? DisplayOnScreen("Decision : Out") : ''
    
    

}

const [result1,result2]=DecisionResult

    
    result1 && result2  ? DisplayOnScreen("Decision : Out") : ''

    





function DisplayOnScreen(c){


    const value=document.getElementById('pageContent')
    value.innerText=c
}