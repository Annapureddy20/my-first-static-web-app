import p1 from './P1.png';
import p2 from './P2.jpg';
import p3 from './P3.jpg';
import p4 from './P4.jpg';
import p5 from './P5.jpg';
import p6 from './P6.jpg';
import p7 from './P7.jpg';
import p8 from './P8.jpg';
import p9 from './P9.jpg';
import p10 from './P10.jpg';

const Home = () => {

    return (
        <div>
            <html lang="en">

                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Biometric Approach for MGNREGA Attendance Monitoring</title>
                </head>

                <body>
                    <article>
                        <h1>An Efficient Biometric Approach of the Attendance Monitoring System for Mahatma Gandhi National Rural Employment
                            Guarantee Act (MGNREGA)</h1>
                        <p><strong>A.SrikantReddy<sup>1</sup> I.N.N. Krishna Sai<sup>2</sup> A.Mahendra<sup>3</sup> R.Ganesh<sup>4</sup> Dr.
                            Y. Sangeetha<sup>5</sup></strong></p>
                        <p><em>Student<sup>1234</sup>, Department of Information Technology, V.R. Siddhartha Engineering College, Associate
                            Professor<sup>5</sup>, Department of Information Technology, V.R. Siddhartha Engineering College, JNTUK,
                            Vijayawada, Andhra Pradesh-7</em></p>
                        <p>Emails: <a href="mailto:asrikanth201998@gmail.com">asrikanth201998@gmail.com</a><sup>1</sup>, <a
                            href="mailto:krishnasai.itla@gmail.com">krishnasai.itla@gmail.com</a><sup>2</sup>, <a
                                href="mailto:atthantimahendra@gmail.com">atthantimahendra@gmail.com</a><sup>3</sup>, <a
                                    href="mailto:rajulapatiganesh.kalki@gmail.com">rajulapatiganesh.kalki@gmail.com</a><sup>4</sup>, <a
                                        href="mailto:sangeetha18.yalamanchili@gmail.com">sangeetha18.yalamanchili@gmail.com</a><sup>5</sup></p>

                        <h2>Abstract</h2>
                        <p>The main idea of this research paper is to reduce the one of the problem faced by the
                            workers under MGNREGA in villages. The problem is that every day a group of 30-40 members
                            goes to some work, which is based on MGNREGA (Mahatma Gandhi National Rural Employee
                            Guarantee Act). This work is assigned by their leader, who takes attendance on every working
                            day. On this process if anyone is absent on working day, his/her will sign on the attendance sheet
                            on next following day. By this, for those days that are absent to work also get money and the
                            people who worked on that day will lose their money. To store the details of the workers we are
                            using MYSQL data servers and HTML, CSS, PHP codes for creating the web pages. Node MCU
                            module is used to access the fingerprint of the worker. After getting finger it checks for
                            validation and displaying the login details of the worker. By using the biometric we can reduce
                            the corruption in the MGNREGA Act. By doing this way every worker in this act will be
                            benefited and satisfied for their work and money.</p>

                        <h2>Keywords</h2>
                        <p>MGNREGA Act, MYSQL Servers, Node MC Module, Website Design</p>

                        <h2>1. Introduction</h2>
                        <p>The act was proposed by our ex-prime minister in the year 1991. It was implemented in total 525 districts in
                            India. It covered all over the India in every state. This is named by government as “the largest and most
                            ambitious social security and public works program in the world”. The workers in this group are under a main
                            leader who is appointed by the higher officials. The leader is taking the attendance of the worker even though
                            they did not attend for the work and the money is especially shared between them.
                            Mahatma Gandhi Employee Guarantee Act 2005 (or NREGA No 42 later renamed as “Mahatma Gandhi National Rural
                            Employee Guarantee Act”, MGNREGA), is an Indian labor law and to give work to every citizen in India. That aims
                            right to work for the people. This act was passed in September 2005.
                            Finger plays an important role in the biometric technique. We know that every person in the world fingerprint
                            consists of unique pattern ridges on the surface of the finger. Instead of going to paperless work, we are
                            proposing this system attendance monitoring using fingerprint. Fingerprint module machine is one type of
                            biometric attendance that uses fingerprint of the worker to do the further activities in the device.</p>


                        <center>
                            <img src={p1} alt="Input attendance village" />
                            <figcaption>Pic 1: Input attendance village</figcaption>
                        </center>

                        <h2>2 Problem Statement</h2>
                        <p>Workers are doing work according to the rules of MGNREGA (like digging holes for conserving rainy water, cutting
                            unwanted trees). These workers are working under a leader. This leader tasks attendance
                            at the ending of work on that day even though some persons did not attend for the work. She/he is giving
                            attendance to the persons & the money is sharing them both of them (leader & person). By doing this the average
                            wage of other person in the group is decreasing for the work on that day. Proposed System
                            In our proposed system, we improve the procedure of taking attendance and making it easy to maintain records of
                            each worker. Every worker's record will be automatically updated and generated after some lapse of a given time.
                        </p>

                        <h2>2.1 Technical Flow Diagram</h2>
                        <center>
                            <img src={p2} alt="Fig 1: Technical flow diagram of the system" />
                            <figcaption>Fig 1: Technical flow diagram of the system</figcaption>
                        </center>
                        <h2>Technical Flow Diagram Portrayal</h2>
                        <center>
                            <img src={p3} alt="Fig 2: Architecture diagram of the system" />
                            <figcaption>Fig 2: Architecture diagram of the system</figcaption>
                        </center>
                        <p>The above circuit outline shows how an OLED Display and Fingerprint Sensor is interfaced with Node MCU ESP8266
                            12E Board. The I2C pins of OLED Display,
                            i.e. SDA and SCL are associated with Node MCU D2 and D1 pins separately. Likewise, a unique fingerprint
                            sensor is associated with UART pins D5 and D6.
                            The fingerprint sensor Tx and Rx wires' colors may vary. In any case, the colors are yellow and blue where
                            yellow is Tx and Blue is Rx. So, interface it by
                            finding fitting colored wires; otherwise, the module won't be identified by Node MCU. The R305 fingerprint sensor is
                            supplied with 5V through Vins of Node MCU. For my
                            case, the sensor didn't work at comparably interface OLED Vcc pin 3.3V of Node MCU.</p>
                        <h2>Data Sets:</h2>
                        <center>
                            <img src={p4} alt="Data set1: Collected the information from village workers" />
                            <figcaption>Data set1: Collected the information from village workers</figcaption>
                        </center>
                        <br></br>
                        <center>
                            <img src={p5} alt="Data set2: Called off attendance procedure of village workers" />
                            <figcaption>Data set2: Called off attendance procedure of village workers</figcaption>
                        </center>
                        <h2>Outcome</h2>
                        <p>We decided to use a biometric device to recognize the fingerprint of the worker. It will take his/her fingerprint
                            at the time of working in the field only.
                            Doing this way we can remove these kinds of activities like (proxy, corruption) in the work; the fingerprint
                            device is connected to the Node MCU module
                            hotspot of the mobile/tab.</p>
                        <center>
                            <img src={p6} alt="Pic1: biometric device to recognize the fingerprint of the worker" />
                            <figcaption>Pic1: biometric device to recognize the fingerprint of the worker</figcaption>
                        </center>
                        <h2>Working Procedure</h2>
                        <p>First, the leader should log in using his credentials; after that, he will get the HTML page to take the attendance.
                            While keeping the finger on the device,
                            it will take the fingerprint and store it as a number in the Node MCU module.</p>
                        <center>
                            <img src={p7} alt="Pic2: Biometric device to recognize and display “welcome” message" />
                            <figcaption>Pic2: Biometric device to recognize and display “welcome” message</figcaption>
                        </center>
                        <p>If the fingerprint isn't matched, it will display an error message as shown in the figure below.</p>
                        <center>
                            <img src={p8} alt="Pic3: Biometric device to recognize not matched fingerprint" />
                            <figcaption>Pic3: Biometric device to recognize not matched fingerprint</figcaption>
                        </center>
                        <h3>Final Result</h3>
                        <p>After successful login, it displays that you are logged in & logged out times in the report form. It also contains
                            the date and time of logging of the user at the end
                            of work; if we place the finger twice, it displays at which time you leave from the work.</p>
                        <center>
                            <img src={p9} alt="Pic4: Biometric attendance date and time report" />
                            <figcaption>Pic4: Biometric attendance date and time report</figcaption>
                        </center>
                        <h3>Benefit and Impact on Society</h3>
                        <p>Mainly workers who are living in villages will benefit from this because 85% of the people in this act are
                            from villages only. By doing this, the
                            money is distributed equally between the workers for their work. This act is mainly used in summer because people
                            have no work during summer. It also provides work
                            to the people in the villages during the summer.</p>
                        <center>
                            <img src={p10} alt="Pic5: The Village workers and VRSEC: IT students EPIC project team" />
                            <figcaption>Pic5: The Village workers and VRSEC: IT students EPIC project team</figcaption>
                        </center>



                        <h2>4. Conclusions</h2>
                        <p>This system gives fingerprint authentication and a website with a fingerprint module. It takes
                            information from the device and checks the validity of the finger
                            and processes the data. This device can avoid taking attendance by paper work and cheating other persons in the
                            work and getting attendance even though they
                            did not come to the work. This module is low cost and easy to implement in the project.</p>

                        <h2>References</h2>
                        <ol>
                            <li>G. Chandra Ph. D. Research Scholar, "A study on Mahatma Gandhi National Rural Employee Guarantee Act"
                                International Journal of Management Research and Social Science(IJMRSS) ISSN 2394-6407 Volume 2, Issue 1,
                                January – March 2015.</li>
                            <li>K. Krishnamurthi, S. I. Mary, B. N. Sumalatha, "Fingerprint based attendance system," International Journal
                                of Advanced Research in Computer and Communication Engineering, vol4, Issue 3, pp. 621-623, March 2015.</li>
                            <li>E. Zhu, J. Yin, and G. Zhang, "Automatic Fingerprint identification technology," National Defense University
                                Press, 39(8), pp. 1452-1472, 2006.</li>
                            <li>S. Saha(2014) Women Work Issues in rural Development "A case of MGNREGA Implementation in west Bengal,
                                India". Global Journal of human –Social Science 14:49- 52</li>
                        </ol>
                    </article>
                    <article>

                        <h2>Addendum</h2>

                        <h3>About the paper</h3>
                        <p><strong>observed:</strong> Since the publication of this research paper, I have made several enhancements to the biometric system. These improvements include:</p>
                        <ul>
                            <li>Increased accuracy in fingerprint recognition.</li>
                            <li>Enhanced security features to prevent unauthorized access.</li>
                            <li>Integration with a mobile application for real-time attendance tracking.</li>
                        </ul>

                        <h3>Feedback from users</h3>
                        <p><strong>From users:</strong>  I have received valuable feedback from users and have addressed some of the issues and challenges faced
                            during the implementation of the system. I continues to work on refining the system to make it more user-friendly and efficient.</p>

                        <h3>Clarification</h3>
                        <p><strong>Clarification:</strong> In the "Outcome" section of the paper, it was mentioned that the fingerprint device is
                            connected to the Node MCU module hotspot of the mobile/tab.  I would like to clarify that the device can also connect to a
                            dedicated server for data storage and analysis, providing centralized management of attendance records. I have taken this paper because it is the project done
                            in my bacherols in MGNREGA it is the best website to provide funds to the people who are working as a labour. Here i used these tags because of these are very simple
                            and easy to use.Here the h tags are used for headings and p are used for paragraphs.In HTML (Hypertext Markup Language), the ol element is used to create ordered lists.
                                 Ordered lists are lists of items that are numbered or ordered in a specific sequence. Each item in an ordered list is
                                  represented by an li (list item) element. </p>
                    </article>
                </body>

            </html>


        </div>
    );
};

export default Home;
