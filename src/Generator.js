function Generator (props){
    return (<div>
        <div className="container">
        <div className="center">
        <button id= "save" onClick={props.downloadPic}><i class="fa fa-floppy-o" aria-hidden="true"></i> Save</button>
        </div>
        </div>
        
        <div className="meme">
        <h2 className="firstText">{props.firstText}</h2>
          <h2 className="secondText">{props.secondText}</h2>
          <img src={props.randomImage} alt="error"/>
          </div>
          </div>

    )
}
export default Generator