---
title: værbuddy
priority: 1
date: 2024-05-16
# tags: Kotlin Agile Android Sofware-engineering
---

værbuddy is the result of a 3 month software development project, made by 6 students as a project for a university course. Source code and further documentation [here](https://github.com/sanderrasmussen/team-24){:target="\_blank"}.

#### IN2000

##### What is IN2000

[IN2000](https://www.uio.no/studier/emner/matnat/ifi/IN2000/){:target="\_blank"} is a course at the University of Oslo. It's full title is actually _Software Engineering with Project_. This course is mandatory for students studying computer science (such as me!), and makes up 20 study points _(if you don't know what those are - basically, in norway a full time student takes 30 points worth of courses per semester)_.

You can get a full picture of the requirements of the course and project at the university website, but here's my summary:
A team of 6 strangers have to develop an Android-app, using some spesific Api-s from the universitys **institute of meteorology**. There are some given cases, and a couple of restrictions about language, tools and such. here are some of the criteria we had to meet:

##### Requirements

- git and github had to be used.
- Agile software development - Scrum, Kanban or a mix
- Using Kotlin and Jetpack Compose (others could be used, but the course **strongly** reccomends these)
- Interviews with the target audience
- apis from the institute of meteorology (case spesific):
  - [metalerts](https://api.met.no/weatherapi/metalerts/2.0/documentation){:target="\_blank"}
  - [locationforecast](https://api.met.no/weatherapi/metalerts/2.0/documentation){:target="\_blank"}

##### Our case

Now, to our spesific case([available here if they don't take it down](https://in2000.met.no/2024/3-yngre.html){:target="\_blank"}):
**weather- and danger alerts for younger users.**
the tl-dr of the case is basically this; Young people under the age of 25 aren't using the Institute of Meteorology's weather app, [yr](https://www.yr.no), and this is a problem because other international or third-party weather apps don't neccesarily have all the weather alerts for dangers like snowstorms, extreme rain, forestfire etc.
So, our task was to interview people in the demographic to see what would make them use a weather app provided by MET, and then develop such an app.

![a survey depicting what users would like in a weather app. The main reason is "a game version - game about the weather"](/assets/images/vaerbuddy/vaerbuddy-survey.png "survey results")

#### The app

##### gameplay

If you know norwegian you know what the most prominent response in the survey above is _"A game version"_, so that's what we did.
The basic loop of the app is this: You have a character, that needs to be dressed appropriately for the real weather. To dress him appropriately, you need to buy new clothes, using coins. You can earn coins in two ways: dressing your character more appropriately for the temperature gives more coins, and doing a quiz.
