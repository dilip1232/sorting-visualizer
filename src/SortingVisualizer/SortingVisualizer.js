import React from 'react';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
    constructor(props){
        super(props);
        this.state = {array:[]};
    }
    componentDidMount(){
        this.resetArray();
    }
    //Generates new Array
    resetArray(){
        const array = [];
        for(let i=0; i<270; i++){
            array.push(getRandomNumber(10,700));
        }
        this.setState({array});
    }

    selectionSort(array){
        


    }
    render(){
        const {array} = this.state;
        //console.log(array);
        return (
        <div className="array-container">
            {array.map ((value,idx) => (
            <div className = "array-bar"
             key = {idx} 
             style = {{backgroundColor : 'LightSeaGreen', height: `${value}px`, }}>
            </div>
            ))}
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.selectionSort(this.state.array)}>Selection sort</button>
        </div>
        
        );
    }
}
function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}