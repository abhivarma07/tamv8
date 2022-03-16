export const homeObjOne = {
    id: 'about',
    lightBg : true ,
    lightText : true ,
    lightTextDesc: false ,
    topLine: 'Technological Awareness Month',
    headline : 'Welcome to TAM' ,
    description : 'TAM stands for technology awareness month, where we conduct events on generating awareness amongst students about the latest practical technologies in the industry of engineering. We focus on bringing light to the topics that are usually hind-sighted by the students of engineering.',
    desc: 'Creating a better knowledge-base and testing their wits on various levels, TAM stands to be a knowledge-parting legacy from years! We are more than proud to introduce version 8 of TAM for the year 2021-22. Come and join us to be a part of the biggest intelligence-rave of St. Martin’s Engineering College.',
    buttonLabel : 'Browse Events' ,
    imgStart : true ,
    img : require('../../images/Crew.png') ,
    alt : 'TAM',
    dark : false ,
    primary : false , 
    darkText : true ,
    to : 'events' ,
    linkS : true , 
    linkR : false, 
    data : [] ,
    view : "none" ,
} ;

export const homeObjTwo = {
    id: 'events',
    lightBg : false ,
    lightText : false ,
    lightTextDesc: true ,
    topLine: 'Events',
    headline : 'Events for Everyone ' ,
    description : 'What is learning with no fun? We conduct workshops on various subjects like ARDUINO, CYBER SECURITY etc, for students to learn and also practice alongside with industry-based subject matter experts! Where you can learn how to work these subjects on an industry-level. Join the workshops by registering below to be the jack of all trades!!',
    buttonLabel : 'Details' ,
    imgStart : false ,
    img : require('../../images/events.png') ,
    alt : 'TAM',
    dark : true ,
    primary : true , 
    darkText : false ,
    to: 'about',
    linkS : false , 
    linkR : false,
    data : [] ,
    view : "none" ,
} ;

export const homeObjThree = {
    id: 'team',
    lightBg : false ,
    lightText : false ,
    lightTextDesc: true ,
    topLine: 'Team',
    headline : 'Meet The Crew' ,
    description : 'Every great organization has a great team. We as a crew at TAM have made it a point to ensure that every event is filled with a great deal of success, in addition to ensuring every participant is able to be served with equal priority. From planning the events to marketing, to making our website, we make sure that we are meeting the needs of every participant.',
    buttonLabel : 'Know us Better' ,
    imgStart : true ,
    img : "https://ik.imagekit.io/o3b14qow3gqi/Display/team_aHIHLnmtaH19.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1647204779564" ,
    alt : 'TAM',
    dark : true ,
    primary : true , 
    darkText : false ,
    to : '/CrewPage',
    linkS : false , 
    linkR : true,
    data : [] ,
    view : "none" ,
} ;

export const homeObjFour  = {
    id: 'help',
    lightBg : false ,
    lightText : false ,
    lightTextDesc: true ,                        
    topLine: 'Help',
    headline : 'Stuck? How Can We Help ' ,
    description : " " ,
    data : [
        {
            question : 'When and how did TAM start ?',
            ans : 'TAM was founded about 8 years ago. A group of proactive students came together to conduct Technical and Non-technical events to broaden knowledge.'
        },
        {
            question : 'What is the objective behind TAM?',
            ans : 'TAM provides a platform for students to explore their interests and test their skills in today’s Innovative world of Technology.'
        },
        {
            question : 'How do we recruit our crew members?',
            ans : 'We the TAM members recruit students that are interested and tested on their life skills like speaking ,writing  ,conversational  and collaborative skills.'
        },
        {
            question : 'On what basis do we choose our Events?',
            ans : 'We conduct events based on technologically loaded domains that are in trend,  and that offers a platform for students to sharpen their Technical and Non-technical skills alike.'
        }
    ] ,
    buttonLabel : 'Contact Us' ,
    imgStart : true ,
    img : require('../../images/tam4.png') ,
    alt : 'TAM',
    dark : true ,
    primary : true , 
    darkText : false ,
    to : '/goToGoogle',
    linkS : false , 
    linkR : false,
    linkC : true,
    view : "flex" ,
} ;

