import { Settings } from "http2";
import { useEffect, useState } from "react";

interface Quote {
  quote: string;
}

function App() {
  const [myQuote, setMyQuote] = useState<Quote>();

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch(
        "https://api.kanye.rest/"
      );
      const jsonBody: Quote = await response.json();
      setMyQuote(jsonBody);
    };

    fetchQuote();
  }, []);

  // useEffect(() => {
  //   fetch("https://jokestemp.neillbogie.repl.co/jokes/general/random")
  //     .then(response => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // }, [])

  return (
    <>
      <h1>Kanye West's Quote App</h1>
      {myQuote && (
        // This is a conditional rendering strategy
        //  using 'short-circuiting': if the left-hand
        //  side of an && is false, then JavaScript
        //  doesn't bother to evaluate the right-hand
        //  side (since the overall expression is false
        //  regardless)
        //
        // Exploiting that feature to conditional render JSX!
        <>
          <p>
            <b>{myQuote.quote}</b>
          </p>
        </>
      )}
    </>
  );
}

export default App;
