# About this App
This is a wrapper (proxy server) for Floatrates API (http://www.floatrates.com/) which solves the 'CORS issue' in my deployed frontend application built with React and Redux.

# Libraries used
1. Express
2. Cors
3. Request

# Deployed App
https://floatrates-api-wrapper.herokuapp.com/usd (for United States dollar)

If you want to get rates for another currency - just replace 'usd' part in the URL with another three-letter alphabetic code of the currency (ISO 4217).

For example:
- https://floatrates-api-wrapper.herokuapp.com/aud (for Australian dollar)
- https://floatrates-api-wrapper.herokuapp.com/rub (for Russian Ruble)
- etc.