

function Form(props){
    return(
    <form className="form" onSubmit={props.handleClick}>
    <input type="text" placeholder="Write first text"
     name="firstText" value={props.firstText} 
     onChange={props.handleChange} />
     
      <input type="text" placeholder="Write second text" 
      name="secondText" value={props.secondText} 
      onChange={props.handleChange} />
     
      <button><i class="fa fa-picture-o" aria-hidden="true"></i> Load</button>
      


    </form>)
}
export default Form