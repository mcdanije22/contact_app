import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import AddForm from './AddForm';


class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state={
            side:true,
            class: 'modalClose'            
        }
    }
    hideSide = () =>{
        if(this.state.side){
        this.setState(        
            {side:false}
        )}
        else{
            this.setState({side:true})
        }
        //test state change
        console.log(this.state.side)     
    }
    
   onClick = () => {
       this.setState({class:'modal'})
   }
   
    render(){
        return (
            <div >
                <NavBar hideSide={this.hideSide} onClick={this.onClick}/>
                <SideBar  toggle={this.state.side} />
                <AddForm  showAdd={this.state.class} />
            </div>
        )
    }
}
export default Menu;