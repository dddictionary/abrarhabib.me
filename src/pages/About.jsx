import "./about.css"

export default function About() {
    return (
        <div className="about">
            <h1>About Me</h1>
            <p>
                Hello, my name is Abrar. I am a aspiring software engineer from New York City studying computer science.
                My interests lie in backend development, but I am also interested in learning more about fullstack development, 
                software engineering, data science, and machine learning.
            </p>
            <p>
                I am a seasoned Python Flask API Developer with a passion for transforming ideas into robust and scalable web solutions. Armed with extensive experience, I specialize in creating seamless and efficient APIs that power the backbone of modern web applications.
            </p>
            <h1> Projects </h1>
            <div className="project">
                <div className="title">
                    <a href="https://github.com/danparizher/Pax-Academia"> Pax Academia </a>
                </div>
                <div className="desc">
                    This was a open source Discord Bot supporting the <a href="http://discord.gg/homework">Homework Help Discord Server</a>. 
                    <br></br><br></br>
                    In my role as a contributor to an open-source Discord bot written in Python, I made significant strides in enhancing user experience for a bustling community of 160,000 members. Through a meticulous analysis of approximately 5,000 lines of code, I produced comprehensive documentation, providing developers and end-users with a clear roadmap of the bot's functionality and features.
                    A key technical accomplishment was the implementation of support for 1000 requests per minute, achieved through adept utilization of Python's Threading library. This optimization not only bolstered the bot's responsiveness but also underscored my commitment to delivering high-performance solutions within collaborative development environments.
                </div>
            </div>
            <div className="project">
                <div className="title">
                    <a href="https://github.com/dddictionary/Secure-Chat">Secure Chat</a>
                </div>
                <div className="desc">
                    This project is a real time end-to-end encrypted secure chat application. This app utilizes AES to encrypt messages, MAC's to ensure message integrity and Diffie-Hellman Key Exchange to generate the AES and HMAC keys.
                    For any users on Linux, if you compile the application, edit your router settings to allow for port forwarding, you can essentially message anyone from around the world as long as they also compiled the application and you provided them with your ip address. 
                </div>
            </div>
            <div className="project">
                <div className="title">
                    <a href="https://github.com/dddictionary/ascii-rs">ascii-rs</a>
                </div>
                <div className="desc">
                    This project is a simple ascii art generator written in Rust. It takes in a image and converts it to ascii art.
                </div>
            </div>
        </div>
    )
}
