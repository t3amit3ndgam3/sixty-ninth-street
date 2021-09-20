
## Available Scripts
After cloning the repo you must install npm by `npm install` for once.

In the project directory, you can run:
### `npm start`

Well It should run now.

About github:

After cloning the repository, you will get the default branch. Most of the time its Main branch.

Usually at production level projects we should not change code in local main branch as it can change the original code in from main branch server when we push our code from local. 
So its better and recommended to make you own branch and do code in that branch and then push your changes to you branch in server. It will make a merge request in github repository. One responsible person will merge the code to main branch in server.

Note:  Don't forget to inform all of you team member before you merge any request.

To create and switch to a branch, run:
`git checkout -b branchName`

To confirm before code, run: 
`git branch`
before switching between branches must add and commit your changes, other wise u may face error.

To check git status, run:
`git status`

to switch other branch, run:
`git checkout branchName`

To pull from the server, u must switch to local main branch

after pulling the code into you local main branch. switch back to your branch by `git checkout "branchname"`

Then you must get the updated code (those u pulled right before) to your branch.
to do that, run: `git rebase main` (main because u pulled to main branch, if it master then replace it with master branch)

For any further issue with git, Discuss with your team members or "Md Rahatul Islam"

# Note: Remember that always write your code into your branch then push. Never write your code within main branch and push until emergency case or after discussing in group.

# Note: Don't merge from github without discussing in group. If you need to merge your code ask to the group or the guy who is responsible to controll main branch. Its better to avoid errors and conflicts.