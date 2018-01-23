# Hardcore Git

If you can do this, you're making a lot of things easier for yourself.  Employers also like it when they see that someone has skills that the company won't have to pay (in classes or in mentoring time) to train you on.

## Branching

These get crazy, so take it slow and confirm with `git status` often.  If you get lost, take it slower.  This is intended to be hard to follow, to force you to see if you really know or just mostly know it.

* Create a feature branch named `basic-1`
* Create a `basic-1.txt` file that has the word `Awesome` inside it
* Add and commit that change into the feature branch.
* Create a `basic-2` branch that is based off of master, not `basic-1` (there will be no `basic-1.txt`)
* Create a `basic-3` branch that is based off of `basic-1`, not master (there will be a `basic-1.txt`)
* Create a `basic-3.txt` file that says "git'in it done"
* Add and commit that change in `basic-3` branch
<<<<<<< HEAD
* switch to master branch (`git checkout master`)
* `basic-1.txt` should not be here
* Create a `basic-2.txt` file that has the word `Awesomer` inside it
* Add and Commit that change into the master branch
* merge the master branch INTO the feature branch (`basic-1`)
* if you `git checkout master` you will see `basic-2.txt` but not `basic-1.txt`
* if you `git checkout basic-1` you will see both `basic-1.txt` and `basic02.txt`
* switch to master branch
* delete branch `basic-3`, even thought it has changes that are not merged into master
* switch to `basic-1` branch
* do `git push origin basic-1`
=======
* Switch to master branch (`git checkout master`)
* `basic-1.txt` should not be here
* Create a `basic-2.txt` file that has the word `Awesomer` inside it
* Add and Commit that change into the master branch
* Merge the master branch INTO the feature branch (`basic-1`)
* If you `git checkout master` you will see `basic-2.txt` but not `basic-1.txt`
* If you `git checkout basic-1` you will see both `basic-1.txt` and `basic-2.txt`
* Switch to master branch
* Delete branch `basic-3`, even thought it has changes that are not merged into master
* Switch to `basic-1` branch
* Do `git push origin basic-1`
>>>>>>> eb30bae146e6c37151b169469783c582249fb387
* Go to github and create a pull request(PR) to merge `basic-1` into master branch
* After the PR is merged, do `git checkout master` and `git pull`
* Your master branch should end up with `basic-1.txt` and `basic-2.txt` but no `basic-3.txt`

