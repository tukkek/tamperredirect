# Tamperredirect

This is a lightweight alternative to add-ons such as [LibRedirect](https://libredirect.github.io/) so that you don't need to give ample permissions to an untrusted add-on. The simple operation of auto-redirection doesn't need a full-fledged browser extension by itself.

This user-script doesn't support many sites and front-ends but is very easy to extend and modify to a person's needs and preferences (see below).

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) for your browser.
2. Install [the user-script](https://raw.githubusercontent.com/tukkek/tamperredirect/main/Tamperredirect.user.js).

## Adding or changing redirects

To  add a new redirect, simply copy one of each `@match` and `ALTERNATIVES` lines to a line directly below the original and change the values. To change an existing redirect, simply alter the lines in-place to your preference.

You can perform this by selecting "Edit" from Tampermonkey's dashboard.
