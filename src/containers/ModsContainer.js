import React from 'react';

class ModsContainer extends React.Component {

    constructor(){
        super()

        this.state = {

        }
    }

    render (){
        return (

            <div className="ui grid cards">
                <h4>Mods Container</h4>



                <div className="three centered row">
                    <div className="column" onClick={this.handleClick}>
                        <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5rZfaVE5XP0nD_kAIq1GpngctlJ4cmq09MbfWOMDAzRLc11F-Q" />
                    </div>
                    <div className="column">
                        <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5rZfaVE5XP0nD_kAIq1GpngctlJ4cmq09MbfWOMDAzRLc11F-Q" />
                    </div>
                    <div className="column">
                        <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5rZfaVE5XP0nD_kAIq1GpngctlJ4cmq09MbfWOMDAzRLc11F-Q" />
                    </div>
                </div>

                <div className="two centered row">
                    <div className="column">
                        <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5rZfaVE5XP0nD_kAIq1GpngctlJ4cmq09MbfWOMDAzRLc11F-Q" />
                    </div>
                    <div className="column">
                        <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5rZfaVE5XP0nD_kAIq1GpngctlJ4cmq09MbfWOMDAzRLc11F-Q" />
                    </div>
                </div>

            </div>

        )
    } 
}

export default ModsContainer;