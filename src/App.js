import "./css/style.css";
import React from "react";
import FormSteps from "./components/FormStep";
import PersonalInfo from "./components/PersonalInfo";
import Plan from "./components/Plan";
import Addons from "./components/Addons";
import FinishUp from "./components/FinishUp";

import arcadeImg from "./images/icon-arcade.svg";
import advancedImg from "./images/icon-advanced.svg";
import proImg from "./images/icon-pro.svg";
import Thank from "./components/Thank";



class App extends React.Component {
  constructor() {
    super();
    this.perfonalInfoFormPage = 1;
    this.planFormPage = 2;
    this.addonsFormPage = 3;
    this.summaryFormPage = 4;
    this.thankFormPage = 5;
    this.state = {
      
      form :{
        submitted : false,
        formInputs:[

          {
            id : "personalInput0",
            name : "name",
            placeholder : "e.g Stephen King",
            value:"",
            regex : "[a-z A-Z]",
            isValid : false,
          },
          {
            id : "personalInput1",
            name : "Email",
            placeholder : "e.g StephenKing@lorem.com",
            value:"",
            regex : "[a-z A-Z]",
            isValid : false,
          },
          {
            id : "personalInput2",
            name : "Phone number",
            placeholder : "e.g +1 234 567 890",
            value:"",
            regex : "[a-z A-Z]",
            isValid : false,
          }
          
        ],
      },
      selectedStepNumber: 1,
      plans: {
        selectedPlan: 0,
        planType: 1,
        plans: [
          {
            id: 0,
            title: "Arcade",
            pricePerMonth: 9,
            pricePerYear: 90,
            img: arcadeImg,
          },
          {
            id: 1,
            title: "Advanced",
            pricePerMonth: 12,
            pricePerYear: 120,
            img: advancedImg,
          },
          {
            id: 2,
            title: "Pro",
            pricePerMonth: 15,
            pricePerYear: 150,
            img: proImg,
          },
        ],
      },
      addons: [
        {
          id: 0,
          title: "Online service",
          subtitle: "Access to multiplyer games",
          pricePerMonth: 1,
          pricePerYear: 10,
          isSelected: false,
        },
        {
          id: 1,
          title: "Large storage",
          subtitle: "Extra 1TB of cloud to save",
          pricePerMonth: 2,
          pricePerYear: 20,
          isSelected: false,
        },
        {
          id: 2,
          title: "Customizable profile",
          subtitle: "Customize theme on your profile",
          pricePerMonth: 2,
          pricePerYear: 20,
          isSelected: false,
        },
      ],
    };
  }

  componentDidMount() {}

  ChangeSelelectedPlanOnFinish = () => {
    this.setState({ selectedStepNumber: this.planFormPage });
  };
  
  onFormStepChange = (stepNumber) => {
      if( stepNumber == this.perfonalInfoFormPage ){
        this.checkPersonalInfoFields();
        return;
      }
     stepNumber++;
    this.setState({ selectedStepNumber: stepNumber });
  };


  checkPersonalInfoFields = ()=>{
      this.setPersonalInfoData();


      this.state.form.submitted = true;
      let inputs = [ ...this.state.form.formInputs ];
      let validFields = true;
      for(let i=0;i<this.state.form.formInputs.length;i++){
        let input = this.state.form.formInputs[i];
        if( input.value == "" || input.value == " "){
          inputs[i].isValid = false;
          validFields = false;
        }else{
          inputs[i].isValid = true;
        }
      }

      let form = { submitted : true , formInputs : inputs };
      if( validFields ){
        let stepNumber = this.state.selectedStepNumber;
        stepNumber++;
        
        this.setState({ selectedStepNumber: stepNumber  , form : form });
      }
      else{
        this.setState({ form : form});
      }


      

  }


