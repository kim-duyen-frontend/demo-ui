import React, { useState } from 'react';
import styles from "../../styles/listmentor.module.scss";
import ItemMentor from "../../components/item-mentor";
import Pagination from '../../components/pagination';

const ListMentor = () => {
    const [page, setPage] = useState(1);
    const mentors = [
        {
            id: 1,
            name: "Earl Friedberg",
            city: "US",
            armorial: "Top Mentor",
            service: "UX Lead",
            workplace: "Google",
            company: "MentorCruise",
            experience: "15+ yrs in UX big tech | Strong track record of 50+ mentees landing awesome UX jobs",
            thumbnail: "/mentors/earl-friedberg.jpg",
            description: "Hi!!! I run the UX teams for Gmail @ Google, based out of San Francisco. I also teach at UC Berkeley. I help designers break into tech giants like Google. I have a strong track record helping 50+ mentees land UX jobs, mostly in big tech.",
            salary: 350,
            tags: ["UX & Design", "UX", "Design", "User Research"]
        },
        {
            id: 2,
            name: "Eric Jude",
            city: "SG",
            armorial: "Top Mentor",
            service: "Business Coach",
            workplace: "",
            company: "Seedstars",
            experience: "Judge at the ABH Competition 2022 (Jack Ma Foundation) + Mentor at Emergeconf.io",
            thumbnail: "/mentors/eric-jude.jpg",
            description: "Here is what my mentees have to say; &quot;Eric has been an essential part of my journey as a solopreneur&quot;.He's been so proactive and helpful knowing exactly where do I need to focus on and helping me plan and deploy the best strategy towards the success of my business.",
            salary: 380,
            tags: ["Business & Management", "Entrepreneurship", "Marketing", "Social Media"]
        },
        {
            "id": 3,
            "name": "Kaleb Mckelvey",
            "city": "US",
            "armorial": "Quick Responder",
            "service": "Sr Software Engineer",
            "workplace": "Netflix",
            "company": "Business Coach",
            "experience": "Growing through experience",
            "thumbnail": "/mentors/kaleb-mckelvey.jpg",
            "description": "When I started my career as an intern near my hometown, it was clear that I had a lot of questions about being a professional, how to plan or manage projects, and best practices when developing software at a professional level. Thankfully, I had great mentors who helped me understand",
            "salary": 380,
            "tags": ["Engineering & Data", "JavaScript", "TypeScript", "Web Development"]
        },
        {
            "id": 4,
            "name": "Bhumi S",
            "city": "US",
            "armorial": "Top Mentor",
            "service": "Software Engineer",
            "workplace": "Independent",
            "company": "",
            "experience": "Growing through experience",
            "thumbnail": "/mentors/bhumi.jpg",
            "description": "Hi there! 👋 I’ve been unofficially mentoring developers for many years now. I’ve learned many things the hard way or the slow way in the last 15 years working as a software engineer. Any week that I can meaningfully help someone else on their programming journey is a good week",
            "salary": 380,
            "tags": ["Engineering & Data", "Web Development", "JavaScript", "Rails"]
        },
        {
            "id": 5,
            "name": "Dominic Monn",
            "city": "CH",
            "armorial": "Top Mentor",
            "service": "Founder",
            "workplace": "MentorCruise",
            "company": "",
            "experience": "Bootstrapped Founder! Scaled MentorCruise to $1M in annual GMV",
            "thumbnail": "/mentors/dominic-monn.jpg",
            "description": "Hey all 🤗 Thanks for stopping by here at MentorCruise.com. I created this community of mentors! As the business has reached $1M in GMV this year, I decided to take the leap to go full-time on this bootstrapped business and lead our small team to new heights. I offer mentorship",
            "salary": 120,
            "tags": ["Product & Marketing", "Product", "Marketplace", "Entrepreneurship"]
        },
        {
            "id": 6,
            "name": "Leoson Hoay",
            "city": "US",
            "armorial": "Quick Responder",
            "service": "Tech Lead, Data Science",
            "workplace": "UChicago Urban Labs",
            "company": "",
            "experience": "Interdisciplinary Data Scientist",
            "thumbnail": "/mentors/leoson-hoay.jpg",
            "description": "Hello there! I am a Technical Lead and Lead Data Scientist at the University of Chicago Urban Labs. I am passionate about leveraging technology to solve human problems and to advance social good, and have many years of experience in hiring for analytic and data science teams, and extensive programming",
            "salary": 90,
            "tags": ["Engineering & Data", "Machine Learning", "Technology Management", "Data Scientist"]
        },
        {
            "id": 7,
            "name": "Saeed Mirshekari",
            "city": "US",
            "armorial": "Quick Responder",
            "service": "Director Data Scientist",
            "workplace": "Mastercard",
            "company": "",
            "experience": "",
            "thumbnail": "/mentors/saeed-mirshekari.jpg",
            "description": "PhD in Physics with 10 years of work experience in Data Science and Machine Learning. Former Researcher at LIGO (Nobel Prize in Physics, 2017). I help people thrive in their journeys transforming into Data Science and Machine Learning. I have been studying, teaching, and implementing cutting edge Data Science",
            "salary": 120,
            "tags": ["Engineering & Data", "Machine Learning", "Python", "R"]
        },
        {
            "id": 8,
            "name": "Michael Spiegel",
            "city": "US",
            "armorial": "Quick Responder",
            "service": "Computer Scientist",
            "workplace": "Independent",
            "company": "",
            "experience": "",
            "thumbnail": "/mentors/michael-spiegel.jpg",
            "description": "Hi, I'm Michael. I have a Ph.D. in Computer Science in distributed systems from the University of Virginia. I love to teach others and solve hard problems at scale. I have experience in C, C++, Java, Go, Python, Scheme, Racket, Rust, UNIX/Linux system administration, unit testing, integration testing, performance testing",
            "salary": 199,
            "tags": ["Engineering & Data", "Java", "C", "Go"]
        },
        {
            "id": 9,
            "name": "Benjamin Kaiser",
            "city": "AU",
            "armorial": "Top Mentor",
            "service": "Senior Software Engineer",
            "workplace": "",
            "company": "Microsoft",
            "experience": "",
            "thumbnail": "/mentors/benjamin-kaiser.jpg",
            "description": "Hello, I'm Ben! I've spent the majority of my career as a Software Engineer at Microsoft. I'm passionate about open source, crypto and the future of the web. My day job is spent working on a range of client-side javascript/typescript, mostly related to service workers and react.js.",
            "salary": 199,
            "tags": ["Engineering & Data", "JavaScript", "React", "NodeJS"]
        },
        {
            "id": 10,
            "name": "Erik Hanchett",
            "city": "US",
            "armorial": "Top Mentor",
            "service": "Front End Engineer",
            "workplace": "",
            "company": "Amazon",
            "experience": "Super Charge Your Software Development Career",
            "thumbnail": "/mentors/erik-hanchett.jpg",
            "description": "Hello there. 👋 My name is Erik! Software development is hard! When I first started out I had no idea what I was doing. I looked on forums, Google, and Stack Overflow for answers and often came up empty. After a lot of pain I found someone that could guide",
            "salary": 490,
            "tags": ["Engineering & Data", "JavaScript", "Vue.js", "Angular"]
        },
        {
            "id": 11,
            "name": "Daniel Johnson",
            "city": "GB",
            "armorial": "Top Mentor",
            "service": "Founding Partner",
            "workplace": "We Scale Startups",
            "company": "",
            "experience": "Growth Marketing Consultant for Ambitious Startups",
            "thumbnail": "/mentors/daniel-johnson.jpg",
            "description": "I help early-stage startups and businesses grow using data-driven growth marketing to build scalable, predictable and repeatable machines that scale revenue and customer acquisition activities. Having played the roles of founder, employee and consultant, I have a unique perspective on what businesses need to grow. With extensive experience",
            "salary": 280,
            "tags": ["Product & Marketing", "Growth", "Growth Strategy", "Paid Ads"]
        },
        {
            "id": 12,
            "name": "Agnieszka Wojtkun",
            "city": "PL",
            "armorial": "Quick Responder",
            "service": "Data-driven Digital Marketing Consultant",
            "workplace": "",
            "company": "agnieszkawojtkun.com",
            "experience": "10+ years of experience in digital business",
            "thumbnail": "/mentors/agnieszka-wojtkun.jpg",
            "description": "Hi there 🙋🏻‍♀️ I am Agnieszka and I am a data-driven digital marketing professional with sound knowledge of e-mail marketing, marketing automation & e-commerce. I've grown businesses in the digital space for 10+ years. I've gained my experience working in an advertising agency and through a long-term, exclusive close cooperation",
            "salary": 220,
            "tags": ["Product & Marketing", "Marketing Automation", "E-Mail Marketing", "Digital Marketing"]
        }
    ];

    const content = mentors.map(user => <ItemMentor key={user.id} user={user} />)

    const pagesArray = Array(mentors.total_page).fill().map((_, index) => index + 1)
    const paginationNumber = (
        <div className={styles.pagination}>
            <div className={styles.btnPrev}>&lt;&lt;</div>
            {pagesArray.map(pg => <Pagination key={pg} pg={pg} setPage={setPage} />)}
            <div className={styles.btnNext}>&gt;&gt;</div>
        </div>
    )
    return (
        <div className={styles.listmentor}>
            <div className="container">
                <div className={styles.container}>
                    {content}
                    {paginationNumber}
                </div>
            </div>
        </div>
    );
};

export default ListMentor;