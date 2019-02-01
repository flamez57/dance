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
            <div class="about" id="about">
      			<div class="col-md-6 ab-w3-agile-info">
	   				<div class="ab-w3-agile-info-text">
	     				<h2 class="title-w3">{this.state.aboutUs.title}</h2>
		 				<p class="sub-text one">{this.state.aboutUs.subText}</p>
		 				<p>{this.state.aboutUs.content}</p>
						<div class="agileits_w3layouts_more menu__item one">
							<a href={this.state.aboutUs.link} class="menu__link" data-toggle="modal" data-target="#myModal">Learn More</a>
						</div>
		  			</div>
		  			<div class="ab-w3-agile-inner">
						<div class="col-md-6 ab-w3-agile-part">
							<h4>{this.state.supplies.title}</h4>
							<p>{this.state.supplies.content}</p>
						</div>
						<div class="col-md-6 ab-w3-agile-part two">
							<h4>{this.state.masterClasses.title}</h4>
							<p>{this.state.masterClasses.content}</p>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
	  			<div class="col-md-6 ab-w3-agile-img">
	  			</div>
				<div class="clearfix"></div>
			</div>
        );
    }
}
