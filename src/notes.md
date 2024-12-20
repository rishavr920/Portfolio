first created repository on github as portfolio and copy link of it as https://github.com/rishavr920/Portfolio

then make folder on machine and install vite-react,tailwindcss, framer motion.

after that git init
after that git remote add origin https://github.com/rishavr920/Portfolio

//commiting
after that git add .
after that git commit -m "Initial commit"

//pushing
after that git branch -M main
after that git push -u origin main

but i encountered problem they reject as failed to push

rishavraj@MacBookAir portfolio % git push -u origin main
To https://github.com/rishavr920/Portfolio
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/rishavr920/Portfolio'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

then i do git status 
it shows On branch main
nothing to commit, working tree clean
 
# so accoring to gpt i follow this

If Push is Still Rejected
  If git push is rejected again:

 1 Ensure you are on the main branch:

  git branch
  (You should see * main as the active branch.)

2 Force push if you're certain your local branch should overwrite the remote:


git push -f origin main
rishavraj@MacBookAir portfolio % git branch
* main
rishavraj@MacBookAir portfolio % git push -f origin main

after that everything works fine till now.