import React from 'react'
import axios from 'axios'

class Gif extends React.Component{
    constructor(){
        super()
        this.state={
            data:[],
            search:[],
            text:''
        }
    }
   
     componentDidMount(){
         const myapi='https://api.giphy.com/v1/gifs/trending?api_key=id8X7Oc34K6YfPjygrjxwfDoAbTkRi52'


    fetch(myapi).then(res=> res.json()).then(result=>this.setState({data:result.data}))
   
    
}

    myfunc=()=>{
        
        const searchapi='https://api.giphy.com/v1/gifs/search?api_key=id8X7Oc34K6YfPjygrjxwfDoAbTkRi52&q='
        fetch(searchapi+this.state.text).then(res=> res.json()).then(result=>this.setState({search:result.data}))
        console.log(this.state.search)

    }
     search =(e)=>{
        this.setState({text:e.target.value})
        if(this.state.text.length>0)
        {
            setTimeout(this.myfunc,1000)
        }
      
    }
    render(){
       var filterdata=[]
       if(this.state.text.length==0)
       filterdata=this.state.data
       else
       filterdata=this.state.search
    //    console.log('my' ,this.state.text)
        return (
            <div>
                <button type="button" className="btn close" 
                data-dismiss="alert" aria-label="Close" onClick={()=>(this.props.data())}>
                  
                <span aria-hidden="true"><strong><i class="fas fa-arrow-left" /></strong></span>
            </button>
               <div className="alert alert-dismissible text-center">
               
  <div className="alert-header">
  <form>
          <div>
          {/* <i class="fas fa-user"></i> */}

      <input type="text" className="form-control  in2" 
        placeholder="search" onChange={this.search} /> 

        </div>
        </form>
  </div>
  <div className="container m-3 alert-body">
  
  {
      filterdata.map((el)=>{

        return(
            <div className='m-2'>
                <img src={el.images.fixed_height.url} onClick={()=>{
                    this.props.data1(el.images.fixed_height.url)
                    this.props.data()
                    }}/>
                </div>
        )
      })
  }
    
  </div>
  
</div>

            </div>
        )
    }
}

export default Gif;