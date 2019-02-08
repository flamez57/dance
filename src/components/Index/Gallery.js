import React, {Component} from 'react';

class GalData extends Component{
    render(){
        return (
            this.props.galData.map((galData,i)=>{
                return (
                	<div className="col-md-4 gallery-grid" key={i}>
                        <div
                            className="carouselGallery-col-1 carouselGallery-carousel"
                            data-likes="3144"
                            data-index={i}
                            data-username=" "
                            data-imagetext={galData.imgText}
                            data-location={galData.project}
                            data-imagepath={galData.pic}
                            data-posturl="#"
                            style={{backgroundImage:"url("+galData.pic+")"}}
                        >
                            <div className="carouselGallery-item">
                                <div className="carouselGallery-item-meta">
                                    <span className="carouselGallery-item-meta-user">
                                        {galData.title}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
}

export default class Gallery extends Component {
	constructor(props){
        super(props);
        this.state={
            galData:[
            	{pic:"images/g1.jpg",imgText:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",title:"Photo Gallery",project:"Project1"},
            	{pic:"images/g2.jpg",imgText:"Occaecati at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",title:"Photo Gallery",project:"Project2"},
            	{pic:"images/g3.jpg",imgText:"similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, Et harum quidem rerum facilis est et expedita distinctio.",title:"Photo Gallery",project:"Project3"},
            	{pic:"images/g4.jpg",imgText:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",title:"Photo Gallery",project:"Project4"},
            	{pic:"images/g5.jpg",imgText:"Similique sunt in culpa qui at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",title:"Photo Gallery",project:"Project5"},
            	{pic:"images/g6.jpg",imgText:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",title:"Photo Gallery",project:"Project6"}
			],
            isLoaded:false
        }
    }
    render() {
        return (
            <div className="gallery" id="gallery">
			    <h3 className="title-w3">Photo Gallery</h3>
		        <p className="sub-text">Choose Your Style</p>
			    <div className="gallery-grids carouselGallery-grid hidden-xs">
                    <GalData galData={this.state.galData}/>
				    <div className="clearfix"> </div>
			    </div>
	        </div>
        );
    }
}
