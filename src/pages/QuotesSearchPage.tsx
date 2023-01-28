import React, { FormEvent } from 'react'
import { SearchForm } from '../components/SearchForm';
import { QuoteContainer } from '../components/QuoteComponent';
import { Quote } from "../interfaces/Quote"

export const QuotesSearchPage = () => {
    const [quotes, setQuotes] = React.useState<Quote[]>([]);
    const [searched, setSearched] = React.useState(false);

    const searchQuotes = (event: FormEvent, query:string) => {
        event.preventDefault();
        let quotesArr: Quote[] = [];
        setQuotes(quotesArr);
        fetch("https://usu-quotes-mimic.vercel.app/api/search?query=" + query)
        .then(results => results.json())
        .then(results => {
            let quotesArr: Quote[] = [];
            if(results.count > 0) {
                let r = results.results;
                [...r].forEach((q: { _id: any; content: any; author: any; }) => {
                    quotesArr.push({
                        id: q._id,
                        content: q.content,
                        author: q.author
                    });
                });
            } else {
                quotesArr.push({
                    id: "404",
                    content: "Something went Wrong!!!",
                    author: "N/A"
                });
            }
            setQuotes(quotesArr);
            setSearched(true);
        });
        setQuotes(quotesArr);
    }

    React.useEffect(() => {
        fetch('https://usu-quotes-mimic.vercel.app/api/random')
        .then(results => results.json())
        .then(results => {
            let quotesArr: Quote[] = [];
            quotesArr.push({
                id: results._id,
                content: results.content,
                author: results.author
            });
            setQuotes(quotesArr);
        });
    }, []);

    return (
        <main className={"main-page " + (searched ? "" : "main-page-center")}>
            <h2>Quote Search</h2>
            <SearchForm search={searchQuotes} />
            <div id="quotes">
                {quotes.map(quote => {
                    return (
                        <QuoteContainer id={quote.id} content={quote.content} author={quote.author} key={quote.id} />
                    )
                })}
            </div>
        </main>
    );
}