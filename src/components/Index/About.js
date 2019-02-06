import React, {Component} from 'react';

export default class About extends Component {
	constructor(props){
        super(props);
        this.state={
            aboutUs:{
            	title:"About Us",
				subText:"Choose Your Style",
				content:"Lorem ipsum dolor sit amet, consectetur adipisc elit. Proin ultricies vestibulum velit."+
				"Lorem ipsum dolor sit amet.when an unknown printer took a galley of type and scrambled "+
				"it to make a type specimen book.Proin ultricies vestibulum velit.Lorem ipsum dolor sit amet."+
				"when an unknown printer took  Proin ultricies vestibulum velit.Lorem ipsum dolor sit amet",
				link:"/"
			},
			supplies:{
            	title:"Dancing Supplies",
				content:"Lorem ipsum dolor sit amet, consectetur adipisc elit. Proin ultricies vestibulum velit. "+
				"a galley of type and scrambled it to make a type specimen book. Proin ultricies vestibulum velit."
			},
			masterClasses:{
            	title:"Master Classes",
				content:"Lorem ipsum dolor sit amet, consectetur adipisc elit. Proin ultricies vestibulum velit., "+
				"a galley of type and scrambled it to make a type specimen book. Proin ultricies vestibulum velit."
			},
            isLoaded:false
        }
    }

    render() {
        return (
            <div className="about" id="about">
      			<div className="col-md-6 ab-w3-agile-info">
	   				<div className="ab-w3-agile-info-text">
	     				<h2 className="title-w3">{this.state.aboutUs.title}</h2>
		 				<p className="sub-text one">{this.state.aboutUs.subText}</p>
		 				<p>{this.state.aboutUs.content}</p>
						<div className="agileits_w3layouts_more menu__item one">
							<a href={this.state.aboutUs.link} className="menu__link" data-toggle="modal" data-target="#myModal">Learn More</a>
						</div>
		  			</div>
		  			<div className="ab-w3-agile-inner">
						<div className="col-md-6 ab-w3-agile-part">
							<h4>{this.state.supplies.title}</h4>
							<p>{this.state.supplies.content}</p>
						</div>
						<div className="col-md-6 ab-w3-agile-part two">
							<h4>{this.state.masterClasses.title}</h4>
							<p>{this.state.masterClasses.content}</p>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
	  			<div className="col-md-6 ab-w3-agile-img">
	  			</div>
				<div className="clearfix"></div>
			</div>
        );
    }
}
