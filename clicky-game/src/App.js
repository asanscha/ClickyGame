import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    colors : [require("./assets/pika.png"), require("./assets/charm.png"), require("./assets/squirtle.png")],
    clicked: [],
    score: 0,
    highscore: -1
  }

shuffle= (a)=> {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  console.log(a)
  return a;
}

reset = ()=>{
  this.setState({score: 0, clicked: []})
}

checkWL = () =>{
  if (this.state.score === 3){
    alert("you win!")
      this.reset()
  }
}

handleClick = (e) =>{
  let src = e.target.getAttribute("src")
  console.log(src)
  if (!this.state.clicked.includes(src)){
    this.setState({score: this.state.score +1})
    this.setState({clicked: [...this.state.clicked, src]})
    this.setState({colors: this.shuffle(this.state.colors)})
    this.state.score > this.state.highscore? this.setState({highscore: this.state.score}) : console.log(this.state.highscore)
    setTimeout(this.checkWL, 500)
  }else{
    this.setState({score: 0})
    alert("YOU LOSE")
    this.reset()
  }
  console.log(this.state.clicked)
}

  render(){
    return (
    <div className="App">
     {this.state.colors.map(color=>{
       console.log(color)
       return (<img key={color} onClick={this.handleClick} className="clickables" src={color}/>)
     })}
    
<h1>YOUR CURRENT SCORE: {this.state.score} </h1>
<h1>YOUR HIGHEST SCORE: {this.state.score >= this.state.highscore ? this.state.score : this.state.highscore + 1}</h1>
</div>
  );
  }};


export default App;
