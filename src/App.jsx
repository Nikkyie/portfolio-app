import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Services from './components/Services/Services.jsx';
import Qualification from './components/Qualification/Qualification.jsx';
import AppShowcase from './components/AppShowcase/AppShowcase.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';

import ParticlesComponent from './components/particles.jsx';
import placeholderImg from './assets/app_showcase_ss/fraikin/fraikin_logo.png';

const App = () => {

	const [modalOpen, setModalOpen] = useState(false);
	const [modalMode, setModalMode] = useState('story'); // 'story', 'screenshots', 'details'
	const [modalData, setModalData] = useState(null);
	const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

	const openModal = (card, mode = 'story') => {
		setModalData(card);
		setModalMode(mode);
		setCurrentScreenshotIndex(0);
		setModalOpen(true);
	};

	const closeModal = () => setModalOpen(false);
	const nextScreenshot = () =>
		setCurrentScreenshotIndex((i) => (i + 1) % (modalData?.screenshots?.length || 1));
	const prevScreenshot = () =>
		setCurrentScreenshotIndex((i) => (i - 1 + (modalData?.screenshots?.length || 1)) % (modalData?.screenshots?.length || 1));

	useEffect(() => {
		const onKey = (e) => {
			if (!modalOpen) return;
			if (e.key === 'Escape') closeModal();
			if (e.key === 'ArrowRight') nextScreenshot();
			if (e.key === 'ArrowLeft') prevScreenshot();
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [modalOpen, modalData?.screenshots?.length]);

	useEffect(() => {
		if (modalMode === 'screenshots' && modalOpen) {
			const activeThumbnail = document.querySelector('.appshowcase__thumbnail.active');
			if (activeThumbnail) {
				activeThumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
			}
		}
	}, [currentScreenshotIndex, modalMode, modalOpen]);

	return (
		<>
			<ParticlesComponent />
			{/* wrap the rest of the app so it stacks above the particles */}
			<div style={{ position: 'relative', zIndex: 1 }}>
				<Header />
				<main className="main">
					<Home />
					<About />
					<AppShowcase onOpenModal={openModal} />
					<Skills />
					{/* <Services /> */}
					<Qualification />
					<Contact />
				</main>
				<Footer />
				<ScrollToTop />
			</div>

			{/* Story Modal */}
			{modalOpen && modalMode === 'story' && modalData && (
				<div className="appshowcase__modal" onClick={closeModal} role="dialog" aria-modal="true">
					<div className="appshowcase__modalContent" onClick={(e) => e.stopPropagation()}>
						<button className="appshowcase__close" onClick={closeModal} aria-label="Close">
							×
						</button>
						<h3 className="appshowcase__modalTitle">{modalData.title}</h3>

						<div className="appshowcase__storyContainer">
							{modalData.story?.map((section, idx) => (
								<div key={idx} className="appshowcase__storySection">
									<div className="appshowcase__storyImages">
										{Array.isArray(section.images) ? (
											section.images.map((img, imgIdx) => (
												<img
													key={imgIdx}
													src={img}
													alt={`Story ${imgIdx + 1}`}
													className="appshowcase__storyImage"
												/>
											))
										) : (
											<img
												src={section.images}
												alt="Story"
												className="appshowcase__storyImage"
											/>
										)}
									</div>
									<div className="appshowcase__storyText">
										<p>{section.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			)}

			{/* Details Modal (Intro/Challenge/Solution/Outcome) */}
			{modalOpen && modalMode === 'details' && modalData && (
				<div className="appshowcase__modal" onClick={closeModal} role="dialog" aria-modal="true">
					<div className="appshowcase__modalContent appshowcase__detailsModal" onClick={(e) => e.stopPropagation()}>
						<button className="appshowcase__close" onClick={closeModal} aria-label="Close">
							×
						</button>
						<h3 className="appshowcase__modalTitle">{modalData.title}</h3>

						<div className="appshowcase__detailsContainer">
							{/* Introduction row - image on left */}
							<div className="appshowcase__detailRow">
								{/* <img src={placeholderImg} alt="" className="appshowcase__detailImage left" /> */}
								<div className="appshowcase__detailText">
									<h4>Introduction</h4>
									<p>{modalData.intro}</p>
								</div>
							</div>

							{/* Challenge row - image on left */}
							<div className="appshowcase__detailRow">
								{/* <img src={placeholderImg} alt="" className="appshowcase__detailImage left" /> */}
								<div className="appshowcase__detailText">
									<h4>Challenge</h4>
									<p>{modalData.challenge}</p>
								</div>
							</div>

							{/* Solution row - image on right */}
							<div className="appshowcase__detailRow">
								<div className="appshowcase__detailText">
									<h4>Solution</h4>
									<p>{modalData.solution}</p>
								</div>
								{/* <img src={placeholderImg} alt="" className="appshowcase__detailImage right" /> */}
							</div>

							{/* Outcome row - image on right */}
							<div className="appshowcase__detailRow">
								<div className="appshowcase__detailText">
									<h4>Outcome</h4>
									<p>{modalData.outcome}</p>
								</div>
								{/* <img src={placeholderImg} alt="" className="appshowcase__detailImage right" /> */}
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Screenshots Slideshow Modal */}
			{modalOpen && modalMode === 'screenshots' && modalData && (
				<div className="appshowcase__modal" onClick={closeModal} role="dialog" aria-modal="true">
					<div className="appshowcase__modalContent appshowcase__screenshotModal" onClick={(e) => e.stopPropagation()}>
						<button className="appshowcase__close" onClick={closeModal} aria-label="Close">×</button>
						<div className="appshowcase__screenshotNote">
							<p>💡 All screenshots below are from the actual mobile app — not design prototypes.</p>
						</div>

						{/* Layout: left thumbnails column, right main screenshot area */}
						<div className="appshowcase__screenshotLayout">
							<div className="appshowcase__thumbnails">
								{modalData.screenshots?.map((screenshot, idx) => (
									<img
										key={idx}
										src={screenshot}
										alt={`Thumbnail ${idx + 1}`}
										className={`appshowcase__thumbnail ${idx === currentScreenshotIndex ? 'active' : ''}`}
										onClick={() => setCurrentScreenshotIndex(idx)}
									/>
								))}
							</div>

								<div className="appshowcase__screenshotBody">
									<button className="appshowcase__nav prev" onClick={prevScreenshot} aria-label="Previous">‹</button>
									<div className="appshowcase__imageWrap">
										<img
											src={modalData.screenshots?.[currentScreenshotIndex]}
											alt={`Screenshot ${currentScreenshotIndex + 1}`}
											className="appshowcase__modalImage"
										/>
									</div>
									<button className="appshowcase__nav next" onClick={nextScreenshot} aria-label="Next">›</button>

								{/* <div className="appshowcase__screenshotCounter">
									{currentScreenshotIndex + 1} / {modalData.screenshots?.length || 0}
								</div> */}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default App;