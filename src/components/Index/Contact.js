import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../../config';
import Particles from 'react-particles-js';

export default class Contact extends Component {
	constructor(props){
        super(props);
        this.state={
            hmData:[
            	{cla1:"w3layouts-banner-top"},
            	{cla1:"w3layouts-banner-top w3layouts-banner-top1"},
            	{cla1:"w3layouts-banner-top w3layouts-banner-top2"},
			],
            users:[],
            isLoaded:false,
   			height: props.height || -1
        }
    }

    //当组件输出到 DOM 后会执行 componentDidMount()
    componentDidMount(){
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        _this.updateSize();
        window.addEventListener('resize', () => _this.updateSize());
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

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.updateSize());
    }

    updateSize() {
        try {
            const parentDom = ReactDOM.findDOMNode(this).childNodes[1];//parentNode;
            console.log(parentDom.offsetHeight);
            let { width, height } = this.props;
            //如果props没有指定height和width就自适应
            if (!width) {
                width = parentDom.offsetWidth;
            }
            if (!height) {
                height = parentDom.offsetHeight + 150;
            }
            this.setState({ width, height });
        } catch (ignore) {
        }
    }

    render() {
        return (
            <div className="contact" id="contact" style={{height:this.state.height}}>
				<Particles />
				<div className="contact-top">
					<h3 className="title-w3 con">Contact Us</h3>
					<p className="sub-text">Choose Your Style</p>

					<form action="#" method="post" className="contact_form slideanim">
						<div className="message">
							<div className="col-md-6 col-sm-6 grid_6 c1">
								<input type="text" className="margin-right" name="Name" placeholder="Name" required="" />
								<input type="email" name="Email" placeholder="Email" required="" />
								<input type="text" className="margin-right" name="Phone Number" placeholder="Phone Number" required="" />
							</div>
							<div className="col-md-6 col-sm-6 grid_6 c1">
								<textarea name="Message" placeholder="Message" required=""></textarea>
							</div>
							<div className="clearfix"></div>
						</div>
						<input type="submit" value="SEND MESSAGE" />
					</form>
					<section className="social">
                        <ul>
							<li><a className="icon fb" href="//mysweet95.com"><i className="fa fa-facebook"></i></a></li>
							<li><a className="icon tw" href="//mysweet95.com"><i className="fa fa-twitter"></i></a></li>
							<li><a className="icon pin" href="//mysweet95.com"><i className="fa fa-pinterest"></i></a></li>
							<li><a className="icon db" href="//mysweet95.com"><i className="fa fa-dribbble"></i></a></li>
							<li><a className="icon gp" href="//mysweet95.com"><i className="fa fa-google-plus"></i></a></li>
						</ul>
					</section>
				</div>
			</div>
        );
    }
}
