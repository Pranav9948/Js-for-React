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


// const DecisionResult=[]

// const [dec1,dec2]= DecisionResult




// function thirdUmpireDecision(groundUmpireDecisions,checkingCamera1,checkingCamera2){

//     if(!groundUmpireDecisions) return ''
  

//         checkingCamera1()

//         checkingCamera2()


// }


// thirdUmpireDecision(true,checkingCamera1,checkingCamera2)



// function checkingCamera1(){
//   checkingCamera3()
// }


// function checkingCamera2(){

//     checkingCamera3()
// }


// function checkingCamera3(){

//     let decision=prompt('what is ur decision')
//   let result= decision==='out' ? 'true': 'false'
  
//      console.log('43',result)
//      DecisionResult.push(result)
//      console.log('23',DecisionResult)
// }

// if( DecisionResult.length <1){

   
    
//     const [result1]=DecisionResult

    
//     result1   ? DisplayOnScreen("Decision : Out") : ''
    
    

// }

// const [result1,result2]=DecisionResult

    
//     result1 && result2  ? DisplayOnScreen("Decision : Out") : ''

    





// function DisplayOnScreen(c){


//     const value=document.getElementById('pageContent')
//     value.innerText=c
// }



// ArrowFunctions


// function helloWorld(){

//     console.log(this)
// }

//  let World=function(){

//     console.log(this)
// }

// const  hello=()=>{

//     console.log(this)

// }


// helloWorld()
// World()
// hello()


//  let showAMessage=()=>{

//     console.log("okw",this)
// }


// let titleChange=document.getElementById('decision')


// titleChange.addEventListener('click',showAMessage)



//objects


// const channel={

//     name:'webDiary',
//     age:'3yrs',

//    teaches :  function(){

//     console.log(this.age)
//    }
// }

// channel.teaches()


// //fnl objects


// // function player(playerName,score,centuries){

// //     return {

// //         playerName,
// //         score,
// //         centuries

// //     }
   
// // }

// //  var d=player("dhoni",234,10)

// //  console.log("nbm",d)


// // objects video 14



// const cricketPlayer={

//     name:'sachin',
//     age:34,
//     place:'mumbai',
//     skills:["batting","bowling","fielding"],

//     specialShots:function(){

//      console.log(`plays straight drive well`)

//     }
// }

// Object.freeze(cricketPlayer)

//  const bestPlayer=Object.assign(cricketPlayer)

//  bestPlayer.age=45

//  console.log(cricketPlayer)
//  console.log(bestPlayer)


//  //spread operator


//  const cricplayer1={
//     name:"dhoni",
//     age:41
//  }


//  cricplayer1.foods={

//     morning:"dosa",
//     noon:"biriyani"
//  }

//  console.log("212",cricplayer1);


//Array Operations


//splice

// const CricketPlayersList=["dhoni","sachin","virat","sechwag"]

//  const news =CricketPlayersList.splice(1,3)


// console.log("xc",CricketPlayersList)

// console.log("c",news)

// //slice

// const arraz=["hayden","ponting","gilchrist","gibbs","symonds"]

//  const sliced=arraz.slice(2,3)

// console.log(sliced)

// const CricketPlayersList=["dhoni","sachin","virat","sechwag"]

// const footBallPlayersList=["messi","ronaldo","pele"]


// const sportsPlayers=[...CricketPlayersList,...footBallPlayersList]

// console.log("219",sportsPlayers)


// callBack Hell


function RequestDecisionReviewSystem(cbfn){

    console.log(`1 Third umpire recieved request from ground Umpire`)

    console.log(`2  3rd umpire requesting for cameras angle`)


    cbfn('OUTTTT...')




}


RequestDecisionReviewSystem(checkingCameras)

let resultOf;

function checkingCameras(y){

    setTimeout(()=>{

        console.log(`the result from camera 1 is ${y}`)
        resultOf=y
         showingResultOnScreen()

         

    },5000)


}

function  showingResultOnScreen(){

    const value=document.getElementById('pageContent')

     value.innerText=resultOf
}