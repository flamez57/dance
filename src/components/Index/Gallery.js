import React, {Component} from 'react';


export default class Gallery extends Component {
    render() {
        const img1 = 'images/g1.jpg';
        const img2 = 'images/g2.jpg';
        const img3 = 'images/g3.jpg';
        const img4 = 'images/g4.jpg';
        const img5 = 'images/g5.jpg';
        const img6 = 'images/g6.jpg';
        return (
<div class="gallery" id="gallery">
			<h3 class="title-w3">Photo Gallery</h3>
		 <p class="sub-text">Choose Your Style</p>
			<div class="gallery-grids carouselGallery-grid hidden-xs">
				<div class="col-md-4 gallery-grid">
					<div class="carouselGallery-col-1 carouselGallery-carousel" data-likes="3144" data-index="0" data-username=" " data-imagetext="At vero eos et accusamus et iusto odio
						 dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
						 et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
						 officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
						data-location="Project1" data-imagepath="images/g1.jpg" data-posturl="#"
						style={{backgroundImage:"url("+img1+")"}}>
						<div class="carouselGallery-item">
							<div class="carouselGallery-item-meta">
								<span class="carouselGallery-item-meta-user">
								Photo Gallery
								</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4 gallery-grid">
					<div class="carouselGallery-col-1 carouselGallery-carousel" data-likes="3144" data-index="1" data-username=" " data-imagetext="Occaecati at vero eos et accusamus et iusto odio
						 dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
						 et quas molestias excepturi sint cupiditate non provident, similique sunt in culpa qui
						 officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
						data-location="Project2" data-imagepath="images/g2.jpg" data-posturl="#"
						style={{backgroundImage:"url("+img2+")"}}>
						<div class="carouselGallery-item">
							<div class="carouselGallery-item-meta">
								<span class="carouselGallery-item-meta-user">
								Photo Gallery
								</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4 gallery-grid">
					<div class="carouselGallery-col-1 carouselGallery-carousel" data-likes="3144" data-index="2" data-username=" " data-imagetext="similique sunt in culpa qui
						 officia deserunt mollitia animi, id est laborum et dolorum fuga. At vero eos et accusamus et iusto odio
						 dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
						 et quas molestias excepturi sint occaecati cupiditate non provident, Et harum quidem rerum facilis est et expedita distinctio."
						data-location="Project3" data-imagepath="images/g3.jpg" data-posturl="#"
						style={{backgroundImage:"url("+img3+")"}}>
						<div class="carouselGallery-item">
							<div class="carouselGallery-item-meta">
								<span class="carouselGallery-item-meta-user">
								Photo Gallery
								</span>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-4 gallery-grid">
					<div class="carouselGallery-col-1 carouselGallery-carousel" data-likes="3144" data-index="3" data-username=" " data-imagetext="At vero eos et accusamus et iusto odio
						 dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
						 et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
						 officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
						data-location="Project4" data-imagepath="images/g4.jpg" data-posturl="#"
						style={{backgroundImage:"url("+img4+")"}}>
						<div class="carouselGallery-item">
							<div class="carouselGallery-item-meta">
								<span class="carouselGallery-item-meta-user">
								Photo Gallery
								</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4 gallery-grid">
					<div class="carouselGallery-col-1 carouselGallery-carousel" data-likes="3144" data-index="4" data-username=" " data-imagetext="Similique sunt in culpa qui at vero eos et accusamus et iusto odio
						 dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
						 et quas molestias excepturi sint occaecati cupiditate non provident,
						 officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
						data-location="Project5" data-imagepath="images/g5.jpg" data-posturl="#"
						style={{backgroundImage:"url("+img5+")"}}>
						<div class="carouselGallery-item">
							<div class="carouselGallery-item-meta">
								<span class="carouselGallery-item-meta-user">
								Photo Gallery
								</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4 gallery-grid">
					<div class="carouselGallery-col-1 carouselGallery-carousel" data-likes="3144" data-index="5" data-username=" " data-imagetext="At vero eos et accusamus et iusto odio
						 dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
						 et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
						 officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
						data-location="Project6" data-imagepath="images/g6.jpg" data-posturl="#"
						style={{backgroundImage:"url("+img6+")"}}>
						<div class="carouselGallery-item">
							<div class="carouselGallery-item-meta">
								<span class="carouselGallery-item-meta-user">
								Photo Gallery
								</span>
							</div>
						</div>
					</div>
				</div>

				<div class="clearfix"> </div>

			</div>
	</div>
        );
    }
}
