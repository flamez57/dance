import React, {Component} from 'react';

class InsData extends Component{
    render(){
        return (
            this.props.instData.map((instData,i)=>{
                return (
                	<div className="col-sm-4 team-grid" key={i}>
						<div className="ih-item circle effect10 bottom_to_top">
							<div className="img"><img src={instData.pic} alt="img" /></div>
							<div className="info">
								<h3>{instData.title}</h3>
								<div className="icons">
									<ul>
										<li><a href="//mysweet95.com"><i className="fa fa-facebook"></i></a></li>
										<li className="team-twitter"><a href="/"><i className="fa fa-twitter"></i></a></li>
										<li><a href="//mysweet95.com"><i className="fa fa-google-plus" aria-hidden="true"></i>.</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
                )
            })
        )
    }
}

export default class Instructors extends Component {
	constructor(props){
        super(props);
        this.state={
            instData:[
            	{pic:"images/t1.jpg",title:"David Watson"},
            	{pic:"images/t2.jpg",title:"Shane Smith"},
            	{pic:"images/t3.jpg",title:"Steve Warner"},
            	{pic:"images/t4.jpg",title:"Dale Duminy"},
            	{pic:"images/t5.jpg",title:"Shane Miller"},
            	{pic:"images/t6.jpg",title:"James Kallis"}
			],
            isLoaded:false
        }
    }

    render() {
        return (
			<div className="instructors" id="instructors">
		   		<div className="container">
		     		<h3 className="title-w3">Our Instructors</h3>
		       		<p className="sub-text">Choose Your Style</p>
		      		<div className="team-grids">
						<InsData instData={this.state.instData}/>
						<div className="clearfix"> </div>
					</div>
		  		</div>
			</div>
        );
    }
}
