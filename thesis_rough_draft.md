
###### - to be later transferred to overleaf
###### - writing in md in order to track the progress better
###### - Content of this draft will follow the official requirement provided by the university


<details>
  <summary>To-do list</summary>

  ### disable right-click on images
  ### refactor the codes before inserting code snippets
</details>

# Implementation of a CRUD Web application using MEVN stack
**Name:** JeongHyun An

**Category:** Web application

**Date:** Nov 2022

----------------------------------------------------------------------

### Abstract
In present day, the field of web application development is flooded with various tools, and technologies,
where each one of them has wide range of features with its own strengths and limitations in comparison to other technologies.
Meanwhile, it is also important to note that selection of such technologies also highly depend on the situation surrounding the project,
such as its aim, timeframe, and expected outcome. Therefore, one can say that it is essential to examine and compare the available options
and choose a stack well-tailored for the project, in order for the development to be more efficient.

The purpose of this paper is to investigate a development process of a Single Page Web Application,
taking into consideration the target users, and essential features that users might expect.
The app provides a tool for user to compose outfit coordinations, with a possibility to share the coordinations,
and to view others' creations for inspiration.
As a result of the work, the implementation of a working web application will be described,
followed by a review on its performance.

The thesis finally concludes with the reflection on how the outcomes of the preliminary search
was applied throughout the work, verification of the approach, and thoughts on further works.


##### keywords:
- Web application
- RESTful API
- MEVN stack
- Fashion App


------------

### Contents

1. Introduction<br />
    1.1. Project description<br />
    1.2. Background & problem statement (Demands, and target range, related industry)<br />
    1.3. Thesis organisation & objectives<br />
2. Analysis<br />
    2.1. Similar Services<br />
    2.2. Application Requirements.<br />
        &nbsp;&nbsp;&nbsp;2.1.1. Functional Requirements<br />
        &nbsp;&nbsp;&nbsp;2.1.2. Non-functional Requirements<br />
    2.3 System Architecture (use case diagram?)<br />
<details>
  <summary>Notes - chapter 3</summary>

  ### Break Down Chapter 3 into 3 parts
  - What's expected
  - Comparison of Different Technologies
  - My Choice
  ### References
  #### Platform
  - https://www.scnsoft.com/blog/mobile-web-app-types
  - https://www.scnsoft.com/blog/web-application-vs-website-finally-answered
  #### Architecture
  - Single-page web app architecture 
  - https://www.scnsoft.com/blog/web-application-architecture
</details>

<br />

3. Technological Analysis (Planning stage)<br />
    3.1. Web vs Mobile app<br />
    3.2. Programming language<br />
&nbsp;&nbsp;&nbsp;&nbsp;3.2.1. FrontEnd -> Javascript, html, CSS<br />
&nbsp;&nbsp;&nbsp;&nbsp;3.2.2. BackEnd -> Node.js<br />
    3.3. Architecture<br />
&nbsp;&nbsp;&nbsp;&nbsp;3.3.1. Single-page web app architecture (SPAs)<br />
    3.4. Frameworks<br />
&nbsp;&nbsp;&nbsp;&nbsp;3.4.1. FrontEnd -> Vue js<br />
&nbsp;&nbsp;&nbsp;&nbsp;3.4.2. BackEnd -> Express.js (+ REST API?)<br />
    3.5. Database<br />
4. Implementation of the Solution<br />
    4.1. UI/UX -> Quasar + Customised design for target user group<br />
    4.2. Architecture<br />
&nbsp;&nbsp;&nbsp;&nbsp;4.2.1. SPAs mechanism within the app<br />
&nbsp;&nbsp;&nbsp;&nbsp;4.2.2. Use case diagram<br />
    4.3. FrontEnd<br />
&nbsp;&nbsp;&nbsp;&nbsp;4.3.1. Components structure (tree)<br />
&nbsp;&nbsp;&nbsp;&nbsp;4.3.2. Pages Navigation (+ Navigation & toolbar)<br />
&nbsp;&nbsp;&nbsp;&nbsp;4.3.3. Routing<br />
&nbsp;&nbsp;&nbsp;&nbsp;4.3.3. Data Handling (Local Storage)<br />
    4.4. BackEnd<br />
