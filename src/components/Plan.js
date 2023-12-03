
import React from 'react';
import arcadeImg from "../images/icon-arcade.svg";
import advancedImg from "../images/icon-advanced.svg";
import proImg from "../images/icon-pro.svg";

class Plan extends React.Component{
    
    constructor( props ){
        super(props);
      
        this.props = props;
    }

    render = () =>{
        return(
            <div className="">
                <div className="header-subtitle-container">
                <div className="header">Select your Plan</div>
                <div className="subtitle">You have the option of monthly or yearly bulling.</div>
                </div>

                <div className="content-container">

                <div className="plans-container">

                    {this.props.plans.plans.map( (plan=>{
                        return <PlanCard 
                        key={plan.id}
                        title={plan.title}
                        subtitle=
                        {
                            (
                                (this.props.plans.planType == 1) && ("$"+plan.pricePerMonth+"/mo") 
                                || ("$"+plan.pricePerYear+"/yr" ))}
                        img={plan.img}
                        id={plan.id}
                        onChangePlan={this.props.onChangePlan}
                        selectedPlan={this.props.plans.selectedPlan}
                        />
                    })
                    )}

                    
                </div>

                <div className="toggle-container" > 
                    <div id="monthly"  
                    className={ (this.props.plans.planType == 1 ? "toggle-selected" : "") }
                    >
                        Monthly</div>
                    <div  id="toggle"
                    className={"toggle "+ (this.props.plans.planType == 1 ? "" : "toggle-reversed"  ) }
                    onClick={()=>this.onTogglePressed()}>
                        <div className="toggle-ball"></div>
                    </div>
                    <div id="yearly"
                    className={ (this.props.plans.planType == 1 ?"": "toggle-selected" ) }
                    >Yearly</div>
                </div>


                </div>


            </div>
        );
    }




    onTogglePressed = ()=>{
        document.getElementById("toggle").classList.toggle("toggle-reversed");
        document.getElementById("monthly").classList.toggle("toggle-selected");
        document.getElementById("yearly").classList.toggle("toggle-selected");
       
        this.props.onTogglePlanType();
        
    }

}
export default Plan;

class PlanCard extends React.Component{
    
    constructor(props){
       super();
        this.props = props;

    }

    render = ()=>{

        return(
            <div 
            onClick={()=>this.props.onChangePlan(this.props.id)}
            className={"card-container " +( (this.props.id == this.props.selectedPlan) && "card-selected")}>
                <div className="card-icon-container">
                    <img src={this.props.img} width="30px" alt="" />
                </div>
                <div className="card-info">
                    <div className="title dark-blue bold">{this.props.title}</div>
                    <div className="subtitle gray">{this.props.subtitle}</div>
                </div>
                
            </div>
        );
    }
}