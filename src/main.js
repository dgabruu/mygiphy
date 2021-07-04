import './main.css';
import React, { useState } from 'react';
import Gifs from './gifs'


class main extends React.Component{
    constructor(){
        super()
        this.state={
            show:true,
            val:'',
            myimage:''
        }
        this.sets=this.sets.bind(this)
        this.setgif=this.setgif.bind(this)
    }

    setgif(id){
        this.setState({myimage:id})
        console.log(this.state.myimage)

    }

    sets(){
        this.setState({show:!this.state.show})

    }

    mychange=(e)=>{
        this.setState({val:e.target.value})
    }
    render(){
       
   
    return(
       <div>
           {this.state.show?( <div class="shadow-lg p-3 mb-5 bg-white rounded">
        <div className="card " >
  
  <div className="card-body text-success " style={{height:'380px'}}>
      <form>
          <div>
          {/* <i class="fas fa-user"></i> */}

      <input type="text" className="form-control in1" 
        placeholder="What's On Your Mind ?" value={this.state.val} onChange={this.mychange} /> 
        <label for="stuff" className="fa fa-user input-icon"></label>
        </div>
        <label for="stuffs" className="far fa-smile-beam input-icon1"></label>

      </form>
      <img src={this.state.myimage}
       className='m-3 w-80 h-60'/>
  </div>
  <div className="card-footer bg-transparent border-secondary">
   <center><button className='btn btn-secondary gif1' onClick={()=>this.setState({show:!this.state.show})}>Search GIF</button><br></br></center> 
      <button className='btn btn-primary m-2 w-100'>Post</button>
  </div>
</div>
</div>):<div ><Gifs data={this.sets} data1={this.setgif}/> </div>}
</div>
    )
}
}

export default main;