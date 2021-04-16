### Using the GitHub api

**NB:** You'll need to generate a personal access token first to authenticate yourself - to get all user data. See the [GitHub docs](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) to help.

However, you can get most data without authentication.

**Instructions**

1. Make sure you can successfully request data from the GitHub API with both a command line client like [curl](https://curl.haxx.se/docs/manpage.html) and a JavaScript client like [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) before moving on.

#### Using curl
```sh
# request for data from the /users endpoint with authentication
curl "https://api.github.com/users/dearshrewdwit" \
-H "Authorization: token <YOUR TOKEN HERE>" \
-H "Accept: application/vnd.github.v3+json" \
```

#### Using fetch
```js
const options = {
  "headers": {
    "Authorization": "token <YOUR TOKEN HERE>",
    "Accept": "application/vnd.github.v3+json"
  }
}
fetch("https://api.github.com/users/<GITHUB USERNAME>", options)
  .then(response => response.json())
  .then(data => console.log(data))
```

```sh
# response (unauthenticated version)
{
  "login": "dearshrewdwit",
  "id": 13719921,
  "node_id": "MDQ6VXNlcjEzNzE5OTIx",
  "avatar_url": "https://avatars3.githubusercontent.com/u/13719921?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/dearshrewdwit",
  "html_url": "https://github.com/dearshrewdwit",
  "followers_url": "https://api.github.com/users/dearshrewdwit/followers",
  "following_url": "https://api.github.com/users/dearshrewdwit/following{/other_user}",
  "gists_url": "https://api.github.com/users/dearshrewdwit/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/dearshrewdwit/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/dearshrewdwit/subscriptions",
  "organizations_url": "https://api.github.com/users/dearshrewdwit/orgs",
  "repos_url": "https://api.github.com/users/dearshrewdwit/repos",
  "events_url": "https://api.github.com/users/dearshrewdwit/events{/privacy}",
  "received_events_url": "https://api.github.com/users/dearshrewdwit/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Edward Withers",
  "company": "Makers Academy",
  "blog": "dearshrewdwit.github.io",
  "location": "Shoreditch, London",
  "email": "dearshrewdwit@gmail.com",
  "hireable": null,
  "bio": "Head of Education and engineer at Makers Academy",
  "twitter_username": null,
  "public_repos": 46,
  "public_gists": 45,
  "followers": 89,
  "following": 28,
  "created_at": "2015-08-09T16:40:54Z",
  "updated_at": "2020-09-21T06:53:03Z"
}
```
