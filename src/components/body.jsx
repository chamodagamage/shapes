import React, { Component } from 'react';
import data from './shapes.json';
import classes from './body.module.css'



class Body extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }
    calculateTotal = ()=> {
      let count = 0;
       data.map(shape => {
         count++
       })
       this.setState({
        result: count
      });

    }     

    calculateTotalTriangles = () => {
       let count = 0 
       data.map(shape => {
         if(shape.Shapes == 'T'){
            count++
         }
       })
       this.setState({
        result: count
      });
    }
    calculateTotalCircles = () => {
      let count = 0 
      data.map(shape => {
        if(shape.Shapes == 'C'){
           count++
        }
      })
      this.setState({
       result: count
     });
    }
    calculatetriangleArea = () => {
      let areas = []
      data.map(shape => {
        let area  = ((shape.x1*shape.y2) + (shape.x2*shape.y3) + (shape.x3*shape.y1) - (shape.x1*shape.y3) - (shape.x2*shape.y1) - (shape.x3*shape.y2))/2
        areas.push(Math.abs(area))
      })
      let largestArea = Math.max.apply(null, areas)
      this.setState({
        result: largestArea
      });
    }
    calculateCircleArea = () => {
      let areas = []
      data.map(shape => {
        let area  = 3.1415926535898 * shape.x2 * shape.x2
        areas.push(Math.abs(area))
      })
      let largestArea = Math.max.apply(null, areas)
      this.setState({
        result: largestArea
      });
    }
    render(){
    return (
        <div>
        <button  className={classes.button} onClick={this.calculateTotal}>Calculate Total No of Shapes</button>
        <button  className={classes.button} onClick={this.calculateTotalTriangles}>Calculate total Triangles</button>
        <button className={classes.button} onClick={this.calculateTotalCircles}>Calculate Total Circles</button>
        <button className={classes.button} onClick={this.calculatetriangleArea}>Calculate the largest triangle area</button>
        <button className={classes.button} onClick={this.calculateCircleArea}>Calculate the largest circle area</button>
        {this.state.result ? <h1>{this.state.result}</h1> : null} 

        </div>

    );
  }
}  

export default Body