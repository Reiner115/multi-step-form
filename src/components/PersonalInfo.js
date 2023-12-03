import React from 'react';
class PersonalInfo extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    render =()=>{
       
      return(
        <div className="">
            <div className="header-subtitle-container">
            <div className="header" >Personal Info</div>
            <div className="subtitle">Please provide your name, email address, and phone number.</div>
            </div>

            <div className="content-container">   
            {

                
                this.props.form.formInputs.map((data=>{                                   
                    return <FormInput 
                        submitted={this.props.form.submitted}
                        key={data.id}
                        inputData={data}                        
                    />        
                }))
            }    
            </div>        
            
        </div>
      );
    }

} 

export default PersonalInfo;



class FormInput extends React.Component{
    constructor( props ){
        super(props);
        this.props = props;
    }
    render=()=>{
        if(  this.props.submitted  ){
            console.log("the form is sbumitted");
            if( this.props.inputData.isValid ){
                console.log("valid value : "+ this.props.inputData);
                return this.validInput(this.props.inputData  );
            }
                
            else{
                console.log("unvalid: "+ this.props.inputData);
                return this.invalidInput(this.props.inputData);    
            }
                

        }else{
            return this.validInput(this.props.inputData );
        }

    }

    invalidInput = (props )=>{
        return(
            <div  className="input-container">
                <div className="row jc-sb">
                    <div className="title">{props.name}</div>
                    <div  className="required">This field is required</div>
                </div>
                <input type="text" defaultValue={props.value} id={props.id}                 
                className="form-input form-input-required " placeholder={props.placeholder} />
            </div>
        );
    }

    validInput = ( props , onInputBlur )=>{
        return(
            <div  className="input-container">
                <div className="title">{props.name}</div>
                <input id={props.id}
                defaultValue={props.value}
                  type="text" className="form-input" placeholder={props.placeholder} />
            </div>
        );
    }



}

/*

*/