  setPersonalInfoData = ()=>{
    console.log("begin setPersonalInfoData ");
    let form = {...this.state.form};
    for(let i=0;i<this.state.form.formInputs.length;i++){
      let data = document.getElementById(this.state.form.formInputs[i].id).value;      
      console.log(data);  
      form.formInputs[i].value = data;
    }

    this.setState( { form : form });
    console.log("end setPersonalInfoData ");
  }




  renderElements = () => {
    switch (this.state.selectedStepNumber) {
      case 1:
        return <PersonalInfo 
          form={this.state.form}

          />;
      case 2:
        return (
          <Plan
            plans={this.state.plans}
            onChangePlan={this.onchangePlan}
            onTogglePlanType={this.onTogglePlanType}
          />
        );
      case 3:
        return (
          <Addons
            addons={this.state.addons}
            planType={this.state.plans.planType}
            onAddonChange={this.onAddonChange}
          />
        );
      case 4:
        return this.renderFinishUp();
      case 5:
        return <Thank/>
    }
  };

  renderFinishUp = () => {
    let selectedPlan = this.state.plans.plans[this.state.plans.selectedPlan];
    let selectedAddons = Array();
    for (let i = 0; i < this.state.addons.length; i++) {
      if (this.state.addons[i].isSelected)
        selectedAddons.push(this.state.addons[i]);
    }

    return (
      <FinishUp
        plan={selectedPlan}
        addons={selectedAddons}
        planType={this.state.plans.planType}
        changeSelectedPlan={this.ChangeSelelectedPlanOnFinish}
      />
    );
  };

  onchangePlan = (id) => {
    let plans = this.state.plans;
    plans.selectedPlan = id;
    this.setState({ plans: plans });
  };

  onTogglePlanType = () => {
    let plans = this.state.plans;
    if (plans.planType == 1) plans.planType = 2;
    else plans.planType = 1;

    this.setState({ plans });
  };

  onAddonChange = (id) => {
    let addons = this.state.addons;
    for (let i = 0; i < addons.length; i++) {
      if (id == i) {
        addons[i].isSelected = !addons[i].isSelected;
        break;
      }
    }

    this.setState({ addons: addons });
  };


  onBackButtonPressed=()=>{
    if( this.state.selectedStepNumber > 1 ){
      let stepNumber = this.state.selectedStepNumber;
      stepNumber--;
      this.setState({selectedStepNumber : stepNumber})
    }

  }


  render() {
    return (
      <div className="container">

      <div className="form-main-container">

          
      <FormSteps
          selectedStepNumber={this.state.selectedStepNumber}
          onFormStepChange={this.onFormStepChange}
        />
         
                           
         <div className="form-container">
          
          {this.renderElements()}

         { this.state.selectedStepNumber != this.thankFormPage &&
          <div className="next-button-container-desktop">
            <div className="back-button" onClick={()=>this.onBackButtonPressed()}>
              {(this.state.selectedStepNumber !=this.perfonalInfoFormPage && "Go Back") || ""}
            </div>
            <div
              className="next-button"
              onClick={() =>
                this.onFormStepChange(this.state.selectedStepNumber)
              }
            >
              {(this.state.selectedStepNumber != this.summaryFormPage && "Next Step") ||
                (this.state.selectedStepNumber == this.summaryFormPage && "Confirm")}
            </div>
          </div>
        }

         </div>
         


      </div>
         

          <footer className="footer">

          { this.state.selectedStepNumber != this.thankFormPage &&
          <div className="next-button-container">
            <div className="back-button" onClick={()=>this.onBackButtonPressed()}>
              {(this.state.selectedStepNumber !=this.perfonalInfoFormPage && "Go Back") || ""}
            </div>
            <div
              className="next-button"
              onClick={() =>
                this.onFormStepChange(this.state.selectedStepNumber)
              }
            >
              {(this.state.selectedStepNumber != this.summaryFormPage && "Next Step") ||
                (this.state.selectedStepNumber == this.summaryFormPage && "Confirm")}
            </div>
          </div>
        }

         
          
          </footer>

      </div>
    );
  }
}

export default App;
