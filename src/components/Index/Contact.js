import React, {Component} from 'react';


export default class Contact extends Component {
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
            <div class="contact" id="contact">
	<div id="particles-js2"></div>
		<div class="contact-top">


			<h3 class="title-w3 con">Contact Us</h3>
			<p class="sub-text">Choose Your Style</p>

			<form action="#" method="post" class="contact_form slideanim">

				<div class="message">
					<div class="col-md-6 col-sm-6 grid_6 c1">
						<input type="text" class="margin-right" Name="Name" placeholder="Name" required="" />
						<input type="email" Name="Email" placeholder="Email" required="" />
						<input type="text" class="margin-right" Name="Phone Number" placeholder="Phone Number" required="" />
					</div>

					<div class="col-md-6 col-sm-6 grid_6 c1">
						<textarea name="Message" placeholder="Message" required=""></textarea>
					</div>
					<div class="clearfix"></div>
				</div>

				<input type="submit" value="SEND MESSAGE" />
			</form>
				<section class="social">
                        <ul>
							<li><a class="icon fb" href="#"><i class="fa fa-facebook"></i></a></li>
							<li><a class="icon tw" href="#"><i class="fa fa-twitter"></i></a></li>


							<li><a class="icon pin" href="#"><i class="fa fa-pinterest"></i></a></li>
							<li><a class="icon db" href="#"><i class="fa fa-dribbble"></i></a></li>
							<li><a class="icon gp" href="#"><i class="fa fa-google-plus"></i></a></li>
						</ul>
					</section>
		</div>
	</div>
        );
    }
}