&nbsp;&nbsp;&nbsp;&nbsp;4.4.1. Database (models & controllers)<br />
&nbsp;&nbsp;&nbsp;&nbsp;4.4.1. routing<br />
5. Performance<br />
    5.1. Tags Selection<br />
    5.2. Sign Up<br />
    5.3. Log In<br />
    5.4. Post Manipulation<br />
    5.5. Loading posts<br />
    5.6. User account actions<br />
6. Conclusion<br />
    6.1. critical analysis of the results (strengths and limitations)<br />
    6.2. Comparison with other services<br />
    6.3. Further developments<br />
&nbsp;&nbsp;&nbsp;&nbsp;6.3.1. Conversion to cross-platform version <br />
&nbsp;&nbsp;&nbsp;&nbsp;6.3.3. Adding more post editing features<br />
&nbsp;&nbsp;&nbsp;&nbsp;6.3.3. Using other framework for easier maintenance<br />
&nbsp;&nbsp;&nbsp;&nbsp;6.3.4. Uploading local image files instead of urls<br />
&nbsp;&nbsp;&nbsp;&nbsp;6.3.5. Delpoyment<br />
7. References<br />
8. List of Symbols and Abbreviations<br />
9. List of Figures<br />
10. List of Tables<br />
11. List of Appendices<br />


--------
##1. Introduction<br />

The early generation of front end developers suffered from limited solutions, and technologies for development. This means they had to rely on a more primitive methodologies, and implement even minor features from the scratch. 
The evolution in technologies over the past decades has been truly significant, and it is undoubtful that the currently accesible tools and technologies makes the transfer from the logic to functional codes much more conveinent and efficient nowadays.

However, now the current generation encounters another barrier to explore this field ironically.
According to the research paper of Abubaker Kashada from Surman college of Science and Technology, when a person experiences 'information overload' it is highly likely that their process of decision making will be impaired. 
This finding reinforces the importance of preliminary research preceding development. It is essential to anaylyze and to figure out the characteristics of the project, and then to examine what would be the most appropriate tools and technologies, prior to the developmental stage. Thorough research will be conducted for each requirement, weighing strengths and limitations of the available tools.

>1.1 Project "Collage It"

_Collage It_ is an application where its users can create a fashion coordination - a collage composed of 4 images - and share it with other users. In addition, users can filter the posts (collalges) to find the coordinations that specifically match their styles. The collages can be edited to enhance the visual aspects. The posts can also be saved so that user can find their favourite posts any time, in their own customised section.
The application is buit with MEVN (MongoDB, Express.JS, Vue.js, Node.js) stack, and REST API. The combination of database, framework, and web server allows for creation of a user-interactive website with various functionalities.

>1.2 Problem statement

Aside from the technical aspects, the choice of 'fashion app' was made among a list of possible business ideas, based on commercial considerations.
Clothing has always been a concern of human kind since the ancient days, and today, it is not only a basic need but also a medium to express one's personality and characteristics. 

