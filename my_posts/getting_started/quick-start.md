---
title: "Quick Start"
subtitle: "Launch in 20 minutes"
subheading: "How to set up an Eggspress site quickly"
isVisible: true
isArchived: false
isContentHidden: false
contentMessage: ""
image: ""
imagePositionX: 50
imagePositionY: 50
showImageInHeader: true
weight: 46
date: 2024-01-18T11:01:44
author: "denton"
snippet: "Get started in 20 minutes. This guide is for those who want to get something started ASAP or want to take Eggspress for a test drive before commiting more time to it."
description: "Get started using Eggspress in 20 minutes using our Quick Start guide."
sidebar: "eggspress_links"
category: ""
prevPost: ""
nextPost: ""
relatedPost1: "configure-your-workspace"
relatedPost2: "editing-content"
relatedPost3: "linking-internal-content"
relatedPost4: "using-templates"
relatedPost5: "using-sidebars"
relatedPost6: "archive-and-hide"
relatedPost7: "frontmatter"
relatedPost8: "set-up-amazon-associates"
relatedPost9: ""
---

This Quick Start guide is designed to help you **launch quickly**. In the interest of time, this guide glosses over the details. Use this if you wish to:
- start a "disposable" website that you'll maintain only briefly
- take Eggspress for a test drive and preview its core features
- get a refresher after having set up Eggspress before

If you have any questions or need more help, refer to the more comprehensive [Getting Started](/getting-started).

A ten-minute video tutorial is available on [TikTok](https://www.tiktok.com/t/ZT8nFcSLb/) and on [Instagram](https://www.instagram.com/p/C2TaEugxwGd/).

![Eggspress characters racing for speed](racing.jpeg)

## Github and Vercel
Before we begin, we'll need to set up accounts on [Github](https://github.com) and [Vercel](https://vercel.com). Both are **free** and do **not** require payment/billing information.

To start, sign up for Github first.

Github has a relatively lengthy sign up process. The upside is that you can use your Github account to sign up for Vercel.

When signing up for Vercel, make sure to select "**Continue with Github**."

For the remainder of this guide, you'll open multiple tabs for Github and Vercel. **Keep these open** as we'll be jumping between these.

## Install Eggspress
Installing involves **forking** (on Github) and **deploying** (on Vercel). Read about what this means in in [this part of Getting Started](my_posts/getting_started/fork-and-deploy.md).

![Screenshot of Github's New Fork page with the Create Fork button visible](Pasted%20image%2020231125172256.png)

1. Fill out the form on [Fork Eggspress](https://github.com/dentonzh/Eggspress/fork) and click "Create Fork"

Github will redirect you to a new page once it's done forking. This is the page for your **forked repository**. It is your personal copy of Eggspress that's forked ("installed") onto your Github account. 

You'll need this page whenever you want to add, modify, or remove content on your site. It's important, so **bookmark or save the link** to this page.

2. On Vercel, [Add a new project](https://vercel.com/new) that links Vercel to your forked repository

This link takes you to a page with the heading "Import Git Repository." Beneath this heading, click on the dropdown menu and select the name of your forked repository.

You might need to install Vercel onto Github. When prompted, click the "Install" button.

Once you've selected your forked repository, look for the **"Import"** button that appears on this page. If you see multiple "Import" buttons, click the one that corresponds with your forked repository for Eggspress.

![Screenshot of Vercel's import project button](Pasted%20image%2020231125172817.png)

3. Give your project a name and select "Next.js" for Framework preset

This project name will become part of the web address for your new site. 

For example, if you choose "fast-eggs-racing-quickly" for your project name, you'll get the address `https://fast-eggs-racing-quickly.vercel.app`.

Note that if the name you choose is already taken, Vercel will add extra words to your address. You can change this later. You can also set up a custom domain with Vercel at a later point.

4. Once you're ready, click **"Deploy"**.

Vercel takes about a minute to build a new project. When your site is ready, you'll be taken to your project page. Click the link labeled **"Deployments"** followed by a button labeled **"Visit"** to see your new site.

Once again, **bookmark or save this link** to your site.

![Screenshot of Vercel's deployments page with the Visit button visible](Pasted%20image%2020231126192841.png)

## Set up and upload your workspace
Your workspace folder is where all of your content and settings go. Rather than build it out file by file, folder by folder, Eggspress comes with a starter workspace that you can (and should) use.

> If you're unfamiliar with zip files, creating folders, or dragging and dropping files, see [Create Your Workspace](my_posts/getting_started/create-your-workspace.md) for more details and screenshots.

To use this starter workspace, first create a folder on your computer. It should be in a location that's easy for you to remember and access.

![Eggspress race heating up](racing_close.jpeg)

When that's ready:

1. Click the big green download button on your site and save the .zip file
2. Extract (expand) the contents of that .zip file into your workspace folder
3. When you open your workspace folder, you should now see a list of folders whose names begin with `my_`

If this is not the case, repeat step two.

4. Add files to your forked repository

In your Github tab containing your forked repository, look for the **"Add files"** button (it may also be labeled as "+").

Clicking this button will display a dropdown menu. Select **Upload files** from this menu.

5. Drag and drop all of the folders starting with `my_` into the box on Github
6. Wait for all files to upload, then scroll all the way down to "Commit Files"
7. Provide a Commit message that describes what you're doing ("Upload initial workspace" is sufficient)
8. Click **"Commit"**

![Screenshot representing dragging and dropping workspace folders into Github for uploading](Pasted%20image%2020231125173322.png)

## Visit your new site
When you click "Commit," two things will happen. 

First, Github will update your repository to reflect the addition of your new files. Second, Vercel will begin building your new repository into a new version of your site.

Each commit corresponds to a new build.

Vercel takes about **2-3 minutes** to completely put together your new site. When everything's done, return to the tab that contains your site. **Refresh it** to see all of the new changes take effect.

If you run into issues, [troubleshoot your build](my_posts/troubleshooting/troubleshooting-your-build.md).

![Racers communicating with HQ](racing_comms.jpeg)

## Customize your site
On your computer, open the `my_settings` folder and open `metadata.md` in any basic text editor (e.g. Notepad, TextEdit, etc.).

Here, you'll see a set of key-pair values in a section called **frontmatter**. You'll encounter this in almost every content file in Eggspress. This section contains metadata that determine how your site or certain pages are built.

In the frontmatter for `metadata.md`, swap out values here with ones for your site. For starters, you'll probably want to change the site's name and description.

Then, you'll probably want to check out `appearance.md` to tweak how your site appears and choose a color scheme.

## Publishing your content
You can create new posts and pages by copying and pasting template files found in `my_templates.` 

Do **not** mix and match. Templates for posts should only be used in files found in `my_posts`, pages for files in `my_pages`, etc.

Eggspress comes with placeholder files already. We recommend looking through these files to understand how **frontmatter** and **content** translate into finished pages on your placeholder site.

You can read more about how files work in [Editing Content](my_posts/getting_started/editing-content.md).

![Eggspress racers crossing the finish line](finish.jpeg)

## Further reading
We've only scratched the surface in this Quick Start guide. Eggspress comes choc full of features, some of which drastically improve the authoring experience.

We've provided some additional posts in the **Related Posts** section below. You might also want to check out the [Getting Started](/getting-started) guide if you need more guidance or want more details about what we just did.

As always, your feedback is welcome. You can leave your feedback, report a bug, ask questions, or even suggest new features by using your Github account to [create an issue](https://github.com/dentonzh/Eggspress/issues/new).

![First place racer](winner.jpeg)