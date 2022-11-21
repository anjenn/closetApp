
###### - to be later transferred to overleaf
###### - writing in md in order to track the progress better
###### - Content of this draft will follow the official requirement provided by the university


<details>
  <summary>To-do list</summary>

  ### disable right-click on images
  ### refactor the codes before inserting code snippets

  ## In conclusion
  ### Ad the following to future work (and reflect on non-functional requirements part)
  - More secure means of authentication
  - Provide possibilty to upload photos of any type
  - Internationalisation
  - Making feed section more relevant (sort out posts without valid images, posts don't match the tags)

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

>2.1 Similar Services //include images!

1. Pinterest

Pinterest is a popular source of fashion inspirations. It is tool where users share photos, and in the app there is a category for fashion, and serves mainly for users that are looking for massive inspirations. One post can hold many images, but as one post card section is filled with one image at a time, and the next images are only accessed after a click of a button, and indeed in a detailed view, it is hard to think that the next images will make a one 'output' together with the current image.
There are people that share coordination images, and even collages too, but it requires other tool to render and join the images into one. Hence, even though this application is great for finding single-image inspirations and showcase works of the users, there is little room for creation on the site.

2. Instagram

Instagram is another photo sharing application. Recently, many users have been using this as a tool to share fahsion coordinations. One strength is that, the accounts with popular posts have higher rate of exposure, and the application introduces accounts with similar styles. Thus, when a user has strong preference in their mind, it is a great tool to find the inspirations specific to their preference.
On the other hand, as this application was not originally built for sharing coordinations, it is hard to only search for outfits and coordinations. The search system in instagram solely depends on the custom tags attached by users, and often times, the use of tags are not very precise. Also, just like the case with Pinterest, instagram also displays one image per post card. Thus this application may not be the most conveninent option for those who would like to view many different styles with little efforts into search,
or would also like to build their own coordinations along with viewing others' works.

3. Smart Closet

Smart Closet is an application with a dedicated feature for coordinations, which can be created by the users. It also has integrated mall, where users may find the same item they can see in the coordination.
The application also has clean, and generally likeable UI.
One thing to note though, is that the posts are of many mixed styles. Also, the formats of the posts are not unified. Some have 2 or 3 items, while some have around 10 items.
Also, few items are synched with the internal shopping mall, but rest of the items are left with unknown sources.
It is also hard to share the posts unless a user downloads images and save the images to their device.

<br />
##### Summary
This Market Analysis gives insight into existing solutions in the market, and what can be done better to make this application more competitive by serving as a more efficient tool.
The ultimate goal of this application will be to satisfy the users with the fulfilling their demands that could not be fulfilled using other applications.
This project specifically targets users with the following demands: 'Being able to browse coordinations of various styles', 'little efforts, and time for creation', 'consistency in the created posts by different users (pleasant looking UI)'
Based on the target user, and the business analysis, the following points can be drawn:

- The app must be dedicated for creating and sharing outfit coordination of various styles, with a possibility to filter the styles.
- Displaying adequate number of images (of different fashion items) per post card, and making it a requirement to upload an image for all section of the collage can ensure completeness of the posts, and consistency in their display. 
- Linking the URL to the item can yield greater satisfaction, because one disadvantage of exploring coordinations in photo sharing applications is that it is hard to identify the source. This does not only impose a problem regarding copyright, but also results in making the users frustrated as they cannot find out more information about what they like.

<pre lang="html">
    <code>
        <article>
            <section>Maybe add a table here? to compare the traits
            ex. single vs multiple items per post card
            fashion app, or fashion as one category among many, or photo sharing app (user decides how to use the app)
            Can search style by filter vs recommendation
            
            </section>
        </article>
    </code>
</pre>


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

This application can be written with framework that supports ES6 (ECMAScript 6, https://www.w3schools.com/js/js_es6.asp). ES6 is currently supported by Chrome 58, Edge 14, Firefox 54, Safari 1-, and Opera 55. Except for Opera 55, all the other browsers had been supporting ES6 at least for approximately 5 years. This suggests that many potential users, considering that they have last updated their browser within the past 5 years are not likely to have issues with accesibility. This requirement will be reflected in chapter 3.

- Security: the user data must be protected against cyber attacks, and handled anonymously on the client level.

Instead of handling database on the client side, Utilising database can help secure the data better.

- Ethics: As the application deals with photos, copyright infringement should be avoided.

This application will fetch and share images via url, so that original address of the images can be attached to the image all the time. Also, blocking right-click can add additional layer of protection, as it can prevent users from donwloading the photos without the original publishes' permission.

- Usability: The application should provide friendly, and intuitive user interface. 

The application will use vibrant colors in order to appeal to most of the users as a user-friendly website.
Also, displaying many informational alerts, adding tool-tips, sticking to intuitive and universal symbols, and employing consistency in ways of visualising and displaying the objects/messages in the same context will be important.

- Response time: Loading time of each component and page on the application should be minimal.

Finding a time-efficient way of fetching and displaying data will be a vital in this criteria. This topic will be revisited in chapter 3.

>2.3 Use Case Diagram

Based on the market, the target user, and the requirements analysis we can draw now visualise a plan that shows the essential features and functionalities of the application.

##TBA

--------
##3. Design <br />

While market and business analysis is crucial for building a competitive product, technological analysis associates with a rather practical part of the development, as technologies are what render the final output of the project. This section will break down the technical part into 5 sections as follows: operating platfrom, programming languages, type of page architecture, framework, and database.
Each section comprises of expectations of the project, comparison of different options, and reasoning behind a choice.

>3.1. Platform<br />

Decision for application type, and its operating platform is essential in developing a program.
Competitiveness in the market can heavily depend on this aspect. For instance, if the purpose of application, and the way how media is presented and consumed in the app do not suit for the platform type, the output will not yield the cost (time and efforts) spent into the development process. Also, potential users may have varying preference in their usage of technology. Thus, comparing the project specifications with the available options, and also considering the necessity, and developmental constraints will be needed at this stage.

References: https://www.springboard.com/blog/design/mobile-vs-website-app/#h0,
https://codeinstitute.net/global/blog/web-app-vs-mobile-app/
https://sagaratechnology.medium.com/mobile-apps-vs-web-apps-which-is-the-better-option-868106c88730

###### Web application

The list belows illustrates the characterestics of Web Application:

- Program stored on a remote server, and delivered to the use via a browser.
- Serves for multiple purposes (ex. can designed to fit for both small and big screen devices)
- Usually have more functionalities than mobile apps
- Does not require additional stage 
- Can be accessed via any browser on mobile and desktop
- Accesing the application requires searching through a browser
- Do not need to be updated nor installed manually
- Cannot be used offline
- Relatively slower than movile application

###### Mobile(Native) application

The list belows illustrates the characteristics of Mobile application 
- Specifically designed for use on mobile & touchable devices 
- Should be downloaded from store ex. play store, windows store, apple store.
- Easily discoverable as they are listed, and categorised in the store. Once downloaded, it only takes a single click to access lauch the application.
- Usage data (ex. display settings, favourites, etc) can be easily saved and accessed in the app.
- Typically have limited functionalities, and instead focuses on a single purpose
- Requires frequent updates
- Must go through authorisation stage in order to be registered to app stores






>3.2. Programming language<br />

>3.2.1. FrontEnd -> Javascript, html, CSS<br />

>3.2.2. BackEnd -> Node.js<br />

> 3.3. Architecture<br />

>3.3.1. Single-page web app architecture (SPAs)<br />

>3.4. Frameworks<br />

>3.4.1. FrontEnd -> Vue js<br />

>3.4.2. BackEnd -> Express.js (+ REST API?)<br />

>3.5. Database<br />









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