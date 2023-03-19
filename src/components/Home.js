import './Home.css';

export const Home =()=>{
    return(
        <div class="profile-container">
            <div class="profile-item">
                <div class="profile">
                    <img src="/image/photo.jpg" alt='profile_image'/>
                    <div class="skills">
                        <p>Skills</p>
                        <ul class="content">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
                    <div class="Personal-detail">
                        <p>Personal Details</p>
                        <table>
                            <tr>
                                <td>Date of Birth</td>
                                <td>1-1-2001</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <td>Nationality</td>
                                <td>Indian</td>
                            </tr>
                            <tr>
                                <td>Hobbies</td>
                                <td>Learning something new</td>
                            </tr>
                            <tr>
                                <td>Languages</td>
                                <td>Tamil and English</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="about-item">
                <div class="about">
                    <p>About</p>
                </div>
                <div class="control-about">
                    <table>
                        <tr>
                            <td>FullName</td>
                            <td>DHINESHKUMAR S</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>dhineshkumar010101@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>9087083532</td>
                        </tr>
                    </table>  
                    <p>Projects</p>
                    <table>
                        <tr>
                            <td>Project#1</td>
                            <td>Smart Survey Robot using VLSI</td>
                        </tr>
                        <tr>
                            <td>Project#2</td>
                            <td>Robotic Presenter for admission (Voice guidance)</td>
                        </tr>
                        <tr>
                            <td>Project#3</td>
                            <td>Smart notice board using Arduino</td>
                        </tr>
                        <tr>
                            <td>Project#4</td>
                            <td>Robot controlled by Bluetooth</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}