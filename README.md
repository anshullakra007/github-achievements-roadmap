# 🏆 The Ultimate GitHub Achievements Roadmap

Welcome to the **GitHub Achievements Roadmap**! This repository is designed to be an educational guide for beginners to understand and unlock GitHub's hidden profile badges (Achievements). 

If you follow these steps exactly, you will organically unlock these badges for your own profile!

---

## 🎖️ 1. Quickdraw
**Requirement:** Close an issue or pull request within 5 minutes of opening it.

**How to get it:**
1. Go to any public repository you own.
2. Click on the **Issues** tab and click **New Issue**.
3. Give it a title (e.g., `Meta: Track future enhancements`) and click **Submit new issue**.
4. Immediately scroll down and click the **Close issue** button.
*(This badge is awarded instantly!)*

---

## 🤠 2. YOLO
**Requirement:** Merge a pull request without code review.

**How to get it:**
1. Clone your repository locally and create a new branch: `git checkout -b update-readme`.
2. Make a small change to a file (like `README.md`) and commit it.
3. Push the branch and create a Pull Request on GitHub.
4. Go to the Pull Request page and immediately click **Merge pull request** without requesting a review from anyone else.
*(This badge is awarded instantly!)*

---

## 🦈 3. Pull Shark
**Requirement:** Open pull requests that have been merged. (Tier 1 requires 2 merged PRs).

**How to get it organically:**
The most guaranteed way to get this is to contribute to an external repository.
1. Fork the [first-contributions](https://github.com/firstcontributions/first-contributions) repository.
2. Clone it, create a new branch, and add your name to the `Contributors.md` file.
3. Commit, push, and open a Pull Request to their upstream repository.
4. Their automated bot will merge your PR in minutes!
*(Note: This badge is processed by a GitHub background job and takes 24-48 hours to appear).*

---

## 🤝 4. Pair Extraordinaire
**Requirement:** Co-author a commit in a merged pull request.

**How to get it:**
1. While making a commit for a Pull Request, add a `Co-authored-by` trailer to your commit message.
2. The format MUST be exactly like this, separated by a blank line from your main message:
   ```text
   Update README documentation

   Co-authored-by: Linus Torvalds <torvalds@linux-foundation.org>
   ```
3. Push the commit and merge the Pull Request. 
*(Note: This badge is processed by a GitHub background job and takes 24-48 hours to appear).*

---

## 🧠 5. Galaxy Brain
**Requirement:** Have 2 of your answers accepted in GitHub Discussions.

**How to get it:**
1. Go to the Settings of one of your public repositories and check the box to **Enable Discussions**.
2. Go to the Discussions tab and click **New discussion**. 
3. **CRITICAL:** You must select the **Q&A** category.
4. Ask a question and post it.
5. Reply to your own question, and click the `✓` icon on your reply to **Mark as answer**.
6. Repeat this process for a second question.
*(Note: This badge is processed by a GitHub background job and takes 12-24 hours to appear).*

---

## 🤩 6. Starstruck
**Requirement:** Create a repository that has 16 stars.

**How to get it:**
1. Build an actually useful, high-quality open-source project.
2. Write an excellent `README.md` explaining what it does.
3. Share your project in developer communities like Reddit (`r/learnprogramming`, `r/webdev`) or Discord servers.
4. As the community finds your project useful, they will naturally star it!

---

### ⚠️ A Note on Delays
GitHub calculates the **Quickdraw** and **YOLO** badges instantly. However, **Pull Shark**, **Pair Extraordinaire**, and **Galaxy Brain** require GitHub to aggregate data across millions of repositories. This means they run on a delayed CRON job. **Do not panic if you don't see them immediately—it is completely normal to wait 24 to 48 hours for them to show up on your profile!**
