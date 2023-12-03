
import React from 'react';
class FormSteps extends React.Component{

    constructor( props ){
        super( props );
        this.props = props;
    }


    render = (  )=>{
        return(
				
				<div className="steps-container">
                    <div className="steps-items-container">
                    <FormStep 
                    stepNumber={1} 
                    stepNumberText="STEP 1" 
                    stepTitle="YOUR INFO" 
                    selectedStepNumber={this.props.selectedStepNumber}
                    onFormStepChange={this.props.onFormStepChange}
                    />

                    <FormStep 
                    stepNumber={2} 
                    stepNumberText="STEP 2" 
                    stepTitle="SELECT PLAN" 
                    selectedStepNumber={this.props.selectedStepNumber}
                    onFormStepChange={this.props.onFormStepChange}  />

                    <FormStep 
                    stepNumber={3} 
                    stepNumberText="STEP 3" 
                    stepTitle="ADD-ONS" 
                    selectedStepNumber={this.props.selectedStepNumber} 
                    onFormStepChange={this.props.onFormStepChange} />

                    <FormStep 
                    stepNumber={4} 
                    stepNumberText="STEP 4" 
                    stepTitle="SUMMARY" 
                    selectedStepNumber={this.props.selectedStepNumber} 
                    onFormStepChange={this.props.onFormStepChange} />

</div>
				</div>
        );
    }
}

export default FormSteps;



class FormStep extends React.Component{
    constructor(props){
        super( props );
        this.props = props;
    }
    render = ()=>{
        return(
            <div className="step" onClick={()=>this.props.onFormStepChange( this.props.stepNumber )}>
						
                <div className={"step-number " + ( ( this.props.selectedStepNumber == this.props.stepNumber ) && "form-step-number-selected") }>{this.props.stepNumber}</div>
                <div className="step-title-and-subtitle-container">
                    <div className="step-title">{this.props.stepNumberText}</div>
                    <div className="step-subtitle">{this.props.stepTitle}</div>
                </div>
            
            </div>   
        );
    }
        
}
