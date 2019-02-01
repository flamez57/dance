import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
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

class TrData extends Component{
    render(){
        return (
            this.props.users.map((user,i)=>{
                return (
                    <tr key={user.id} className="text-center">
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.name}</td>
                        <td>{user.sex}</td>
                    </tr>
                )
            })
        )
    }
}

const Page = ({ title }) => (
    <div className="App">
        <div className="App-header">
            <h2>{title}</h2>
        </div>
        <p className="App-intro">
            This is the {title} page.
        </p>
        <p>
            <Link to="/">Home</Link>
        </p>
        <p>
            <Link to="/about">About</Link>
        </p>
        <p>
            <Link to="/settings">Settings</Link>
        </p>
    </div>
);

// const Home = (props) => (
//     <div>
//         首页页面这里写
//         <a href="tel:17758023364">17758023364</a>
//         <Page title="Home"/>
//     </div>
// );

// const About = (props) => (
//     <div>
//         about页面这里写
//         <Page title="About"/>
//     </div>
// );

const Settings = (props) => (
    <div>
        set页面这里写
        <Page title="Settings"/>
    </div>
);

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

   render() {
       if (!this.state.isLoaded) {
           return (
               <div>Loading</div>
           );
       } else {
           return (
               <table className="table table-bordered">
                   <thead>
                   <tr>
                       <th className="text-center">ID</th>
                       <th className="text-center">姓名</th>
                       <th className="text-center">年龄</th>
                       <th className="text-center">性别</th>
                   </tr>
                   </thead>
                   <tbody>
                   <TrData users={this.state.users}/>
                   </tbody>
               </table>
           );
       }
   }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Home />
                <About/>
                <div class="copyrights">Collect from <a href="http://www.cssmoban.com/"  title="网站模板">网站模板</a></div>
                <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                {/*<img src="images/2.jpg" alt=" " class="img-responsive">*/}
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
                <div class="pop-up">
                    <div id="small-dialog" class="mfp-hide book-form">
                        <h4>Sign Up Form </h4>
                        <form action="#" method="post">
                            <input type="text" name="Name" placeholder="Your Name" required=""/>
                            <input type="text" name="Email" class="email" placeholder="Email" required=""/>
                            <input type="password" name="Password" class="password" placeholder="Password" required=""/>
                            <div class="check-box">
                                {/*<input name="chekbox" type="checkbox" id="brand" value="">*/}
                                <label for="brand"><span></span>Remember Me.</label>
                            </div>
                            {/*<input type="submit" value="Sign Up">*/}
                        </form>
                    </div>
                </div>
                <Instructors/>
                {/*<Gallery/>*/}
<div class="testmonials" id="monials">
		<div id="particles-js1"></div>
		   <div class="client-top">
		  <h3 class="title-w3 three">What Our
Happy Students Say</h3>
		       <p class="sub-text">Choose Your Style</p>
		    <div class="slider">
					<div class="callbacks_container">
						<ul class="rslides" id="slider3">
							<li>
								 <div class="agileits-clients">

									<div class=" client_agile_info">

											<div class="c-img"><i class="fa fa-quote-right"></i> </div>
											<p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
											{/*<h4><img src="images/m1.jpg" alt="">Alice Lengthorn</h4>*/}

									</div>

								</div>
							</li>
							<li>
							<div class="agileits-clients">

								<div class="client_agile_info">

                                        <div class="c-img"><i class="fa fa-quote-right"></i> </div>
										<p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
										{/*<h4><img src="images/m2.jpg" alt=""> Martin Pal</h4>*/}

								</div>
								<div class="clearfix"></div>
								</div>
							</li>
							<li>
							<div class="agileits-clients">
							     <div class=" client_agile_info">

                                        <div class="c-img"><i class="fa fa-quote-right"></i> </div>
										<p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
										{/*<h4><img src="images/m3.jpg" alt="">MARTIN NIXON</h4>*/}

								</div>

								</div>
							</li>
						</ul>
					</div>
				</div>

				</div>
	</div>
	<div class="agile-contact">

		<div class="col-md-6 contact-map-right">
			<div id="map"></div>
		</div>
		<div class="col-md-6 left-contact">
		<div class="cont-top">
			<h5><i class="fa fa-envelope" aria-hidden="true"></i>Email</h5>
			<a href="mailto:info@example.com">info@example.com</a>
		</div>
		<div class="con-bot">
			<div class="left-bw3">
				<h5><i class="fa fa-map-marker" aria-hidden="true"></i>Address</h5>
				<p>New York 3000</p>
				<p>40019 Honey Street,</p>
				<p>Morocco Casablanca</p>
			</div>
			<div class="right-bw3">
				<h5><i class="fa fa-phone" aria-hidden="true"></i>Phone</h5>
				<p>Telephone : +1 (734) 123-4567</p>
				<p>+2158 85467</p>
				<p>+2158 85467</p>
			</div>
		</div>
	</div>
	<div class="clearfix"></div>
</div>
                <Contact/>
                <Footer/>
                {/*<a href="#" id="toTop" style="display: block;"> <span id="toTopHover" style="opacity: 1;"> </span></a>*/}
                <Router history={browserHistory}>
                    <Route path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/settings" component={Settings}/>
                </Router>
                <List />
            </div>
        );
    }
}

export default App;
