import {LuMessageSquare,LuVideo,LuMusic,LuImage,LuCode} from "react-icons/lu"
import {MdOutlineDashboard} from "react-icons/md"
const SideBarConst = [{name:"DashBoard",icon:<MdOutlineDashboard size={20} color="blue"  />,url:"/"},
{name:"Conversation",icon:<LuMessageSquare size={20} color="violet"  />,url:"/conversation"},
{name:"Video Generation",icon:<LuVideo size={20} color="green"  />,url:"/video"},
{name:"Music Generation",icon:<LuMusic size={20} color="red"  />,url:"/music"},
{name:"Image Generation",icon:<LuImage size={20} color="blue"  />,url:"/image"},
{name:"Code Generation",icon:<LuCode size={20} color="green"  />,url:"/code"},
 ];

 const AIresponse="To make a web app, you can follow these steps: 1. Define the purpose and features: Clearly understand the purpose of the web app and the specific features it should have. Consider the target audience and how the app will solve their problem or fulfill their needs. 2. Plan the application architecture: Determine the architecture and structure of the web app, including the choice of frameworks and technologies. Decide whether you will use client-side rendering (such as React, Angular, or Vue.js) or server-side rendering (such as Django, Ruby on Rails, or Node.js). 3. Design the user interface (UI): Create wireframes and mockups to design the user interface of your web app. Consider the layout, navigation, colors, typography, and overall visual appeal. 4. Develop the frontend: Use HTML, CSS, and JavaScript frameworks to develop the client-side of the web app. Incorporate the UI design and implement the functionalities of each page or component. 5. Develop the backend: Set up a server-side framework or technology to handle the business logic, data management, and server-side operations. Develop APIs and integrate with databases to store and retrieve data. 6. Connect frontend and backend: Establish communication between the frontend and backend components. This typically involves making HTTP requests to APIs to retrieve and update data. 7. Test and debug: Perform rigorous testing to ensure the web app functions properly, and address any bugs or issues found during testing. 8. Deploy the web app: Choose a hosting service or deploy the web app to a server or cloud platform to make it accessible over the internet. Configure domain settings, configure security measures, and optimize performance. 9. Continuous improvement: Gather user feedback and make improvements based on feedback and usage data. Monitor and update the web app to fix bugs, introduce new features, and enhance performance. Throughout the process, it can be beneficial to use version control systems (like Git) and collaborate with a team using project management tools (like Trello or Jira) to stay organized and track progress effectively.";
 
export {
    SideBarConst,
    AIresponse
}