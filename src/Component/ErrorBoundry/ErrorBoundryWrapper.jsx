import React, { Component } from 'react'

export default class ErrorBoundryWrapper extends Component {
    constructor(props){
        super(props)
        this.state={isError:false}
    }
    static getDerivedStateFromError(){
        return {isError:true}
    }
    componentDidCatch(error,errInfo){
        console.log({error})
        console.log({errInfo})
    }
  
  render() {
    return this.state.isError?<h1>Something went wrong... Please try after sometime</h1>:this.props.children
  }
}

