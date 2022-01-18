import React, { Component } from "react";
import Cardlist from "./Cardlist";
import { Robots } from "./Robots";
import Scroll from "./Scroll"
import SearchBox from "./SearchBox";


class App extends Component {
    constructor(){
        super()
        this.state = {
            Robots: Robots,
            searchfield: "",
        }
    }

    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value})

    }
    render() {
        const filteredRobots = this.state.Robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })


        return (
            <div className="tc" style={{scrollwidth:'none'}}>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                <Cardlist Robots={filteredRobots} />
                </Scroll>
               
            </div>
        );
    }
}
export default App;
