import React, { Component } from 'react'

 class FavoriteDigimons extends Component {
     constructor(props){
         super(props)
         this.state={
             serverLink:process.env.REACT_APP_SERVER,
         }
     }
     componentDidMount= async()=>{
         const digis= await axios.get(`${this.state.serverLink}/getDigimons`)
     }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default FavoriteDigimons
