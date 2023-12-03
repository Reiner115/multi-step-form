import React from "react";

class FinishUp extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      selected: [false, false, false],
    };
  }

  render = () => {

    return (
      <div className="">
          <div className="header-subtitle-container">
              <div className="header" >Finishing up</div>
        <div className="subtitle"> Double check everything looks OK before confirming.
        </div>
          </div>
        
         

        <div className="finish-container">
            
          <div className="prices">
            <div className="row jc-sb gap-12 ai-center">
              <div className="column jc-center ai-start">
                <div className="title dark-blue bold">
                    {
                        this.props.planType==1 ? 
                        (this.props.plan.title + "(per month)" ) :
                        (this.props.plan.title + "(per year)" ) 
                        
                    }
                    
                    </div>
                <div className="change-selected-plan" onClick={this.props.changeSelectedPlan}>change</div>
              </div>
              <div className="subtitle dark-blue">
                  {
                       this.props.planType == 1 ?
                       ("$"+this.props.plan.pricePerMonth+"/mo") :
                       ("$"+this.props.plan.pricePerYear+"/yr") 
                  }
                 </div>
              </div>


              <div className="prices-seperator"></div>

              <div className="column gap-12 mt-32 mt-1">
                
                {
                    this.props.addons.map((addon=>{
                        return <div key={addon.id} className="row jc-sb">
                        <div className="subtitle gray">{addon.title}</div>
                        <div className="subtitle dark-blue">
                            {
                                 this.props.planType == 1 ?
                                 ("$"+addon.pricePerMonth+"/mo") :
                                 ("$"+addon.pricePerYear+"/yr") 
                            }
                        </div>
                      </div>
                    }))
                }

              </div>


           
          </div>
          <div className="row ai-center jc-sb p-16">
            <div className="title gray bold">
                {
                     this.props.planType == 1 ?
                     ("Total (per month)") :
                     ("Total (per year )") 
                }
            </div>
            <div className="title blue bold">
                {
                     this.props.planType == 1 ?
                     ("$"+this.calculateTotalPrice()+"/mo") :
                     ("$"+this.calculateTotalPrice()+"/yr") 
                }
            </div>
          </div>
        </div>
      </div>
    );
  };

    calculateTotalPrice=()=>{
        console.log( "addons : ");
        console.log( this.props.addons );
        let totalPrice = 0;
        if( this.props.planType == 1 )
            totalPrice +=this.props.plan.pricePerMonth;
        else
            totalPrice +=this.props.plan.pricePerYear;

        for(let i=0;i<this.props.addons.length ; i++){
            if( this.props.planType == 1 )
                totalPrice+=this.props.addons[i].pricePerMonth;     
            
            else
                totalPrice+=this.props.addons[i].pricePerYear;
            
        }
        return totalPrice;    
    }  
}

export default FinishUp;
