# Getting your friends bald

If some of your friends have posted on Facebook that kind of message saying:

<blockquote>
  <q>If this post reaches 15 thousand comments, I'll go bald</q>
</blockquote>

You just have to use this app.

## Install the dependencies

```bash
# with npm
npm i

# with bash
yarn
```

## Usage

Fill the `.env` file keys with the values as according to:

```bash
FB_POST: string # the facebook's post
FB_USER: string # the facebook's user responsible for commenting
FB_PASS: string # the facebook's user responsible commenting password
```

### Important

Duplicate the `.env-example` renaming the latter to `.env`, AND **DO NOT** EXPOSE THE `.env` FILE TO SOME SORT OF CONTROL VERSION, OR YOUR DATA WILL BE VISIBLE, KEEP IT IN THE `.gitignore` as it already is.

## Running

```bash
# with npm
npm run dev

# with yarn
yarn dev
```
