import Card from "./shared/Card";
import {useState} from 'react'
import Button from "./shared/Button";

function FeedbackFrom() {
    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    return <Card>
        <form>
            <h2>How you would rate your service with us?</h2>
            {/* @todo - rating select component*/}
            <div className="input-group">
                <input onChange={handleTextChange} type="text"
                placeholder='Write a review' value={text} />
                <Button type="submit">Send</Button>
            </div>
        </form>
    </Card>;
}

export default FeedbackFrom;
