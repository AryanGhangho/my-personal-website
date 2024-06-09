<html><head></head><body><script type="text/javascript" id="dcoder_script">document.addEventListener('DOMContentLoaded', function() {
    loadContent('home');
});

function loadContent(page) {
    const content = {
        home: `
            <h2>Welcome</h2>
            <p>Welcome to my personal portfolio. Here you can find information about me, my projects, achievements, skills, education, and how to contact me.</p>
        `,
        about: `
            <h2>About Me</h2>
            <p>I am Vyankatesh Khadap, a first-year B.Tech student specializing in Electrical Engineering at G.S. Mandal's Maharashtra Institution of Technology. I am passionate about leveraging my strong communication and problem-solving skills to contribute effectively to team projects and side work opportunities. My academic journey is marked by notable achievements, including being a Bronze Medalist in Mathematics Olympiads and securing the National Means-cum-Merit Scholarship (NMMS) by ranking first in my school. I have a keen interest in innovative projects, exemplified by my work on developing a Wireless Current Transmission system. I am eager to apply and enhance my technical knowledge through practical experiences and collaborative projects.</p>
        `,
        projects: `
            <h2>Projects</h2>
            <ul>
                <li><strong>Wireless Current Transmission:</strong> Developed a system to efficiently transmit electrical power without physical connections. Role: Lead Developer. Skills Used: Problem-solving, Electrical Engineering concepts, Innovative thinking. Outcome: Successfully demonstrated the feasibility of wireless power transmission in a controlled environment.</li>
            </ul>
        `,
        achievements: `
            <h2>Achievements</h2>
            <ul>
                <li><strong>Mathematics Olympiads Bronze Medalist:</strong> Awarded the Bronze Medal in Mathematics Olympiads during the 6th standard. Demonstrated strong analytical and mathematical skills.</li>
                <li><strong>National Means-cum-Merit Scholarship (NMMS) Awardee:</strong> Secured the prestigious NMMS Scholarship by achieving the 1st rank in school during the 8th standard. Scholarship Value: INR 48,000. Recognized for academic excellence and dedication.</li>
                <li><strong>First Position in GFC Test:</strong> Attained the 1st position in a city-level examination encompassing Mathematics, Science, English, and Amplitude. Exhibited comprehensive knowledge across multiple subjects and a competitive spirit.</li>
            </ul>
        `,
        skills: `
            <h2>Skills</h2>
            <h3>Technical Skills</h3>
            <ul>
                <li>C++</li>
                <li>Java</li>
                <li>C</li>
                <li>Spreadsheets</li>
            </ul>
            <h3>Soft Skills</h3>
            <ul>
                <li>Communication</li>
                <li>Problem Solving</li>
                <li>Team Work</li>
                <li>Time Management</li>
            </ul>
        `,
        education: `
            <h2>Education</h2>
            <ul>
                <li><strong>B-tech in Electrical Engineering:</strong> G.S. Mandal's Maharashtra Institution of Technology</li>
                <li><strong>Higher Secondary Certificate:</strong> Vasantrao Naik Mahavidyalaya. Percentage: 63.00%</li>
                <li><strong>Secondary School Certificate:</strong> Sant Meera Vidhyalaya. Percentage: 92.40%</li>
            </ul>
        `,
        contact: `
            <h2>Contact</h2>
            <p>You can reach me at:</p>
            <p>Phone: +91 9172691237</p>
            <p>Email: <a href="mailto:vyankateshkhadap@gmail.com">vyankateshkhadap@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/vyankatesh-khadap/" target="_blank">Vyankatesh Khadap</a></p>
        `
    };
    document.getElementById('content').innerHTML = content[page];
}</script></body></html>