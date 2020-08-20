# Cloudinary image store app


Welcome. The purpose of the app is simply retrieving images 
data from cloudinary in a secure way.

How does it work? 
Firstly you should define your own configuration, by using this template and adding these variables in a .env file:

-------------------------------

##### PORT = some port
##### JWT_SECRET = some secret for signing tokens
##### MOCK_USERNAME = some username to be used for token retrieval (in a real scenario the user would be compared to a database, not from env or hardcoded)
##### MOCK_PASSWORD = some password
##### CLOUDINARY_CLOUD = name of cloudinary cloud
##### CLOUDINARY_API_KEY = cloudinary api key
##### CLOUDINARY_API_SECRET = cloudinary api secret

-------------------------------
To run the app, simply do "npm install" (make sure you are using v12) and then "node index.js". As simple as that.

How to use the app? 

There are 4 endpoints available:
 1. '/*' - a GET request will show us if the app is up and running
 2. '/cloudinary/auth' - a POST request with your username and password in the body, will give you a bearer token which you have to use in the authorization header in all further requests
 3. '/cloudinary/statistics' - a GET request will return cloudinary image statistics
 4. '/cloudinary/csv' - a GET request which will return cloudinary image csv data


Docker containerization is also available. 
For this, simply run the following commands:

####### docker build -t <some-namespace>/cloudinary-image-store . 

####### docker run -p port:port <some-namespace>/cloudinary-image-store

<pre>
                   \` ..\
              __,.-" =__Y=
            ."        )  
      _    /   ,    \/\_
     ((____|    )_-\ \_-`
 </pre>
 
 