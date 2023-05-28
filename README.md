# App pages description

- Initialisation: User can select the tags (styles of clothing) they like, and proceed to the Feed without log in. There is no internal redirection to come back to this page once user leaves this page, but tags selection can still be modified via toolbar
- Log In & Sign Up: required for user to access 'My Page' or 'like (save)' & edit features in the Feed. Selection of tags is resetted when user reaches this page
- Feed: it loads randomised selection of 9 post cards (along with a tag, and 4 photos assembled in a collage) whenever the page is reloaded, or the 'refresh' button has been hit, the posts shall match the user's selection of tags. Users may only edit the posts that belong to them, but save any post here. The posts selection will be reloaded whenever user likes, or unlikes any post.
- Post Editor: User can either create a new post, or edit existing posts. All field of url, and tag must be filled in order to save the post. In the editor mode, user can change the brightness, saturation, and contrast of each image.
- My Page: Only logged in users can access this page. Here, user can log out of the session, or permanantly delete their account. Also, all post that are created and saved can also be seen here.

# Preview:
https://drive.google.com/file/d/1r714UjyahR4l56ZkNoSrztEOTz85jgd_/view?usp=share_link

# Connect to the database:
- Connect to the database
 * This method does not uses '.env' file for simplicity. Please beware of the potential security issue
 * Create a cluster on 'https://cloud.mongodb.com'
 * Click the 'Connect' button on the Database page
 * Select the 'Connect to [Cluster\_Name]' option
 * Copy the connection string
 * Go to \texttt{.$\backslash$ClosetApp$\backslash$SERVER$\backslash$server.js}
 * Find the line \texttt{const mongoString = process.env.DATABASE\_URL}
 * Replace the value of the variable 'mongoString' with the previoulsy copied string
 
# How to run the app
- Client-side

Still editing


# Connect to the database:Go to \texttt{.$\backslash$ClosetApp}
            \item[→] \texttt{cd CLIENT}
            \item[→] \texttt{npm i}
            \item[→] \texttt{npm start}
            \item[→] Check if the app is running on \texttt{'http://localhost:8000'}
        \end{itemize}
    \item Server-side
        \begin{itemize}
            \item[→] Go to \texttt{.$\backslash$ClosetApp}
            \item[→] \texttt{cd SERVER}
            \item[→] \texttt{npm i}
            \item[→] \texttt{npm start}
            \item[→] Check if the server is running on \texttt{'http://localhost:3000'}
        \end{itemize}
\end{enumerate}
\textbf{How to test the app} \
\vspace{3mm} %5mm vertical space
\begin{enumerate}
    \item Execute the following commands on the client-side
        \begin{itemize}
            \item[→] Go to \texttt{.$\backslash$ClosetApp}
            \item[→] \texttt{cd CLIENT}
            \item[→] \texttt{jest -{}-coverage}
        \end{itemize}
    \item Execute the following commands on the Server-side
        \begin{itemize}
            \item[→] Go to \texttt{.$\backslash$ClosetApp}
            \item[→] \texttt{cd SERVER}
           \item[→] \texttt{jest -{}-coverage}
        \end{itemize}
\end{enumerate}

% Template Reference
% \input{tex/Ref} 

\end{document} % Dobranoc.
