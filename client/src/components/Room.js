import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import FurnishingPage from './FurnishingPage'

class Room extends Component {

    componentWillMount() {
        this.props.getAllFurnishings(this.props.roomId)
    }

    render() {
    
    

        return (

            <div>

                {this.props.room_name}
                < FurnishingPage roomId={this.props.roomId}/>
            </div>

        )

    }
}

export default Room