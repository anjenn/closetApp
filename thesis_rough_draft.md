>2.2 Application Requirements

Specifying project requirements is a funcamental part of software engineering.
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
- Can be accessed via any browser on mobile and desktop
- Accesing the application requires searching through a browser
- Do not need to be updated nor installed manually
- Cannot be used offline
- Relatively slower than movile application

###### Mobile(Native) application

The list below illustrates the characteristics of Mobile application 
- Specifically designed for use on mobile & touchable devices 
- Should be downloaded from store ex. play store, windows store, apple store.
- Easily discoverable as they are listed, and categorised in the store. Once downloaded, it only takes a single click to access lauch the application.
- Usage data (ex. display settings, favourites, etc) can be easily saved and accessed in the app.
- Typically have limited functionalities, and instead focuses on a single purpose
- Requires frequent updates
- Must go through authorisation stage in order to be registered to app stores

Although photo editing applications can be found on mobile phones, it has limitation as such that it is difficult to perform detailed task, nor to view multiple photos in one window due to small viewport size.
Since the application is expected to load multiple collages, and to offer photo editing feature, web application can serve as a better platform for the purpose of this app. Even though web application can be slower, and makes it harder for user to access,
this format can be beneficial since many users find it bothersome to install mobile application, and to keep track of its updates and to mange storage space.
Also, not having to wait for authorisation on the stores is a one less thing to be concerned with, when the application is ready to publish.
However, it's hard to claim that web application is absolutely better than mobile application.
As the modern people's reliance on mobile devices is increasing nowadays, additionally having mobile version of the website can be a huge plus. In this case, web application can still be an option, be cause it provides a possibility to be transformed to PWA (Progressive Web Apps). PWA refers to the type of application, where the functionality of Native Application, and the accessibility of Website is combined. (https://www.magestore.com/blog/pwa-vs-native-app-and-how-to-choose-between-them/)

>3.2. Programming language<br />

Components of web application can be broken down into 2 parts - server side, and client side - and so are programming languages.
In this section, the choice of programming languages of each side of this application will be explained.

>3.2.1. FrontEnd -> Javascript, html, CSS<br />

