# React Audio Player
### Audio Player in React which plays local songs from the computer without any need of external music player.
#### Now just use your browser for playing songs instead of any other music player and free some workload from the computer. Responsive App for Mobile devices too. 😁😜
*Working completely*

![Working Audio Player Screenshot](https://github.com/Dharmang92/react-player/blob/Change-Folder/audioplayer.png)

# Information on Branches
- Master Branch
  - Standalone without custom styling on Chrome and Firefox for better viewing.
- Change-Folder Branch
  - Added custom styling as well as bug fixes for search functionality. *Use this branch to clone or download the App*.

# Setup
- Change folder directory present in fetchData.js inside audio-server so that nodejs knows which folder to serve.
- Navigate to audio-server and run the local server using nodemon or node. Server running on PORT 3001
- Navigate to src folder of the App and run the local react server. Server running on PORT 3000
- Open http://localhost:3000/ and play your favourite songs from your local computer. 😎

# Dependencies And Packages Used
- Frontend
  - "react": "^16.13.1",
  - "react-dom": "^16.13.1",
  - "react-scripts": "3.4.3",
  - "uuid": "^8.3.0"

- Backend
  - "body-parser": "^1.19.0",
  - "dotenv": "^8.2.0",
  - "express": "^4.17.1"
  - "nodemon": "^2.0.4"
