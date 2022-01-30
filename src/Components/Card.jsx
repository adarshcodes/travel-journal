import React from "react";

class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<img src={this.props.item.imageUrl} className="card__image" />
				<div className="card--details">
					<div className="card--details__location">
						<i class="fad fa-map-marker-alt"></i>
						<p className="card--details__country">{this.props.item.location}</p>
						<a href={this.props.item.googleMapsUrl}>View on Google Maps</a>
					</div>

					<h1 className="card--details__title">{this.props.item.title}</h1>

					<p className="card--details__date">
						{this.props.item.startDate} - {this.props.item.endDate}
					</p>

					<p className="card--details__description">
						{this.props.item.description}
					</p>
				</div>
			</div>
		);
	}
}

export default Card;
