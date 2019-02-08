import React, {Component} from 'react';

class ClassData extends Component{
    render(){
        return (
            this.props.danCls.map((danCls,i)=>{
                return (
                	<div className="col-md-3 class-grid" key={i}>
						<div className="class-grid-img hvr-sweep-to-top">
					       	<img src={danCls.pic} alt=""/>
						    <div className="caption">
							    <h5>{danCls.title}</h5>
							</div>
						</div>
						<h4>{danCls.con}</h4>
				    </div>
                )
            })
        )
    }
}

export default class Classes extends Component {
	constructor(props){
        super(props);
        this.state={
            danCls:[
            	{pic:"images/c1.jpg",title:"Class 1",con:"Tango Ballroom "},
            	{pic:"images/c2.jpg",title:"Class 2",con:"Ballet Ballerina"},
            	{pic:"images/c3.jpg",title:"Class 3",con:"Pole Dance "},
            	{pic:"images/c4.jpg",title:"Class 4",con:"BALLET BALLERINA "},
			],
            isLoaded:false
        }
    }

    render() {
        return (
			<div className="services" id="classes">
				<div className="container">
		 			<h3 className="title-w3">Dancing Classes</h3>
		 			<p className="sub-text">Choose Your Style</p>
		     		<div className="wthree-agile-classes-section">
				 		<ClassData danCls={this.state.danCls}/>
						<div className="clearfix"> </div>
	         		</div>
				</div>
			</div>
        );
    }
}
