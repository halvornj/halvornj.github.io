---
title: værbuddy
# 2024-02-20 to
date: 2024-05-16
# tags: Kotlin ...
toc: true
---

værbuddy is the result of a 3 month software development project, made by 6 students as a project for a university course. Source code and further documentation [here](https://github.com/sanderrasmussen/team-24)

#### IN2000

[IN2000](https://www.uio.no/studier/emner/matnat/ifi/IN2000/) is a course at the University of Oslo. This course is mandatory for students studying computer science (such as me!), and makes up 20 study points _(if you don't know what those are - basically, in norway a full time student takes 30 points worth of courses per semester)_.

You can get a full picture of the requirements of the course and project at the university website, but here's my summary:
A team of 6 strangers have to develop an Android-app, using some spesific Api-s from the universitys **institute of meteorology**. There are some given cases, and a couple of restrictions about language, tools and such. here are some of the criteria we had to meet:

- git and github had to be used.
- Agile software development - Scrum, Kanban or a mix
- Using Kotlin and Jetpack Compose (others could be used, but the course **strongly** reccomends these)
- Interviews with the target audience
- apis from the institute of meteorology (case spesific):

  - [metalerts](https://api.met.no/weatherapi/metalerts/2.0/documentation)
  - [locationforecast](https://api.met.no/weatherapi/metalerts/2.0/documentation)

Now, to our spesific case([available here if they don't take it down](https://in2000.met.no/2024/3-yngre.html)):
**weather- and danger alerts for younger users.**
the tl-dr of the case is basically this; Young people under the age of 25 aren't using the Institute of Meteorology's weather app, [yr](https://www.yr.no), and this is a problem because other international or third-party weather apps don't neccesarily have all the weather alerts for dangers like snowstorms, extreme rain, forestfire etc.
So, our task was to interview people in the demographic to see what would make them use a weather app provided by MET, and then develop such an app.

![a survey depicting reasons the demographic doesn't use yr](/assets/images/vaerbuddy/vaerbuddy-survey.png "survey results")

#### The app

If you know norwegian you know what the most prominent response above is _"A game version"_, so that's what we did.
