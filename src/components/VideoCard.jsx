import React from "react";
import "./videocard.css";

const VideoCard = (video) => {
	return (
		<div className="videoCard">
			<h3 className="videoCard__title">{video.name}</h3>
			<div className="videoCard__container">
				{video.poster ? (
					<img
						alt={`${video.name}`}
						src={`${video.poster}`}
						className="videoCard__image"
					/>
				) : (
					<img
						alt={`${video.name}`}
						src="https://maison.20minutes.fr/wp-content/uploads/2020/11/neon-manette-gaming-cdiscount.jpg"
						className="videoCard__image"
					/>
				)}
			</div>
		</div>
	);
};

export default VideoCard;
