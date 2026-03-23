import { useEffect } from 'react'
import CardItem from "./CardItem"
import CardItemLink from "./CardItemLink"
import bean from '../images/Mr bean faces/naughty_mr.bean_gif_calendar_background_5.gif';
import breakingbean from '../images/Mr bean faces/breaking-bad-cast-bean2-min.jpg';
import ecrdocker from '../images/ECR docker terraform.jpeg';
import reactoverview from '../images/Vid-thumbnail.png';
import diary from '../images/Diary.jpg'
import jslightbox from '../images/Lightbox grid thumbnail min.jpg'
import cvinfographpreview from '../images/cv-infograph-preview.png'
import homelabpreview from '../images/Kub-homelab-2-thumb.png'
import vectordbrag from '../images/ThumbnailVDB4.png'
/* background video removed — using CSS aurora background */



function Cards() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        document.querySelectorAll('.cards__item').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className='cards'>
            <div className='hero'>
            <h1>Projects Overview</h1>
            <h2>"Any sufficiently advanced technology is indistinguishable from Magic"<br></br>Arthur C. Clarke</h2>
            </div>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItemLink
                        src = {homelabpreview}
                        text="Kubernetes Homelab"
                        subtext={[<h3>✓ 2x Raspberry Pi 5 running K3s with Prometheus & Grafana<br></br>✓ Real-time monitoring dashboards, accessible worldwide via HTTPS</h3>]}
                        label='Infrastructure'
                        href="https://lab.adrienesquerre.com"
                        />
                        <CardItem
                        src = {vectordbrag}
                        text="Vector Databases & RAG for Enterprise AI"
                        subtext={[<h3 style={{fontSize: '14px'}}>✓ How vector DBs enable AI to understand semantic meaning<br></br>✓ Secure RAG patterns for private data without exposing it to external providers</h3>]}
                        label='Video'
                        path='/videos'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src = {ecrdocker}
                        text="Use Terraform to deploy a React app to AWS ECR"
                        subtext= {[<h3 style={{fontSize: '14px'}}>✓ The containerized weather app is deployed to AWS ECR<br></br>✓ Terraform & React repos available</h3>]}
                        label='Video'
                        path='/videos'
                        />
                        <CardItem
                        src = {reactoverview}
                        text="React Overview, How it works, Hooks"
                        subtext= {[<h3 style={{fontSize: '14px'}}>✓ The video is a bit crappy, but the content is really good<br></br>✓ Learn how React works under the hood</h3>]}
                        label='Video'
                        path='/videos'
                        />
                        <CardItemLink
                        src = {diary}
                        text="Node.js CRUD app"
                        subtext= {[<h3>✓ Google authentication<br></br>✓ Public/private stories are stored in a cloud MongoDB database</h3>]}
                        label='Back-end'
                        href="https://online-diary-adrien.up.railway.app/"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src = {bean}
                        text= "React Interactive Calendar App"
                        subtext= {[<h3>✓ Uses the browser's date API for a live calendar<br></br>✓ Daily events can be added or deleted (uses local storage)</h3>]}
                        label='Fullstack'
                        path='/calendar'
                        />
                        <CardItem
                        src = {breakingbean}
                        text="React Breaking Bad API"
                        subtext= {[<h3 style={{fontSize: '14px'}}>✓ Fetch API using Async function + Await promise<br></br>✓ Search bar with name filter</h3>]}
                        label='Fullstack'
                        path='/bbapi'
                        />
                        <CardItem
                        src = {jslightbox}
                        subtext= {[<h3>✓ Responsive gird of images with soft zoom effect on hover<br></br>✓ HD Full screen image pop up on click</h3>]}
                        text="Fluid Lightbox Popup"
                        label='Frontend'
                        path='/lightbox'
                        />
                        <CardItem
                        src = {cvinfographpreview}
                        text="CV Themes"
                        subtext={[<h3>✓ AI-designed CV themes: Spy-Fi Lounge & Infograph<br></br>✓ Click to preview, expand fullscreen, or download PDF</h3>]}
                        label='CV'
                        path='/cv-themes'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