export const homeObjFive  = {
    id: 'quiz',
    lightBg : false ,
    lightText : false ,
    lightTextDesc: true ,                       
    topLine: 'QUIZZES',
    headline : 'Give your brain some exercise ' ,
    description : 'Quizze are conducted to bring out the competitive side in you. Go on, grab a friend or a fellow classmate to challenge the knowledge which you have gained over the years. The quizzes mention below have two rounds each.',
    buttonLabel : 'View Quizzes' ,
    imgStart : false ,
    img : require('../../images/quiz.png') ,
    alt : 'TAM',
    dark : true ,
    primary : true , 
    darkText : false ,
    to : 'about',
    linkS : false , 
    linkR : false,
    data : [] ,
    view : "none" ,
} ;

export const tech = {
    id: 'tech',
    lightBg : false ,
    lightText : false ,
    lightTextDesc: true ,
    topLine: 'Technical Department',
    headline : 'TECHIES' ,
    description : "We basically ensure the smooth functioning of technical operations, monitor and evaluate stuff etc."+
    " We lead a path for our content to be displayed on different platforms of web",
    buttonLabel : 'Get Started' ,
    imgStart : true ,
    img : "https://ik.imagekit.io/o3b14qow3gqi/team/tech_4EjZVL_56qs8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647426464644" ,
    alt : 'TAM',
    dark : true ,
    primary : true , 
    darkText : false ,
    to : 'events' ,
    linkS : false , 
    linkR : false, 
    data : [] ,view : "none" ,
} ;

export const marketing = {
    id: 'market',
    lightBg : false ,
    lightText : false ,
    lightTextDesc: true ,
    topLine: 'Marketing Department',
    headline : 'INFLUENCERS' ,
    description : 'We are the voice of Tam and we provide deep insight on various events that we host and organize. We are the reason for many people willing to be part of us.',
    buttonLabel : 'Get Started' ,
    imgStart : true ,
    img : "https://ik.imagekit.io/o3b14qow3gqi/team/market_OHdNIKXD0.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647426712917" ,
    alt : 'TAM',
    dark : true ,
    primary : true , 
    darkText : false ,
    to : 'events' ,
    linkS : false , 
    linkR : false, 
    data : [] ,
    view : "none" ,
} ;

export const events = {
    id: 'evemts',
    lightBg : false ,
    lightText : false ,
    lightTextDesc: true ,
    topLine: 'Events Department',
    headline : 'EVENTERS' ,
    description : "We are the ones behind the execution of event which includes organizing, planning etc. "+
    "We host an event in such a way that everyone is attracted and we dedicate ourselves from start to end",
    buttonLabel : 'Get Started' ,
    imgStart : false ,
    img : "https://ik.imagekit.io/o3b14qow3gqi/team/event_TErj-pxkk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647426803182" ,
    alt : 'TAM',
    dark : true ,
    primary : true , 
    darkText : false ,
    to : 'events' ,
    linkS : false , 
    linkR : false, 
    data : [] ,
    view : "none" ,
} ;

export const wiz = {
    id: 'wiz',
    lightBg : false ,
    lightText : false ,
    lightTextDesc: true ,
    topLine: 'Wizards Department',
    headline : 'ECHANTERS' ,
    description : 'We are the literary leaders,we takecare of writing all the tricky questions you have to answer and speeches you have to listen',
    buttonLabel : 'Get Started' ,
    imgStart : false ,
    img : "https://ik.imagekit.io/o3b14qow3gqi/team/wiz_hU6vnfdbgn08.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647426387567" ,
    alt : 'TAM',
    dark : true ,
    primary : true , 
    darkText : false ,
    to : 'events' ,
    linkS : false , 
    linkR : false, 
    data : [] ,
    view : "none" ,
} ;

export const photo = {
    id: 'photo',
    lightBg : false ,
    lightText : false ,
    lightTextDesc: true ,
    topLine: 'Photography Department',
    headline : 'PAPARAZZIS' ,
    description : "We capture the beautiful moments throughout the event and create lifelong memories. We portray the story of event through our pictures. We capture all the smiles and hardwork done behind this success." ,
    buttonLabel : 'Get Started' ,
    imgStart : false ,
    img : "https://ik.imagekit.io/o3b14qow3gqi/team/photo_XiBUXB2ZO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647426010607 " ,
    alt : 'TAM',
    dark : true ,
    primary : true , 
    darkText : false ,
    to : 'events' ,
    linkS : false , 
    linkR : false, 
    data : [] ,
    view : "none" ,
} ;

