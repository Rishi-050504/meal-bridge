
import React from 'react';
import PageLayout from '../components/PageLayout';
import './About.css';

function About() {
    return (
        <PageLayout title="Our Mission" subtitle="To fight hunger by intelligently connecting surplus food with those who need it most.">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <img 
                        src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                        alt="Community volunteers" 
                        className="img-fluid rounded-3 shadow"
                    />
                </div>
                <div className="col-lg-6 ps-lg-5">
                    <div className="about-text">
                        <h3>Our <span className="text-primary-custom">Vision</span></h3>
                        <p>We envision a world free from hunger, where communities are empowered to support one another. By leveraging technology, we create a seamless bridge between food surplus and food scarcity, ensuring that good food nourishes people, not landfills.</p>
                        
                        <h3>Why We <span className="text-primary-custom">Started</span></h3>
                        <p>Meal Bridge was born from a simple yet powerful observation: the paradox of immense food waste coexisting with widespread hunger. We were driven to create a practical solution—a platform that makes it easy for individuals and businesses to donate surplus food and for charitable organizations to find it.</p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default About;