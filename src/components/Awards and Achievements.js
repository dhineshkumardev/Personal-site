import './Awards and Achievements.css';
import { Award } from './Award';
import { Helmet } from 'react-helmet';
export const Awards =() =>{
    return(
        <div>
            <Helmet>
                <title>Dhinesh | Awards</title>
            </Helmet>
            <div class="container1">
                <div class="sub1">
                    <Award head="Conducted"
                     body ="Conducted one day Workshop on ‘Arduino IDE Coding and hardware connection’ in VSKD
                        School Sivakasi on 20-july-2022."
                        Url="/image/vskd.jpg"
                        bname="Certificate"/>
                </div>
                <div class="sub2">
                    <Award head="Conducted"
                     body ="Conducted one day Workshop on ‘Texas Instruments Innovation’ 
                     in  AAA College of Engineering &Technology Sivakasion 15-oct-2022."
                    />
                </div>
                <div class="sub1">
                    <Award head="Workshop"
                     body ="Attended three days of Workshops on ‘Texas Instruments Innovation’ conducted by the
                     department of ECE held at AAA College of Engineering &Technology Sivakasi."
                        Url="/image/ti_lab.jpg"
                        bname="Certificate"/>
                </div>
                <div class="sub2">
                    <Award head="Workshop"
                     body ="Attended a day Workshop on ‘IOT with Android APP’ conducted by the department of ECE
                     held at AAA College of Engineering &Technology Sivakasi on 30-April-2022."
                     Url="/image/iot.jpg"
                        bname="Certificate"
                    />
                </div>
                <div class="sub1">
                    <Award head="Workshop"
                     body ="Attended five days of Workshops on ‘E-Yantra Robotics’ conducted by the department of ECE
                     held at AAA College of Engineering &Technology Sivakasi from 9th December 2019 to
                     13th December 2019."
                    />
                </div>
                <div class="sub2">
                    <Award head="Symposium"
                     body ="Presented a paper on ‘The Embedded’ at AAA College of Engineering &Technology on 7th
                     September 2018"
                     Url="/image/rect.jpg"
                        bname="Certificate"
                    />
                </div>
            </div>
        </div>
    );
}