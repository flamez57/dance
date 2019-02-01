import React, {Component} from 'react';

class classData extends Component{
    render(){
        return (
            this.props.danCls.map((danCls,i)=>{
                return (
                	<div class="col-md-3 class-grid">
						<div class="class-grid-img hvr-sweep-to-top">
					       	<img src={danCls.pic} alt=""/>
						    <div class="caption">
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
			<div class="services" id="classes">
				<div class="container">
		 			<h3 class="title-w3">Dancing Classes</h3>
		 			<p class="sub-text">Choose Your Style</p>
		     		<div class="wthree-agile-classes-section">
				 		<classData danCls={this.state.danCls}/>
						<div class="clearfix"> </div>
	         		</div>
				</div>
			</div>
        );
    }
}
