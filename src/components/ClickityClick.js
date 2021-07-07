// Code ClickityClick Component Here
import React from 'react'

export default class ClickityClick extends React.Component{

    constructor(){
        super()
        this.state = {
            toggled : true
        }
    }

    handleClick = () => {
        this.setState(previous => {
            return {
                toggled : !previous.toggled
            }
        })
        console.log(this.state.toggled)
    }

    render(){
        return(
            <div onClick={this.handleClick}>
                click me
            </div>
        )
    }
}