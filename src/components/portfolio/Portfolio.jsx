import { useEffect, useState } from "react"
import { appList, designList, moreList, summeryList } from "../../data"
import PortfolioList from "../portfoliolist/PortfolioList"
import "./Portfolio.scss"


export default function Portfolio() {

  const [selected, setSelected] = useState('app')
  const [data, setData] = useState([])
  const list = [
    {
      id: 'app',
      title: 'App',
    },
    {
      id: 'design',
      title: 'Design',
    },
    {
      id: 'summery',
      title: 'Summery',
    },
    {
      id: 'more',
      title: 'More',
    }
  ]

  useEffect(() => {
    switch (selected) {
      case 'app': setData(appList); break;
      case 'design': setData(designList); break;
      case 'summery': setData(summeryList); break;
      case 'more': setData(moreList); break;
      default: setData(appList);

    }
  }, [selected])

  return (
    <div className="portfolio" id="portfolio">
      <p> ---------- </p>
      <h1> Portfolio </h1>
      <ul>

        {list.map((item) => (<PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />))}
      </ul>



      <div className="container">

        {data.map((data) => (
          <div className="item">
            <img src={data.img} alt="" width={'400px'}></img>
            <h3>{data.title}</h3>
            <div className="buttons">

              <a href="https://google.com" target="_blank" rel="noreferrer">
                <button>Detail</button>
              </a>
              <a href="https://google.com" target="_blank" rel="noreferrer">
                <button>Git</button>
              </a>

            </div>

          </div>
        )
        )}


      </div>


    </div>

  )
}
