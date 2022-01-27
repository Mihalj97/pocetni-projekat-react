import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackFrom from "./components/FeedbackFrom";
import { v4 as uuidv4 } from 'uuid'
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }

    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route exact
                        path='/'
                        element={
                            <>
                                <FeedbackFrom handleAdd={addFeedback} />
                                <FeedbackStats feedback={feedback} />
                                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                            </>
                        }></Route>
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/post/*' element={<Post />} />
                </Routes>

                <AboutIconLink />
            </div>
        </Router>
    )
}

export default App