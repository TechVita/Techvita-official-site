import React from "react";
import "./Banner.css";
import heroImg from "../../assets/hero-img.svg";
import Button from "../Button/Button";
import secureIcon from "../../assets/security.png";
import customizableIcon from "../../assets/customizable.png";
import rapidIcon from "../../assets/electrical.png";
import supportIcon from "../../assets/suport.png";
import consultingIcon from "../../assets/consulting.png";
import scalableIcon from "../../assets/scalable.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules'; // For Swiper v9+
// If you're using Swiper v8 or lower, use from 'swiper'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FacilityCard from "../FacilityCard/FacilityCard";

const Banner = () => {
	let facilities = [
		{
			title: "Rapid Development",
			icon: rapidIcon,
			description:
				"Delivering high-quality software at speed using modern frameworks, agile methodologies, and reusable components to reduce time-to-market.",
		},
		{
			title: "Advanced Security",
			icon: secureIcon,
			description:
				"Security is at our core — from secure code practices to robust authentication and data protection, we build with trust and compliance in mind.",
		},
		{
			title: "Fully Customizable",
			icon: customizableIcon,
			description:
				"Our solutions are built to adapt — giving you full control to tailor features, workflows, and content to match your unique business needs.",
		},
		{
			title: "Scalable Architecture",
			icon: scalableIcon,
			description:
				"Our solutions grow with your business. Whether it's handling more users or adding new features, we ensure long-term scalability without performance compromise.",
		},
		{
			title: "Dedicated Support",
			icon: supportIcon,
			description:
				"Our commitment goes beyond project delivery. We offer proactive, dependable support to ensure your software runs smoothly — with timely updates, quick issue resolution, and expert guidance whenever you need it.",
		},
		{
			title: "Expert Consulting",
			icon: consultingIcon,
			description:
				"We don’t just develop — we guide. Our experts collaborate with you to understand your vision, align technology with business goals, and recommend the right digital strategy for long-term success.",
		},
	];

	return (
		<section className="banner-section">
			<div className="container">
				<div className="banner-content">
					<div className="row">
						<div className="text-content col-sm-6">
							<p className="top-chip-text">📈 Innovate. Build. Grow.</p>
							<h3 className="heading">
								Igniting Growth with Smart, Secure and Scalable Software
								Solutions
							</h3>
							<p className="sub-text">
								At Techvita Innovations, we engineer high-performance software
								with a strong focus on speed, security, and future-ready
								technology. <br />
                Whether you're a startup or an enterprise, we
								deliver reliable digital experiences that drive growth, solve
								problems, and create lasting value.
							</p>
							<Button text="Discover More" link="#" className="discover-more move-up-transition" />
						</div>
						<div className="image-wrapper col-sm-6">
							<img src={heroImg} alt="hero-image" />
						</div>
					</div>
					<div className="facility-slider">
						<Swiper
            modules={[Navigation, Pagination, Autoplay]}
							loop={true}
							navigation={true}
							pagination={{ clickable: true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
							breakpoints={{
								1024: { slidesPerView: 3, spaceBetween: 30 },
								768: { slidesPerView: 2, spaceBetween: 20 },
								0: { slidesPerView: 1, spaceBetween: 10 },
							}}
						>
							{facilities?.map(({ title, icon, description }, index) => {
								return (
									<SwiperSlide 
											key={index}>
										<FacilityCard
											title={title}
											icon={icon}
											description={description}
										/>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
