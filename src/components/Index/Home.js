import React, {Component} from 'react';

class HmData extends Component{
    render(){
        return (
            this.props.hmData.map((hmData,i)=>{
                return (
                	<li key={i}>
						<div className={hmData.cla1}>
							<div className="container">
								<div className="agileits-banner-info">
									<h3>Shall We <span>Dance</span> ?</h3>
                                    <p>CELEBRATE YOUR EVENT WITH US</p>
									<div className="agileits_w3layouts_more menu__item">
                                        <a href="/" className="menu__link" data-toggle="modal" data-target="#myModal">Learn More</a>
                                    </div>
								</div>
							</div>
						</div>
					</li>
                )
            })
        )
    }
}

class Nav extends Component{
    render(){
        return(
            <div className="header-w3layouts">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header page-scroll">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                <span className="sr-only">Dance Whirl</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <h1><a className="navbar-brand" href="index.html">Dance Whirl</a></h1>
                        </div>
                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="hidden"><a className="page-scroll" href="#page-top"></a>	</li>
                                <li><a className="page-scroll scroll" href="#home">Home</a></li>
                                <li><a className="page-scroll scroll" href="#about">About</a></li>
                                <li><a className="page-scroll scroll" href="#classes">Classes</a></li>
                                <li><a className="page-scroll scroll" href="#plans">Plans</a></li>
                                <li><a className="page-scroll scroll" href="#instructors">Instructors</a></li>
                                <li><a className="page-scroll scroll" href="#gallery">Gallery</a></li>
                                <li><a className="page-scroll scroll" href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default class Home extends Component {
	constructor(props){
        super(props);
        this.state={
            hmData:[
            	{cla1:"w3layouts-banner-top"},
            	{cla1:"w3layouts-banner-top w3layouts-banner-top1"},
            	{cla1:"w3layouts-banner-top w3layouts-banner-top2"},
			],
            isLoaded:false
        }
    }
    render() {
        return (
            <div id="home" className="w3ls-banner">
                <div className="slider">
                    <div className="callbacks_container">
                        <ul className="rslides callbacks callbacks1" id="slider4">
                            <HmData hmData={this.state.hmData}/>
                        </ul>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                <div className="thim-click-to-bottom">
                    <a href="#about" className="scroll">
                        <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
                    </a>
                </div>
                <Nav/>
	        </div>
        );
    }
}
