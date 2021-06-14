import React, { Component } from 'react'
import axios from 'axios'
import ShowDigimon from './showDigimon.js'

 class Main extends Component {
constructor(props){
    super(props)
    this.state={
        serverLink: process.env.REACT_APP_SERVER,
        digimon:[],
        showDigimons:false
    }
}

     componentDidMount= async ()=>{
         const digimons= await axios.get(`${this.state.serverLink}/digimon`)

         console.log(digimons.data);
        
        this.setState({
            digimon:digimons.data,
            showDigimons:true
        })
     }
     addToFavFunc= async(dataFav) =>{
         await axios.post(`${this.state.serverLink}/adddigimon`, dataFav)

     }
    render() {
        return (
            <>
             {this.state.showDigimons &&
             this.state.digimon.map((digimon,idx)=>{
                 return(

                 <ShowDigimon
                 digimon={digimon}
                 index={idx}
                 addFav={this.addToFavFunc}
                 />
                 )
             })}

            </>
        )
    }
}

export default Main
