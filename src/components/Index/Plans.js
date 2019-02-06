import React, {Component} from 'react';

class PlaData extends Component{
    render(){
        return (
            this.props.plaData.map((plaData,i)=>{
                return (
                	<div className={plaData.cla1} key={i}>
						<div className="price-block agile">
							<div className={plaData.cla3}>
								<h4>{plaData.title}</h4>
								<h3><span>$</span>{plaData.price}</h3>
								<h5>each</h5>
							</div>
							<div className="price-gd-bottom">
							   	<div className="price-list">
									<ul>
										<li><i className="fa fa-star" aria-hidden="true"></i></li>
										<li><i className="fa fa-star-o" aria-hidden="true"></i></li>
										<li><i className="fa fa-star-o" aria-hidden="true"></i></li>
										<li><i className="fa fa-star-o" aria-hidden="true"></i></li>
										<li><i className="fa fa-star-o" aria-hidden="true"></i></li>
									</ul>
									<h6 className={plaData.cla2}><i className="fa fa-street-view" aria-hidden="true"></i></h6>
								</div>
								<div className={plaData.cla4}>
									<a className="book popup-with-zoom-anim button-isi zoomIn animated" data-wow-delay=".5s" href="#small-dialog">Sign Up</a>
								</div>
							</div>
						</div>
					</div>
                )
            })
        )
    }
}

export default class Plans extends Component {
	constructor(props){
        super(props);
        this.state={
            plaData:[
            	{price:"79",title:"3/4HR LESSON",cla1:"col-md-3 price-grid",cla2:"bed",cla3:"price-gd-top pric-clr1",cla4:"price-selet pric-sclr1"},
            	{price:"119",title:"3/4HR LESSON",cla1:"col-md-3 price-grid",cla2:"bed two",cla3:"price-gd-top pric-clr2",cla4:"price-selet pric-sclr2"},
            	{price:"159",title:"1HR LESSON",cla1:"col-md-3 price-grid lost",cla2:"bed three",cla3:"price-gd-top pric-clr3",cla4:"price-selet pric-sclr3"},
            	{price:"199",title:"1/2HR LESSON",cla1:"col-md-3 price-grid wthree lost",cla2:"bed four",cla3:"price-gd-top pric-clr4",cla4:"price-selet pric-sclr4"},
			],
            isLoaded:false
        }
    }

    render() {
        return (
			<div className="main" id="plans">
				<div id="particles-js"></div>
				<div className="priceing-table-main">
		       		<h3 className="title-w3 three">Our Pricing Pakages</h3>
		       		<p className="sub-text">Choose Your Style</p>
			   		<div className="priceing-table-grids">
				   		<PlaData plaData={this.state.plaData}/>
						<div className="clearfix"> </div>
					</div>
				</div>
			</div>
        );
    }
}
