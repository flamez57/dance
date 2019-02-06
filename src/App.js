import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import './config';
import Home from "./components/Index/Home";
import About from "./components/Index/About";
import Classes from "./components/Index/Classes";
import Plans from "./components/Index/Plans";
import Instructors from "./components/Index/Instructors";
import Gallery from "./components/Index/Gallery";
import Contact from "./components/Index/Contact";
import Footer from "./components/Index/Footer";


class List extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[],
            isLoaded:false
        }
    }

    //当组件输出到 DOM 后会执行 componentDidMount()
    componentDidMount(){
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get(global.frApi.lists)
        .then(function (response) {
            _this.setState({
                users:response.data,
                isLoaded:true
            });
        })
        .catch(function (error) {
            console.log(error);
            _this.setState({
                isLoaded:false,
                error:error
            })
        })
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Home />
                <About/>
                <div className="copyrights">Collect from <a href="http://mysweet95.com"  title="dance">dance</a></div>
                <div className="modal fade" id="myModal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <img src="images/2.jpg" alt=" " className="img-responsive" />
                                <h5>Donec lobortis pharetra dolor</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typeset
                                    ting industry. Lorem Ipsum has been the industry's standard dumm
                                    y text ever since the 1500s, rds which don't look even slightly believable..
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Classes/>
                <Plans/>
                <div className="pop-up">
                    <div id="small-dialog" className="mfp-hide book-form">
                        <h4>Sign Up Form </h4>
                        <form action="#" method="post">
                            <input type="text" name="Name" placeholder="Your Name" required=""/>
                            <input type="text" name="Email" className="email" placeholder="Email" required=""/>
                            <input type="password" name="Password" className="password" placeholder="Password" required=""/>
                            <div className="check-box">
                                <input name="chekbox" type="checkbox" id="brand" value="" />
                                <label for="brand"><span></span>Remember Me.</label>
                            </div>
                            <input type="submit" value="Sign Up" />
                        </form>
                    </div>
                </div>
                <Instructors/>
                <Gallery/>
                <div className="testmonials" id="monials">
		            <div id="particles-js1"></div>
		            <div className="client-top">
		                <h3 className="title-w3 three">What Our Happy Students Say</h3>
		                <p className="sub-text">Choose Your Style</p>
		                <div className="slider">
					        <div className="callbacks_container">
						        <ul className="rslides" id="slider3">
							        <li>
                                        <div className="agileits-clients">
                                            <div className=" client_agile_info">

                                                <div className="c-img"><i className="fa fa-quote-right"></i> </div>
                                                <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                                <h4><img src="images/m1.jpg" alt="" />Alice Lengthorn</h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="agileits-clients">
                                            <div className="client_agile_info">
                                                <div className="c-img"><i className="fa fa-quote-right"></i> </div>
                                                <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                                <h4><img src="images/m2.jpg" alt="" /> Martin Pal</h4>
								            </div>
								            <div className="clearfix"></div>
								        </div>
							        </li>
							        <li>
                                        <div className="agileits-clients">
                                            <div className=" client_agile_info">
                                                <div className="c-img"><i className="fa fa-quote-right"></i> </div>
                                                <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                                <h4><img src="images/m3.jpg" alt="" />MARTIN NIXON</h4>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="agile-contact">
                    <div className="col-md-6 contact-map-right">
                        <div id="map"></div>
                    </div>
                    <div className="col-md-6 left-contact">
                        <div className="cont-top">
                            <h5><i className="fa fa-envelope" aria-hidden="true"></i>Email</h5>
                            <a href="mailto:flamez57@mysweet95.com">flamez57@mysweet95.com</a>
                        </div>
                        <div className="con-bot">
                            <div className="left-bw3">
                                <h5><i className="fa fa-map-marker" aria-hidden="true"></i>Address</h5>
                                <p>New York 3000</p>
                                <p>40019 Honey Street,</p>
                                <p>Morocco Casablanca</p>
                            </div>
                            <div className="right-bw3">
                                <h5><i className="fa fa-phone" aria-hidden="true"></i>Phone</h5>
                                <p>Telephone : +1 (734) 123-4567</p>
                                <p>+2158 85467</p>
                                <p>+2158 85467</p>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <Contact/>
                <Footer/>
                <a href="/" id="toTop" style={{display:'block'}}> <span id="toTopHover" style={{opacity:1}}> </span></a>
            </div>
        );
    }
}

export default App;
