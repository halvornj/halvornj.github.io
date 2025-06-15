---
title: Operating Systems
priority: 2
date: 2025-06-11 11:00:00 +0200
#tags: Operating-Systems Computer-Science Programming unix Linux
toc: true
---

## Operating Systems

This is a short writeup / summary of my experience gained in the course _"IN3000 - Operating Systems"_ at UiO.

#### Surrounding The Course

This course is very unique in some ways, and the exact opposite in others. Firstly, let's tackle what makes this course stand out, and why I've decided it's worth including in my portfolio:

This course was certainly the most difficult part of my time at university. In fact, I think I can say with some confidence that it is regarded as the most difficult course at the Institute at a bachelor- or master-level.
Because of this, _(or maybe this is the cause for the difficulty,)_ the course is worth 20 'studiepoeng'. If you're not familiar with the norwegian points system, a full course load is 30 points. In terms of courseload, this course is equivalent to writing a bachelors thesis. And this course is an elective.

What makes this course non-unique is the fact that this course is not only offered at UiO. It was developed in conjunction with several other universities. It is hard to find an updated list of what universities offer it, but i know that princeton has the same course under the name COS318, and that former professors from the university of Tromsø (UiT) have been involved in its creation.

#### The Project

Through this course the end-goal is to create our own operating system running on 32-bit intel architecture. This is done as a team of two, through 6 mandatory projects;

- bootblock and an image creation tool
- non-preemptive scheduling
- preemptive scheduling
- inter-process communication and process management
- virtual memory
- file system

  Each project has a substantial amount of precode, meaning that we only had to implement the spesific area of the os that each assignment related to - but by the final assignment, all the parts of the precode were things we had implemented ourselves in previous projects.
  Each project is split into two parts - a one week design phase, and a two week implementation phase. During design the pre-code and assignment is studied, and a design-document is handed in at the end. Ours was typically about 6-7 pages. The implementation was just that - writing the code that we had designed, and getting it up and running on real hardware at the lab.

The problem with a write-up about this course is that, as the precode and assignments are the same each year, we are not allowed to share or discuss our individual solutions. This means that I can only really outline the problems in the next section, and not really discuss our solutions.

###### Technical Difficulties

I want to briefly explain some of the challenges to each project, as I find boiling them down to a single keyword fails to show the scope of this course.

1. The first project consists of creating a bootblock, and a program to create the image-file of our OS. The bootblock was actually rather simple; Neither of us had any experience in x86 assembly, but I had done some very limited ARM-programming _(and of course, my beloved Shenzen IO)_ so I at least knew the basic principles. The harder part was the image-creation - This meant stripping the elf-headers and all other symbols from the executables generated when compiling the kernel and other processes, and writing them to the correct areas of the image-file.
2. The second project was on **non-preemptive** scheduling. The only real concern here (at least for us), was context-switching and setting up initial context for the processes. No interrupts were used here, simply `yield()` and `exit()` syscalls that we implemented. Locks were also implemented in a very basic form here, but a lock with no preemptions is incredibly simple.
3. The preemptive project largely involved proofing the code for interruption by implementing synchronization-primitives, and implementing the interrupt-handler for the timer. Most of the effort here went into making sure the updated locks (mutexes), semaphores, condition variables and barriers all guaranteed thread-safety and worked optimally.
4. P4 consisted of two separate parts - First, IPC. The goal here was to implement mailboxes using our new condition variables, which were used by the shell to receive data from the keyboard-driver, amongst other things. The second part was Process Management. While we still did not have a proper file system, we now needed to be able to dynamically load processes from the disk. This was done using what was essentially an extremely simple file-system for executable files (note that these executable files have also been stripped of all ELF- and other metadata).
5. This was the hardest project - virtual memory. We had to implement two-level page tables, and a page fault handler, from scratch. Each process had its own 2 level page-directory, meaning we had to set up two levels of tables and map in certain areas of the kernel with certain permissions (write-permissions for the screen-memory, for example).
6. The final project was meant to be simpler, but involved a lot more coding; A unix file-system. This was again somewhat simplified, as we did not need to deal with file permissions. We implemented:

- `open()`
- `close()`
- `read()`
- `write()`
- `lseek()`
- `stat()`
- `link()`
- `unlink()`
- `mkdir()`
- `chdir()`
- `rmdir()`  
  at just about a thousand lines of code in total. An extra challenge was that this project was right in the middle of exam season, meaning this couldn't receive our full attention. Our only major shortcoming here was not having enough time for properly handling both absolute and relative paths with the syscalls, settling for only relative paths.

###### Final Remarks

Through this project I've become better at starting the design early, planning much more ahead before implementation. On the technical side I feel I've become much more self-reliant both in terms of not relying on other code or even libraries, and using manuals to a greater extent. Having a limited amount of tools has made me far more efficient in using them, both in terms of reading manuals instead of forums for help, and using emulators with debuggers much more thoroughly. And of course I've become much better at C programming - and slightly better at x86 assembly.