_image in this link (https://www.morganstanley.com.au/ideas/peak-clothing)_

The figure above is a graph provided by Moran Stanley showing the trend in apparel consumption of UK population over the past 30 years. Although the quantity has peaked, and stayed steady for around 10 years, it has not declined significantly either. It suggests that people have growing interest in fashion lately, and therefore there is a lot of room for sustainable business opprotunities.

Unfortunately, not everyone can create the looks they would like to achieve regardless of their amount of interest. Just like in any other fields or areas of interests, it requires various skills such as visualisation, organisation, attention to details, and artistic abilities. Since the industry is also hugely influenced by trends, it additionally requires time and efforts to catch up with the newest trends. Thus it could be assumed that a tool to facilitate such coordination making process can be widely enjoyed by the population.

According to a survey conducted in the United Kingdom, the consumption rate of fashion items was marked the highest among the young female group. 
https://www.statista.com/statistics/286096/clothes-and-sports-goods-online-purchasing-in-great-britain-by-demographic/
A post from HuffPost (https://www.huffpost.com/entry/different-brains-differen_b_9480952) states that women (the target user of this application) pays more attention to details, and favor more emotional activities. Thus, friendly UI, detailed features will be considered with greater emphasis in this project.  

>1.3 Thesis objectives and organisation

This thesis aims to describe the process of developing a web application, taking both the business requirements, and technological requirements into consideration. The main body is divided into 3 parts:
1. Analysis of the project requirements, and a resulting blueprint.
2. Research and selection of adequate technologies
3. Application's performance review.

--------
##2. Analysis<br />

In this section, a thorough analysis of the business, and existing services will be carried out.
Afterwards, functional requirements and non-functional requirements will be drawn in order to narrow down the features needed for the application. Based on the analysis, a more specific plan and design of the system can be created utilising tools dedicated for such tasks.

>2.1 Similar Services


>2.2 Application Requirements

Specifying project requirements is a funcamental part of software engineering. Although software and web applications are not identical, they share many similar characteristics, and therefore this strategy can as well be applied to the process of web application development.
The CEO of Enkonix states in an article that 68% of IT projects fail, and that one of the main reasons for the failure is poor definition of requirements at the start. He also provides definitions of 'Functional Requirements', and 'Non-functional requirements' in an article. The definitions are as follows:
(https://enkonix.com/blog/functional-requirements-vs-non-functional/)

- Functional Requirement: can be defined as 'Something the system must do.' If the system does not meet a functional requirement, it will fail. Functional requirements specify what the system must do in response to different inputs, and what should be the outputs.
- Non-functional Requirement: can be defined as 'Requirements that describe how the system works.' They are focused on how the systme goes about delivering a specific function.

>2.2.1 Functional Requirements

Functional requirements can be divided into 2 types: Signed-in user, and guest-user. Meanwhile, since they are both of type 'user', there are several requirements commonly shared between the two types. Thes will be written in one place.
Priorities of these requirements will be ranked from the scale of 1 to 3, where 1 is the highest, and 3 is the lowest. Those with the lowest priorty are not strictly required for the program to meet the basic needs of the users, but rather for resulting in greate user satisfaction. They were written altogether to provide a bigger picture, but timeframe is also a key factor in developmental process. The implementation can be postponed to be done for the future releases.

##### Both types of users are able to:
- Access the Feed (library of collages)
- Filter viewable posts
- Share, and view the existing users' posts

##### Signed-in users are able to:
- Log out of the application
- Delete own account from the database
- Create a post
- Delete own post
- Access user page (also reffered to as *My page* in the app)
- Save/like posts they are interested in
- Edit their account details
- Customise user page
- Edit photos while creating a post

##### Guest users are able to:
- Log In to the application
- Register to the application
- Provide Personal information upon sign-up

>2.2.2 Non-functional Requirements

This section describes non-functional requirements of this project followed by discussion for realistic application and solution. Technological aspects will be briefly stated, but they will be discussed more in depth in a later chapter.

- Accesibilitiy: The application is accesible on any browser.



https://www.w3schools.com/js/js_es6.asp
- Adaptibility: The application can be used for various purposes.
- Security: the user data must be protected against cyber attacks, and handled anonymously on the client level.
- Ethics: As the application deals with photos, copyright infringement should be avoided.
- Usability: The application should provide friendly, and intuitive user interface. 
- Response time: Loading time of each component and page on the application should be minimal.
- Storage capacity: The server should be able to handle the users' data.

Further discussions:

Although the initial aim was to create an application for fashion coordinations, the collage editor feature and the way how the collages are displayed is rather universal. This means the app may not only server as a creator tool for coordinations, but also for collage of any type.

However, in order to stick to the organisation of the app, it will be important to think of how these non-relevant posts can be accesible to users. A future idea could be to 
- Disable right-click in order to save copyright infringement should be a
- More secure means of authentication
- Provide possibilty to upload photos of any type
- Internationalisation


>2.3 System Architecture (use case diagram?)





















.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.

--------------------------
# Everything below is a template

_I love I love muffin candy canes marshmallow muffin powder. Jelly chupa chups oat cake cotton candy dessert bonbon chocolate biscuit. Powder I love bear claw. Caramels chupa chups pastry powder. Cookie macaroon muffin lemon drops carrot cake sweet roll tiramisu. Donut gummi bears gingerbread donut powder marzipan. Sesame snaps apple pie chocolate cake I love chocolate bar. Tootsie roll croissant halvah I love cheesecake dragée danish applicake. Jelly-o tart fruitcake._

**Dragée wafer pudding chocolate tiramisu cupcake gummies. Carrot cake tiramisu marzipan cotton candy. Danish tiramisu chocolate bar chocolate bar jelly beans bear claw chocolate. Jelly beans lollipop tiramisu pudding donut croissant. Bonbon chocolate cake I love. Sweet roll pudding I love gingerbread caramels dragée.**

>I love I love muffin candy canes marshmallow muffin powder. Jelly chupa chups oat cake cotton candy dessert bonbon chocolate biscuit. Powder I love bear claw. Caramels chupa chups pastry powder. Cookie macaroon muffin lemon drops carrot cake sweet roll tiramisu. Donut gummi bears gingerbread donut powder marzipan. Sesame snaps apple pie chocolate cake I love chocolate bar. Tootsie roll croissant halvah I love cheesecake dragée danish applicake. Jelly-o tart fruitcake.

[This is an link](http://assemble.io)

1. list item 
2. list item 
3. list item 
4. list item 
5. list item 


## Write your code or tutorial

**CSS**
<pre lang="css">
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  body:first-of-type pre::after {
    content: 'highlight: ' attr(class);
  }
  body {
    background: linear-gradient(45deg, blue, red);
  }
}

@import url('print.css');
@page:right {
 margin: 1cm 2cm 1.3cm 4cm;
}

@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

div.text,
#content,
li[lang=ru] {
  font: Tahoma, Chunkfive, sans-serif;
  background: url('hatch.png') /* wtf? */;  color: #F0F0F0 !important;
  width: 100%;
}
</pre>

**HTML**
<pre lang="html">
    <code>
        <article>
            <section></section>
        </article>
    </code>
</pre>
_This is an note_

**Javascript**
<pre lang="js">
(function(){
    var init, ed, qt, first_init, DOM, el, i, mce = 0;
};
</pre>

**Other**
<pre lang="bash">
class ntp {
    case $operatingsystem {
        centos, sles, redhat: {
        $service_name = 'ntpd'
        $conf_template = 'ntp.conf.erb'
        $default_servers = [ "192.168.100.10","192.168.100.20", ]                                   }
                    }
    if $servers == undef {
        $servers_real = $default_servers
                }
        else {
            $servers_real = $servers
            }

    package { 'ntp':
            ensure => installed,
            }

    service { 'ntp':
            name => $service_name,
            ensure => running,
            enable => true,
            subscribe => File['ntp.conf'],
        }

    file { 'ntp.conf':
            path => '&frasl;etc&frasl;ntp.conf',
            ensure => file,
            require => Package['ntp'],
            content => template("ntp/${conf_template}"),
        }
}
</pre>

**Supported languages**
Here is a complete list of supported languages:

1c-zapros, 1c-kod, abap, as, ada, amigados, apache, applescript, arduino, asp, asm, autoit, bash, c, c#, c++, coffee, css, default, delphi, dws, diff, erlang, go, haskell, ini, ilogic, java, js, less, lisp, lua, matlab, reg, miva, monkey, batch, mysql, objc, plsql, perl, pgsql, php, ps, python, r, ruby, rust, sass, scala, scheme, sh, swift, tex, tsql, vim, vb, vbnet, xhtml, yaml, zsh

**Note: marking lines as important**
You can mark some lines as important so they appear highlighted. You can specify single numbers, comma separted, a range, or a combination.	
<pre lang="js" mark="5-10,12"> ... </pre>

----------------------------------------------------------------------
### Add some notes for the editor

Cupcake ipsum dolor sit amet. Danish muffin tart bear claw chupa chups I love. Gingerbread gummies chocolate bar I love halvah dessert.

I love donut chupa chups. Marzipan cookie apple pie chocolate cookie. Muffin cookie halvah chocolate bar. Croissant toffee dragée unerdwear.com tiramisu dragée.

----------------------------------------------------------------------

### Technical Report description
Cupcake ipsum dolor. Sit amet jelly tart cake dragée jelly beans sweet roll chocolate cake. Sweet roll halvah I love. Unerdwear.com topping tart I love marzipan. Brownie sugar plum I love sesame snaps oat cake. Apple pie lemon drops chocolate danish topping dessert marshmallow dessert. Tart candy canes unerdwear.com ice cream tiramisu dragée applicake. Apple pie brownie sesame snaps oat cake caramels halvah danish pudding jelly beans. Gummies chocolate cake I love croissant cookie.

- list item 1
- list item 2
- list item 3
- list item 4
- list item 5

_I love I love muffin candy canes marshmallow muffin powder. Jelly chupa chups oat cake cotton candy dessert bonbon chocolate biscuit. Powder I love bear claw. Caramels chupa chups pastry powder. Cookie macaroon muffin lemon drops carrot cake sweet roll tiramisu. Donut gummi bears gingerbread donut powder marzipan. Sesame snaps apple pie chocolate cake I love chocolate bar. Tootsie roll croissant halvah I love cheesecake dragée danish applicake. Jelly-o tart fruitcake._

**Dragée wafer pudding chocolate tiramisu cupcake gummies. Carrot cake tiramisu marzipan cotton candy. Danish tiramisu chocolate bar chocolate bar jelly beans bear claw chocolate. Jelly beans lollipop tiramisu pudding donut croissant. Bonbon chocolate cake I love. Sweet roll pudding I love gingerbread caramels dragée.**

>I love I love muffin candy canes marshmallow muffin powder. Jelly chupa chups oat cake cotton candy dessert bonbon chocolate biscuit. Powder I love bear claw. Caramels chupa chups pastry powder. Cookie macaroon muffin lemon drops carrot cake sweet roll tiramisu. Donut gummi bears gingerbread donut powder marzipan. Sesame snaps apple pie chocolate cake I love chocolate bar. Tootsie roll croissant halvah I love cheesecake dragée danish applicake. Jelly-o tart fruitcake.

[This is an link](http://assemble.io)

1. list item 
2. list item 
3. list item 
4. list item 
5. list item 

**Image**
![Minion](link)


## Write your code or tutorial

**CSS**
<pre lang="css">
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  body:first-of-type pre::after {
    content: 'highlight: ' attr(class);
  }
  body {
    background: linear-gradient(45deg, blue, red);
  }
}

@import url('print.css');
@page:right {
 margin: 1cm 2cm 1.3cm 4cm;
}

@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

div.text,
#content,
li[lang=ru] {
  font: Tahoma, Chunkfive, sans-serif;
  background: url('hatch.png') /* wtf? */;  color: #F0F0F0 !important;
  width: 100%;
}
</pre>

**HTML**
<pre lang="html">
    <code>
        <article>
            <section></section>
        </article>
    </code>
</pre>
_This is an note_

**Javascript**
<pre lang="js">
(function(){
    var init, ed, qt, first_init, DOM, el, i, mce = 0;
};
</pre>

**Other**
<pre lang="bash">
class ntp {
    case $operatingsystem {
        centos, sles, redhat: {
        $service_name = 'ntpd'
        $conf_template = 'ntp.conf.erb'
        $default_servers = [ "192.168.100.10","192.168.100.20", ]                                   }
                    }
    if $servers == undef {
        $servers_real = $default_servers
                }
        else {
            $servers_real = $servers
            }

    package { 'ntp':
            ensure => installed,
            }

    service { 'ntp':
            name => $service_name,
            ensure => running,
            enable => true,
            subscribe => File['ntp.conf'],
        }

    file { 'ntp.conf':
            path => '&frasl;etc&frasl;ntp.conf',
            ensure => file,
            require => Package['ntp'],
            content => template("ntp/${conf_template}"),
        }
}
</pre>