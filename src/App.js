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
import {FeedbackProvider} from './context/FeedbackContext'

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
        <FeedbackProvider>
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route exact
                        path='/'
                        element={
                            <>
                                <FeedbackFrom handleAdd={addFeedback} />
                                <FeedbackStats />
                                <FeedbackList handleDelete={deleteFeedback} />
                            </>
                        }></Route>
                    <Route path='/about' element={<AboutPage />} />
                </Routes>

                <AboutIconLink />
            </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App