# isobjectid

Small helper library to check if a string is an ObjectID. Comes in handy when the frontend just want to do a simple check of and ID to see if it's an ObjectID or not.

# Usage
```
const isobjectid = require('@kentos/isobjectid')
if (isobjectid(string)) {
  // go on from here
} else {
  // throw an error or whatever you want
}
```

# Changelog
1.0.0 - First release