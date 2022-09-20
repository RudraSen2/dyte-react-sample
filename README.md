
<center>
<img src="https://dyte.io/images/Dyte-Logo_1.svg">
<h1>Dyte Sample React App</h1>
</center>

This project was made to help the developers who choose to use Dyte SDK to include seamless video/audio services in their React Applications.

This app demonstrates the Create/Join meeting functionality.

<img src="https://imgur.com/YySrxnD.png">
<img src="https://imgur.com/ksJ1Gwu.png">

<br></br>

# Requirements
- node v18.7.0
- npm 8.18.0
- Webcam for video functionality
- Microphone
- [Dyte developer Account](https://dev.dyte.io) for API Key and Organisation ID

<br></br>
# Running the Sample
1. Clone this repository.
2. After cloning, we should install all the dependencies using npm by running
   
   ```npm i```
3. Put your Organization ID in the [constants.tsx](src/constants.tsx) file.
4. Similarly in the [apiHandler.tsx](src/api/apiHandler.tsx) file include your API Key.
   > Note: We would recommend you to use these keys in the backend and not include them in the frontend. In this project they have beein included to ensure ease of understanding for the developer.
5. Once all of the above are done, you can run the project by executing
   
   ```npm start```

6. Now the application should be successfully running on port 3000.

<br></br>

# Useful Terminology and Links
> Note: These terms have been referred to in the following content

- [Dyte Documentation](https://docs.dyte.io): This refers to the Dyte Documentaion for the [web-core](https://docs.dyte.io/web-core) (relating to the core functionality of the sdk) and [react-ui-kit](https://docs.dyte.io/react-ui-kit) (relating to the frontend components and flows of the application).
- [API Reference](https://docs.dyte.io/api#/): This refers to Dyte's API reference where all routes that are available to the user are listed and explained. Dyte's API has to versions of APIs, [v1](https://docs.dyte.io/api/?v=v1) and [v2](https://docs.dyte.io/api/?v=v2) respectively. In this project we have used the v1 API.

<br></br>

# Flow Diagram

baseURL = https://api.cluster.dyte.in/v1

<img src="https://imgur.com/mS7Sely.png">
<img src="https://imgur.com/poc3ROq.png">

> Note: The User is added to the meeting in the backend first in the Add Participant route and after that the setup screen is shown on the frontend and users enters the meet in the frontend.


<br></br>

# Project Structure

> Note: This project structure exists so that it is easier for developers to reference this code, it is <b>NOT</b> imperative that you use this or a similar structure for your projects.

- /api

  - [apiHandler](src/api/apiHandler.tsx) which has the AxiosInstance for Dyte's v1 API.
  - [meetinghandler](src/api/meetinghandler.tsx) contains all the requests that are needed for the application such as creating a meeting, adding a participant to the meeting etc.


- /components
  
  - [Meet](src/components/Meet.tsx) consists of the [DyteMeeting](https://docs.dyte.io/android/reference/meeting) component and is further wrapped in the [DyteProvider](https://docs.dyte.io/react-ui-kit/basics/using-hooks#dyteprovider-) (Dyte's context provider that provides the "meeting" object to all it's children) inside the [Meeting.tsx](src/pages/Meeting/Meeting.tsx) file.

- /pages

    - [Landing/createOrJoin.tsx](src/pages/Landing/CreateOrJoin.tsx) contains the form with which the user interacts to either create or join the meeting, all the API requests are also trigerred from the frontend events on this page.
    > createOrJoin.css file is just the styling file for the forms.

    - [Meeting/Meeting.tsx](src/pages/Meeting/Meeting.tsx) is the file that is displayed to the use once they create or join the meeting.

- /types
  
  - [DyteTypes.tsx](src/types/DyteTypes.tsx) is the file that contains all the custom types that are required in the requests that we are making. One can make these types for themselves by referencing the Dyte API Reference and taking into account what kind of data is being passed in the request and what kind of response is being sent back.

- [App.tsx](src/App.tsx) 

    - This file contains the react-router-dom and the specification about what page should be shown at which route.

<br></br>

# Contributing
We welcome contributions. Feel free to file issues & pull requests on the repo and we'll address them as we can.
For any questions, feedback or suggestions about Dyte, reach out to us directly on our [Discord Community Server](https://community.dyte.io/).

<br></br>

# License
All of Dyte's Sample Apps are Licensed with the MIT License. For more details, view the [LICENSE](./LICENSE).