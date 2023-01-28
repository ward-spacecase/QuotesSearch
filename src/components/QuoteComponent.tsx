import { ReactNode } from "react";
import { Quote } from "../interfaces/Quote"


export const QuoteContainer = ({id, content="", author="Anonymous"}: Quote) => {
    if(author == "") 
        author = "Anonymous";
    return (
        <div className="quote">
            <div className="quote-content">
                {content}
            </div>
            <div className="quote-author">
                -{author}
            </div>
        </div>
    );
}