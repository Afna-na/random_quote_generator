import { useEffect, useState } from "react";
import "./styles.css"
export default function App() {
  const colors = [

    '#ff1d58',
    '#f75990',
    '#fff685',
    '#00DDFF',
    '#0049B7',
    '#FFC0CB',
    '#9ad7ff',
    '#c5d8ff',
    '#700000',
    '#954900',
    '#baa30f'
  ];

  const [newQuote, setQuote] = useState("")
  const [color, setColor] = useState("")

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {

        let randNum = Math.floor(Math.random() * data.length)
        setQuote(data[randNum])
      })
  }

  useEffect(() => {
    getQuote();
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = color
    let obj = document.querySelectorAll("button")
    for (let i = 0; i < 3; i++) {
      console.log(obj[i])
      obj[i].style.backgroundColor = color
      obj[i].style.border = color
    }
  }, [color]);




  const getColor = () => {
    let randNum = Math.floor(Math.random() * colors.length)
    setColor(colors[randNum])
  }


  return (
    <>
      <div id="quote-box">
        <div id="text"><i className="fa fa-quote-left"></i>{newQuote.text}</div>
        <div id="author">-{newQuote.author}</div>
        <a id="tweet-quote" target="_blank" href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + newQuote.text + '" ' + newQuote.author)}><button className="btn"><i className="fa-brands fa-twitter"></i></button></a>
        <a target="_blank" href={'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' + encodeURIComponent(newQuote.author) + '&content=' + encodeURIComponent(newQuote.text) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'}><button id="tumblr-quote" className="btn"><i className="fa-brands fa-tumblr"></i></button></a>

        <button id="new-quote" className="btn" onClick={() => {
          getQuote()
          getColor()
        }} >New quote</button>

      </div >
      <footer> <a href="https://codepen.io/your-work">by afnana</a></footer>
    </>
  )

}


