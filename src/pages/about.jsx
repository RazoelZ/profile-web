import React from "react";
import Navbar from '../navbar/navbar';
import { BoxExperience, Footer } from '../components';


const About = () => {
    return (
        <div className="px-44">
            <Navbar />
            <p className="text-5xl text-center mt-10 font-bold gradient-text">Who's Razoel?</p>
            <p className="text-xl text-center m-auto pt-10 gradient-text font-semibold">Undergraduate from Informatics, Diponegoro University, with a purpose-driven mindset and a quick-learning attitude.
                Committed to acquiring new skills and making impactful contributions. Experienced in managing software development and
                software project management, demonstrating excellent communication skills. Passionate about relationship building and
                eager to create a positive impact on the community. Aspiring programmer with a strong desire for professional growth. Seeking
                opportunities in a dynamic workplace to enhance my skills and deliver exceptional results.
            </p>
            <p className="mt-7 text-3xl font-bold">Education</p>
            <hr className="mt-3 gradient-border" />
            <BoxExperience date={'2020 - 2024'} organization={'Diponegoro University'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit totam, quis illo perspiciatis unde sapiente praesentium architecto eaque nemo, exercitationem eligendi repellendus. Perspiciatis possimus cumque suscipit sed quae excepturi, quam laudantium facere illo nesciunt debitis voluptate corrupti voluptatibus obcaecati magnam.'} />
            <BoxExperience date={'2017 - 2020'} organization={'SMA N 1 Batang'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit totam, quis illo perspiciatis unde sapiente praesentium architecto eaque nemo, exercitationem eligendi repellendus. Perspiciatis possimus cumque suscipit sed quae excepturi, quam laudantium facere illo nesciunt debitis voluptate corrupti voluptatibus obcaecati magnam.'} />
            <p className="mt-7 text-3xl font-bold">Organization</p>
            <hr className="mt-3 gradient-border" />
            <BoxExperience date={'2021 - 2023'} organization={'Himpunan Informatika'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit totam, quis illo perspiciatis unde sapiente praesentium architecto eaque nemo, exercitationem eligendi repellendus. Perspiciatis possimus cumque suscipit sed quae excepturi, quam laudantium facere illo nesciunt debitis voluptate corrupti voluptatibus obcaecati magnam.'} />
            <Footer />
        </div>
    );
}

export default About;