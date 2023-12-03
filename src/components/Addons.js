import React from "react";

class Addons extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      selected : [false , false , false]
    };
  }

  render = () => {
    return (
      <div className="">
      <div className="header-subtitle-container">
        <div className="header">Pick add-ons</div>
        <div className="subtitle "> Add-ons help enhance your gaming experince
        </div>
      </div>          
        
        
         <div className="content-container">

        {
            this.props.addons.map( (addon=>{
                
               return <Addon
                key={addon.id}
                title={addon.title}
                subtitle={addon.subtitle}
                price={ (this.props.planType == 1 && "$" + addon.pricePerMonth+"/mo" ) || "$" + addon.pricePerYear+"/yr" }
                id={addon.id}
                onAddonChange={this.props.onAddonChange}
                isSelected={addon.isSelected}
                />
                
            }))
        }

      </div>

        
      </div>
    );
  };

}

export default Addons;

class Addon extends React.Component {
  constructor(props) {
      super();
    this.props = props;
  }

  render = () => {
    return (
      <div 
      className={"addon-container " + ( this.props.isSelected && "addon-selected")}>
        <div className="row gap-16 ai-center">
          
            {
              this.props.isSelected ? 
              <input type="checkbox" checked onChange={()=>this.props.onAddonChange(this.props.id)} />
              :
              <input type="checkbox"  onChange={()=>this.props.onAddonChange(this.props.id)} />
            }
            
         
          <div className="column">
            <div className="addon-title">{this.props.title}</div>
            <div className="subtitle gray">{this.props.subtitle}</div>
          </div>
        </div>

        <div className="addon-price">{this.props.price}</div>
      </div>
    );
  };
}
