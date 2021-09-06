
import './App.css';
import Header from './Header';
import Form from './Form';
import Generator from './Generator';
//import html2canvas method for creting image from html content
import html2canvas from 'html2canvas';


import React from "react"

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      firstText:"",
      secondText:"",
      imgs: [],
      randomImage: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.downloadPic = this.downloadPic.bind(this);
  }

//update all input typing dynimically to state
  handleChange(event){
    const {name, value} = event.target;
    this.setState({
      [name]:value
    })
  }

//update random api image to randomImage state prop
  handleClick(event){
    event.preventDefault();

     const index=Math.floor(Math.random()*this.state.imgs.length);
     console.log(this.state.imgs[index].url)
     this.setState({
       randomImage: this.state.imgs[index].url
     })
  }

  // convert html content to image and download
  downloadPic(){
    html2canvas(document.getElementsByClassName("meme")[0], {
      useCORS: true,
    }).then(function (canvas) {
      var imageURL = canvas.toDataURL("image/png");
      let a = document.createElement("a");
      a.href = imageURL;
      a.download = imageURL;
      a.click();
    });
  }
          
     
//fetch data from API
  componentDidMount(){
     fetch("https://api.imgflip.com/get_memes").then(response=>response.json()).then(response=>{
       const {memes} = response.data;
   
       this.setState({
         imgs: memes
       })

     })

  }

 
  render(){
    //rendering jsx 
    return (<div>
      <Header/>
      <Form handleChange={this.handleChange} 
           handleClick={this.handleClick} 
                firstText={this.state.firstText}
                secondText={this.state.secondText} 
                />
     
      <Generator  
        randomImage={this.state.randomImage}
        downloadPic={this.downloadPic}
        firstText={this.state.firstText}
        secondText={this.state.secondText}
      />
    </div>)

  }



}

export default App
