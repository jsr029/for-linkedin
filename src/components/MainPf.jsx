import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pfDatas } from '../actions/index'
import useFetch from './hook/useFetch'

function MainPf() {
  const dispatch = useDispatch()
  const { isLoading, data, error } = useFetch('./json/portfolio.json')
  const pfData = useSelector(state => state.pfReducer.data.portfolio)
  document.title = "jsr029 | Porfolio"
  document.getElementsByTagName("meta")[2].content="Rakotonirina Jean-Sébastien, quelques projets validés, formation Openclassrooms 2021/2022"

  useEffect(() => {
    dispatch(pfDatas(isLoading, data, error));
  }, [isLoading, data, error, dispatch]);

  if (error) {
    return (<div className='error'>Error loading pfDatas...</div>)
  }

  return (
    <>
      {isLoading ? <div className='loading'>Loading pfDatas...</div> :
        <div className='jsr029_MainPf'>
          <h2>Quelques Projets Validés</h2>
          <div className='jsr029_MainPf-content'>
          {pfData && pfData.map((p) => {
            return (
              <div className="jsr029_MainPf-bloc" key={p.id}>
                <h3>{p.title}</h3>
                <ul>
                  <li>
                    <a href={p.url}>
                      <img src={p.imgSrc} alt={p.title + 'Pict'} />
                    </a>
                  </li>
                </ul>
              </div>)
          })}
          </div>
        </div>
      }
    </>
  )
}

export default MainPf