HTML, Javascript and CSS make a standard combination of the modern frontend languages.
Definitions of these languages can be found on MDN documentation. (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
According to their definitions, HTML is a markup langauge that is used to structure and give meaning to web content (ex. paragraphs, media, headings, etc). CSS is a language of styles used to apply styling to the HTML content. Javascript is a scripting lanaguage that skips the compilation and is instead interpreted one by one at a runtime (https://www.javatpoint.com/what-is-a-scripting-language). It enables developers to create dynamically updating content, control multimedia, and aminate images.

Survey result by stackoverflow(https://survey.stackoverflow.co/2022/#most-popular-technologies-language-prof) also supports the popularity and reliability of these combination.
In the 'Programming, scriptiong, and markup langauges section' Javascript won the first place, as the most commonly used markup language by all respondents. Indeed, it marked 67.9% by the professional Developers group. The report emphasises that the record has been consistent for the past 10 years in a row.
The next place was taken by HTML/CSS, marking 54.93% by professional developers.
Considering that the candidates of this category not only includes langauges popular for frontend, but also those that are used for managing backend, and database, we can say the percentages of the 3 langauges are remarkably high.

>3.2.2. BackEnd -> Node.js<br />

Node.js was ranked as the most widely used technology by 46.31% in the Web frameworks and technologies category.
https://survey.stackoverflow.co/2022/#most-popular-technologies-webframe-prof

> 3.3. Model and Architecture<br />

Web application architecture is a pattern of interaction between the web application components. Typical web applications have the server and the clident side, which are supposed to run concurrently.
On the client side, code lives in the browerse and responds to user input. On the server side, the code lives on th server and responds to HTTP requests (https://stackify.com/web-application-architecture/).
The way how their interaction is planned out determines the resilience, performance and security of the final work (https://www.scnsoft.com/blog/

>3.3.1. Building a model of web application components

Before moving on to the decision making step for application architecture, we first need to draw a big picture of the components of this web application.
In this context, the term 'component' refers to big fragments of the system, which are Web broswer, web server, and database server. There are variety of options with ranging number of servers and databasese, or even serveless and databaseless system.
From the list of options, a model with one web server and database was chosen, due to the fact that this project is considreably simple.
If the application updates in the future, for more complex system and functionality, the number of server and database would as well need to increase, so we can avoide a problem like the whole application malfunctioing when the server goes down. Many articles suggest that a combination of multiple web servers and multiple databases can serve as the most stable form. (https://www.cleveroad.com/blog/web-application-architecture/)

>3.3.2. Architecture<br />

For Frontend side, there are 2 typical architectures: Single-page web application, and multi-page web application.
Single-page web app architecture between the two was chosen as the final architecture for the system.

#####
Single-page web app architecture, among monolithic architectures, was chosen as the final architecture for the system. Monolithic architecture refers to the tranditional model, where the entire software is developed as a songle piece of code. In this architecture, all components are interdependent and interconnected. Thus, for change or update of a specific feature to take place, the entire code should be rewriteen and compiled. Meanwhile, as the entire code is treated as a single program, building a new project, applying frameworks, scrips and templates and testing is as well easy. (https://www.clickittech.com/devops/web-application-architecture/#h-web-application-architecture-components)
Since this project is is created with entry level of knowledge and experience in programming, this architecture was thought to be adequate. For more complex programs, microservices architecture or serverless architecture could be used.

###### Single Page Web App (SPAs) <- add a diagram here

SPAs was introduced to overocome the traditional limitations to achieve smooth app performance, intuitive and interactive user experience (https://www.simform.com/blog/web-application-architecture/).
This architecture allows for dynamic interaction and updates of contents to the current page without reloading a new page each time. (https://hackr.io/blog/web-application-architecture-definition-models-types-and-more).
This architecture can be developed by using javascript frameworks, which will be discussed in the frontend side's framework section of this chapter (3.4.1).


Other types of architecture include microservice architecture, serverless architecture and progressive web applications(PWA). These wer e not chosen, because they are more complicated compared to SPAs, providing solutions for problems that are not covered in the scope of the project needs, or overcomplicate the tasks. For example, serverless architecture allows applications to execute the code logic without bothering with the infrastructure-related tasks, but concerns with third-party cloud service. (https://hackr.io/blog/web-application-architecture-definition-models-types-and-more)
Microservices applications can have independent components, and do not require to be built using the same programming language. This can be a huge benefit in a bigger project, but for this particular project it is unnecessary.
Last type is PWA. PWA can be described as SPA with additional features (https://www.scnsoft.com/blog/web-application-architecture). As stated in the section 3.1, this project will eventually adapt the SPA architecture with a room for further modification to PWA.

>3.4. Framework<br />

Since selection of programming languages has been made, now framework can be selected too based on the language selection.
Dictionary defines framework as a 'basic structure underlying a system (https://www.igi-global.com/dictionary/in-the-pursuit-of-happiness/11494).' In the case with programming, a framework is a tool that provide ready-made components or solutions that are customised in order to speed up development (https://www.netsolutions.com/insights/what-is-a-framework-in-programming/).

Meanwhile, time constraint, and efficiency are key components in planning for any project. Therefore it is important to weigh the ressulting quality and efficiency of using a particular framework, and the cost to use a framework. For instance, each framework has differing shape of learning curve, and they are likely to have their own libraries including UI library, and state management library that are not compatible with other frameworks.

There are many more considerations to make mainly including functionality, learning curve, and popularity (https://www.sitepoint.com/6-things-to-consider-when-choosing-a-framework/, https://www.zirous.com/2019/01/23/considerations-when-choosing-a-development-framework/).
Unlike certain component of application, like frontend programming language discussed in the earlier section -for which majority of developers choose javascript, html, and css, as statistics suggests- frameworks do have a more varying preferences.

In this section, the above mentioned points will be evaluated one by one in a group of competitive frameworks.

>3.4.1. FrontEnd <br /> <- add a table of comparison here.

As javascript was chosen as a programming language for the front end side, its javascript frameworks can be considered here.
The following criteria will be taken in the consideration here: popularity, release date, author/developer, quality of documentation, active user community, functionality, learning curve, familiarity. Among these, familiarity is a personal factor. 

Available options can be initially narrowed down by the popularity of available frameworks at the current time. The 2022's survey by stackoverflow shows that among javascript frameworks, React.js, Angular, Vue.js, Angular.js and Svelte was listed in the ranking (https://survey.stackoverflow.co/2022/#most-popular-technologies-webframe-prof, https://mindmajix.com/react-vs-vue#comparison). The percentage of their preference by professional developers were 44.31% (react.js), 23.06% (angular), 19.9%(vue.js), 9.94%(angular.js), and 4.11%(Svelte) 

## !! Jetbrain Ecosystem survey showed a rather differernt survey results (https://mindmajix.com/react-vs-vue#comparison)
## Also 'Most Wanted' section in the survey shows that Vue ranked 2nd place
## State of JS survey shows that they were all Vue and React had similar satisfaction (https://2020.stateofjs.com/en-US/, https://2muchcoffee.com/blog/react-vs-angular-vs-vue-which-framework-to-choose-in-2022/)

It is important to note that Angular and Angular.js are two different frameworks. Although they share many common characteristics das that they were both developed by Google, Angular is the enhanced version of Angular.js, supporting both typescript and javascript while Angular.js supports only javascript. (https://www.interviewbit.com/blog/difference-between-angular-and-angularjs/). Due to this fact, Angular will be selected for comparison instead of Angular.js.

In the meantime, Github statistics show an interesting result from their repositories analysis.
According to the statistics, Angular had 3.1k watches, 78.4k stars, React had 6.7k watchers and 180k stars, and Vue had 6.3k watchers, and 218k stars. Meanwhile, the number of contributers for Angular and React were above 1.5k and for Vue it was above 400 (https://www.codeinwp.com/blog/angular-vs-vue-vs-react/, https://star-history.com/#facebook/react&vuejs/vue&angular/angular, https://javascript.plainenglish.io/angular-vs-react-vs-vue-js-which-is-the-best-choice-for-2022-5ef83f2257ab). Despite the number of contributers, the numbers for watchers and stars counts are surprising, as it is not exactly identical to the preference survey result. One possible explanation could be that Angular, and React have more contributions counted from the employees from enterprises, but this still shows that Vue as well have numerous active projects on Github.

Now we can narrow down the options to the frameworks with popularity above 10%, which leaves 3 candidates: React.js, Angular and Vue.js. These frameworks have 

#####Angular
- Popularity: 23.06%
- Released year: 2010 (https://thecodest.co/blog/pros-and-cons-of-vue)
- Developer: Google (https://thecodest.co/blog/pros-and-cons-of-vue)
- Learning curve: Medium difficulty
- Size of framework/features: biggest
- Type of DOM: Incremental
- Does it require other library: No
- Scalability: yes
- 2-way data-binding: YES (https://www.sam-solutions.com/blog/angular-vs-react-vs-vue/)
- Applications written in Angular: Google, Wix, Forbes, Angular  (https://www.codeinwp.com/blog/angular-vs-vue-vs-react/)

Further analysis: Angular is the oldest framework among the 3 candidates, which ensures good backing for any issues that their developers may encounter. In addition, Google is also in charge of its maintenance and improving. It is also the biggest framework among the 3, providing a wide range of choice of in-buid features. Thus, it can be a great option for large scale app with in-build features. Moreover, Angular is a framework for developing web apps so it does not require eany other library. (https://javascript.plainenglish.io/angular-vs-react-vs-vue-js-which-is-the-best-choice-for-2022-5ef83f2257ab)

According to the official documentation, its component-based property also makes Angular suitable for building scalable web applications. With Angular, developers can take advantage of a platfrom that can scale from single-developer project to enterprise level applications. (https://angular.io/guide/what-is-angular)
It is a collection of well-integrated libraries covering a wide variety of features, including routing, forms managements, client-server communication and etc. It also provides a suit of developer tools to help develop, build, test and update the code.


#####React

- Popularity: 44.31% (stack overflow survey)
- Release date: 2013 (https://thecodest.co/blog/pros-and-cons-of-vue)
- Developer: Facebook (https://thecodest.co/blog/pros-and-cons-of-vue)
- Learning curve: Difficult
- Size of framework/features: medium
- Type of DOM: Virtual (https://www.sam-solutions.com/blog/angular-vs-react-vs-vue/) <- improves performance
- Does it require other library: Yes
- Scalability: yes
- 2-way data-binding: NO (https://www.sam-solutions.com/blog/angular-vs-react-vs-vue/, https://2muchcoffee.com/blog/react-vs-angular-vs-vue-which-framework-to-choose-in-2022/) 
- Applications written in React: Facebook, Uber, Netflix, Paypal (https://thecodest.co/blog/pros-and-cons-of-vue)

Further analysis: 
React is a Javascript Library for building user interfaces. It is the most universal and prevalent framework among developers, and thanks to having the biggest community of developers, and having a dedicated team from Facebook that improves and developes the technology, React developers can enjoy the greatest amount of technical support in developing.
While it is often referred to as, and grouped as framework for conveinence, React is technically not a framework.
In fact, it is a library, and thus cannot build web app without the support of other libraries (https://javascript.plainenglish.io/angular-vs-react-vs-vue-js-which-is-the-best-choice-for-2022-5ef83f2257ab). Considering that Vue.js and Angular.js can be built without libraries, this drawback only associates with React.

Nonetheless, React with its biggest user community among the group of frameworks, offers the median solution in nearly most of the important aspects, including learning curve, quantity of features, newness, and etc. As there is no one absolute answer for choice in frameworks, being the median solution can make it exceptionally appealing to developers.

#####Vue

- Popularity: 19.9%
- Release year: 2014 (https://thecodest.co/blog/pros-and-cons-of-vue)
- Developer: ex-Google employee (Evan You) (https://thecodest.co/blog/pros-and-cons-of-vue)
- Learning curve: Easy
- Size of framework/features: smallest
- Type of DOM: Virtual
- Does it require other library: No
- Scalability: yes
- 2-way data-binding: YES (https://www.sam-solutions.com/blog/angular-vs-react-vs-vue/)
- Applications written in Vue.js: Alibaba, Gitlab, Grammarly, Nintendo

Further analysis:
Vue is a versatile framework with adoptable ecosystem that scales between a libarary and a full-featured framework. It provides declarative and component-based programming model. It has 2 core features that are declarative rendering, and reactivity. With declarative rendering, vue extends standard HTML with a template syntax allowing us to declaratively describe HTML output based on Javascript state (https://vuejs.org/guide/introduction.html#what-is-vue). Reactivity refers to vue's ability to automatically track javascript state changes and to efficiently update the DOM when changes happen.
One can see that this framework marked the lowest in the ranking in any survey for popularity, but one counterclaim to a criticism for its lack of popularity could be that this is a newest framework out of the 3 options. Indeed, the latest version release (Vue 3) introduced a new feature called _Compositoin API_. This feature manages state management on its own, and no external state management libary is needed anymore (https://thecodest.co/blog/pros-and-cons-of-vue). Furthermore, Vue is a standalone framework so it does not need to be used with other libraries like React. These can make Vue.Js a very competitive candidate in addition to its easy learning curve.


###Conclusion

Vue js was finally selected among the 3.
Although this framework is not backed by a large corporation like it is for React, and Angular, but instead, it is backed by a huge chinese community (https://fireart.studio/blog/vue-vs-react-in-2022/). Also, the recent statistics show gradually increasing interest in Vue.js. The data has high significance, because it has gained such results while many enterprises are still writing their codes using React and Angular. It may not be the most preferred framework at the moment, but one can't deny that it's a framework that is gaining momentum in the market.

It does not provide a great number of features (https://devoxsoftware.com/blog/vue-vs-react-which-one-to-choose-for-2022/), but for a simple project like this, it is not highly likely that there will be any issue with limiation of feature.
Also, the flexibility this framework offers can help dealing with such issue in case there will be any.
Finally yet importantly, personal factors cannot be overlooked. By the time of designing for this project, approximation of reamining time assigned for the project was around half a year. Considering that there were other technologies that were yet to learn, Vue was the most familiar framework among the 3 due to prior experience, and it has the lowest learning curve among the 3 options, this framework decided to be the most suitable for this project.

Meanwhile, there are a few drawbacks to be considered. First, the high flexibility it offers can also mean the code can be error-prone and more buggy compared to other frameworks. Also difference in approaches between project/team members or even between community members. (https://thecodest.co/blog/pros-and-cons-of-vue)

Therefore, it will be a good option to also start the project from Vue, and test its performance since it fulfills current requirement, but consider migratting to other framework like Angular when the project is ready to grow bigger, and more efficiency, organisation, featrues and error detection is required. 

Many experienced developers including Sara Zapico Fernandez, a senior fullstack software engineer recommend that Angular can be the strongest framework for big project (https://www.zartis.com/angular-vs-react-vs-vuejs/, https://2muchcoffee.com/blog/react-vs-angular-vs-vue-which-framework-to-choose-in-2022/).
This can be left as possibility for further development and implementation.

>3.4.2. BackEnd -> Express.js (+ REST API?)<br />

In section 3.2.2, the decision to use Node.js as programming language for the back end side had been made.
To run Javascript on the server, a virtual machine executes JS in the server, and node behaves as a wrapper around virtual machines, with built-in modules providing rich features through easy to use asynchronous API (https://hackr.io/blog/nodejs-frameworks).
Backend services like Applications Programming Interfaces (APIs) use Node to build their services. The services power client applications like web apps or mobile apps (https://hackr.io/blog/nodejs-frameworks). 
Node.js alone is sufficient enough to implement the server side of the program, but a framework will be added in order to facilitate the developing process.

Options: Nest.js, express.js, socket.io, meteor.js, koa.js, loopback.io (comparison: https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-backend)

##### Express
Express is a prebuilt Node Js framework that helps creating server-side web applications faster and smarter.
It is often referred to as un-opnionated framework. With a minimalism and flexbility Node.js framework that provides a robust set of features for web and mobile applications.
This serves as a huge benefit because it does not apply any of the prevalent design patterns such as MBV, MVP, MVVM, so its gives freedome to develops to use it depending on their onw preference, and eliminates unnecessary learning curve (https://www.toptal.com/nodejs/nodejs-frameworks-comparison)
It also allows for quick and easy creation of API, and provides high quality performance. It as well includes useful features like simplified multiple routing, database integration, template engines, and etc (https://blog.bitsrc.io/top-10-nodejs-frameworks-every-developer-should-know-f6eea8021eb0). 
Due to its strengths, many popular frameworks are also built based on Express (https://expressjs.com/en/resources/frameworks.html).
It marks 20M+ weekly downloads count every week (https://www.npmjs.com/package/express).
(https://survey.stackoverflow.co/2022/#worked-with-vs-want-to-work-with-webframe-worked-want-prof)This survey result also supports it, as it absolutely highest percentage including all frontend and backend frameworks and technologies.
Thanks to its popularity and long history, many projects for reference using Express as part of the technology stack could be found. 

>3.5. Database<br />

Database system can be broken into 2 categories that are Relation Database (RDBMS, SQL), and Non-relational database (No-SQL).
**- SQL** defines and manipulates data based on Structured Query Language, which is the most versatile and widely-used language optoins available (https://www.geeksforgeeks.org/sql-vs-nosql-which-one-is-better-to-use/). They have fixed, or static, or predefined schema. The databases are not suitable for hierarchical data storage, but are best suited for complex queries. SQL is vertically scalable (https://www.geeksforgeeks.org/difference-between-sql-and-nosql/).
**- NO SQL** with dynamic schema have the following characteristics: suitable database for hierarchical data storage, but not for complex queries, and horizontal scalability (https://www.geeksforgeeks.org/difference-between-sql-and-nosql/). It can be seen as a type of database consisting of opposite characteristics of SQL.