export const stage = {
    id: 'photo',
    lightBg : false ,
    lightText : false ,
    lightTextDesc: true ,
    topLine: 'Stage Department',
    headline : 'STAGEHANDS' ,
    description : 'We extend our hand and provide our assistance and expertise in making the event a success. We are always on our toes for helping this run smoothly.',
    buttonLabel : 'Get Started' ,
    imgStart : true ,
    img : "https://ik.imagekit.io/o3b14qow3gqi/team/styage_DHSY9ZaK3R.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647425818034" ,
    alt : 'TAM',
    dark : true ,
    primary : true , 
    darkText : false ,
    to : 'events' ,
    linkS : false , 
    linkR : false,
    data : [] , 
    view : "none" ,
} ;

export const vfx = {
    id: 'vfx',
    lightBg : false ,
    lightText : false ,
    lightTextDesc: true ,
    topLine: 'VFX Department',
    headline : 'CREATORS' ,
    description : "We work on presenting eye-catching as well as informative content. "+
    "We provide a visual treat to the viewers by enhancing the primary content.",
    buttonLabel : 'Get Started' ,
    imgStart : true ,
    img : "https://ik.imagekit.io/o3b14qow3gqi/team/vfx_gPeP89cc8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647426096185" ,
    alt : 'TAM',
    dark : true ,
    primary : true , 
    darkText : false ,
    to : 'events' ,
    linkS : false , 
    linkR : false, 
    data : [] ,
    view : "none" ,
} ;

export const board = {
    id: 'board',
    lightBg : false ,
    lightText : false ,
    lightTextDesc: true ,
    topLine: 'The Board Members',
    headline : 'EXECUTIVES' ,
    description : "We are the main pillars of Tam and we work in the direction of making this a success in terms of finance, technicality, etc. "+
    "We inspire and encourage the upcoming members to lead this ahead.",
    buttonLabel : 'Get Started' ,
    imgStart : false ,
    img : "https://ik.imagekit.io/o3b14qow3gqi/team/board_HDxzu9n5M.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647426570501" ,
    alt : 'TAM',
    dark : true ,
    primary : true , 
    darkText : false ,
    to : 'events' ,
    linkS : false , 
    linkR : false, 
    data : [] ,
    view : "none" ,
} ;

export const advisor  = {
    id: 'advisor',
    lightBg : false ,
    lightText : false ,
    lightTextDesc: true ,                        
    topLine: 'Faculty Advisor',
    headline : 'E.Saumya' ,
    description : 'about saumya mam',
    buttonLabel : 'Contact Us' ,
    imgStart : false ,
    img : require('../../images/tam4.png') ,
    alt : 'TAM',
    dark : true ,
    primary : true , 
    darkText : false ,
    to : '/goToGoogle',
    linkS : false , 
    linkR : false,
    linkC : false,
    data : [] ,
    view : "none" ,
} ;

export const princi  = {
    id: 'princi',
    lightBg : true ,
    lightText : true ,
    lightTextDesc: false ,                        
    topLine: 'Principal',
    headline : 'Dr.P.Santosh Kumar Patra' ,
    description : "Dr.P.Santosh Kumar Patra , Principal of St.Martin's Engineering College is holding "+ 
    "B.E. in Computer Science & Engineering, MTech in Computer Science & Engineering and Ph.D "+ 
    "in Computer Science & Engineering degrees. His area of interests are Airtificial Intelligence,"+
    "Software Engineering , Data mining and warehousing & Wireless Networks.", 
    desc:"He has been honored with"+
    '"GOVERNOR AWARD (THRICE) " , "Rastriya Gaurav Award" , "Rastriya Vikas Ratan Award , "Dronacharya'+'Award " , Young leader of the year 2019 & IBAE International Award, Dubai.',
    buttonLabel : 'Contact Us' ,
    imgStart : true ,
    img : "https://ik.imagekit.io/o3b14qow3gqi/Crew/princi_O8p_H9fUo_tS.jpg?updatedAt=1647430271746&tr=w-1164,h-655,fo-custom,cm-extract" ,
    alt : 'TAM',
    dark : false ,
    primary : true , 
    darkText : false ,
    to : '/goToGoogle',
    linkS : false , 
    linkR : false,
    linkC : false,
    data : [] ,
    view : 'none',
} ;


