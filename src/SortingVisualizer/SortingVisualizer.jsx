import React from 'react';
import './SortingVisualizer.css';
import {getSelectionSortAnimations} from '../SortingAlgorithms/SelectionSort';
import { getMergeSortAnimations } from '../SortingAlgorithms/mergeSort';

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
        for(let i=0; i<300; i++){
            array.push(getRandomNumber(10,700));
        }
        this.setState({array});
    }

    selectionSort(){
        const [animations,sortedArray] = getSelectionSortAnimations(this.state.array);
        //console.log(animations[0]);
        //console.log(sortedArray);
        const arrays = document.getElementsByClassName('array-bar');
        for(let i=0; i<animations.length; i++){
            const isColorChange = (animations[i][0]==='comparison1') || (animations[i][0]==='comparison2');
            if(isColorChange){
                const color = (animations[i][0]==='comparison1')? 'red':'LightSeaGreen';
                const [comparison, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrays[barOneIndex].style;
                const barTwoStyle = arrays[barTwoIndex].style;
                setTimeout(()=> {
                   barOneStyle.backgroundColor = color;
                   barTwoStyle.backgroundColor = color;
                },2)
            }
            else {
                const [swap, barIndex, newHeight] = animations[i];
                const style = arrays[barIndex].style;
                setTimeout(() => {
                    style.height = `${newHeight}px`;
                    style.backgroundColor = 'magenta';
                }, 2)
            }
        }
    }

    mergeSort(){
        const animations = getMergeSortAnimations(this.state.array);
        


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
        <button onClick={() => this.selectionSort()}>Selection sort</button>
        </div>
        
        );
    }
}
function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}